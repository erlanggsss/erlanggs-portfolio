// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to update all content on the site.
// ============================================================

// --- Personal Information ---
export const PERSONAL_INFO = {
  name: 'Muhammad Erlangga Prasetya',
  headline: 'I do software development\nand data-related stuff',
  subtext:
    "I've been coding for over 2 years, working on projects from data science to web development, i'm highly interested in exploring **artificial intelligence** and **data analyst**",
  email: 'gaaerlang03@gmail.com',
  github: 'https://github.com/erlanggsss',
  linkedin: 'https://www.linkedin.com/in/muhammaderlanggaprasetya/',
};

// --- About Section ---
export const ABOUT = {
  title: 'Who am i ?',
  subtitle: 'Engineer, Problem Solver, Fast Learner',
  description:
    'I am a final-year Informatics student specializing in Artificial Intelligence and Cloud Computing, with a focus on developing data-driven solutions, robust APIs, and scalable system architectures.',
  techStack: [
    'Python',
    'NextJS',
    'React',
    'GCP',
    'AWS',
    'Docker',
    'Supabase',
    'MySQL',
    'Postgres',
    'Tableau',
    'PowerBI',
    'Tensorflow',
    'Git',
    'Scikit-learn',
  ],
};

// --- Experience Section ---
// Add, edit, or remove entries here. They render in order.
export const EXPERIENCES = [
  {
    role: 'Cloud Computing Cohort',
    company: 'Bangkit Academy 2023',
    location: 'Jakarta, ID',
    period: "Aug '23–Jan '24",
    description:
      'Focusing on Google Cloud Architecture and Infrastructure, also create an mobile apps from Indonesia real problems.',
  },
  {
    role: 'Machine Learning Cohort',
    company: 'Bangkit Academy 2024',
    location: 'Jakarta, ID',
    period: "Aug '24–Jan '25",
    description:
      'Focusing on Google Cloud Architecture and Infrastructure, also create an mobile apps from Indonesia real problems.',
  },
  {
    role: 'Cloud Computing Cohort',
    company: 'AWS re/Start Batch 12',
    location: 'Jakarta, ID',
    period: "Aug '23–Jan '24",
    description:
      'Focusing on Google Cloud Architecture and Infrastructure, also create an mobile apps from Indonesia real problems.',
  },
];

// --- Certificates Section ---
// Add, edit, or remove entries here.
export const CERTIFICATES = [
  {
    text: 'Graduated with Distinction (Top 10%) from the',
    highlight: 'Bangkit Cloud Computing Cohort',
  },
  {
    text: 'Top 50',
    highlight: 'Meta Llama Hackathon 2025',
  },
  {
    text: 'Graduated',
    highlight: 'Bangkit Machine Learning Cohort',
  },
  {
    text: 'Graduated',
    highlight: 'AWS re/Start Batch 12',
  },
];

// --- Projects Section ---
// Add, edit, or remove entries here. They render in order with auto-numbering.
export const PROJECTS = [
  {
    title: 'UrFinance',
    description:
      'This Project explores the microservices architecture for Account, Card, and Loan services. It is part of self-paced learning focused on understanding microservices principles.',
    stack: ['Python', 'Telegram', 'LLM', 'GraphQL'],
    link: '#',
  },
  {
    title: 'UrFinance',
    description:
      'This Project explores the microservices architecture for Account, Card, and Loan services. It is part of self-paced learning focused on understanding microservices principles.',
    stack: ['Python', 'Telegram', 'LLM', 'GraphQL'],
    link: '#',
  },
];

// --- Site Information ---
export const COPYRIGHT_YEAR = new Date().getFullYear();
export const SITE_NAME = 'Erlanggs';
export const RESUME_PATH = '/cv-erlangga.pdf';

// --- Contact Form ---
export const FORM_VALIDATION = {
  minNameLength: 2,
  minMessageLength: 10,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// --- Animation Delays (seconds) ---
export const ANIMATION_DELAYS = {
  short: 0.3,
  medium: 0.5,
  long: 0.8,
  veryLong: 1.0,
};
