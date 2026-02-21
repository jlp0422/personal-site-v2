import { Education } from '@/types';

export const education: Education[] = [
  {
    id: 'fullstack-academy',
    school: 'Fullstack Academy of Code',
    degree: 'Certificate',
    field: 'Software Engineering',
    location: 'New York, NY',
    startDate: '2018',
    endDate: '2018',
    description: 'Immersive six month software development bootcamp focusing on full-stack JavaScript development.',
    achievements: [
      'Mastered React, Redux, Node.js, Express, and PostgreSQL',
      'Built multiple full-stack applications from scratch',
      'Collaborated on senior capstone project with 4-person team',
    ],
    arcadeRank: 'SKILL UNLOCKED',
  },
  {
    id: 'syracuse-university',
    school: 'Syracuse University',
    degree: 'B.S., magna cum laude',
    field: 'Sport Management',
    location: 'Syracuse, NY',
    startDate: '2010',
    endDate: '2014',
    description: 'David B. Falk College of Sport and Human Dynamics',
    achievements: [
      'Graduated magna cum laude',
      'Developed strong analytical and project management skills',
      'Built foundation for data-driven decision making',
    ],
    arcadeRank: 'TUTORIAL COMPLETE',
  },
];
