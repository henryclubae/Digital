import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge for proper Tailwind CSS class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats phone numbers to UAE +971 format with proper spacing
 */
export function formatPhoneUAE(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replaceAll(/\D/g, '');
  
  // Handle different input formats
  let formatted = cleaned;
  
  // If starts with 971, ensure it has the + prefix
  if (cleaned.startsWith('971')) {
    formatted = cleaned;
  }
  // If starts with 0, replace with 971
  else if (cleaned.startsWith('0')) {
    formatted = '971' + cleaned.substring(1);
  }
  // If it's a 9-digit number, assume it's a UAE number without country code
  else if (cleaned.length === 9) {
    formatted = '971' + cleaned;
  }
  
  // Format as +971 XX XXX XXXX
  if (formatted.length === 12 && formatted.startsWith('971')) {
    return `+971 ${formatted.substring(3, 5)} ${formatted.substring(5, 8)} ${formatted.substring(8)}`;
  }
  
  return phone; // Return original if format doesn't match
}

/**
 * Formats numbers to AED currency with proper Arabic numerals support
 */
export function formatCurrencyAED(amount: number, useArabicNumerals: boolean = false): string {
  const formatted = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  if (useArabicNumerals) {
    // Convert Western numerals to Arabic-Indic numerals
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return formatted.replaceAll(/\d/g, (digit) => arabicNumerals[Number.parseInt(digit)]);
  }

  return formatted;
}

/**
 * Creates URL slugs from titles supporting both English and Arabic text
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    // Replace Arabic characters with transliteration or remove them
    .replaceAll(/[\u0600-\u06FF\u0750-\u077F]/g, '') // Remove Arabic characters
    // Replace spaces and special characters with hyphens
    .replaceAll(/\s+/g, '-')
    .replaceAll(/[^\w-]+/g, '')
    // Remove multiple consecutive hyphens
    .replaceAll(/--+/g, '-')
    // Remove leading/trailing hyphens
    .replaceAll(/^-+/, '')
    .replaceAll(/-+$/, '');
}

/**
 * Truncates text with word-wise truncation and ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }

  return truncated + '...';
}

/**
 * Validates email addresses with UAE domain support
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return false;
  }

  // Additional validation for common UAE domains and international domains
  const validDomains = [
    '.ae', '.com', '.org', '.net', '.edu', '.gov',
    '.co.ae', '.net.ae', '.org.ae', '.ac.ae', '.gov.ae',
    '.mil.ae', '.school.ae'
  ];

  const domain = email.toLowerCase();
  return validDomains.some(validDomain => domain.endsWith(validDomain));
}

/**
 * Generates WhatsApp links with pre-filled messages
 */
export function generateWhatsAppLink(
  phoneNumber: string,
  message?: string,
  useWeb: boolean = false
): string {
  // Clean phone number (remove + and spaces)
  const cleanedNumber = phoneNumber.replaceAll(/[\s+\-()]/g, '');
  
  // Use web.whatsapp.com or wa.me based on preference
  const baseUrl = useWeb ? 'https://web.whatsapp.com/send' : 'https://wa.me';
  
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const messageParam = message ? `?text=${encodedMessage}` : '';
  
  return `${baseUrl}/${cleanedNumber}${messageParam}`;
}

/**
 * Formats dates for Gulf Standard Time (GST)
 */
export function formatDateGST(
  date: Date | string,
  format: 'full' | 'short' | 'time' = 'full'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Dubai', // Gulf Standard Time
  };

  switch (format) {
    case 'full':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.hour = '2-digit';
      options.minute = '2-digit';
      break;
    case 'short':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      break;
    case 'time':
      options.hour = '2-digit';
      options.minute = '2-digit';
      break;
  }

  return new Intl.DateTimeFormat('en-AE', options).format(dateObj);
}

/**
 * Detects if text contains Arabic characters
 */
export function isArabicText(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return arabicRegex.test(text);
}

/**
 * Basic HTML sanitization function
 */
export function sanitizeHtml(html: string): string {
  // Remove script tags and their content
  html = html.replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove potentially dangerous attributes
  html = html.replaceAll(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ''); // Remove event handlers
  html = html.replaceAll(/\s*javascript\s*:/gi, ''); // Remove javascript: protocols
  html = html.replaceAll(/\s*data\s*:/gi, ''); // Remove data: protocols
  html = html.replaceAll(/\s*vbscript\s*:/gi, ''); // Remove vbscript: protocols
  
  // Remove style attributes that might contain CSS expressions
  html = html.replaceAll(/\s*style\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove potentially dangerous tags
  const dangerousTags = ['iframe', 'object', 'embed', 'form', 'input', 'textarea', 'select', 'button'];
  for (const tag of dangerousTags) {
    const regex = new RegExp(`<${tag}\\b[^>]*>.*?<\\/${tag}>`, 'gi');
    html = html.replaceAll(regex, '');
  }
  
  return html.trim();
}

// Type definitions for better TypeScript support
export type PhoneFormat = 'uae' | 'international';
export type DateFormat = 'full' | 'short' | 'time';
export type WhatsAppLinkOptions = {
  message?: string;
  useWeb?: boolean;
};

// Helper type for className merging
export type ClassName = ClassValue;