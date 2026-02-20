import { ContactInfo, SocialLink } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'jeremyphilipson@gmail.com',
  github: 'https://github.com/jlp0422',
  linkedin: 'https://www.linkedin.com/in/jeremyphilipson',
  twitter: 'https://twitter.com/jeremyphilipson',
  location: 'New York, NY',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/jlp0422',
    icon: '</>',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jeremyphilipson',
    icon: 'in',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jeremyphilipson',
    icon: '@',
  },
  {
    name: 'Email',
    url: 'mailto:jeremyphilipson@gmail.com',
    icon: '✉',
  },
];
