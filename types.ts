export type Locale = "pt" | "en";

export interface DemoCredentials {
  email: string;
  password: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  tags: string[];
  featured?: boolean;
  status?: string;
  link?: string;
  github?: string;
  isPrivateRepo?: boolean;
  demoCredentials?: DemoCredentials;
  image: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Language {
  language: string;
  level: string;
}

export interface TechCategory {
  title: string;
  subtitle: string;
  accent: "red" | "blue" | "amber";
  items: string[];
}

export interface PersonalShared {
  name: string;
  email: string;
  phone: string;
  phoneHref: string;
  portfolio: string;
  github: string;
  linkedin: string;
}

export interface LocalizedContent {
  metaTitle: string;
  nav: {
    about: string;
    projects: string;
    experience: string;
    stack: string;
    contact: string;
    cvButton: string;
    cvDownloadLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    headline: string;
    availability: string;
    bio: string;
    ctaProjects: string;
    ctaCv: string;
    copyEmailAria: string;
    emailCopiedToast: string;
    widget: {
      title: string;
      badge: string;
      kpis: {
        value: string;
        label: string;
        detail: string;
      }[];
      chartTitle: string;
      chartSubtitle: string;
      statusText: string;
      focusTag: string;
    };
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    accessButton: string;
    codeButton: string;
    privateRepoLabel: string;
    detailsButton: string;
    highlightsTitle: string;
    demoTitle: string;
    copyEmailBtn: string;
    copyPasswordBtn: string;
    githubFullBtn: string;
    closeDetailsAria: string;
    emailCopied: string;
    passwordCopied: string;
  };
  experienceSection: {
    eyebrow: string;
    title: string;
    experienceHeading: string;
    educationHeading: string;
    languagesHeading: string;
  };
  stackSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    unitLabel: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    description: string;
    sendEmail: string;
    downloadCv: string;
    emailLabel: string;
    phoneLabel: string;
    copyEmailAria: string;
    copyPhoneAria: string;
    emailCopied: string;
    phoneCopied: string;
    location: string;
    rights: string;
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  languages: Language[];
  techCategories: TechCategory[];
}
