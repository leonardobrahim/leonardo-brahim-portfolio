export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string; // Tailwind bg color class
  size: "small" | "medium" | "large"; // For Bento Grid
  link?: string;
  image: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
}
