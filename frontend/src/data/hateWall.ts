export interface HateItem {
  thing: string;
  rant: string;
  emoji: string;
  rage: 1 | 2 | 3 | 4 | 5; // 🔥 scale
  color: string;
}

export const hateItems: HateItem[] = [
  {
    thing: 'TUTORIAL HELL',
    rant: "you've watched 47 to-do app tutorials and still can't build one without them. just start building.",
    emoji: '📺',
    rage: 5,
    color: '#FF2D78',
  },
  {
    thing: '"JUST USE WORDPRESS"',
    rant: "no. absolutely not. i'd rather write HTML by hand on a stone tablet.",
    emoji: '🪦',
    rage: 4,
    color: '#FFE500',
  },
  {
    thing: 'CENTERED DIVS MEMES',
    rant: "it's flexbox. display flex, align-items center, justify-content center. it's been solved for years. let it go.",
    emoji: '📦',
    rage: 3,
    color: '#00C8FF',
  },
  {
    thing: 'LIGHT MODE',
    rant: "my eyes did nothing to deserve this. who codes at 2am in light mode? psychopaths.",
    emoji: '☀️',
    rage: 5,
    color: '#FF6B00',
  },
  {
    thing: 'LINKEDIN INFLUENCERS',
    rant: '"i was rejected from 500 companies and now i\'m a CEO" bro calm down it\'s a social network not a TED talk.',
    emoji: '🤮',
    rage: 4,
    color: '#0077B5',
  },
  {
    thing: '.ENV NOT IN .GITIGNORE',
    rant: 'congratulations, your API keys are now on GitHub. the bots found them in 0.3 seconds.',
    emoji: '🔑',
    rage: 5,
    color: '#FF2D78',
  },
  {
    thing: '"WORKS ON MY MACHINE"',
    rant: "cool. ship your machine then. docker exists for a reason.",
    emoji: '🐳',
    rage: 3,
    color: '#00FF88',
  },
  {
    thing: 'NODE_MODULES SIZE',
    rant: 'heavier than a black hole. npm install: 2 seconds. disk space: gone. hotel: trivago.',
    emoji: '📁',
    rage: 4,
    color: '#FFE500',
  },
  {
    thing: 'MEETINGS THAT COULD BE EMAILS',
    rant: '"quick sync" that lasts 45 minutes and concludes with "let\'s schedule another meeting."',
    emoji: '📅',
    rage: 5,
    color: '#FF2D78',
  },
  {
    thing: 'CSS !IMPORTANT',
    rant: 'if you need !important, something went very wrong 11 steps ago. refactor your specificity.',
    emoji: '🚨',
    rage: 3,
    color: '#00C8FF',
  },
  {
    thing: 'TABS VS SPACES DEBATE',
    rant: "literally nobody cares. set up prettier and move on with your life. we have real problems.",
    emoji: '⌨️',
    rage: 2,
    color: '#888',
  },
  {
    thing: '"I USE ARCH BTW"',
    rant: "we know. you told us. three times. today. nobody asked.",
    emoji: '🐧',
    rage: 3,
    color: '#1793D1',
  },
];
