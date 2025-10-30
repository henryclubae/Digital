import nodemailer from 'nodemailer';
import { z } from 'zod';

// TypeScript interfaces for API functions
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
}

export interface EmailTemplateData {
  subject: string;
  heading: string;
  content: string;
  buttonText?: string;
  buttonUrl?: string;
  footerText?: string;
}

export interface QuoteService {
  id: string;
  name: string;
  basePrice: number;
  features: string[];
  isSelected: boolean;
}

export interface QuoteCalculation {
  services: QuoteService[];
  subtotal: number;
  discount: number;
  vat: number;
  total: number;
  currency: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  code?: string;
  details?: unknown;
}

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;

// Zod schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long').max(100, 'Name is too long'),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().regex(/^\+971\s?[0-9\s-]{8,}$/, 'Please enter a valid UAE phone number (+971 format)'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters long').max(1000, 'Message is too long'),
  company: z.string().optional(),
});

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

/**
 * Sends contact email using Nodemailer with HTML template
 */
export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate HTML email template
    const htmlContent = formatEmailTemplate({
      subject: `New Contact Form Submission - ${formData.service}`,
      heading: 'New Contact Form Submission',
      content: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replaceAll('\n', '<br>')}</p>
      `,
      footerText: 'This email was sent from your website contact form.',
    });

    // Send emails
    const mailOptions = {
      from: `"${process.env.BUSINESS_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact: ${formData.service} - ${formData.name}`,
      html: htmlContent,
      replyTo: formData.email,
    };

    // Send confirmation email to user
    const confirmationOptions = {
      from: `"${process.env.BUSINESS_NAME}" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: 'Thank you for contacting Henry Club Digital',
      html: formatEmailTemplate({
        subject: 'Thank you for contacting us',
        heading: 'Thank you for your inquiry!',
        content: `
          <p>Dear ${formData.name},</p>
          <p>Thank you for contacting Henry Club Digital Agency. We have received your inquiry about <strong>${formData.service}</strong> and will get back to you within 24 hours.</p>
          <p>Our team is excited to help you achieve your digital marketing goals in the UAE.</p>
        `,
        buttonText: 'Visit Our Website',
        buttonUrl: process.env.NEXT_PUBLIC_SITE_URL,
        footerText: 'Best regards, Henry Club Digital Team',
      }),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationOptions),
    ]);

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

/**
 * Tracks events to Google Analytics
 */
export function trackEvent(eventName: string, parameters: Record<string, unknown> = {}): void {
  try {
    if (globalThis.window?.gtag) {
      globalThis.window.gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        custom_parameter_1: parameters.service,
        custom_parameter_2: parameters.page,
        ...parameters,
      });
    }
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
}

/**
 * Validates contact form data using Zod schema
 */
export function validateContactForm(data: unknown): ApiResponse<ContactFormData> {
  try {
    const validatedData = contactFormSchema.parse(data);
    return {
      success: true,
      data: validatedData,
      message: 'Form data is valid',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: error.issues.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      };
    }
    return {
      success: false,
      error: 'Unknown validation error',
      code: 'UNKNOWN_ERROR',
    };
  }
}

/**
 * Calculates quote pricing based on selected services
 */
export function generateQuoteCalculation(services: QuoteService[]): QuoteCalculation {
  const selectedServices = services.filter(service => service.isSelected);
  
  // Base prices in AED
  const subtotal = selectedServices.reduce((total, service) => total + service.basePrice, 0);
  
  // Apply discount based on number of services (more services = better discount)
  let discountPercent = 0;
  if (selectedServices.length >= 3) {
    discountPercent = 15; // 15% discount for 3+ services
  } else if (selectedServices.length >= 2) {
    discountPercent = 10; // 10% discount for 2+ services
  }
  
  const discount = Math.round((subtotal * discountPercent) / 100);
  const afterDiscount = subtotal - discount;
  
  // VAT calculation (5% in UAE)
  const vat = Math.round((afterDiscount * 5) / 100);
  const total = afterDiscount + vat;

  return {
    services: selectedServices,
    subtotal,
    discount,
    vat,
    total,
    currency: 'AED',
  };
}

/**
 * Formats HTML email templates with Henry Club branding
 */
export function formatEmailTemplate(data: EmailTemplateData): string {
  const { subject, heading, content, buttonText, buttonUrl, footerText } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f7f3e9; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background: linear-gradient(135deg, #D4AF37, #1e40af); padding: 30px; text-align: center; }
    .logo { color: #ffffff; font-size: 24px; font-weight: bold; margin: 0; }
    .content { padding: 40px 30px; }
    .heading { color: #1e40af; font-size: 24px; margin-bottom: 20px; }
    .message { color: #333333; line-height: 1.6; margin-bottom: 20px; }
    .button { display: inline-block; background-color: #D4AF37; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
    .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666666; font-size: 14px; }
    .social { margin: 15px 0; }
    .social a { margin: 0 10px; color: #D4AF37; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="logo">Henry Club Digital</h1>
      <p style="color: #ffffff; margin: 5px 0 0 0;">Digital Excellence in UAE</p>
    </div>
    <div class="content">
      <h2 class="heading">${heading}</h2>
      <div class="message">${content}</div>
      ${buttonText && buttonUrl ? `<a href="${buttonUrl}" class="button">${buttonText}</a>` : ''}
    </div>
    <div class="footer">
      ${footerText ? `<p>${footerText}</p>` : ''}
      <div class="social">
        <a href="https://www.facebook.com/henryclub">Facebook</a>
        <a href="https://www.instagram.com/henryclub">Instagram</a>
        <a href="https://www.linkedin.com/company/henryclub">LinkedIn</a>
      </div>
      <p>Henry Club Digital Agency<br>
      Sharjah Publishing City, UAE<br>
      Phone: +971-50-123-4567</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Handles API errors with consistent formatting
 */
export function handleApiError(error: unknown, context: string = 'API'): ApiErrorResponse {
  console.error(`${context} Error:`, error);

  // Handle known error types
  if (error instanceof z.ZodError) {
    return {
      success: false,
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details: error.issues,
    };
  }

  if (error && typeof error === 'object' && 'code' in error && error.code === 'RATE_LIMITED') {
    return {
      success: false,
      error: 'Too many requests. Please try again later.',
      code: 'RATE_LIMITED',
    };
  }

  // Default error response
  const errorMessage = error && typeof error === 'object' && 'message' in error 
    ? String(error.message) 
    : 'An unexpected error occurred';
  
  const errorCode = error && typeof error === 'object' && 'code' in error 
    ? String(error.code) 
    : 'INTERNAL_ERROR';

  return {
    success: false,
    error: errorMessage,
    code: errorCode,
  };
}

/**
 * Implements rate limiting to prevent spam submissions
 */
export function rateLimitCheck(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const key = identifier;

  // Clean up expired entries
  for (const [k, v] of rateLimitStore.entries()) {
    if (now > v.resetTime) {
      rateLimitStore.delete(k);
    }
  }

  const current = rateLimitStore.get(key);

  if (!current) {
    // First request
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (now > current.resetTime) {
    // Window expired, reset
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    // Rate limit exceeded
    return false;
  }

  // Increment counter
  current.count++;
  rateLimitStore.set(key, current);
  return true;
}

/**
 * Sanitizes form data to prevent XSS and other attacks
 */
export function sanitizeFormData(data: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Remove HTML tags, scripts, and dangerous characters
      sanitized[key] = value
        .replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replaceAll(/javascript:/gi, '')
        .replaceAll(/on\w+="[^"]*"/gi, '')
        .replaceAll(/on\w+='[^']*'/gi, '')
        .replaceAll(/&lt;script/gi, '')
        .replaceAll(/&lt;\/script/gi, '')
        .trim();
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

// Service pricing configuration for quote calculation
export const servicePricing: Record<string, QuoteService> = {
  'web-development': {
    id: 'web-development',
    name: 'Web Development',
    basePrice: 5000,
    features: ['Responsive Design', 'SEO Optimized', 'Content Management', '1 Year Support'],
    isSelected: false,
  },
  'seo-services': {
    id: 'seo-services',
    name: 'SEO Services',
    basePrice: 2500,
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Monthly Reports'],
    isSelected: false,
  },
  'digital-marketing': {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    basePrice: 3500,
    features: ['Social Media Marketing', 'PPC Campaigns', 'Content Strategy', 'Analytics'],
    isSelected: false,
  },
  'amazon-setup': {
    id: 'amazon-setup',
    name: 'Amazon Store Setup',
    basePrice: 4000,
    features: ['Store Setup', 'Product Listing', 'SEO Optimization', 'Initial Marketing'],
    isSelected: false,
  },
  'social-media': {
    id: 'social-media',
    name: 'Social Media Marketing',
    basePrice: 2000,
    features: ['Content Creation', 'Daily Posting', 'Community Management', 'Analytics'],
    isSelected: false,
  },
  'email-marketing': {
    id: 'email-marketing',
    name: 'Email Marketing',
    basePrice: 1500,
    features: ['Campaign Setup', 'Template Design', 'Automation', 'Performance Tracking'],
    isSelected: false,
  },
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}