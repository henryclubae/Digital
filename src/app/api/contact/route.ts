import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Rate limiting storage (in production, use Redis or a database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  company: z.string().optional(),
  service: z.string().min(1, 'Service is required'),
  budget: z.string().min(1, 'Budget is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Type for validated contact data
type ContactData = z.infer<typeof contactSchema>;

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

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

// Log submission for analytics
function logSubmission(data: ContactData) {
  console.log(`[LEAD] ${new Date().toISOString()} - New lead from ${data.name} (${data.email}) for ${data.service}`);
  
  // In production, you would send this to your analytics service
  // Example: Google Analytics 4 Measurement Protocol or custom logging service
}

// Company notification email HTML template
function getCompanyEmailTemplate(data: ContactData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead - Henry Club Digital</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .tagline { font-size: 14px; opacity: 0.9; }
        .content { padding: 30px; }
        .alert { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 25px; }
        .alert-title { font-weight: bold; color: #92400e; margin-bottom: 5px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
        .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin-bottom: 15px; }
        .info-label { font-weight: bold; color: #374151; }
        .info-value { color: #6b7280; }
        .message-box { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; font-style: italic; }
        .actions { display: flex; gap: 15px; margin: 25px 0; flex-wrap: wrap; }
        .action-btn { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center; flex: 1; min-width: 120px; }
        .btn-email { background-color: #3b82f6; color: white; }
        .btn-call { background-color: #10b981; color: white; }
        .btn-whatsapp { background-color: #22c55e; color: white; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; }
        .priority { background-color: #fee2e2; color: #991b1b; padding: 8px 12px; border-radius: 4px; font-weight: bold; display: inline-block; margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🏆 HENRY CLUB DIGITAL</div>
          <div class="tagline">Premium Digital Marketing Agency UAE</div>
        </div>
        
        <div class="content">
          <div class="alert">
            <div class="alert-title">🚨 NEW QUALIFIED LEAD RECEIVED</div>
            High-priority prospect requesting ${data.service} services
          </div>
          
          <div class="priority">⚡ IMMEDIATE ACTION REQUIRED</div>
          
          <div class="section">
            <div class="section-title">📋 Contact Information</div>
            <div class="info-grid">
              <div class="info-label">Full Name:</div>
              <div class="info-value">${data.name}</div>
              <div class="info-label">Email Address:</div>
              <div class="info-value">${data.email}</div>
              <div class="info-label">Phone Number:</div>
              <div class="info-value">${data.phone}</div>
              <div class="info-label">Company:</div>
              <div class="info-value">${data.company || 'Not specified'}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">🎯 Project Details</div>
            <div class="info-grid">
              <div class="info-label">Service Requested:</div>
              <div class="info-value"><strong>${data.service}</strong></div>
              <div class="info-label">Budget Range:</div>
              <div class="info-value"><strong>${data.budget}</strong></div>
            </div>
            <div style="margin-top: 15px;">
              <div class="info-label">Project Message:</div>
              <div class="message-box">${data.message}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">⚡ Quick Actions</div>
            <div class="actions">
              <a href="mailto:${data.email}?subject=Re: ${data.service} Inquiry - Henry Club Digital&body=Dear ${data.name},%0A%0AThank you for your interest in our ${data.service} services..." class="action-btn btn-email">📧 Reply via Email</a>
              <a href="tel:${data.phone}" class="action-btn btn-call">📞 Call Now</a>
              <a href="https://wa.me/${data.phone.replace(/\D/g, '')}?text=Hi ${data.name}, this is Henry Club Digital regarding your ${data.service} inquiry..." class="action-btn btn-whatsapp">💬 WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <strong>Henry Club Digital Agency</strong> | UAE's Premium Digital Marketing Company<br>
          📧 info@henryclub.ae | 📱 +971 50 123 4567 | 🌐 digital.henryclub.ae<br><br>
          <em>This lead was generated from our website contact form on ${new Date().toLocaleDateString('en-AE')} at ${new Date().toLocaleTimeString('en-AE')}</em>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Customer auto-reply email HTML template
function getCustomerEmailTemplate(data: ContactData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Henry Club Digital</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .tagline { font-size: 14px; opacity: 0.9; }
        .content { padding: 30px; }
        .welcome { background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 25px; border-radius: 0 8px 8px 0; }
        .welcome-title { font-size: 20px; font-weight: bold; color: #065f46; margin-bottom: 10px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
        .timeline { background-color: #f8fafc; border-radius: 8px; padding: 20px; }
        .timeline-item { display: flex; align-items: flex-start; margin-bottom: 15px; }
        .timeline-number { background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 15px; flex-shrink: 0; }
        .timeline-content { flex-grow: 1; }
        .timeline-title { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
        .timeline-desc { color: #6b7280; font-size: 14px; }
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
        .contact-card { background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; text-align: center; }
        .contact-icon { font-size: 24px; margin-bottom: 10px; }
        .contact-title { font-weight: bold; color: #374151; margin-bottom: 5px; }
        .contact-info { color: #6b7280; font-size: 14px; }
        .contact-action { margin-top: 10px; }
        .contact-btn { display: inline-block; background-color: #3b82f6; color: white; padding: 8px 16px; border-radius: 4px; text-decoration: none; font-size: 12px; }
        .footer { background-color: #1f2937; color: white; padding: 25px; text-align: center; }
        .footer-logo { font-size: 20px; font-weight: bold; margin-bottom: 10px; }
        .footer-desc { color: #d1d5db; margin-bottom: 15px; font-size: 14px; }
        .footer-contact { color: #9ca3af; font-size: 12px; }
        .signature { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
        .guarantee { background-color: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 15px; text-align: center; margin: 20px 0; }
        .guarantee-text { color: #92400e; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🏆 HENRY CLUB DIGITAL</div>
          <div class="tagline">UAE's Premium Digital Marketing Agency</div>
        </div>
        
        <div class="content">
          <div class="welcome">
            <div class="welcome-title">Thank You, ${data.name}! 🎉</div>
            <p>We've received your inquiry for <strong>${data.service}</strong> services and we're excited to help grow your business in the UAE market!</p>
          </div>
          
          <div class="section">
            <div class="section-title">🚀 What Happens Next</div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-number">1</div>
                <div class="timeline-content">
                  <div class="timeline-title">Expert Review (Within 2 Hours)</div>
                  <div class="timeline-desc">Our digital marketing specialists will analyze your requirements and research your industry.</div>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">2</div>
                <div class="timeline-content">
                  <div class="timeline-title">Personal Response (Same Day)</div>
                  <div class="timeline-desc">We'll contact you directly to discuss your project and answer any questions.</div>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">3</div>
                <div class="timeline-content">
                  <div class="timeline-title">Custom Proposal (Within 24 Hours)</div>
                  <div class="timeline-desc">Receive a detailed proposal with strategies, timelines, and pricing tailored to your needs.</div>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">4</div>
                <div class="timeline-content">
                  <div class="timeline-title">Project Kickoff</div>
                  <div class="timeline-desc">Once approved, we'll start working on your digital marketing success within 48 hours.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="guarantee">
            <div class="guarantee-text">🎯 ROI GUARANTEE: 200% minimum return or money back within 6 months</div>
          </div>
          
          <div class="section">
            <div class="section-title">💬 Need Immediate Assistance?</div>
            <div class="contact-grid">
              <div class="contact-card">
                <div class="contact-icon">📞</div>
                <div class="contact-title">Call Us</div>
                <div class="contact-info">+971 50 123 4567</div>
                <div class="contact-action">
                  <a href="tel:+971501234567" class="contact-btn">Call Now</a>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-icon">💬</div>
                <div class="contact-title">WhatsApp</div>
                <div class="contact-info">Instant Response</div>
                <div class="contact-action">
                  <a href="https://wa.me/971501234567?text=Hi, I submitted a form for ${data.service} services" class="contact-btn">Message Us</a>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-icon">📧</div>
                <div class="contact-title">Email</div>
                <div class="contact-info">info@henryclub.ae</div>
                <div class="contact-action">
                  <a href="mailto:info@henryclub.ae" class="contact-btn">Send Email</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="signature">
            <p><strong>Best regards,</strong><br>
            <strong>The Henry Club Digital Team</strong><br>
            <em>Your Partners in Digital Success</em></p>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 15px;">
              <strong>Why choose Henry Club Digital?</strong><br>
              ✅ 200+ successful UAE projects<br>
              ✅ Google & Facebook certified team<br>
              ✅ Arabic content expertise<br>
              ✅ Local UAE market knowledge<br>
              ✅ 24/7 dedicated support
            </p>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-logo">HENRY CLUB DIGITAL</div>
          <div class="footer-desc">Transforming UAE businesses through strategic digital marketing</div>
          <div class="footer-contact">
            📍 UAE | 📧 info@henryclub.ae | 📱 +971 50 123 4567 | 🌐 digital.henryclub.ae<br>
            Follow us: LinkedIn | Instagram | Facebook | Twitter
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Log submission for analytics
    logSubmission(validatedData);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to company
    const companyMailOptions = {
      from: `"Henry Club Digital Website" <${process.env.SMTP_FROM}>`,
      to: 'info@henryclub.ae',
      subject: `New Lead: ${validatedData.service} - ${validatedData.name}`,
      html: getCompanyEmailTemplate(validatedData),
    };

    // Send auto-reply email to customer
    const customerMailOptions = {
      from: `"Henry Club Digital Agency" <${process.env.SMTP_FROM}>`,
      to: validatedData.email,
      subject: 'Thank you for contacting Henry Club Digital Agency',
      html: getCustomerEmailTemplate(validatedData),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    // Google Analytics event tracking (you would implement this with your GA4 setup)
    // Example: gtag('event', 'lead_generation', { service: validatedData.service, value: validatedData.budget });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will respond within 2 hours.',
      data: {
        submittedAt: new Date().toISOString(),
        service: validatedData.service,
        responseTime: '2 hours',
      },
    });

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Log the error for debugging
    console.error('Contact form error:', error);

    // Return generic error response
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}