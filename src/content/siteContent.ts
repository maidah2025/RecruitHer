/**
 * Centralized official content, brand palette, and contact/conversion configuration for RecruitHer.
 * Populated verbatim from the client's final outline ("Recruit Her - Website outline.pdf").
 */

export const BRAND_COLORS = {
  primaryPink: '#FF2C5B',
  primaryPurple: '#672CFF',
  black: '#000000',
  darkPink: '#A61F3A',
  darkPurple: '#2F198C',
  darkGray: '#3D3D4A',
  lightPink: '#FFABBD',
  lightPurple: '#C2ABFF',
  gray: '#8B8B94',
  palePink: '#FFEEF2',
  palePurple: '#EDE6FF',
  paleGray: '#EFEFF1',
  white: '#FFFFFF',
} as const;

export const CONTACT_CONFIG = {
  email: 'hello@recruither.co',
  displayPhone: '(505) 359-4039',
  internationalPhone: '+1 (505) 359-4039',
  emailHref: 'mailto:hello@recruither.co',
  phoneHref: 'tel:+15053594039',
  addressLine1: '1209 Mountain Road Pl NE, Ste N',
  addressLine2: 'Albuquerque, NM 87110',
  calendlyUrl: 'https://calendly.com/maidah-recruither/discovery-call',
  /**
   * Verified official company LinkedIn URL for Recruit Her Global LLC.
   */
  linkedinUrl: 'https://www.linkedin.com/company/recruitherglobal/',
};

export const BOOKING_HIRING_HREF = CONTACT_CONFIG.calendlyUrl;

export interface TrustedClientItem {
  name: string;
  url: string;
  /** Local path to verified official client logo asset */
  logoSrc: string;
  /** Optional utility classes for optimal contrast and sizing on white logo bar */
  imgClassName?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconType: 'scale' | 'calculator' | 'building' | 'briefcase' | 'layers';
  bgImage?: string;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  iconType: 'scale' | 'calculator' | 'users' | 'calendar' | 'headset';
  iconAccent: 'purple' | 'pink';
  bgImage?: string;
}

export interface AssessmentAreaItem {
  id: string;
  title: string;
  iconType: 'languages' | 'puzzle' | 'clock' | 'monitor';
  accent: 'purple' | 'pink';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  roleCompany: string;
  location: string;
  accent: 'purple' | 'pink';
}

export const SITE_CONTENT = {
  header: {
    navItems: [
      { label: 'Who We Help', href: '#who-we-help' },
      { label: 'How We Help', href: '#how-we-help' },
      { label: 'How It Works', href: '#our-process' },
      { label: 'Our Mission', href: '#our-mission' },
      { label: 'Contact Us', href: '#contact' },
    ],
    ctaLabel: 'Get Started',
  },
  hero: {
    headlineLine1: 'Add Talent.',
    headlineLine2Prefix: 'Not ',
    headlineLine2Italic: 'Overhead.',
    subheading: 'Dedicated remote staff from $8/hour.',
    description:
      'Experienced, vetted professionals who integrate with your team, without the cost and complexity of local hiring.',
    benefits: [
      'Month-to-month contracts',
      'HR and payroll managed',
      'Lifetime replacement guarantee',
    ],
    primaryCta: 'Find Your Talent',
    secondaryCta: 'Email us',
    floatingCards: {
      topCard: {
        title: 'Customer Support',
        subtitle: 'Client support specialists',
      },
      middleBadge: {
        eyebrow: 'REMOTE',
        title: 'From $8/hour.',
      },
      bottomCard: {
        title: 'Legal Support',
        subtitle: 'Assistants, paralegals & intake',
      },
    },
  },
  serviceStrip: [
    'Legal Support',
    'Finance & Accounting',
    'Human Resources',
    'Administration',
    'Customer Support',
  ],
  trustedBy: {
    label: 'Trusted by',
    clients: [
      {
        name: 'Marani Law',
        url: 'https://maranilaw.com/',
        logoSrc: '/assets/logos/marani-law.png',
        imgClassName: 'max-h-7 sm:max-h-8 w-auto object-contain brightness-0',
      },
      {
        name: 'Savur Law',
        url: 'https://www.savurlaw.com/',
        logoSrc: '/assets/logos/savur-law.png',
        imgClassName: 'max-h-9 sm:max-h-10 w-auto object-contain rounded-sm',
      },
      {
        name: 'Privacy Pro Academy',
        url: 'https://privacypros.academy/',
        logoSrc: '/assets/logos/privacy-pro-academy.webp',
        imgClassName: 'max-h-7 sm:max-h-8 w-auto object-contain invert hue-rotate-180',
      },
      {
        name: 'Wadr Law',
        url: 'https://www.wadrlaw.com/',
        logoSrc: '/assets/logos/wadr-law.webp',
        imgClassName: 'max-h-6 sm:max-h-7 w-auto object-contain',
      },
      {
        name: 'Sunrise Erectors',
        url: 'https://sunriseerectors.com/',
        logoSrc: '/assets/logos/sunrise-erectors.jpg',
        imgClassName: 'max-h-8 sm:max-h-9 w-auto object-contain',
      },
    ] as TrustedClientItem[],
  },
  whoWeHelp: {
    eyebrow: 'WHO WE HELP',
    headingPrefix: 'More time for the work that ',
    headingItalic: 'matters',
    headingSuffix: '.',
    paragraph:
      'We help service based businesses, agencies, and independent professionals delegate time-consuming tasks to dedicated remote staff.',
    industriesLabel: 'Industries we support:',
    industries: [
      {
        id: 'law-firms',
        name: 'Law firms',
        iconType: 'scale',
        bgImage: '/assets/industries/law-firms.webp',
      },
      {
        id: 'accounting-finance',
        name: 'Accounting and finance firms',
        iconType: 'calculator',
        bgImage: '/assets/industries/accounting-finance.webp',
      },
      {
        id: 'real-estate',
        name: 'Real estate businesses',
        iconType: 'building',
        bgImage: '/assets/industries/real-estate.webp',
      },
      {
        id: 'consulting-firms',
        name: 'Consulting firms',
        iconType: 'briefcase',
        bgImage: '/assets/industries/consulting-firms.webp',
      },
      {
        id: 'agencies-service',
        name: 'Agencies and other service-based businesses',
        iconType: 'layers',
        bgImage: '/assets/industries/agencies-service.webp',
      },
    ] as IndustryItem[],
  },
  howWeHelp: {
    eyebrow: 'HOW WE HELP',
    heading: 'The right people. For the work you need done.',
    paragraph:
      'We source dedicated remote professionals to support your team across essential business functions.',
    services: [
      {
        id: 'legal-support',
        title: 'Legal Support',
        description:
          'Legal assistants, paralegals, intake specialists, and case support staff.',
        iconType: 'scale',
        iconAccent: 'purple',
        bgImage: '/assets/services/legal-support.webp',
      },
      {
        id: 'finance-accounting',
        title: 'Finance & Accounting',
        description:
          'Bookkeeping, accounting, payroll, and billing support.',
        iconType: 'calculator',
        iconAccent: 'pink',
        bgImage: '/assets/services/finance-accounting.webp',
      },
      {
        id: 'human-resources',
        title: 'Human Resources',
        description:
          'HR coordinators, HR generalists, and recruiters.',
        iconType: 'users',
        iconAccent: 'purple',
        bgImage: '/assets/services/human-resources.webp',
      },
      {
        id: 'administration',
        title: 'Administration',
        description:
          'Virtual assistants, executive assistants, and administrative support.',
        iconType: 'calendar',
        iconAccent: 'pink',
        bgImage: '/assets/services/administration.webp',
      },
      {
        id: 'customer-support',
        title: 'Customer Support',
        description:
          'Customer service representatives and client support specialists.',
        iconType: 'headset',
        iconAccent: 'purple',
        bgImage: '/assets/services/customer-support.webp',
      },
    ] as ServiceCardItem[],
    closingText:
      "Need a role that isn't listed? We can source talent around your specific requirements.",
    closingCtaLabel: 'Find Your Talent',
  },
  betterTalentPromise: {
    eyebrow: 'BETTER TALENT PROMISE',
    headingLine1: 'Not just qualified on paper.',
    headingLine2Italic: 'Tested',
    headingLine2Suffix: ' for the job.',
    paragraph:
      "We don't believe in one size fits all hiring. We source candidates based on your needs, role requirements, and team culture.",
    introduction:
      'Every candidate completes proctored assessments covering',
    assessments: [
      {
        id: 'english-proficiency',
        title: 'English proficiency',
        iconType: 'languages',
        accent: 'purple',
      },
      {
        id: 'problem-solving',
        title: 'Problem solving',
        iconType: 'puzzle',
        accent: 'pink',
      },
      {
        id: 'time-management',
        title: 'Time management',
        iconType: 'clock',
        accent: 'purple',
      },
      {
        id: 'computer-literacy',
        title: 'Computer literacy',
        iconType: 'monitor',
        accent: 'pink',
      },
    ] as AssessmentAreaItem[],
    closingLine1: 'Only candidates who meet our standards move forward.',
    closingLine2:
      'The result: Skilled professionals selected for your business, not just another resume in your inbox.',
    ctaLabel: 'Find Your Talent',
  },
  lovedByFounders: {
    eyebrow: 'LOVED BY FOUNDERS',
    heading: 'Loved by founders.',
    testimonials: [
      {
        id: 'gandhar-savur',
        quote:
          'Working with Recruit Her has been a great experience. Maidah really listened to what we were looking for in a new hire and took all of our particular requirements into consideration when sourcing talent. She found several good candidates and helped us choose the best fit for our firm. We would recommend working with Recruit Her for other hiring needs!',
        name: 'Gandhar Savur',
        roleCompany: 'Founder, Savur Law P.C.',
        location: 'New York, USA',
        accent: 'purple',
      },
      {
        id: 'katie-feltham',
        quote:
          'Our legal assistant is very talented and handles all our immigration cases. The process was efficient and straightforward, and Maidah was always available for any questions we had',
        name: 'Katie Feltham',
        roleCompany: 'Lead attorney, Feltham Law',
        location: 'Vancouver, Canada',
        accent: 'pink',
      },
      {
        id: 'jamal-ahmed',
        quote:
          'Thanks to Recruit Her, we found our executive assistant from Pakistan. She has been with us for over a year now and has proven to be a great addition to the team.',
        name: 'Jamal Ahmed',
        roleCompany: 'Founder, Kazient',
        location: 'London, UK',
        accent: 'purple',
      },
    ] as TestimonialItem[],
  },
  ourMission: {
    eyebrow: 'OUR MISSION',
    headingLine1: 'Talent has no boundaries.',
    headingLine2Italic: 'Opportunity',
    headingLine2Suffix: " shouldn't either.",
    paragraph1:
      'For many women in Pakistan, access to meaningful work can be limited by commuting challenges, workplace safety, and unequal pay. Recruit Her exists to change that.',
    paragraph2:
      'As Pakistan’s first and only women-first remote staffing agency, we connect talented women with international organizations, opening doors to meaningful work, financial independence, and a future they can shape for themselves.',
  },
  ourProcess: {
    eyebrow: 'HOW IT WORKS',
    headingLine1Black: 'Your Next ',
    headingLine1Pink: 'Great Hire',
    headingLine2Purple: 'Starts Here.',
    rightSubtitleLine1: 'Three steps. No upfront cost. No guesswork.',
    rightSubtitleLine2: 'Fast. Risk free. Built for agencies.',
    steps: [
      {
        number: '01',
        title: 'Book a Free Call',
        description: 'Tell us the role. We scope your brief in 30 minutes.',
        accent: 'pink' as const,
      },
      {
        number: '02',
        title: 'Meet Your Shortlist',
        description: 'Interview 3–4 vetted specialists matched to your agency.',
        accent: 'purple' as const,
      },
      {
        number: '03',
        title: 'Hire and Grow',
        description: 'Pay only when you hire. We handle everything else.',
        accent: 'pink' as const,
      },
    ],
    primaryCtaLabel: 'Start Hiring Today',
    secondaryCtaLabel: 'Explore Our Services',
  },
  theInvestment: {
    eyebrow: 'THE INVESTMENT',
    headingPrefix: 'Expert support. ',
    headingItalic: 'Without',
    headingSuffix: ' the overhead.',
    recruitHerSide: {
      title: 'Recruit Her',
      priceBadge: 'From $8/hour all inclusive',
      points: [
        'Trained and vetted candidates',
        'Hired in 2-3 weeks',
        'Flexible, month-to-month contracts',
        'Lifetime staff replacement guarantee',
        'No upfront placement costs',
        'HR, payroll, and compliance managed',
        'Coverage aligned with your business hours and time zone',
        'Strict confidentiality agreements (NDAs)',
      ],
    },
    traditionalSide: {
      title: 'Traditional Local Hiring',
      points: [
        'Weeks or months spent recruiting',
        'Higher hiring and employment costs',
        'Payroll, taxes, benefits, and HR administration to manage',
        'Additional time and resources required for onboarding and training',
      ],
    },
    closingHighlight:
      'The difference: Save upwards of $50k annually on salaries and employee benefits.',
    ctaLabel: "Let's Find Your Next Hire",
  },
  footer: {
    description:
      'Dedicated remote staff from $8/hour. Connecting international organizations with experienced, vetted professionals.',
    quickLinks: [
      { label: 'Who We Help', href: '#who-we-help' },
      { label: 'How We Help', href: '#how-we-help' },
      { label: 'Our Mission', href: '#our-mission' },
      { label: 'Hiring Process', href: '#our-process' },
      { label: 'The Investment', href: '#the-investment' },
      { label: 'Contact Us', href: '#contact' },
    ],
    getCopyright: () => `© ${new Date().getFullYear()} RecruitHer. All rights reserved.`,
  },
};
