/* ============================================================
   ROLE BROWSE SINGAPORE — Content Data File
   All editable page content lives here.
   Update this file to change copy, categories, FAQs, etc.
   ============================================================ */

export const siteConfig = {
  brandName: 'Role Browse',
  tagline: 'Employer-partner opportunity registration',
  market: 'Singapore',
  language: 'en',
  contactEmail: 'hello@rolebrowse.com', // TODO: replace with actual contact email before launch
  privacyPolicyUrl: '/privacy-policy',
  termsOfUseUrl: '/terms-of-use',
  canonicalUrl: 'https://www.rolebrowse.com/rolebrowse-singapore-employer-partner-role-categories', // TODO: replace with live URL
};

export const seoMeta = {
  title: 'Role Browse Singapore | Part-Time & Flexible Role Categories',
  description:
    'Looking for part time or flexible work in Singapore? Share a few basic details and we\'ll review your profile and follow up if there\'s a possible fit. No job or interview is guaranteed.',
  ogTitle: 'Role Browse Singapore | Part-Time & Flexible Role Categories',
  ogDescription:
    'Looking for part time or flexible work in Singapore? Share your basic details. We will review your profile and be in touch if there is a fit.',
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
  eyebrow: 'Part time and flexible role registration, Singapore',
  heading: 'Looking for part time or flexible work in Singapore?',
  subheading:
    'Share a few basic details about the types of roles you are interested in. We will review your profile and be in touch if there is a possible fit.',
  primaryCta: { label: 'Register Your Interest', href: '#application' },
  secondaryCta: { label: 'See Role Categories', href: '#role-categories' },
  trustNote:
    'Registering your interest does not guarantee a job, interview or employer response.',
};

export const intro = {
  eyebrow: 'About Us',
  heading: 'Work that fits around your life',
  lead:
    'Role Browse focuses on part time, shift based and flexible role categories. Register your basic details once. We will do the matching and follow up if there is a possible fit.',
  points: [
    {
      heading: 'Work that fits your schedule',
      body: 'Whether you are looking for weekends, evenings, short shifts or a regular part time arrangement, there are categories here that may suit you.',
    },
    {
      heading: 'We review and follow up where there\'s a fit',
      body: 'Your details are reviewed against available employer partner categories. Where there\'s a possible fit with your availability and role interests, we\'ll be in touch.',
    },
    {
      heading: 'Employer partners decide the details',
      body: 'Each employer partner sets their own requirements, pay, shift arrangements and timelines. They decide who to follow up with. Role Browse is not the direct employer.',
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
  subheading: 'Pick the category that best describes the type of role you are looking for.',
};

export const categoryNote =
  'Hourly rates shown are approximate market reference figures only. Actual pay, duties, schedules and work arrangements are set by each employer partner and must be confirmed directly.';

export const processSteps = [
  {
    number: '01',
    heading: 'Fill in a short form',
    body: 'Share your contact details and select the role types you are interested in. The form takes less than two minutes to complete.',
  },
  {
    number: '02',
    heading: 'We review your profile',
    body: 'Role Browse checks your profile against available employer partner categories. Not every profile will match an available category at the time of review.',
  },
  {
    number: '03',
    heading: 'We pass it to a relevant employer partner',
    body: 'If there\'s a possible fit, your details may be reviewed by a relevant employer partner. They decide independently whether to follow up.',
  },
  {
    number: '04',
    heading: 'You\'ll hear back if there\'s a fit',
    body: 'If an employer partner is interested, we\'ll be in touch. Timelines vary depending on role availability, requirements and suitability.',
  },
];

export const trustPoints = [
  {
    icon: 'shield-off',
    heading: 'This is a registration of interest only',
    body: 'Submitting this form does not guarantee a job, interview or employer response. It simply registers your interest for possible review.',
  },
  {
    icon: 'credit-card',
    heading: 'No fee to register',
    body: 'There is no charge to submit this form. If anyone asks you to pay in connection with this registration, do not proceed.',
  },
  {
    icon: 'lock',
    heading: 'We do not ask for financial information',
    body: 'We do not collect bank account details, payment details or financial information at any stage of this process.',
  },
  {
    icon: 'file-check',
    heading: 'Your details are used as described',
    body: 'Your information is used for profile review and possible follow up where there is a fit. It will not be used beyond what you have consented to.',
  },
  {
    icon: 'clipboard-list',
    heading: 'Only role relevant questions',
    body: 'The form asks for basic role relevant information only. We do not ask for NRIC, bank details or other unnecessary personal information.',
  },
  {
    icon: 'eye',
    heading: 'The process is described clearly on this page',
    body: 'What happens after you register is explained in the steps above. There are no additional steps or obligations not described here.',
  },
];

export const faqs = [
  {
    id: 'faq-1',
    question: 'Is Role Browse the employer?',
    answer:
      'Not necessarily. Role Browse collects your role interest and, where there\'s a possible fit, may refer your details to relevant employer partners, but employer partners are independent organisations that make their own hiring decisions. Role Browse is not automatically the direct employer for every opportunity.',
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
      'At this time, Role Browse\'s employer partner categories in Singapore are open to Singapore Citizens and Permanent Residents only. Work pass holders, including Employment Pass, S Pass and Work Permit holders, are not currently eligible to register through this platform. This may expand in future. If you are a Singapore Citizen or Permanent Resident, you are welcome to register your interest.',
  },
  {
    id: 'faq-6',
    question: 'How will I be contacted after applying?',
    answer:
      'If there is a possible fit with an available category, we will follow up using the contact details you provided. Not every submission results in follow up. Timelines vary depending on employer partner availability and role requirements.',
  },
  {
    id: 'faq-7',
    question: 'Does Role Browse charge applicants?',
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
  heading: 'Looking for part time or flexible work?',
  body: 'Fill in a short form and we will follow up if there is a possible fit.',
  cta: { label: 'Register Your Interest', href: '#application' },
  note: 'Registering does not guarantee a job, interview or employer response.',
};

export const footer = {
  description:
    'Role Browse focuses on part time, flexible and shift based role categories in Singapore. We connect candidate profiles with relevant employer partners. No job or interview is guaranteed.',
  disclaimer:
    'Role Browse is not the direct employer for every opportunity. Employer partners make their own hiring decisions. Submission does not guarantee a job, interview, placement or income.',
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
    'Share your contact details and the types of roles you are interested in.',
  introLine2: 'We will be in touch if there is a possible fit.',
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
