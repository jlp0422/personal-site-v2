import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fate-of-the-eight',
    slug: 'fate-of-the-eight',
    title: 'Fate of the Eight',
    description: 'Formula 1 fantasy league with automated scoring',
    longDescription: 'An F1 fantasy league built for eight participants — each picks two drivers, and the app handles scoring automatically after every race. Standings, history, and the satisfaction of watching your teammate\'s drivers retire on lap 3.',
    tags: ['React', 'Next.js', 'TypeScript', 'Python', 'F1 API', 'Vercel'],
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
    id: 'coffee-golf-leaderboard',
    slug: 'coffee-golf-leaderboard',
    title: 'Coffee Golf Leaderboard',
    description: 'Leaderboard app for Coffee Golf with stats, streaks, and multiplayer tournaments',
    longDescription: 'A leaderboard app built around the Coffee Golf daily puzzle — paste your result and it auto-parses the score. Track your history, streaks, and per-hole stats. Create groups with friends, run tournaments in stroke play, match play, best ball, or skins formats, and finally settle who\'s actually the best.',
    tags: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
    year: 2026,
    featured: true,
    githubUrl: 'https://github.com/jlp0422/coffee-golf-leaderboard',
    liveUrl: 'https://coffee-golf-leaderboard.vercel.app/',
    arcadeTheme: {
      primaryColor: '#00FF41', // screenGreen
      secondaryColor: '#FFD700', // coinGold
      icon: '⛳',
    },
  },
  {
    id: 'sports-logo-quiz',
    slug: 'sports-logo-quiz',
    title: 'Sports Logo Alphabet Quiz',
    description: 'Addictive sports logo guessing game',
    longDescription: 'An interactive quiz game inspired by a viral Twitter post — guess logos by league or in alphabetical order, with high score tracking per category. Turns out I know way too many sports logos.',
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
    longDescription: 'A baby pool app for my brother\'s first kid. Guess the date, weight, and gender. Also a rare opportunity to style something with zero professional constraints, so naturally I went a bit overboard.',
    tags: ['React', 'JavaScript', 'Netlify', 'Family Project'],
    year: 2020,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/baby-pool-2020',
    liveUrl: 'https://babyphilipson2020.netlify.app/',
    arcadeTheme: {
      primaryColor: '#FF8C42', // sbtbOrange (more readable than bright yellow)
      secondaryColor: '#FF10F0', // neonPink
      icon: '👶',
    },
  },
  {
    id: 'hot-tub-2019',
    slug: 'hot-tub-2019',
    title: 'Hot Tub 2019',
    description: '60-person NFL pool with live scoring',
    longDescription: 'NFL pool tracker for 60 participants with automatic standings updates after every game, covering both regular season and postseason. Built it so nobody had to maintain a spreadsheet.',
    tags: ['React', 'JavaScript', 'NFL API', 'Heroku'],
    year: 2019,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/hot_tub_2019',
    arcadeTheme: {
      primaryColor: '#9D00FF', // arcadePurple
      secondaryColor: '#00FF41', // screenGreen
      icon: '🏈',
    },
  },
  {
    id: 'wins-pool-2019',
    slug: 'wins-pool-2019',
    title: 'Wins Pool',
    description: '10-person NFL wins pool aggregator',
    longDescription: 'A wins pool tracker for 10 participants — real-time standings, weekly breakdowns, and third-party API integration so the numbers are never in dispute.',
    tags: ['React', 'JavaScript', 'NFL API', 'Vercel'],
    year: 2019,
    featured: false,
    githubUrl: 'https://github.com/jlp0422/wins_pool_2019/',
    liveUrl: 'https://nfl-wins-pool.vercel.app/',
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
    longDescription: 'Built as part of my proposal in July 2019 — an interactive love letter she could share with friends and family. Probably the highest-stakes production push I\'ve ever done.',
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
    longDescription: 'Fullstack Academy senior capstone — a bar trivia platform with a React web dashboard for hosts and a React Native app for players. Built with a team of four, shipped in two weeks, and demoed in front of a live audience.',
    tags: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Team Project'],
    year: 2018,
    featured: false,
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
    longDescription: 'Fullstack Academy Hackathon project — a React Native blackjack strategy app built solo in roughly 10 hours. Enter your hand and the dealer\'s card, get statistically correct advice. The house still wins, but at least you played it right.',
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
