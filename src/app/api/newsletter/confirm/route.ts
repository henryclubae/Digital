import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// This would be shared with the main route in production (use database)
const subscribers: Array<{
  email: string;
  interests: string[];
  language: 'en' | 'ar';
  subscribedAt: string;
  confirmed: boolean;
  source?: string;
}> = [];

// Configure nodemailer (same as main route)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Generate unsubscribe token (same as main route)
function generateUnsubscribeToken(email: string): string {
  const timestamp = Date.now().toString();
  const data = email + timestamp + (process.env.SECRET_KEY || 'default-secret');
  return Buffer.from(data).toString('base64').substring(0, 32);
}

// Welcome email template (same as main route)
const getWelcomeEmailTemplate = (language: 'en' | 'ar', interests: string[]) => {
  if (language === 'ar') {
    return {
      subject: 'مرحباً بك في نشرة هنري كلوب الرقمية',
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>مرحباً بك في هنري كلوب</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; text-align: center; padding: 30px 20px; border-radius: 10px 10px 0 0; margin: -20px -20px 30px -20px; }
            .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
            .subtitle { font-size: 16px; opacity: 0.9; }
            .content { padding: 0 10px; }
            .welcome-message { background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px; }
            .interests { background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .interests-title { color: #92400e; font-weight: bold; margin-bottom: 10px; }
            .interest-tag { display: inline-block; background-color: #3b82f6; color: white; padding: 5px 12px; border-radius: 20px; margin: 3px; font-size: 12px; }
            .expectations { background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .expectations h3 { color: #065f46; margin-top: 0; }
            .expectations ul { margin: 15px 0; padding-right: 20px; }
            .expectations li { margin-bottom: 8px; color: #047857; }
            .social-links { text-align: center; margin: 30px 0; }
            .social-link { display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            .unsubscribe { margin-top: 20px; }
            .unsubscribe a { color: #6b7280; text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🚀 هنري كلوب الرقمي</div>
              <div class="subtitle">خبراء التسويق الرقمي في دولة الإمارات العربية المتحدة</div>
            </div>
            
            <div class="content">
              <div class="welcome-message">
                <h2 style="color: #1e40af; margin-top: 0;">تم تأكيد اشتراكك بنجاح! 🎉</h2>
                <p>مرحباً بك في عائلة هنري كلوب! ستتلقى الآن أحدث الرؤى والاستراتيجيات في التسويق الرقمي المصممة خصيصاً للسوق الإماراتي.</p>
              </div>

              ${interests && interests.length > 0 ? `
              <div class="interests">
                <div class="interests-title">اهتماماتك المختارة:</div>
                ${interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
              </div>
              ` : ''}

              <div class="expectations">
                <h3>ماذا تتوقع من نشرتنا الأسبوعية:</h3>
                <ul>
                  <li>نصائح حصرية في التسويق الرقمي تطبق على السوق الإماراتي</li>
                  <li>دراسات حالة من عملائنا الناجحين في دبي وأبوظبي</li>
                  <li>آخر توجهات السوق والتقنيات الجديدة</li>
                  <li>استراتيجيات مجربة لزيادة المبيعات والعائد على الاستثمار</li>
                  <li>محتوى حصري باللغة العربية</li>
                </ul>
              </div>

              <div class="social-links">
                <a href="https://instagram.com/henryclubuae" class="social-link">إنستغرام</a>
                <a href="https://linkedin.com/company/henryclub" class="social-link">لينكد إن</a>
                <a href="https://digital.henryclub.ae" class="social-link">موقعنا</a>
              </div>
            </div>

            <div class="footer">
              <p>هنري كلوب الرقمي - وكالة التسويق الرقمي الرائدة في دولة الإمارات</p>
              <p>دبي، الإمارات العربية المتحدة | +971 50 123 4567</p>
              
              <div class="unsubscribe">
                <p>لا تريد تلقي هذه الرسائل؟ <a href="https://digital.henryclub.ae/unsubscribe?email={{EMAIL}}&token={{TOKEN}}">إلغاء الاشتراك</a></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };
  }

  return {
    subject: 'Welcome to Henry Club Digital - Subscription Confirmed! 🚀',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Henry Club</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; text-align: center; padding: 30px 20px; border-radius: 10px 10px 0 0; margin: -20px -20px 30px -20px; }
          .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .subtitle { font-size: 16px; opacity: 0.9; }
          .content { padding: 0 10px; }
          .welcome-message { background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px; }
          .interests { background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .interests-title { color: #92400e; font-weight: bold; margin-bottom: 10px; }
          .interest-tag { display: inline-block; background-color: #3b82f6; color: white; padding: 5px 12px; border-radius: 20px; margin: 3px; font-size: 12px; }
          .expectations { background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .expectations h3 { color: #065f46; margin-top: 0; }
          .expectations ul { margin: 15px 0; padding-left: 20px; }
          .expectations li { margin-bottom: 8px; color: #047857; }
          .social-links { text-align: center; margin: 30px 0; }
          .social-link { display: inline-block; margin: 0 10px; padding: 10px 20px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          .unsubscribe { margin-top: 20px; }
          .unsubscribe a { color: #6b7280; text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🚀 Henry Club Digital</div>
            <div class="subtitle">UAE's Premier Digital Marketing Experts</div>
          </div>
          
          <div class="content">
            <div class="welcome-message">
              <h2 style="color: #1e40af; margin-top: 0;">Your subscription is confirmed! 🎉</h2>
              <p>Welcome to the Henry Club family! You'll now receive cutting-edge digital marketing insights tailored specifically for the Emirates market.</p>
            </div>

            ${interests && interests.length > 0 ? `
            <div class="interests">
              <div class="interests-title">Your Selected Interests:</div>
              ${interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
            </div>
            ` : ''}

            <div class="expectations">
              <h3>What to expect from our weekly insights:</h3>
              <ul>
                <li>Exclusive digital marketing tips tailored for UAE market</li>
                <li>Real case studies from our Dubai & Abu Dhabi clients</li>
                <li>Latest market trends and emerging technologies</li>
                <li>Proven strategies to increase ROI and drive sales</li>
                <li>Cultural insights for Middle Eastern marketing</li>
              </ul>
            </div>

            <div class="social-links">
              <a href="https://instagram.com/henryclubuae" class="social-link">Instagram</a>
              <a href="https://linkedin.com/company/henryclub" class="social-link">LinkedIn</a>
              <a href="https://digital.henryclub.ae" class="social-link">Website</a>
            </div>
          </div>

          <div class="footer">
            <p>Henry Club Digital - UAE's Leading Digital Marketing Agency</p>
            <p>Dubai, United Arab Emirates | +971 50 123 4567</p>
            
            <div class="unsubscribe">
              <p>Don't want to receive these emails? <a href="https://digital.henryclub.ae/api/newsletter?email={{EMAIL}}&token={{TOKEN}}">Unsubscribe</a></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const email = url.searchParams.get('email');
  const token = url.searchParams.get('token');
  
  if (!email || !token) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invalid Confirmation Link</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
          .container { background: white; padding: 40px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .error { color: #dc2626; font-size: 24px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="error">❌ Invalid Confirmation Link</div>
          <p>The confirmation link is missing required information.</p>
          <a href="https://digital.henryclub.ae" style="color: #3b82f6;">Return to website</a>
        </div>
      </body>
      </html>
      `,
      { 
        status: 400,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }

  try {
    // Find subscriber
    const subscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());
    
    if (!subscriber) {
      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Subscription Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
            .container { background: white; padding: 40px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .error { color: #dc2626; font-size: 24px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="error">❌ Subscription Not Found</div>
            <p>We couldn't find a subscription for this email address.</p>
            <a href="https://digital.henryclub.ae" style="color: #3b82f6;">Return to website</a>
          </div>
        </body>
        </html>
        `,
        { 
          status: 404,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }

    if (subscriber.confirmed) {
      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Already Confirmed</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
            .container { background: white; padding: 40px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .success { color: #10b981; font-size: 24px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success">✅ Already Confirmed</div>
            <p>Your subscription is already confirmed and active.</p>
            <p>You should be receiving our newsletter shortly!</p>
            <a href="https://digital.henryclub.ae" style="color: #3b82f6;">Return to website</a>
          </div>
        </body>
        </html>
        `,
        { 
          status: 200,
          headers: { 'Content-Type': 'text/html' }
        }
      );
    }

    // Confirm the subscription
    subscriber.confirmed = true;

    // Send welcome email
    const unsubscribeToken = generateUnsubscribeToken(email);
    const welcomeTemplate = getWelcomeEmailTemplate(subscriber.language, subscriber.interests);
    
    const emailContent = welcomeTemplate.html
      .replaceAll('{{EMAIL}}', encodeURIComponent(email))
      .replaceAll('{{TOKEN}}', unsubscribeToken);

    await transporter.sendMail({
      from: `"Henry Club Digital" <${process.env.SMTP_FROM || 'noreply@henryclub.ae'}>`,
      to: email,
      subject: welcomeTemplate.subject,
      html: emailContent,
    });

    // Analytics tracking
    console.log('Newsletter Confirmation Analytics:', {
      email: email.substring(0, 3) + '***',
      interests: subscriber.interests,
      language: subscriber.language,
      confirmedAt: new Date().toISOString(),
    });

    // Return success page
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Subscription Confirmed!</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
          .container { background: white; padding: 40px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 500px; }
          .success { color: #10b981; font-size: 32px; margin-bottom: 20px; }
          .title { color: #1e40af; font-size: 24px; font-weight: bold; margin-bottom: 20px; }
          .message { color: #374151; margin-bottom: 20px; line-height: 1.6; }
          .next-steps { background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
          .cta-button { display: inline-block; background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 10px; }
          .social-links { margin-top: 30px; }
          .social-link { display: inline-block; margin: 0 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success">🎉</div>
          <div class="title">Subscription Confirmed!</div>
          <div class="message">
            Thank you for confirming your subscription to Henry Club Digital insights. 
            A welcome email has been sent to your inbox with all the details.
          </div>
          
          <div class="next-steps">
            <strong>What happens next?</strong><br>
            • Welcome email sent to your inbox<br>
            • Weekly insights starting this week<br>
            • Exclusive UAE market content<br>
            • First newsletter within 7 days
          </div>
          
          <div>
            <a href="https://digital.henryclub.ae" class="cta-button">Visit Our Website</a>
            <a href="https://digital.henryclub.ae/services" class="cta-button">Explore Services</a>
          </div>
          
          <div class="social-links">
            Follow us: 
            <a href="https://instagram.com/henryclubuae" class="social-link">📷 Instagram</a>
            <a href="https://linkedin.com/company/henryclub" class="social-link">💼 LinkedIn</a>
          </div>
        </div>
      </body>
      </html>
      `,
      { 
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      }
    );

  } catch (error) {
    console.error('Newsletter confirmation error:', error);
    
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Confirmation Error</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
          .container { background: white; padding: 40px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .error { color: #dc2626; font-size: 24px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="error">❌ Confirmation Error</div>
          <p>An error occurred while confirming your subscription. Please try again or contact support.</p>
          <a href="https://digital.henryclub.ae/contact" style="color: #3b82f6;">Contact Support</a>
        </div>
      </body>
      </html>
      `,
      { 
        status: 500,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
}