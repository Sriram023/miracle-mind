# Miracle Mind premium landing page

## Goal

Build a polished, mobile-first single-page website for Miracle Mind that feels warm, credible, and premium while guiding visitors toward booking, calling, messaging on WhatsApp, or sending an enquiry.

## Page structure

- Create a sticky navigation bar with the Miracle Mind wordmark, desktop links, an accessible mobile menu, and a prominent “Book a Session” action.
- Build the hero as a refined split composition with the supplied headline and copy, two clear actions, professional coaching imagery, and the “Guidance • Growth • Confidence” detail card.
- Add anchored sections in this order: About, Programs, Why Us, workshop enquiry banner, placeholder Testimonials, Events & Milestones, Gallery, and Contact.
- Finish with a restrained dark footer containing the supplied copyright, quick links, program links, editable contact details, and non-clicking social placeholders.

## Visual direction

- Use Playfair Display for elegant editorial headings and Manrope for highly readable body copy.
- Establish semantic design tokens for soft cream surfaces, deep charcoal text, muted green/teal actions, subtle gold details, tasteful borders, and soft shadows.
- Use generous whitespace, restrained rounded corners, asymmetric editorial layouts, and subtle motion rather than gradients or template-like effects.
- Generate a cohesive set of high-quality, locally relevant coaching, workshop, and group-learning photographs for the hero, About, Events, and Gallery areas; keep every image reference easy to replace.

## Content and trust safeguards

- Keep business details in one centralized configuration object, including name, phone number, address, enquiry links, and editable copy.
- Mark all unknown organization-specific content as editable placeholder copy.
- Label all three testimonial entries as placeholders and include an implementation note that they require verified client-supplied testimonials.
- Present the four “Why Us” items as positioning language, not proven claims; avoid invented statistics, awards, credentials, dates, achievements, or social URLs.
- Label event imagery generically as Workshops, Student Events, Training Sessions, and Celebrations without asserting unsupported milestones.

## Interactions and conversion

- Add smooth anchor scrolling with mobile-menu closing and visible keyboard focus states.
- Connect all repeated booking and enquiry actions to the contact section.
- Add working Call Now, WhatsApp, and Google Maps actions using the supplied contact details.
- Build a frontend-only enquiry form with required-field validation, clear inline errors, and an accessible success confirmation without implying a real message was delivered.
- Add restrained reveal and hover effects with reduced-motion support.

## Responsive and accessibility checks

- Maintain one H1 and a logical H2/H3 hierarchy with semantic landmarks.
- Add descriptive alt text, labels, keyboard-operable navigation, and accessible contrast.
- Verify the full page at desktop and mobile sizes, including menu behavior, form errors/success, CTA links, text fitting, image loading, and absence of horizontal scrolling.

## SEO and metadata

- Add the supplied title and description on the home page, plus matching Open Graph text, `og:type`, Twitter card metadata, and a self-referencing canonical path.
- Add local-business structured data using only the supplied business name, category, phone number, and Chennai address.
- Remove generic template metadata and load the selected fonts through the document head.

## Technical approach

- Implement reusable React/TypeScript sections and small shared controls while keeping the experience on `/` as explicitly requested.
- Use Tailwind CSS v4 semantic tokens and the installed Lucide icon set; avoid new dependencies.
- Keep all functionality frontend-only; no database, login, or message delivery service will be added. Before implementation, make the following refinements:
  1. Treat this as a CLIENT DEMO, not a production website.
  2. Do not invent any business facts, achievements, certifications, years of experience, client counts, awards, qualifications, or testimonials.
  3. Replace “Events & Milestones” with “Events & Workshops”.
  4. Replace “Student Events” with “Group Sessions” so the site does not assume the audience is exclusively students.
  5. Keep all organization-specific text clearly editable.
  6. Use the supplied business phone number and address exactly as provided.
  7. Make the phone, WhatsApp, Google Maps, and booking CTAs functional.
  8. Do not invent WhatsApp numbers, social-media URLs, email addresses, or booking URLs. If a separate booking URL is unavailable, scroll to the Contact/enquiry section instead.
  9. Use high-quality coaching, workshop, personal-growth and group-learning imagery that matches the visual identity. Avoid generic corporate stock-photo aesthetics.
  10. Keep the website elegant and premium rather than overly motivational or flashy.
  11. Prioritize the hero section, typography, spacing, CTA design, imagery and mobile experience because this page will be shown directly to the potential client.
  12. Do not add authentication, database, admin dashboard, payment gateway, CMS, or backend functionality.
  13. Ensure the final page is fully functional at `/` and has no broken links, console errors, horizontal scrolling, or placeholder lorem ipsum.
  14. Use subtle animations only, with full prefers-reduced-motion support.
  15. Make the final result feel like a custom agency-designed website rather than an AI-generated template.