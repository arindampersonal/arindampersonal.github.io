import { profile } from './profile';
import { skills } from './skills';
import { projects } from './projects';
import { experience } from './experience';
import { certifications, continuousLearning } from './certifications';
import { PortfolioData } from '../types/portfolio';

export * from './profile';
export * from './skills';
export * from './projects';
export * from './experience';
export * from './certifications';
export * from './socialLinks';
export * from './engineeringApproach';

export const portfolioData: PortfolioData = {
  personalInfo: profile,
  skills,
  projects,
  experience,
  certifications,
  continuousLearning
};
