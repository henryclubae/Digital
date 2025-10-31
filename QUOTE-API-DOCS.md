# Quote API Documentation

## Overview
The Quote API (`/api/quote`) generates custom quotes for Henry Club Digital services with comprehensive pricing calculations, PDF generation, and automated email notifications.

## Features
- ✅ **Comprehensive Validation**: Zod schema validation for all input fields
- ✅ **Smart Pricing**: Dynamic pricing based on service complexity and multi-service discounts
- ✅ **Rate Limiting**: 3 quote requests per hour per IP address
- ✅ **PDF Generation**: Professional quote PDF with company branding
- ✅ **Dual Email System**: Customer quote delivery + company notification
- ✅ **Quote Management**: Automatic quote saving and follow-up tracking
- ✅ **Calendar Integration**: Calendly booking links for consultation calls

## API Endpoint

### POST `/api/quote`

**Request Body:**
```json
{
  "services": ["Digital Marketing UAE", "SEO Services Dubai"],
  "timeline": "3-6 months",
  "budget": "AED 10,000 - 25,000",
  "goals": "Increase online visibility and lead generation for Dubai market",
  "situation": "New startup looking to establish digital presence in UAE",
  "requirements": "Need comprehensive strategy with Arabic content support",
  "name": "Ahmed Al-Rashid",
  "email": "ahmed@company.ae",
  "phone": "+971501234567",
  "company": "Dubai Innovation LLC"
}
```

**Validation Schema:**
- `services`: Array of strings (min 1 service required)
- `timeline`: String (min 1 character)
- `budget`: String (min 1 character)
- `goals`: String (min 10 characters)
- `situation`: String (min 10 characters)
- `requirements`: String (min 10 characters)
- `name`: String (min 2 characters)
- `email`: Valid email format
- `phone`: String (min 10 characters)
- `company`: Optional string

**Available Services:**
- "Web Development Dubai"
- "Digital Marketing UAE"
- "SEO Services Dubai"
- "Amazon Store Setup UAE"
- "Social Media Marketing"
- "Email Marketing"

## Pricing Logic

### Base Pricing
| Service | Base Price | Type | Timeline |
|---------|------------|------|----------|
| Web Development Dubai | AED 5,000 | One-time | 6-12 weeks |
| Digital Marketing UAE | AED 3,000 | Monthly | Ongoing |
| SEO Services Dubai | AED 2,500 | Monthly | 6+ months |
| Amazon Store Setup UAE | AED 4,000 | One-time | 4-8 weeks |
| Social Media Marketing | AED 2,000 | Monthly | Ongoing |
| Email Marketing | AED 1,500 | Monthly | Ongoing |

### Complexity Multipliers
- **Standard**: Base price (default)
- **Complex**: +20% to +50% based on requirements length and complexity keywords

### Multi-Service Discounts
- **3-4 Services**: 10% discount
- **5+ Services**: 15% discount

### Example Pricing Calculation

**Services Selected:**
- Digital Marketing UAE: AED 3,000/month
- SEO Services Dubai: AED 2,500/month  
- Social Media Marketing: AED 2,000/month

**Calculation:**
1. Base Monthly: AED 7,500
2. Multi-service discount (3 services): -10%
3. **Final Monthly**: AED 6,750
4. **Annual Value**: AED 81,000

## Response Format

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your custom quote has been generated and sent to your email!",
  "data": {
    "quoteId": "abc123-def456-ghi789",
    "estimatedInvestment": {
      "oneTime": 5000,
      "monthly": 6750,
      "annual": 86000
    },
    "estimatedTimeline": "4-6 weeks setup + ongoing monthly",
    "validUntil": "2025-11-30T10:30:00.000Z",
    "nextSteps": [
      "Check your email for the detailed quote PDF",
      "Schedule a free consultation call",
      "Approve the quote to begin your project"
    ],
    "bookingLink": "https://calendly.com/henryclubdigital/consultation?prefill_1=Ahmed&prefill_2=abc123",
    "contactInfo": {
      "phone": "+971 50 123 4567",
      "whatsapp": "https://wa.me/971501234567",
      "email": "info@henryclub.ae"
    }
  }
}
```

**Validation Error (400):**
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "services",
      "message": "At least one service must be selected"
    },
    {
      "field": "email", 
      "message": "Invalid email format"
    }
  ]
}
```

**Rate Limit Error (429):**
```json
{
  "error": "Too many quote requests. Please try again later."
}
```

## Email Templates

### Customer Quote Email
- **Subject**: "Your Custom Quote #[QuoteID] - Henry Club Digital"
- **Content**: Professional HTML template with:
  - Quote summary and total pricing
  - Service breakdown with individual pricing
  - Project timeline estimation
  - ROI guarantee highlight
  - Next steps and action buttons
  - Calendar booking integration
- **Attachment**: Detailed quote PDF

### Company Notification Email
- **Subject**: "🚨 NEW QUOTE: AED [Annual Value]+ - [Customer Name]"
- **Content**: Internal notification with:
  - Customer contact information
  - Services requested and pricing
  - Annual value calculation
  - Project details and requirements
  - Follow-up action items

## Quote PDF Generation

The system generates a professional PDF quote containing:
- **Header**: Henry Club Digital branding and contact info
- **Quote Details**: Quote ID, date, validity period, customer info
- **Project Overview**: Services, timeline, budget, goals
- **Service Breakdown**: Individual service pricing and timelines  
- **Pricing Summary**: Subtotals, discounts, final totals
- **Terms & Conditions**: Payment terms, validity, conditions
- **Next Steps**: Process for project approval and initiation
- **Contact Information**: Multiple contact methods and booking links

## Quote Management

### Quote Storage
Quotes are saved as JSON files in `/quotes/` directory:
```json
{
  "quoteId": "abc123-def456-ghi789",
  "serviceBreakdown": [...],
  "totalOneTime": 5000,
  "totalMonthly": 6750,
  "discount": 10,
  "estimatedTimeline": "4-6 weeks setup + ongoing monthly",
  "validUntil": "2025-11-30T10:30:00.000Z",
  "createdAt": "2025-10-31T10:30:00.000Z",
  "customerData": {...},
  "status": "pending",
  "followUpDate": "2025-11-02T10:30:00.000Z"
}
```

### Follow-up Tracking
- **Auto Follow-up**: 2 days after quote generation
- **Quote Expiry**: 30 days from creation date
- **Status Tracking**: pending, approved, declined, expired

## Integration Points

### Calendar Booking (Calendly)
- **URL**: `https://calendly.com/henryclubdigital/consultation`
- **Prefill Parameters**:
  - `prefill_1`: Customer name
  - `prefill_2`: Quote ID for reference

### WhatsApp Integration
- **URL**: `https://wa.me/971501234567`
- **Preset Message**: Includes quote ID for context

### Email Links
- **Approval**: `mailto:info@henryclub.ae?subject=Quote [ID] - Ready to Proceed`
- **Questions**: Direct email link with quote reference

## Rate Limiting

- **Limit**: 3 quote requests per hour per IP
- **Window**: 1 hour sliding window
- **Storage**: In-memory (use Redis in production)
- **Response**: HTTP 429 when limit exceeded

## Error Handling

The API handles various error scenarios:
1. **Validation Errors**: Detailed field-level error messages
2. **Rate Limiting**: Clear retry-after messaging
3. **Email Failures**: Graceful degradation with manual contact info
4. **PDF Generation**: Fallback to HTML email if PDF fails
5. **File System**: Automatic directory creation for quote storage

## Environment Variables

Required SMTP configuration:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@henryclub.ae
SMTP_PASS=your_app_password
SMTP_FROM=noreply@henryclub.ae
```

## Production Considerations

1. **Database Integration**: Replace file storage with proper database
2. **PDF Library**: Use professional PDF generation library (puppeteer, jsPDF)
3. **Queue System**: Use job queue for email sending (Bull, Agenda)
4. **Rate Limiting**: Use Redis for distributed rate limiting
5. **Monitoring**: Add logging and error tracking
6. **Backup**: Implement quote data backup and recovery
7. **Analytics**: Track quote conversion rates and follow-up success

## Testing

### Test Request Example
```bash
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "services": ["Digital Marketing UAE", "SEO Services Dubai"],
    "timeline": "3-6 months",
    "budget": "AED 10,000 - 25,000", 
    "goals": "Increase online visibility and lead generation",
    "situation": "New startup looking to establish presence",
    "requirements": "Need comprehensive strategy with Arabic content",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+971501234567",
    "company": "Test Company"
  }'
```

The Quote API provides a complete solution for generating professional quotes with automated follow-up and comprehensive customer communication.