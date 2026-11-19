/**
 * Company details, navigation and contact information.
 *
 * Everything on the site is driven by the files in `src/content/`.
 * Replace the placeholder contact details below with the firm's real ones —
 * they are deliberately generic until the business supplies its own.
 */

export const site = {
  name: 'Horizon Financial Services',
  shortName: 'Horizon',
  legalName: 'Horizon Financial Services',
  tagline: 'Accounting · Tax · Financial Management',
  description:
    'Professional accounting and financial management services helping businesses build clarity, confidence, and sustainable growth.',
  founded: 'Est. 2012',
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Industries', to: '/#industries' },
    { label: 'Our Approach', to: '/#approach' },
    { label: 'Our Team', to: '/#team' },
    { label: 'Contact', to: '/contact' },
  ],
  footerNav: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Industries', to: '/#industries' },
    { label: 'Our Approach', to: '/#approach' },
    { label: 'Team', to: '/#team' },
    { label: 'Insights', to: '/insights' },
    { label: 'Contact', to: '/contact' },
  ],
  contact: {
    // Placeholders — replace with the firm's real details before launch.
    phone: '+1 (416) 555 0134',
    phoneHref: '+14165550134',
    email: 'hello@horizonfinancial.co',
    addressLines: ['Suite 900, 240 Bay Street', 'Toronto, Ontario M5B 2L7', 'Canada'],
    hours: [
      { days: 'Monday – Friday', time: '09:00 – 18:00' },
      { days: 'Saturday', time: 'By appointment' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
    { label: 'Facebook', href: 'https://www.facebook.com' },
  ],
  legalNav: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
  ],
}

export const hero = {
  eyebrow: 'Accounting · Tax · Financial Management',
  title: ['Clarity in Finance.', 'Confidence in Business.'],
  text: 'Professional accounting and financial management services designed to help businesses operate with confidence, make informed decisions, and build a stronger financial future.',
  primary: { label: 'Book a Consultation', to: '/contact' },
  secondary: { label: 'Explore Our Services', to: '/services' },
  image: { id: '40500557', alt: 'Modern glass towers at dusk in a financial district' },
}

export const industriesOptions = [
  'Retail & Commerce',
  'Professional Services',
  'Manufacturing',
  'Construction',
  'Technology & Startups',
  'Healthcare & Wellness',
  'Real Estate',
  'Hospitality',
  'Other',
]

export const companySizes = ['1 – 10 employees', '11 – 50 employees', '51 – 200 employees', '200+ employees']

export const contactMethods = ['Email', 'Phone', 'Video call']
