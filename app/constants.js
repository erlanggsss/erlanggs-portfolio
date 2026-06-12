// ============================================================
// PORTFOLIO CONFIGURATION
// Edit this file to update all content on the site.
// ============================================================

// --- Personal Information ---
export const PERSONAL_INFO = {
  name: "Muhammad Erlangga Prasetya",
  headline: "I do Artificial Intelligence\nand data-related stuff",
  subtext:
    "I've been coding for over 2 years, working on projects from data science to web development, i'm highly interested in exploring **artificial intelligence** and **data analyst**",
  email: "gaaerlang03@gmail.com",
  github: "https://github.com/erlanggsss",
  linkedin: "https://www.linkedin.com/in/muhammaderlanggaprasetya/",
};

// --- About Section ---
export const ABOUT = {
  title: "Who am i ?",
  subtitle: "Engineer, Problem Solver, Fast Learner",
  description:
    "I am a final-year Informatics student specializing in Artificial Intelligence and Cloud Computing, with a focus on developing data-driven solutions, robust APIs, and scalable system architectures.",
  techStack: [
    "Python",
    "NextJS",
    "React",
    "GCP",
    "AWS",
    "Docker",
    "Supabase",
    "MySQL",
    "Postgres",
    "Tableau",
    "PowerBI",
    "Tensorflow",
    "Git",
    "Scikit-learn",
  ],
};

// --- Experience Section ---
// Add, edit, or remove entries here. They render in order.
export const EXPERIENCES = [
  {
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy 2023",
    location: "Jakarta, ID",
    period: "Aug '23–Jan '24",
    description:
      "Focusing on Google Cloud Architecture and Infrastructure, also create an mobile apps from Indonesia real problems.",
  },
  {
    role: "Machine Learning Cohort",
    company: "Bangkit Academy 2024",
    location: "Jakarta, ID",
    period: "Aug '24–Jan '25",
    description:
      "Developed and optimized machine learning models using Python, TensorFlow, and Scikit-learn, and collaborated to integrate AI-driven solutions.",
  },
  {
    role: "Google Cloud Arcade Fasilitator",
    company: "Google Cloud",
    location: "Remote",
    period: "Jul '25–Sep '25",
    description:
      "Mentored and guided participants through hands-on Google Cloud Arcade labs.",
  },
  {
    role: "Cloud Computing Cohort",
    company: "AWS re/Start Batch 13",
    location: "Remote",
    period: "Sep '25–Des '25",
    description:
      "Learn cloud computing fundamentals and best practices on AWS platform.",
  },
];

// --- Certificates Section ---
// Add, edit, or remove entries here.
export const CERTIFICATES = [
  {
    text: "Graduated with Distinction (Top 10%) from 4000+ cohort at",
    highlight: "Bangkit Cloud Computing & Machine Learning",
  },
  // {
  //   text: "Graduated with Distinction (Top 10%) from the",
  //   highlight: "Bangkit Machine Learning Cohort",
  // },
  {
    text: "Top 25",
    highlight: "Meta Llama Hackathon 2025",
  },
  {
    text: "Graduated",
    highlight: "AWS re/Start Batch 12",
  },
];

// --- Projects Section ---
// Add, edit, or remove entries here. They render in order with auto-numbering.
export const PROJECTS = [
  {
    title: "UrFinance",
    description:
      "This Project explores the microservices architecture for Account, Card, and Loan services. It is part of self-paced learning focused on understanding microservices principles.",
    stack: ["Python", "Telegram", "LLM", "GraphQL"],
    link: "https://github.com/erlanggsss/UrFinance",
  },
  {
    title: "Diabetes Classification",
    description:
      "The project aims to optimize, evaluate and compare different parameter tuning methods, such as Particle Swarm Optimization (PSO), to optimize the predictive performance and convergence of the SVM classification models.",
    stack: [
      "Python",
      "Scikit-learn",
      "SVM",
      "Hyperparameter Tuning",
      "Diabetes",
    ],
    link: "https://github.com/erlanggsss/diabetes-Classfication",
  },
];

// --- Site Information ---
export const COPYRIGHT_YEAR = new Date().getFullYear();
export const SITE_NAME = "Erlanggs";
export const RESUME_PATH = "/cv-erlangga.pdf";

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
