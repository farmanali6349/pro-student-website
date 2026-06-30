# InvoiceQuotePage — setup notes

## 1. Logo assets
Drop these into `/public/logos/` (SVG/PNG, transparent background):
- `study-abroad-logo.svg` — the teal "sat" pin + Study Abroad wordmark (top right)
- `study-abroad-watermark.svg` — same pin mark alone, used as the faint
  watermark behind the table (rendered at 10% opacity, ~192px)
- `kaplan-logo.svg` — Kaplan International Languages logo
- `al-rajhi-bank-logo.svg` — Al Rajhi Bank logo

I didn't hand-draw these as inline SVG since Kaplan and Al Rajhi Bank are
third-party trademarks — better to use your existing brand assets than an
approximation. If you don't have the "sat" files yet, your provided custom
CSS doesn't define a teal token, so consider adding one for consistency:

```css
@theme inline {
  --color-brand-teal: #009993;
}
```

Then swap `bg-[#009993]` / `text-[#009993]` / `border-[#009993]` in the
component for `bg-brand-teal` / `text-brand-teal` / `border-brand-teal`.

## 2. New next-intl keys (add under "schoolBooking")
```json
{
  "date": "Date",
  "offerNumber": "Offer Number",
  "studyAbroadLogoAlt": "Study Abroad",
  "confirmBookingIntro": "Please confirm the booking details attached to the invoice shown below:",
  "bestPriceBadge": "BEST PRICE",
  "bestPriceMessage": "You are getting the best price ever! We will refund the difference if you find a lower price.",
  "bookingDetails": "Booking Details",
  "from": "From",
  "to": "To",
  "duration": "Duration",
  "amount": "Amount",
  "sarShort": "ر.س",
  "total": "Total",
  "noticeExchangeRate": "Please note that these prices are not fixed due to foreign currency exchange rate fluctuations against the Saudi Riyal",
  "noticeInstitutePrices": "Notice: Prices may vary according to the institute's prices for the year 2026",
  "noticeQuoteValidity": "Please note that this quote is valid for 7 days only",
  "noticeBookingNotConfirmed": "Booking is not confirmed. Payment and passport copy must be sent",
  "accountName": "Account Name",
  "iban": "IBAN",
  "accountNumber": "Account Number",
  "lessonsPerWeek": "lessons / week",
  "hoursPerWeek": "hours / week"
}
```
`weekCount`, `addInsurance`, and `week` are reused from your existing
`schoolBooking` namespace.

## 3. Props you'll pass that weren't in the old QuotationPage
- `offerNumber` — e.g. `6899`
- `issueDate` — optional ISO date, defaults to today
- `initial.accommodationStartDate` / `initial.accommodationEndDate` — the
  residence's own date range (separate from the course's `startDate`)
- `bank: { accountNameArabic, iban, accountNumber }`
- `phoneNumber`, optional `whatsappNumber`

## 4. Weekly/fixed fee rows
The component now pulls *all* fixed and weekly fees from `school.fees`
straight into rows (Registration Fee, Accommodation Booking Fee, Courses
Supplement, etc.) instead of collapsing them into one "Fixed Fees" line —
that's what gets you the line-by-line breakdown in the screenshot.
