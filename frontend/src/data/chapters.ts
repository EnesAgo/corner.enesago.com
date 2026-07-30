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
    year: '2018 — THE ORIGIN',
    color: '#FF2D78',
    title: 'first C++ file',
    desc: 'Solved my first competitive programming problem, it was',
    tags: ['CPP', 'Competitive Programming'],
    company: null,
  },
  {
    year: '2020–2022 — THE GRIND',
    color: '#9B59FF',
    title: 'learning everything',
    desc: 'javascript, then react, then node. youtube tutorials at 2am. building things nobody asked for. breaking things. fixing things. repeat.',
    tags: ['JavaScript', 'nodejs', 'React'],
    company: null,
  },
  {
    year: '2023 & 2024 — EAGLEIT INTERNSHIPS',
    color: '#00C8FF',
    title: null,
    company: { name: 'EagleIT', sub: 'Fullstack Internships · 2023 - 2024' },
    desc: 'first real internship. first real codebase. built features, learned a lot in 6 months.',
    tags: ['ReactJS', 'ExpressJS', 'MongoDB'],
  },
  {
    year: '2026 and so on — ZENFULFILLMENT',
    color: '#FFE500',
    title: null,
    company: { name: 'Zenfulfillment', sub: 'Fullstack Internship · Munich, Germany · 2024 → present' },
    desc: 'building real features for a real product in munich. huge codebase. good stack. great team.',
    tags: ['Next.js', 'NestJS', 'Munich 🥨'],
    current: true,
  },
];

export const hotbarItems = [
  { img: '/pictures/mc/DiamondSword.gif', count: '', name: 'Diamond Sword' },
  { img: '/pictures/mc/DiamondPickaxe.webp', count: '', name: 'Diamond Pickaxe' },
  { img: '/pictures/mc/DiamondAxe.gif', count: '', name: 'Diamond Axe' },
  { img: '/pictures/mc/Bow.png', count: '', name: 'Bow' },
  { img: '/pictures/mc/EnderPearl.webp', count: '16', name: 'Ender Pearl' },
  { img: '/pictures/mc/NotchApple.webp', count: '64', name: 'Notch Apple' },
  { img: '/pictures/mc/Torch.gif', count: '32', name: 'Torch' },
  { img: '/pictures/mc/Firework.webp', count: '64', name: 'Firework Rocket' },
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
