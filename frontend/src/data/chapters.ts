export interface TimelineItemData {
  year: string;
  color: string;
  title?: string | null;
  company?: { name: string; sub: string } | null;
  desc: string;
  tags: string[];
  current?: boolean;
}

export const timeline: TimelineItemData[] = [
  {
    year: '2011 — THE ORIGIN',
    color: '#FF2D78',
    title: 'first html file',
    desc: 'built a myspace page for my skate crew. autoplay music, hit counter, guestbook. terrible. perfect.',
    tags: ['HTML', 'MySpace CSS'],
    company: null,
  },
  {
    year: '2020–2022 — THE GRIND',
    color: '#9B59FF',
    title: 'learning everything',
    desc: 'javascript, then react, then node. youtube tutorials at 2am. building things nobody asked for. breaking things. fixing things. repeat.',
    tags: ['JavaScript', 'React'],
    company: null,
  },
  {
    year: '2023 — EAGLEIT INTERNSHIP',
    color: '#00C8FF',
    title: null,
    company: { name: 'EagleIT', sub: 'Fullstack Internship · 2023' },
    desc: 'first real internship. first real codebase. built features, broke prod once (sorry), learned more in 3 months than 2 years of tutorials.',
    tags: ['React', 'NestJS'],
  },
  {
    year: 'NOW — ZENFULFILLMENT',
    color: '#FFE500',
    title: null,
    company: { name: 'Zenfulfillment', sub: 'Fullstack Internship · Munich, Germany · 2024 → present' },
    desc: 'building real features for a real product in munich. huge codebase. great team. learning german by osmosis and eating too many pretzels.',
    tags: ['Next.js', 'NestJS', 'Munich 🥨'],
    current: true,
  },
];

export const hotbarItems = [
  { emoji: '⚛', count: '64', name: 'React' },
  { emoji: '🪺', count: '32', name: 'NestJS' },
  { emoji: '🍃', count: '16', name: 'MongoDB' },
  { emoji: '🎹', count: '8', name: 'Piano 🎹' },
  { emoji: '✨', count: '∞', name: 'Vibes ✨' },
  { emoji: '🛹', count: '1', name: 'Skateboard 🛹' },
];

export interface FileEntry {
  text: string;
  color?: string;
  indent: number;
  hasAction?: boolean;
  eggId?: number;
}

export const fileExplorerEntries: FileEntry[] = [
  { text: '📁 enesago_world/', color: '#FFE500', indent: 0 },
  { text: '📁 projects/', indent: 24 },
  { text: '📄 skatelog.tsx', indent: 40 },
  { text: '📄 nightshot.tsx', indent: 40 },
  { text: '📁 music/', indent: 24 },
  { text: '🎵 nocturne_take3.mp4', indent: 40 },
  { text: '🔒 hidden_folder/ ← click', indent: 24, color: '#9B59FF', hasAction: true, eggId: 5 },
  { text: '📄 readme.md', indent: 0 },
];
