import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fate-of-the-eight',
    slug: 'fate-of-the-eight',
    title: 'Fate of the Eight',
    description: 'Formula 1 fantasy league with automated scoring',
    longDescription: 'A Formula 1 fantasy league application where eight participants each select two drivers. Features automated scoring that updates after each race, real-time standings, and historical data tracking.',
    tags: ['React', 'Next.js', 'TypeScript', 'F1 API', 'Vercel'],
    year: 2023,
    featured: true,
    githubUrl: 'https://github.com/jlp0422/f1-fantasy-league',
    liveUrl: 'https://fate-of-the-eight.vercel.app/',
    arcadeTheme: {
      primaryColor: '#FF10F0', // neonPink
      secondaryColor: '#FFD700', // coinGold
      icon: '🏎️',
    },
  },
  {
    id: 'sports-logo-quiz',
    slug: 'sports-logo-quiz',
    title: 'Sports Logo Alphabet Quiz',
    description: 'Addictive sports logo guessing game',
    longDescription: 'An interactive quiz game inspired by a viral Twitter post. Test your sports knowledge by guessing logos by league or in alphabetical order. Features high score tracking for each category.',
    tags: ['React', 'Next.js', 'TypeScript', 'Game', 'Vercel'],
    year: 2023,
    featured: true,
    githubUrl: 'https://github.com/jlp0422/sport-logo-alphabet-quiz',
    liveUrl: 'https://sport-logo-alphabet-quiz.vercel.app/',
    arcadeTheme: {
      primaryColor: '#00FFFF', // neonCyan
      secondaryColor: '#FF6600', // arcadeOrange
      icon: '🏈',
    },
  },
  {
    id: 'baby-philipson-2020',
    slug: 'baby-philipson',
    title: 'Baby Philipson 2020',
    description: 'Interactive baby pool with creative styling',
    longDescription: 'A fun baby pool created when my brother and sister-in-law were expecting. Family members could guess date, weight, and gender. Allowed me to get creative with the styling and make it a memorable experience!',
    tags: ['React', 'JavaScript', 'Netlify', 'Family Project'],
    year: 2020,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/baby-pool-2020',
    liveUrl: 'https://babyphilipson2020.netlify.app/',
    arcadeTheme: {
      primaryColor: '#FFFF00', // neonYellow
      secondaryColor: '#FF10F0', // neonPink
      icon: '👶',
    },
  },
  {
    id: 'hot-tub-2019',
    slug: 'hot-tub-2019',
    title: 'Hot Tub 2019',
    description: '60-person NFL pool with live scoring',
    longDescription: 'Comprehensive football pool tracker for 60 participants. Uses third-party API to update standings at the conclusion of each NFL game. Supports both regular season and postseason play.',
    tags: ['React', 'JavaScript', 'NFL API', 'Heroku'],
    year: 2019,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/hot_tub_2019',
    liveUrl: 'https://hot-tub-2019.herokuapp.com/',
    arcadeTheme: {
      primaryColor: '#9D00FF', // arcadePurple
      secondaryColor: '#00FF41', // screenGreen
      icon: '🏈',
    },
  },
  {
    id: 'wins-pool-2019',
    slug: 'wins-pool-2019',
    title: 'Wins Pool 2019',
    description: '10-person NFL wins pool aggregator',
    longDescription: 'Tracks aggregated wins for a 10-person pool during the NFL season. Features third-party API integration for real-time updates, overall standings, and weekly game breakdowns.',
    tags: ['React', 'JavaScript', 'NFL API', 'Heroku'],
    year: 2019,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/wins_pool_2019/',
    liveUrl: 'https://wins-pool-2019.herokuapp.com/',
    arcadeTheme: {
      primaryColor: '#FF6600', // arcadeOrange
      secondaryColor: '#00FFFF', // neonCyan
      icon: '🏆',
    },
  },
  {
    id: 'dear-carolyn',
    slug: 'dear-carolyn',
    title: 'Dear Carolyn Fine',
    description: 'Interactive love letter & proposal',
    longDescription: 'An interactive love letter used as part of my proposal in July 2019. Created to be unique and shareable with friends and family. A heartfelt combination of code and romance!',
    tags: ['React', 'JavaScript', 'Netlify', 'Personal'],
    year: 2019,
    featured: true,
    githubUrl: 'https://github.com/jlp0422/july_5',
    liveUrl: 'https://mystifying-kirch-059b5f.netlify.app',
    arcadeTheme: {
      primaryColor: '#FF006E', // hotMagenta
      secondaryColor: '#FFD700', // coinGold
      icon: '💍',
    },
  },
  {
    id: 'untapped-trivia',
    slug: 'untapped-trivia',
    title: 'UnTapped Trivia',
    description: 'Full-stack bar trivia platform',
    longDescription: 'Senior capstone project at Fullstack Academy. Features a web dashboard built in React for bar owners and a mobile app built in React Native for players. Collaborated with 3 other developers.',
    tags: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Team Project'],
    year: 2018,
    featured: true,
    githubUrl: 'https://github.com/jlp0422/capstone',
    liveUrl: 'https://www.youtube.com/watch?v=cvqqW-UEuMk',
    arcadeTheme: {
      primaryColor: '#0066FF', // electricBlue
      secondaryColor: '#FFFF00', // neonYellow
      icon: '🍺',
    },
  },
  {
    id: 'stackjack',
    slug: 'stackjack',
    title: 'StackJack',
    description: 'Blackjack strategy app built in 10 hours',
    longDescription: 'A blackjack analysis app built for the Fullstack Academy Hackathon using React Native. Analyzes dealer and player cards to provide accurate suggestions to hit, stand, or double down. Solo project completed in roughly 10 hours.',
    tags: ['React Native', 'JavaScript', 'Game', 'Hackathon'],
    year: 2018,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/stackjack',
    liveUrl: 'https://www.youtube.com/watch?v=yXxq2u9RvEY',
    arcadeTheme: {
      primaryColor: '#FFD700', // coinGold
      secondaryColor: '#FF10F0', // neonPink
      icon: '🎰',
    },
  },
];
