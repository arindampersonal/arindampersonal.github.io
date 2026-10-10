export interface PersonalInfo {
  name: string;
  preferredName?: string;
  pronouns?: string;
  title: string;
  secondaryTitle: string;
  location: {
    city: string;
    state?: string;
    country: string;
    remoteAvailability: string;
    timezone: string;
    utcOffset: string;
  };
  experienceYears: string;
  currentEmployer: string;
  statusBadge: {
    text: string;
    isAvailable: boolean;
  };
  headline: string;
  subheadline: string;
  bio: {
    introduction: string;
    paragraphs: string[];
    corePillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  photoConfig: {
    showPhoto: boolean; // Set to true if photo provided, false displays bespoke architectural monogram
    url: string;
    altText: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    locationText: string;
  };
}

export type SkillLevel = 'production' | 'applied' | 'exploratory';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  highlight?: boolean;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ArchitectureDetail {
  challenge: string;
  solution: string;
  infrastructure: string[];
  pipeline: string[];
  verificationNote?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  status: 'Live in Production' | 'Enterprise Architecture' | 'Modular Framework' | 'Engineering Lab';
  period?: string;
  featuredOrder: number;
  imageUrl?: string;
  links: {
    liveUrl?: string;
    repoUrl?: string;
    docsUrl?: string;
  };
  summary: string;
  problemStatement?: string;
  personalImplementation?: string[];
  deliveryAutomation?: string;
  futureRoadmap?: string[];
  highlights: string[];
  techStack: string[];
  architecture: ArchitectureDetail;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  designation: string;
  period: string;
  location: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  keyTechnologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  status: 'Active' | 'In Progress' | 'Planned Track';
  badgeLabel: string;
  verificationUrl?: string;
}

export interface ContinuousLearningItem {
  id: string;
  domain: string;
  topics: string[];
  status: 'Active Exploration' | 'Applied Sandbox';
  note: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  continuousLearning: ContinuousLearningItem[];
}
