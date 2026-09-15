# DJF Entertainment Website

Multipage bilingual website for DJ Foca / DJF Entertainment, built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Current event types
- Weddings
- Corporate events
- Private events
- Bars

## Pricing
Pricing is custom. The quote depends on the event, service hours, lighting and requested add-ons. No fixed sample packages are shown on the live pages.

## Contact form -> Gmail
The contact form posts to `/api/contact` and sends the inquiry to Gmail. The email includes the customer's name, phone number, email, event details, requested hours, lighting/extras and message, plus direct email/call links.

Before using the form in production:
1. Copy `.env.example` to `.env.local`.
2. Set `GMAIL_USER` to the Gmail account that will send the inquiry emails.
3. Enable 2-Step Verification on that Google account and create a Google App Password.
4. Put that App Password in `GMAIL_APP_PASSWORD`.
5. Optionally set `CONTACT_TO_EMAIL` if inquiries should arrive at a different Gmail address. If omitted, they go to `GMAIL_USER`.
6. Never commit `.env.local` to Git.

## Run locally
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Pending before publication
- Confirm travel radius / states served
- Add the real business phone number when available
- Add any more detailed pricing/add-on information supplied in the Google Doc
- Add real reviews once available
- Add videos when supplied
