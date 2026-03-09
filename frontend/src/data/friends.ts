export interface Friend {
  name: string;
  handle: string;
  url: string;
  avatar: string; // emoji avatar
  role: string;
  vibe: string;
  color: string;
}

export const friends: Friend[] = [
  {
    name: 'Berk',
    handle: '@berkdev',
    url: 'https://github.com',
    avatar: '🧑‍💻',
    role: 'backend wizard',
    vibe: 'explains things at 2am without complaining',
    color: '#00FF88',
  },
  {
    name: 'Mila',
    handle: '@miladesigns',
    url: 'https://dribbble.com',
    avatar: '🎨',
    role: 'UI/UX designer',
    vibe: 'makes everything look 10x better',
    color: '#FF2D78',
  },
  {
    name: 'Kerem',
    handle: '@keremcodes',
    url: 'https://github.com',
    avatar: '☕',
    role: 'fullstack dev',
    vibe: 'types 120 WPM and still has bugs',
    color: '#FFE500',
  },
  {
    name: 'Yuki',
    handle: '@yukiml',
    url: 'https://github.com',
    avatar: '🤖',
    role: 'ML engineer',
    vibe: 'thinks everything is a classification problem',
    color: '#00C8FF',
  },
  {
    name: 'Leo',
    handle: '@leomusic',
    url: 'https://soundcloud.com',
    avatar: '🎸',
    role: 'musician + dev',
    vibe: 'codes in Rust while playing guitar',
    color: '#FF6B00',
  },
  {
    name: 'Sophie',
    handle: '@sophieoss',
    url: 'https://github.com',
    avatar: '🌱',
    role: 'open source contributor',
    vibe: 'has more PRs than social life',
    color: '#B388FF',
  },
];

export const coolLinks: Array<{ title: string; url: string; emoji: string; desc: string }> = [
  { title: 'Hacker News', url: 'https://news.ycombinator.com', emoji: '🟠', desc: 'where devs argue (politely)' },
  { title: 'Indie Hackers', url: 'https://indiehackers.com', emoji: '🚀', desc: 'building in public' },
  { title: 'DEV.to', url: 'https://dev.to', emoji: '👩‍💻', desc: 'community blog platform' },
  { title: 'Product Hunt', url: 'https://producthunt.com', emoji: '🐱', desc: 'new tools daily' },
  { title: 'CSS-Tricks', url: 'https://css-tricks.com', emoji: '🎩', desc: 'RIP but forever bookmarked' },
  { title: 'Smashing Magazine', url: 'https://smashingmagazine.com', emoji: '💥', desc: 'deep dives into web dev' },
];
