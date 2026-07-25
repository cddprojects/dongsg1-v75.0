/* ============================================================
   ALIGN NIMBLY SINGAPORE — Content Data File
   All editable page content lives here.
   Update this file to change copy, categories, FAQs, etc.
   ============================================================ */

export const siteConfig = {
  brandName: 'Align Nimbly',
  tagline: 'Employer-partner opportunity registration',
  market: 'Singapore',
  language: 'en',
  contactEmail: 'hello@alignnimbly.com', // TODO: replace with actual contact email before launch
  privacyPolicyUrl: '/privacy-policy',
  termsOfUseUrl: '/terms-of-use',
  canonicalUrl: 'https://www.alignnimbly.com/alignnimbly-singapore-employer-partner-role-categories', // TODO: replace with live URL
};

export const seoMeta = {
  title: 'Align Nimbly Singapore | Part-Time & Flexible Role Categories',
  description:
    'Explore part-time and flexible role categories in Singapore. Browse what is available, learn how registration works and tell us what type of opportunity interests you.',
  ogTitle: 'Align Nimbly Singapore | Part-Time & Flexible Role Categories',
  ogDescription:
    'Browse part-time and flexible role categories in Singapore. Register your interest and we may be in touch if there is a potentially relevant opportunity.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
};

export const nav = {
  links: [
    { label: 'Role Categories', href: '#role-categories' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Key Information', href: '#trust-safety' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Register Interest', href: '#application' },
};

export const hero = {
  eyebrow: 'Part-time and flexible role exploration and registration',
  heading: 'Explore Part-Time and Flexible Work in Singapore',
  subheading:
    'Browse role categories, understand how registration works and share what type of work suits you. Role availability and terms depend on the specific opportunity and hiring organisation.',
  primaryCta: { label: 'Register Your Interest', href: '#application' },
  secondaryCta: { label: 'Browse Role Categories', href: '#role-categories' },
  trustNote:
    'Registering your interest is not a job offer and does not guarantee placement.',
};

export const intro = {
  eyebrow: 'About Us',
  heading: 'Work that fits around your life',
  lead:
    'Different opportunities may offer different schedules, working arrangements and responsibilities. AlignNimbly helps you explore the available categories and understand what to consider before registering your interest.',
  points: [
    {
      heading: 'Work that fits your schedule',
      body: 'Explore roles that may offer part-time, shift-based, weekend or flexible working arrangements. Available schedules depend on the specific opportunity.',
    },
    {
      heading: 'Compare different work categories',
      body: 'Review the general responsibilities and requirements of each category before selecting the areas that interest you.',
    },
    {
      heading: 'Understand what happens next',
      body: 'Learn how registration works, what information may be requested and who confirms the final employment terms.',
    },
  ],
  transparencyStatement:
    'Registering your interest does not guarantee a job offer, interview, employer response or placement.',
};

export interface RoleCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
  skills: string[];
  hourlyRange: string;
}

export const roleCategories: RoleCategory[] = [
  {
    id: 'customer-support',
    title: 'Customer Support and Service',
    description:
      'Customer-facing roles handling queries, resolving issues and delivering service by phone, email, chat or in person.',
    icon: 'headphones',
    examples: ['Customer Service Officer', 'Call Centre Agent', 'Service Representative', 'Help Desk Staff'],
    skills: ['Communication', 'CRM systems', 'Problem-solving', 'Active listening'],
    hourlyRange: 'SGD 10 – 18 / hr',
  },
  {
    id: 'retail-frontline',
    title: 'Retail and Front-Line Service',
    description:
      'Sales assistance, point of sale operations and customer-facing service roles in retail stores and outlets.',
    icon: 'shopping-bag',
    examples: ['Retail Assistant', 'Sales Associate', 'Cashier', 'Retail Sales Staff'],
    skills: ['Customer service', 'Point of sale', 'Product knowledge', 'Sales'],
    hourlyRange: 'SGD 9 – 14 / hr',
  },
  {
    id: 'hospitality-operations',
    title: 'Hospitality and Operations',
    description:
      'Food and beverage service, guest-facing and event support roles in hotels, restaurants and hospitality settings.',
    icon: 'utensils',
    examples: ['F&B Assistant', 'Waitstaff', 'Event Support Staff', 'Hospitality Assistant'],
    skills: ['F&B service', 'Guest relations', 'Team support', 'Food handling'],
    hourlyRange: 'SGD 9 – 13 / hr',
  },
  {
    id: 'logistics-warehouse',
    title: 'Logistics and Warehouse Support',
    description:
      'Dispatch, inventory handling and warehouse support roles across logistics and fulfilment operations.',
    icon: 'package',
    examples: ['Warehouse Assistant', 'Logistics Assistant', 'Dispatch Staff', 'Inventory Staff'],
    skills: ['Inventory handling', 'Dispatch operations', 'Stock-taking', 'Attention to detail'],
    hourlyRange: 'SGD 10 – 15 / hr',
  },
  {
    id: 'admin-office',
    title: 'Administration and Office Support',
    description:
      'Administrative, clerical and general office support roles in corporate, SME and professional environments.',
    icon: 'file-text',
    examples: ['Admin Assistant', 'Office Coordinator', 'Receptionist', 'Office Assistant'],
    skills: ['Record keeping', 'Microsoft Office', 'Scheduling', 'Filing'],
    hourlyRange: 'SGD 12 – 18 / hr',
  },
  {
    id: 'ecommerce-digital',
    title: 'Ecommerce and Digital Support',
    description:
      'Order processing, online customer service, listing management and platform support roles in ecommerce businesses.',
    icon: 'monitor',
    examples: ['Ecommerce Assistant', 'Order Processing Staff', 'Online Customer Service', 'Listing Assistant'],
    skills: ['Order management', 'Digital tools', 'Customer service', 'Attention to detail'],
    hourlyRange: 'SGD 12 – 18 / hr',
  },
  {
    id: 'marketing-communications',
    title: 'Marketing and Content Support',
    description:
      'Social media, content creation and marketing support roles assisting marketing teams across various industries.',
    icon: 'megaphone',
    examples: ['Social Media Assistant', 'Content Assistant', 'Marketing Support Staff', 'Digital Assistant'],
    skills: ['Social media', 'Content creation', 'Basic design tools', 'Communication'],
    hourlyRange: 'SGD 12 – 20 / hr',
  },
];

export const categoriesSection = {
  eyebrow: 'Role Categories',
  heading: 'Which type of work suits you?',
  subheading:
    'Explore general role categories that may become available through participating hiring organisations. Specific openings, duties and working arrangements may change over time.',
};

export const categoryNote =
  'Hourly rates shown are approximate market reference figures only. Actual pay, duties, schedules and work arrangements are set by each employer partner and must be confirmed directly.';

export const processSteps = [
  {
    number: '01',
    heading: 'Submit your interest',
    body: 'Complete the interest form with your contact details, preferred role categories and current work eligibility.',
  },
  {
    number: '02',
    heading: 'Your information is reviewed',
    body: 'Your submitted details and preferences are reviewed to understand which types of opportunities may be relevant.',
  },
  {
    number: '03',
    heading: 'Relevant information may be shared',
    body: 'When a potentially relevant opportunity is available, you may be contacted with further information about the role, requirements and working arrangement.',
  },
  {
    number: '04',
    heading: 'The hiring organisation confirms next steps',
    body: 'The hiring organisation decides whether to proceed and confirms any interview, assessment, onboarding, compensation or employment arrangements.',
  },
];

export const trustPoints = [
  {
    icon: 'shield-off',
    heading: "AlignNimbly's purpose",
    body: 'AlignNimbly provides general role information and an interest-registration process. It does not guarantee that a specific opportunity will be available.',
  },
  {
    icon: 'credit-card',
    heading: 'Opportunities may change',
    body: 'Role categories shown on the website are examples. Current availability, responsibilities and requirements may differ.',
  },
  {
    icon: 'lock',
    heading: 'Registration is not employment',
    body: 'Submitting your interest does not create an employment relationship or guarantee an interview, placement or job offer.',
  },
  {
    icon: 'file-check',
    heading: 'Hiring decisions',
    body: 'The relevant hiring organisation is responsible for selection decisions and confirming the final role details.',
  },
  {
    icon: 'clipboard-list',
    heading: 'Compensation and arrangements',
    body: 'Pay, working hours, location, contract type and payment schedule must be confirmed before accepting an opportunity.',
  },
  {
    icon: 'eye',
    heading: 'Protect your information',
    body: 'Only provide information required for the registration process. Do not share passwords, banking credentials or unrelated sensitive information.',
  },
];

export const faqs = [
  {
    id: 'faq-1',
    question: 'Is Align Nimbly the employer?',
    answer:
      'Not necessarily. Align Nimbly collects your role interest and, where there\'s a possible fit, may refer your details to relevant employer partners, but employer partners are independent organisations that make their own hiring decisions. Align Nimbly is not automatically the direct employer for every opportunity.',
  },
  {
    id: 'faq-2',
    question: 'Does submitting the form guarantee a job or interview?',
    answer:
      'No. Submitting this form does not guarantee a job offer, interview, employer response or placement. Your profile is collected for possible review and referral only. Outcomes depend on employer partner availability, role requirements and suitability.',
  },
  {
    id: 'faq-3',
    question: 'What role categories can I indicate interest in?',
    answer:
      'You can indicate interest in customer support and service, retail operations and management, hospitality and operations, logistics and supply chain, administration and business support, ecommerce and digital operations, and marketing and communications. Many of these categories include part time and flexible arrangements. Specific duties, pay and schedules are set by each employer partner.',
  },
  {
    id: 'faq-4',
    question: 'Will my details be shared with employers?',
    answer:
      'Only where there\'s a possible fit and only with your consent. Your consent is collected through the form. We won\'t share your information without it or beyond what is described in the Privacy Policy.',
  },
  {
    id: 'faq-5',
    question: 'Can non-Singapore Citizens apply?',
    answer:
      'At this time, Align Nimbly\'s employer partner categories in Singapore are open to Singapore Citizens and Permanent Residents only. Work pass holders, including Employment Pass, S Pass and Work Permit holders, are not currently eligible to register through this platform. This may expand in future. If you are a Singapore Citizen or Permanent Resident, you are welcome to register your interest.',
  },
  {
    id: 'faq-6',
    question: 'How will I be contacted after applying?',
    answer:
      'If there is a possible fit with an available category, we may follow up using the contact details you provided. Not every submission results in follow up. Timelines vary depending on employer partner availability and role requirements.',
  },
  {
    id: 'faq-7',
    question: 'Does Align Nimbly charge applicants?',
    answer:
      'No. This service is free. If anyone asks you to pay in connection with this application, please stop and contact us straight away.',
  },
  {
    id: 'faq-8',
    question: 'Can I choose a specific employer?',
    answer:
      'You\'re indicating interest in role categories rather than specific employers. Employer partners are not named at the application stage. If your details are referred to an employer partner, more information will be shared at that point.',
  },
];

export const finalCta = {
  heading: 'Ready to explore your role options?',
  body: 'Browse the available role categories and register your interest when you are ready.',
  cta: { label: 'Register Your Interest', href: '#application' },
  note: 'Registering does not guarantee a job, interview or employer response.',
};

export const footer = {
  description:
    'AlignNimbly is a role-exploration and interest-registration website for individuals considering part-time and flexible work opportunities in Singapore. Role availability and employment terms depend on the relevant hiring organisation.',
  disclaimer:
    'Align Nimbly is not the direct employer for every opportunity. Employer partners make their own hiring decisions. Submission does not guarantee a job, interview, placement or income.',
  links: [
    { label: 'Role Categories', href: '#role-categories' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Key Information', href: '#trust-safety' },
    { label: 'FAQ', href: '#faq' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ],
};

export const formConfig = {
  heading: 'Register your interest',
  intro:
    'Tell us which role categories interest you and provide the information needed to review your registration.',
  introLine2: 'We may contact you when a potentially relevant opportunity is available.',
  trustNote:
    'Pay, schedules and specific duties are confirmed by the employer partner. We will ask any additional questions if your profile is a possible match.',
  consentText:
    'I consent to my details being used for application review, follow up and sharing with relevant employer partners where appropriate.',
  contactMethodOptions: [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone call' },
    { value: 'sms', label: 'SMS' },
    { value: 'messaging', label: 'Messaging app (fastest response)' },
  ],
  eligibilityOptions: [
    { value: 'citizen', label: 'Singapore Citizen', eligible: true },
    { value: 'pr', label: 'Singapore Permanent Resident', eligible: true },
    { value: 'not-eligible', label: 'Work pass or visa holder (not currently eligible)', eligible: false },
  ],
  eligibilityNote: 'At this time, registration is open to Singapore Citizens and Permanent Residents only. Work pass and visa holders are not currently eligible. This may expand in future.',
};
