import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Updated: Newsletter API with improved linting and security - v1.0.2

// Newsletter subscription schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email format'),
  interests: z.array(z.string()).optional(),
  language: z.enum(['en', 'ar']).default('en'),
  consent: z.boolean().refine(val => val === true, {
    message: 'GDPR consent is required'
  }),
  source: z.string().optional(), // Track signup source
});

// In-memory storage for demo (replace with database in production)
let subscribers: Array<{
  email: string;
  interests: string[];
  language: 'en' | 'ar';
  subscribedAt: string;
  confirmed: boolean;
  source?: string;
}> = [];

// Rate limiting storage (replace with Redis in production)
const rateLimitStore: Map<string, { count: number; resetTime: number }> = new Map();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 signups per 15 minutes per IP

  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// Email validation function
function validateEmailDomain(email: string): boolean {
  const disposableEmailDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    'mailinator.com',
    // Add more disposable email domains as needed
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  return Boolean(domain && !disposableEmailDomains.includes(domain));
}



// Double opt-in confirmation email
const getConfirmationEmailTemplate = (language: 'en' | 'ar', confirmationUrl: string) => {
  if (language === 'ar') {
    return {
      subject: 'أكد اشتراكك في نشرة هنري كلوب الرقمية',
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>تأكيد الاشتراك</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: bold; color: #1e40af; margin-bottom: 10px; }
            .confirm-btn { display: inline-block; background-color: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
            .confirm-btn:hover { background-color: #059669; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🚀 هنري كلوب الرقمي</div>
            </div>
            
            <h2 style="color: #1e40af;">تأكيد اشتراكك</h2>
            <p>شكراً لك على الاشتراك في نشرتنا الإخبارية! لإكمال عملية الاشتراك، يرجى النقر على الزر أدناه:</p>
            
            <div style="text-align: center;">
              <a href="${confirmationUrl}" class="confirm-btn">تأكيد الاشتراك</a>
            </div>
            
            <p><strong>لماذا تحتاج للتأكيد؟</strong></p>
            <p>هذا يساعدنا في التأكد من أن عنوان البريد الإلكتروني صحيح وأنك تريد فعلاً تلقي رسائلنا.</p>
            
            <p>إذا لم تقم بالتسجيل، يمكنك تجاهل هذه الرسالة.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>هنري كلوب الرقمي - دبي، الإمارات العربية المتحدة</p>
            </div>
          </div>
        </body>
        </html>
      `
    };
  }

  return {
    subject: 'Confirm your Henry Club Digital subscription',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirm Subscription</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #1e40af; margin-bottom: 10px; }
          .confirm-btn { display: inline-block; background-color: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 20px 0; }
          .confirm-btn:hover { background-color: #059669; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🚀 Henry Club Digital</div>
          </div>
          
          <h2 style="color: #1e40af;">Confirm your subscription</h2>
          <p>Thanks for signing up for our newsletter! To complete your subscription, please click the button below:</p>
          
          <div style="text-align: center;">
            <a href="${confirmationUrl}" class="confirm-btn">Confirm Subscription</a>
          </div>
          
          <p><strong>Why do you need to confirm?</strong></p>
          <p>This helps us ensure your email address is correct and that you actually want to receive our emails.</p>
          
          <p>If you didn't sign up, you can safely ignore this email.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Henry Club Digital - Dubai, United Arab Emirates</p>
          </div>
        </div>
      </body>
      </html>
    `
  };
};

// Generate unsubscribe token
function generateUnsubscribeToken(email: string): string {
  const timestamp = Date.now().toString();
  const data = email + timestamp + (process.env.SECRET_KEY || 'default-secret');
  return Buffer.from(data).toString('base64').substring(0, 32);
}

export const runtime = 'nodejs';

// Newsletter API - Updated v1.0.2: Enhanced security and linting fixes

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many signup attempts. Please try again in 15 minutes.' 
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate request data
    const validationResult = newsletterSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid data provided',
          details: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const { email, interests = [], language, source } = validationResult.data;

    // Additional email domain validation
    if (!validateEmailDomain(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please use a valid email address' 
        },
        { status: 400 }
      );
    }

    // Check for duplicate subscription
    const existingSubscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());
    
    if (existingSubscriber) {
      if (existingSubscriber.confirmed) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'This email is already subscribed to our newsletter' 
          },
          { status: 409 }
        );
      } else {
        // Resend confirmation email for unconfirmed subscription
        const confirmationToken = generateUnsubscribeToken(email);
        const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://digital.henryclub.ae'}/api/newsletter/confirm?email=${encodeURIComponent(email)}&token=${confirmationToken}`;
        
        const confirmationTemplate = getConfirmationEmailTemplate(language, confirmationUrl);
        
        await transporter.sendMail({
          from: `"Henry Club Digital" <${process.env.SMTP_FROM || 'noreply@henryclub.ae'}>`,
          to: email,
          subject: confirmationTemplate.subject,
          html: confirmationTemplate.html,
        });

        return NextResponse.json({
          success: true,
          message: 'Confirmation email sent. Please check your inbox to confirm your subscription.',
          requiresConfirmation: true
        });
      }
    }

    // Add new subscriber (unconfirmed initially for double opt-in)
    const newSubscriber = {
      email: email.toLowerCase(),
      interests,
      language,
      subscribedAt: new Date().toISOString(),
      confirmed: false, // Double opt-in - starts as unconfirmed
      source: source || 'website'
    };

    subscribers.push(newSubscriber);

    // Send confirmation email (double opt-in)
    const confirmationToken = generateUnsubscribeToken(email);
    const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://digital.henryclub.ae'}/api/newsletter/confirm?email=${encodeURIComponent(email)}&token=${confirmationToken}`;
    
    const confirmationTemplate = getConfirmationEmailTemplate(language, confirmationUrl);
    
    await transporter.sendMail({
      from: `"Henry Club Digital" <${process.env.SMTP_FROM || 'noreply@henryclub.ae'}>`,
      to: email,
      subject: confirmationTemplate.subject,
      html: confirmationTemplate.html,
    });

    // Analytics tracking (in production, integrate with Google Analytics, Mixpanel, etc.)
    console.log('Newsletter Signup Analytics:', {
      email: email.substring(0, 3) + '***', // Privacy-safe logging
      interests,
      language,
      source,
      timestamp: new Date().toISOString(),
      ip: clientIp,
    });

    return NextResponse.json({
      success: true,
      message: 'Please check your email to confirm your subscription.',
      data: {
        email,
        interests,
        language,
        requiresConfirmation: true
      }
    });

  } catch (error) {
    console.error('Newsletter signup error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while processing your subscription. Please try again.' 
      },
      { status: 500 }
    );
  }
}

// GET endpoint for unsubscribe functionality
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const action = url.pathname.split('/').pop();
  
  if (action === 'unsubscribe') {
    const email = url.searchParams.get('email');
    const token = url.searchParams.get('token');
    
    if (!email || !token) {
      return NextResponse.json(
        { success: false, error: 'Missing email or token' },
        { status: 400 }
      );
    }

    // Verify token (in production, use proper token verification)
    const expectedToken = generateUnsubscribeToken(email);
    if (token !== expectedToken) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 400 }
      );
    }
    
    // Remove subscriber
    const initialLength = subscribers.length;
    subscribers = subscribers.filter(sub => sub.email.toLowerCase() !== email.toLowerCase());
    
    if (subscribers.length < initialLength) {
      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Unsubscribed Successfully</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; }
            .container { background: white; padding: 40px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .success { color: #10b981; font-size: 24px; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="success">✅ Successfully Unsubscribed</div>
            <p>You have been successfully unsubscribed from Henry Club Digital newsletter.</p>
            <p>We're sorry to see you go!</p>
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
    } else {
      return NextResponse.json(
        { success: false, error: 'Email not found' },
        { status: 404 }
      );
    }
  }

  return NextResponse.json(
    { success: false, error: 'Invalid action' },
    { status: 400 }
  );
}// Trigger deployment - 10/31/2025 10:09:50
