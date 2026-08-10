// ============================================================
// MontrixTech — Central company data
// Single source of truth for contact info, offices, services, etc.
// ============================================================

export const COMPANY = {
  legalName: "MontrixTech Private Limited",
  shortName: "MontrixTech",
  tagline: "Software that moves your business forward.",
  description:
"We design and develop websites, web applications, mobile apps, cloud solutions, and custom software that help businesses grow through innovative digital solutions.",
  email: "contact@montrixtech.in",
  phones: ["+91 90351 96480", "+91 77957 95859"],
  whatsapp: "https://wa.me/919035196480",
  domain: "montrixtech.in",
  established: "2024",
} as const;

export type Office = {
  label: string;
  lines: string[];
  isVisiting: boolean;
  mapsEmbedSrc?: string;
  mapsLink?: string;
};

export const OFFICES: Office[] = [
  {
    label: "Registered Office",
    lines: [
      "MONTRIXTECH PRIVATE LIMITED",
      "No 12, 1st Main, 9th Cross",
      "Papanna Layout, Maruthi Nagar",
      "Yelahanka, Bengaluru — 560064",
    ],
    isVisiting: false,
    mapsLink: "https://maps.app.goo.gl/FC5Z3RgsYyLTznpL7",
  },
  {
    label: "Working Office",
    lines: [
      "2nd Floor, 8th Cross",
      "New BEL Road",
      "Bengaluru, Karnataka — 560054",
    ],
    isVisiting: true,
    mapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.657!2d77.5666!3d13.0319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b5e7e7e7e7%3A0x0!2sNew%20BEL%20Road%2C%20Bengaluru%2C%20Karnataka%20560054!5e0!3m2!1sen!2sin!4v1700000000000",
    mapsLink: "https://maps.google.com/?q=New+BEL+Road+Bengaluru+560054",
  },
];

export const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/montrixtech_?utm_source=qr&igsh=NWw5a2Y1bTBiYmdt",
    icon: "instagram" as const,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18rLPk6iB6/",
    icon: "facebook" as const,
  },
  {
    name: "X",
    href: "https://x.com/MontrixTech",
    icon: "x" as const,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919035196480",
    icon: "whatsapp" as const,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCQBF4NK6hXWmFnpWNpeV0Gw",
    icon: "youtube" as const,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/montrixtech-private-limited",
    icon: "linkedin" as const,
  },
] as const;

export type ServiceSlug =
  | "web-development"
  | "mobile-apps"
  | "custom-software"
  | "cloud-solutions"
  | "ai-solutions"
  | "ui-ux-design";

// AI service icon is now "brain" (a professional React Icon — BrainCircuit)
// instead of the previous AI-looking "sparkles".
export type Service = {
  slug: ServiceSlug;
  title: string;

  description: string;

  features: string[];

  image: string;

  icon:
    | "code"
    | "mobile"
    | "software"
    | "cloud"
    | "ai"
    | "design";

  emphasis?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Corporate sites, e-commerce, custom platforms.",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "E-Commerce Solutions",
      "SEO Optimization",
      "Responsive Design",
      "Performance Tuning",
    ],
image: "/images/service-images/webdevelopment.png",
icon: "code",   
 emphasis: true,
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    description: "Android, iOS, and Flutter — built to ship.",
    features: [
      "Android Apps",
      "iOS Apps",
      "Flutter Development",
      "Firebase Integration",
      "App Maintenance",
      "App Store Deployment",
    ],
image: "/images/service-images/moblieapp.png",
icon: "mobile",  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "AWS, CI/CD, and scalable infrastructure.",
    features: [
      "AWS Deployment",
      "Cloud Hosting",
      "CI/CD Pipelines",
      "Server Management",
      "Scalable Infrastructure",
      "Cloud Cost Optimization",
    ],
image: "/images/service-images/cloud.png",
icon: "cloud",  },
  {
    slug: "custom-software",
    title: "Custom Software",
    description: "ERP, CRM, automation, and dashboards.",
    features: [
      "ERP Systems",
      "CRM Systems",
      "Business Automation",
      "Inventory Management",
      "Custom Dashboards",
      "Third-Party Integrations",
    ],
image: "/images/service-images/software.png",
icon: "software",  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "Automation, business systems, and digital transformation.",   
    features: [
      "Business Automation",
      "Workflow Optimization",
      "Digital Transformation",
  "ERP Integration",
  "CRM Integration",
  "Custom Business Solutions",
],
image: "/images/service-images/ai.png",
icon: "software",    emphasis: true,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Wireframes, prototypes, and research.",
    features: [
      "Wireframing",
      "Web Design",
      "Mobile Design",
      "Prototyping",
      "User Experience Research",
      "Design Systems",
    ],
image: "/images/service-images/uiux.png",
icon: "design",  },
];

// ------------------------------------------------------------
// Workshops data — powers the new /workshops page
// ------------------------------------------------------------

export type WorkshopCategory = {
  slug: string;
  audience: string;
  title: string;
  tagline: string;
  topics: string[];
  accent: "teal" | "navy" | "gold" | "coral";
};

export const WORKSHOP_CATEGORIES: WorkshopCategory[] = [
  {
    slug: "class-1-2",
    audience: "Class 1–2",
    title: "Digital Explorers",
    tagline: "A gentle first encounter with computers, logic, and creativity.",
    topics: [
      "Unplugged Coding",
      "ScratchJr",
      "Logic Games",
      "Digital Creativity",
      "AI Awareness",
    ],
    accent: "teal",
  },
  {
    slug: "class-3-5",
    audience: "Class 3–5",
    title: "Young Coders",
    tagline: "Block-based coding, robotics, and storytelling through animation.",
    topics: [
      "Scratch",
      "Robotics",
      "Animation",
      "Game Design",
      "Storytelling",
    ],
    accent: "navy",
  },
  {
    slug: "class-6-8",
    audience: "Class 6–8",
    title: "Junior Developers",
    tagline: "First steps into real programming, robotics, and the modern web.",
    topics: [
      "Python",
      "Robotics",
      "Web Development",
      "AI Basics",
      "Problem Solving",
    ],
    accent: "gold",
  },
  {
    slug: "class-9-10",
    audience: "Class 9–10",
    title: "Future Innovators",
    tagline: "Build apps, explore IoT, and understand AI at a deeper level.",
    topics: [
      "Python",
      "Web Development",
      "AI",
      "IoT",
      "App Development",
    ],
    accent: "coral",
  },
  {
    slug: "puc-11-12",
    audience: "PUC (11–12)",
    title: "Career Launchpad",
    tagline: "Data science, ML foundations, and a portfolio that opens doors.",
    topics: [
      "Data Science",
      "Machine Learning",
      "Portfolio Building",
      "Career Guidance",
      "Placement Skills",
    ],
    accent: "teal",
  },
  {
    slug: "degree-engineering",
    audience: "Degree & Engineering",
    title: "Industry Ready Programs",
    tagline: "Full stack, cloud, mobile, and DevOps — the skills the market hires for.",
    topics: [
      "Full Stack Development",
      "AI",
      "Cloud Computing",
      "Flutter",
      "AWS",
      "Git & GitHub",
    ],
    accent: "navy",
  },
];

export type WorkshopTech = {
  name: string;
  icon:
    | "html5"
    | "css3"
    | "javascript"
    | "react"
    | "nodedotjs"
    | "python"
    | "java"
    | "flutter"
    | "firebase"
    | "git"
    | "github"
    | "mysql"
    | "mongodb"
    | "aws"
    | "tensorflow";
};

export const WORKSHOP_TECHS: WorkshopTech[] = [
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodedotjs" },

  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "Flutter", icon: "flutter" },
  { name: "Firebase", icon: "firebase" },
  { name: "Git", icon: "git" },

  { name: "GitHub", icon: "github" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "AWS", icon: "aws" },
  { name: "TensorFlow", icon: "tensorflow" },
];

export type WorkshopFeature = {
  title: string;
  body: string;
  icon: "hands-on" | "projects" | "mentors" | "certificate" | "team" | "practical" | "support" | "career";
};

export const WORKSHOP_FEATURES: WorkshopFeature[] = [
  { title: "Hands-on Learning", body: "Every concept is reinforced by building, not just listening.", icon: "hands-on" },
  { title: "Mini Projects", body: "Ship small but real projects across every module.", icon: "projects" },
  { title: "Industry Mentors", body: "Sessions led by engineers actively shipping production software.", icon: "mentors" },
  { title: "Certificates", body: "Recognised completion certificate for every participant.", icon: "certificate" },
  { title: "Team Activities", body: "Pair and group work that mirrors how real teams build.", icon: "team" },
  { title: "Practical Sessions", body: "Lab-first format — 70% practice, 30% theory.", icon: "practical" },
  { title: "Post Workshop Support", body: "Mentor access and resources for 30 days after the program.", icon: "support" },
  { title: "Career Guidance", body: "Direction on next steps, specialisations, and portfolios.", icon: "career" },
];

export type WorkshopStep = {
  n: string;
  title: string;
  body: string;
};

export const WORKSHOP_PROCESS: WorkshopStep[] = [
  { n: "01", title: "Book Workshop", body: "Reach out via the form or call — we align on dates and audience." },
  { n: "02", title: "Requirement Discussion", body: "We map outcomes, age group, prior exposure, and lab setup." },
  { n: "03", title: "Planning", body: "A custom syllabus, project list, and resource kit is shared for sign-off." },
  { n: "04", title: "Workshop Delivery", body: "Mentors run the sessions on-site or online with live coding." },
  { n: "05", title: "Project Building", body: "Participants apply what they learnt on a real, reviewable project." },
  { n: "06", title: "Certification", body: "Successful participants receive a verified completion certificate." },
  { n: "07", title: "Feedback", body: "We share a feedback report and roadmap for continued learning." },
];

export type WorkshopFaq = { q: string; a: string };

export const WORKSHOP_FAQS: WorkshopFaq[] = [
  {
    q: "Who can attend MontrixTech workshops?",
    a: "Any school, college, or institution. We run dedicated tracks from Class 1 all the way through engineering and degree programs, so the content is calibrated to the audience's age and prior exposure.",
  },
  {
    q: "Are workshops on-site or online?",
    a: "Both. We prefer on-site for the hands-on lab feel, but we run fully online and hybrid formats when needed — the syllabus and project work stay the same.",
  },
  {
    q: "What is the typical duration?",
    a: "Most workshops run between 2 to 5 days, with optional weekend formats and semester-long programs for deeper tracks like Full Stack or AI.",
  },
  {
    q: "Do participants get a certificate?",
    a: "Yes. Every participant who completes the workshop and the project work receives a verified MontrixTech completion certificate.",
  },
  {
    q: "What infrastructure do we need to provide?",
    a: "A computer lab with one device per participant (or pair) and a stable internet connection. We bring the syllabus, mentors, and project kits.",
  },
  {
    q: "Can the syllabus be customised?",
    a: "Absolutely. Every workshop is tailored to the institution's goals — we share a default syllabus and refine it together during requirement discussion.",
  },
];

// ------------------------------------------------------------
// Careers data
// ------------------------------------------------------------

export type WorkMode = "Hybrid" | "On-site" | "Remote";

export type JobOpening = {
  ref: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  mode: WorkMode;
};

export const JOB_OPENINGS: JobOpening[] = [
  {
    ref: "MTX-AND-001",
    title: "Application Developer Intern",
    description: "Build and ship native Android features alongside our mobile team.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "Hybrid",
  },

  {
    ref: "MTX-FED-003",
    title: "Frontend Developer Intern",
    description: "Craft polished, responsive UI using React and Next.js.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "Hybrid",
  },
  {
    ref: "MTX-BED-004",
    title: "Backend Developer Intern",
    description: "Design APIs, databases, and services that power our products.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "On-site",
  },
  {
    ref: "MTX-FSD-005",
    title: "Full Stack Developer Intern",
    description: "Own features end to end across frontend and backend.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "Hybrid",
  },
  
  {
    ref: "MTX-DMK-007",
    title: "Digital Marketing Intern",
    description: "Plan and run campaigns across SEO, ads, and content channels.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "Hybrid",
  },
  {
    ref: "MTX-SMM-008",
    title: "Social Media Intern",
    description: "Grow our brand voice and community across social platforms.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "Remote",
  },
 
  {
    ref: "MTX-BDE-010",
    title: "Business Development Intern",
    description: "Research leads, support outreach, and assist client relations.",
    location: "Bengaluru",
    duration: "3–6 Months",
    mode: "On-site",
  },
 
 
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/workshops", label: "Workshops" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  services: [
    { href: "/services#web-development", label: "Website Development" },
    { href: "/services#mobile-apps", label: "Mobile App Development" },
    { href: "/services#custom-software", label: "Custom Software Development" },
    { href: "/services#cloud-solutions", label: "Cloud Solutions" },
    { href: "/services#ai-solutions", label: "AI Solutions" },
    { href: "/services#ui-ux-design", label: "UI/UX Design" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/workshops", label: "Workshops" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
