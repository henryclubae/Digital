import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Specify the runtime for Vercel compatibility
export const runtime = 'nodejs';

// Rate limiting storage (in production, use Redis or a database)
const quoteLimitStore = new Map<string, { count: number; resetTime: number }>();

// Zod validation schema for quote form
const quoteSchema = z.object({
  services: z.array(z.string()).min(1, 'At least one service must be selected'),
  timeline: z.string().min(1, 'Timeline is required'),
  budget: z.string().min(1, 'Budget range is required'),
  goals: z.string().min(10, 'Goals description must be at least 10 characters'),
  situation: z.string().min(10, 'Current situation description must be at least 10 characters'),
  requirements: z.string().min(10, 'Requirements description must be at least 10 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email({ message: 'Invalid email format' }),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  company: z.string().optional(),
});

// Type for validated quote data
type QuoteData = z.infer<typeof quoteSchema>;

// Service pricing configuration
const servicePricing = {
  'Web Development Dubai': {
    base: 5000,
    monthly: false,
    complexityMultiplier: 1.5,
    timeline: '6-12 weeks'
  },
  'Digital Marketing UAE': {
    base: 3000,
    monthly: true,
    complexityMultiplier: 1.3,
    timeline: 'Ongoing monthly'
  },
  'SEO Services Dubai': {
    base: 2500,
    monthly: true,
    complexityMultiplier: 1.2,
    timeline: '6+ months'
  },
  'Amazon Store Setup UAE': {
    base: 4000,
    monthly: false,
    complexityMultiplier: 1.4,
    timeline: '4-8 weeks'
  },
  'Social Media Marketing': {
    base: 2000,
    monthly: true,
    complexityMultiplier: 1.2,
    timeline: 'Ongoing monthly'
  },
  'Email Marketing': {
    base: 1500,
    monthly: true,
    complexityMultiplier: 1.1,
    timeline: 'Ongoing monthly'
  }
};

// Rate limiting function
function checkQuoteRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxQuotes = 3;

  const record = quoteLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    quoteLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxQuotes) {
    return false;
  }
  
  record.count++;
  return true;
}

// Quote calculation logic
function calculateQuote(data: QuoteData) {
  let totalOneTime = 0;
  let totalMonthly = 0;
  const serviceBreakdown: Array<{
    service: string;
    price: number;
    monthly: boolean;
    timeline: string;
  }> = [];

  // Calculate base pricing for each service
  for (const serviceName of data.services) {
    const pricing = servicePricing[serviceName as keyof typeof servicePricing];
    if (pricing) {
      let servicePrice = pricing.base;
      
      // Apply complexity multiplier based on requirements complexity
      if (data.requirements.length > 200 || data.goals.includes('complex') || data.goals.includes('advanced')) {
        servicePrice = Math.round(servicePrice * pricing.complexityMultiplier);
      }

      serviceBreakdown.push({
        service: serviceName,
        price: servicePrice,
        monthly: pricing.monthly,
        timeline: pricing.timeline
      });

      if (pricing.monthly) {
        totalMonthly += servicePrice;
      } else {
        totalOneTime += servicePrice;
      }
    }
  }

  // Apply multi-service discounts
  let discount = 0;
  if (data.services.length >= 5) {
    discount = 0.15; // 15% for 5+ services
  } else if (data.services.length >= 3) {
    discount = 0.1; // 10% for 3+ services
  }

  if (discount > 0) {
    totalOneTime = Math.round(totalOneTime * (1 - discount));
    totalMonthly = Math.round(totalMonthly * (1 - discount));
  }

  // Calculate project timeline
  const hasOngoingServices = serviceBreakdown.some(s => s.monthly);
  const setupTime = serviceBreakdown.filter(s => !s.monthly).length * 2; // 2 weeks per one-time service
  const timeline = hasOngoingServices ? `${setupTime}-${setupTime + 4} weeks setup + ongoing monthly` : `${setupTime}-${setupTime * 2} weeks`;

  return {
    quoteId: uuidv4(),
    serviceBreakdown,
    totalOneTime,
    totalMonthly,
    discount: Math.round(discount * 100),
    estimatedTimeline: timeline,
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    createdAt: new Date()
  };
}

// Generate quote PDF content (simplified - in production, use proper PDF library)
function generateQuotePDF(data: QuoteData, quote: ReturnType<typeof calculateQuote>): string {
  const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 3px solid #1e3a8a; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #1e3a8a; margin-bottom: 10px; }
        .tagline { color: #6b7280; font-size: 14px; }
        .quote-info { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .quote-id { font-size: 18px; font-weight: bold; color: #1e3a8a; }
        .section { margin: 30px 0; }
        .section-title { font-size: 20px; font-weight: bold; color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
        .service-item { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #f3f4f6; }
        .service-name { font-weight: bold; }
        .service-price { color: #059669; font-weight: bold; }
        .total-section { background: #1e3a8a; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .total-row { display: flex; justify-content: space-between; margin: 10px 0; }
        .total-amount { font-size: 24px; font-weight: bold; }
        .terms { background: #fef3c7; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .footer { text-align: center; margin-top: 50px; padding-top: 30px; border-top: 2px solid #e5e7eb; color: #6b7280; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🏆 HENRY CLUB DIGITAL</div>
        <div class="tagline">Premium Digital Marketing Agency UAE</div>
    </div>
    
    <div class="quote-info">
        <div class="quote-id">Quote ID: ${quote.quoteId}</div>
        <div>Date: ${quote.createdAt.toLocaleDateString('en-AE')}</div>
        <div>Valid Until: ${quote.validUntil.toLocaleDateString('en-AE')}</div>
        <div>For: ${data.name} ${data.company ? `(${data.company})` : ''}</div>
    </div>
    
    <div class="section">
        <div class="section-title">Project Overview</div>
        <p><strong>Services Requested:</strong> ${data.services.join(', ')}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Budget Range:</strong> ${data.budget}</p>
        <p><strong>Project Goals:</strong> ${data.goals}</p>
    </div>
    
    <div class="section">
        <div class="section-title">Service Breakdown</div>
        ${quote.serviceBreakdown.map(service => `
            <div class="service-item">
                <div>
                    <div class="service-name">${service.service}</div>
                    <div style="font-size: 12px; color: #6b7280;">${service.timeline}</div>
                </div>
                <div class="service-price">
                    AED ${service.price.toLocaleString()}${service.monthly ? '/month' : ''}
                </div>
            </div>
        `).join('')}
    </div>
    
    <div class="total-section">
        <div class="total-row">
            <span>One-time Setup:</span>
            <span>AED ${quote.totalOneTime.toLocaleString()}</span>
        </div>
        ${quote.totalMonthly > 0 ? `
            <div class="total-row">
                <span>Monthly Services:</span>
                <span>AED ${quote.totalMonthly.toLocaleString()}/month</span>
            </div>
        ` : ''}
        ${quote.discount > 0 ? `
            <div class="total-row" style="color: #fbbf24;">
                <span>Multi-Service Discount:</span>
                <span>-${quote.discount}%</span>
            </div>
        ` : ''}
        <div class="total-row" style="border-top: 1px solid rgba(255,255,255,0.3); padding-top: 15px; margin-top: 15px;">
            <span class="total-amount">Total Investment:</span>
            <span class="total-amount">
                ${quote.totalOneTime > 0 ? `AED ${quote.totalOneTime.toLocaleString()}` : ''}
                ${quote.totalOneTime > 0 && quote.totalMonthly > 0 ? ' + ' : ''}
                ${quote.totalMonthly > 0 ? `AED ${quote.totalMonthly.toLocaleString()}/month` : ''}
            </span>
        </div>
    </div>
    
    <div class="terms">
        <div style="font-weight: bold; margin-bottom: 15px;">Terms & Conditions:</div>
        <ul style="margin: 0; padding-left: 20px;">
            <li>Quote valid for 30 days from issue date</li>
            <li>50% deposit required to start project</li>
            <li>Remaining payment due upon project completion</li>
            <li>Monthly services billed in advance</li>
            <li>All prices in AED and exclude VAT</li>
            <li>Timeline estimates may vary based on client feedback cycles</li>
        </ul>
    </div>
    
    <div class="section">
        <div class="section-title">Next Steps</div>
        <ol>
            <li>Review this quote and let us know if you have any questions</li>
            <li>Schedule a consultation call to discuss project details</li>
            <li>Sign the project agreement and provide deposit</li>
            <li>Project kickoff and timeline begins</li>
        </ol>
        
        <p style="margin-top: 20px;">
            <strong>Ready to proceed?</strong><br>
            📞 Call: +971 50 123 4567<br>
            📧 Email: info@henryclub.ae<br>
            💬 WhatsApp: <a href="https://wa.me/971501234567">wa.me/971501234567</a><br>
            📅 Book consultation: <a href="https://calendly.com/henryclubdigital/consultation">calendly.com/henryclubdigital/consultation</a>
        </p>
    </div>
    
    <div class="footer">
        <strong>Henry Club Digital Agency</strong><br>
        Business Center, Sharjah Publishing City, UAE<br>
        info@henryclub.ae | +971 50 123 4567 | digital.henryclub.ae
    </div>
</body>
</html>
  `;
  
  return pdfContent;
}

// Save quote data (in production, save to database)
function saveQuoteData(data: QuoteData, quote: ReturnType<typeof calculateQuote>) {
  // For Vercel deployment, we'll log the quote data instead of saving to file system
  // In production, replace this with database storage (Supabase, MongoDB, etc.)
  const quoteRecord = {
    ...quote,
    customerData: data,
    status: 'pending',
    followUpDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days for follow-up
  };
  
  // Log quote data for now (replace with database in production)
  console.log(`[QUOTE] ${new Date().toISOString()} - Quote ${quote.quoteId} saved for ${data.name} (${data.email})`);
  console.log('Quote Data:', JSON.stringify(quoteRecord, null, 2));
  
  // TODO: Replace with database storage in production
  // Example: await db.quotes.create(quoteRecord);
}

// Customer quote email template
function getCustomerQuoteEmailTemplate(data: QuoteData, quote: ReturnType<typeof calculateQuote>): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Custom Quote - Henry Club Digital</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .tagline { font-size: 14px; opacity: 0.9; }
        .content { padding: 30px; }
        .quote-highlight { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 25px; border-radius: 12px; text-align: center; margin: 25px 0; }
        .quote-id { font-size: 14px; opacity: 0.9; margin-bottom: 10px; }
        .quote-amount { font-size: 32px; font-weight: bold; margin: 10px 0; }
        .quote-validity { font-size: 14px; opacity: 0.9; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 18px; font-weight: bold; color: #1e3a8a; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
        .service-list { background-color: #f9fafb; border-radius: 8px; padding: 20px; }
        .service-item { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .service-item:last-child { border-bottom: none; }
        .service-name { font-weight: bold; }
        .service-price { color: #059669; font-weight: bold; }
        .next-steps { background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 0 8px 8px 0; }
        .action-buttons { display: flex; gap: 15px; margin: 25px 0; flex-wrap: wrap; }
        .action-btn { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center; flex: 1; min-width: 120px; }
        .btn-primary { background-color: #1e3a8a; color: white; }
        .btn-secondary { background-color: #10b981; color: white; }
        .btn-tertiary { background-color: #f59e0b; color: white; }
        .footer { background-color: #1f2937; color: white; padding: 25px; text-align: center; }
        .guarantee { background-color: #ecfdf5; border: 2px solid #10b981; border-radius: 8px; padding: 15px; text-align: center; margin: 20px 0; }
        .guarantee-text { color: #065f46; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🏆 HENRY CLUB DIGITAL</div>
          <div class="tagline">Your Custom Quote is Ready</div>
        </div>
        
        <div class="content">
          <h2>Dear ${data.name},</h2>
          <p>Thank you for your interest in our digital marketing services! We've carefully reviewed your requirements and prepared a custom quote tailored specifically for your business needs.</p>
          
          <div class="quote-highlight">
            <div class="quote-id">Quote ID: ${quote.quoteId}</div>
            <div class="quote-amount">
              ${quote.totalOneTime > 0 ? `AED ${quote.totalOneTime.toLocaleString()}` : ''}
              ${quote.totalOneTime > 0 && quote.totalMonthly > 0 ? ' + ' : ''}
              ${quote.totalMonthly > 0 ? `AED ${quote.totalMonthly.toLocaleString()}/month` : ''}
            </div>
            <div class="quote-validity">Valid until ${quote.validUntil.toLocaleDateString('en-AE')}</div>
          </div>
          
          <div class="section">
            <div class="section-title">📋 Services Included</div>
            <div class="service-list">
              ${quote.serviceBreakdown.map(service => `
                <div class="service-item">
                  <span class="service-name">${service.service}</span>
                  <span class="service-price">AED ${service.price.toLocaleString()}${service.monthly ? '/mo' : ''}</span>
                </div>
              `).join('')}
            </div>
            ${quote.discount > 0 ? `
              <p style="color: #059669; font-weight: bold; margin-top: 15px;">
                🎉 Multi-Service Discount Applied: ${quote.discount}% savings!
              </p>
            ` : ''}
          </div>
          
          <div class="guarantee">
            <div class="guarantee-text">🎯 ROI GUARANTEE: 200% minimum return or money back within 6 months</div>
          </div>
          
          <div class="section">
            <div class="section-title">⏱️ Project Timeline</div>
            <p><strong>Estimated Duration:</strong> ${quote.estimatedTimeline}</p>
            <p><strong>Your Requested Timeline:</strong> ${data.timeline}</p>
          </div>
          
          <div class="next-steps">
            <div style="font-weight: bold; margin-bottom: 15px;">🚀 Ready to Get Started?</div>
            <ol style="margin: 0; padding-left: 20px;">
              <li>Review the attached detailed quote PDF</li>
              <li>Schedule a free consultation call to discuss any questions</li>
              <li>Approve the quote and we'll send the project agreement</li>
              <li>Make the 50% deposit to officially start your project</li>
            </ol>
          </div>
          
          <div class="section">
            <div class="section-title">📞 Take Action Now</div>
            <div class="action-buttons">
              <a href="mailto:info@henryclub.ae?subject=Quote ${quote.quoteId} - Ready to Proceed" class="action-btn btn-primary">Approve Quote</a>
              <a href="https://calendly.com/henryclubdigital/consultation?prefill_1=${encodeURIComponent(data.name)}&prefill_2=${quote.quoteId}" class="action-btn btn-secondary">Book Consultation</a>
              <a href="https://wa.me/971501234567?text=Hi, I received quote ${quote.quoteId} and have some questions" class="action-btn btn-tertiary">Ask Questions</a>
            </div>
          </div>
          
          <div class="section">
            <p><strong>Questions?</strong> We're here to help!</p>
            <p>
              📧 <a href="mailto:info@henryclub.ae">info@henryclub.ae</a><br>
              📞 <a href="tel:+971501234567">+971 50 123 4567</a><br>
              💬 <a href="https://wa.me/971501234567">WhatsApp Support</a>
            </p>
          </div>
          
          <p style="margin-top: 30px;">We're excited to help grow your business and look forward to working with you!</p>
          
          <p><strong>Best regards,</strong><br>
          <strong>The Henry Club Digital Team</strong><br>
          <em>Your Partners in Digital Success</em></p>
        </div>
        
        <div class="footer">
          <strong>HENRY CLUB DIGITAL AGENCY</strong><br>
          Business Center, Sharjah Publishing City, UAE<br>
          📧 info@henryclub.ae | 📱 +971 50 123 4567 | 🌐 digital.henryclub.ae
        </div>
      </div>
    </body>
    </html>
  `;
}

// Company notification email template
function getCompanyQuoteNotificationTemplate(data: QuoteData, quote: ReturnType<typeof calculateQuote>): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); color: white; padding: 20px; text-align: center; }
        .alert { background-color: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin: 20px; }
        .quote-info { background-color: #f8fafc; padding: 20px; margin: 20px; border-radius: 8px; }
        .info-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin: 10px 0; }
        .info-label { font-weight: bold; color: #374151; }
        .info-value { color: #6b7280; }
        .services-list { background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .total-highlight { background-color: #1e3a8a; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 NEW QUOTE REQUEST</h1>
          <p>High-value prospect requires immediate attention</p>
        </div>
        
        <div class="alert">
          <strong>⚡ PRIORITY ACTION REQUIRED</strong><br>
          Quote ID: ${quote.quoteId} | Value: AED ${(quote.totalOneTime + quote.totalMonthly * 12).toLocaleString()}+ annually
        </div>
        
        <div class="quote-info">
          <h3>Customer Information</h3>
          <div class="info-grid">
            <div class="info-label">Name:</div>
            <div class="info-value">${data.name}</div>
            <div class="info-label">Email:</div>
            <div class="info-value">${data.email}</div>
            <div class="info-label">Phone:</div>
            <div class="info-value">${data.phone}</div>
            <div class="info-label">Company:</div>
            <div class="info-value">${data.company || 'Not specified'}</div>
            <div class="info-label">Budget:</div>
            <div class="info-value">${data.budget}</div>
            <div class="info-label">Timeline:</div>
            <div class="info-value">${data.timeline}</div>
          </div>
        </div>
        
        <div class="services-list">
          <h3>Services Requested (${data.services.length})</h3>
          <ul>
            ${data.services.map(service => `<li>${service}</li>`).join('')}
          </ul>
        </div>
        
        <div class="total-highlight">
          <h3>Quote Summary</h3>
          <p>One-time: AED ${quote.totalOneTime.toLocaleString()}</p>
          ${quote.totalMonthly > 0 ? `<p>Monthly: AED ${quote.totalMonthly.toLocaleString()}</p>` : ''}
          <p><strong>Annual Value: AED ${(quote.totalOneTime + quote.totalMonthly * 12).toLocaleString()}</strong></p>
        </div>
        
        <div style="padding: 20px;">
          <h3>Project Details</h3>
          <p><strong>Goals:</strong> ${data.goals}</p>
          <p><strong>Current Situation:</strong> ${data.situation}</p>
          <p><strong>Requirements:</strong> ${data.requirements}</p>
          
          <h3>Follow-up Actions</h3>
          <ol>
            <li>Call within 2 hours: <a href="tel:${data.phone}">${data.phone}</a></li>
            <li>Send personalized follow-up email</li>
            <li>Schedule consultation call</li>
            <li>Follow up in 2 days if no response</li>
          </ol>
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
    if (!checkQuoteRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many quote requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // Calculate quote
    const quote = calculateQuote(validatedData);

    // Save quote data
    saveQuoteData(validatedData, quote);

    // Generate quote PDF content
    const pdfContent = generateQuotePDF(validatedData, quote);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create PDF attachment (simplified - in production, use proper PDF library)
    const pdfBuffer = Buffer.from(pdfContent, 'utf8');

    // Send quote email to customer
    const customerMailOptions = {
      from: `"Henry Club Digital Agency" <${process.env.SMTP_FROM}>`,
      to: validatedData.email,
      subject: `Your Custom Quote #${quote.quoteId.slice(-8)} - Henry Club Digital`,
      html: getCustomerQuoteEmailTemplate(validatedData, quote),
      attachments: [
        {
          filename: `Henry-Club-Digital-Quote-${quote.quoteId.slice(-8)}.html`,
          content: pdfBuffer,
          contentType: 'text/html'
        }
      ]
    };

    // Send notification to company
    const companyMailOptions = {
      from: `"Quote System" <${process.env.SMTP_FROM}>`,
      to: 'info@henryclub.ae',
      subject: `🚨 NEW QUOTE: AED ${(quote.totalOneTime + quote.totalMonthly * 12).toLocaleString()}+ - ${validatedData.name}`,
      html: getCompanyQuoteNotificationTemplate(validatedData, quote),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(companyMailOptions),
    ]);

    // Return success response with quote details
    return NextResponse.json({
      success: true,
      message: 'Your custom quote has been generated and sent to your email!',
      data: {
        quoteId: quote.quoteId,
        estimatedInvestment: {
          oneTime: quote.totalOneTime,
          monthly: quote.totalMonthly,
          annual: quote.totalOneTime + quote.totalMonthly * 12
        },
        estimatedTimeline: quote.estimatedTimeline,
        validUntil: quote.validUntil,
        nextSteps: [
          'Check your email for the detailed quote PDF',
          'Schedule a free consultation call',
          'Approve the quote to begin your project'
        ],
        bookingLink: `https://calendly.com/henryclubdigital/consultation?prefill_1=${encodeURIComponent(validatedData.name)}&prefill_2=${quote.quoteId}`,
        contactInfo: {
          phone: '+971 50 123 4567',
          whatsapp: 'https://wa.me/971501234567',
          email: 'info@henryclub.ae'
        }
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
    console.error('Quote API error:', error);

    // Return generic error response
    return NextResponse.json(
      { error: 'An error occurred while generating your quote. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}