export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconName: 'Github' | 'Linkedin' | 'Mail' | 'ExternalLink';
  isPrimary?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/arindampersonal',
    handle: '@arindampersonal',
    iconName: 'Github',
    isPrimary: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arindam-dutta',
    handle: 'Arindam Dutta',
    iconName: 'Linkedin',
    isPrimary: true,
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:arindaminaction@gmail.com',
    handle: 'arindaminaction@gmail.com',
    iconName: 'Mail',
    isPrimary: true,
  },
  {
    id: 'lifeops',
    name: 'LifeOps (Flagship)',
    url: 'https://lifeops.living',
    handle: 'lifeops.living',
    iconName: 'ExternalLink',
    isPrimary: false,
  }
];
