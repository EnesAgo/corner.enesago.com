export interface ProjectData {
  featured?: boolean;
  /** When true the card renders as a "coming soon" placeholder instead of a real project. */
  comingSoon?: boolean;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  badges: { text: string; bg: string; color: string }[];
  tagColor: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: ProjectData[] = [
  {
    featured: true,
    title: 'ENESAGO.EXE',
    desc: "you're looking at it — my corner of the web. built with next.js, react & firebase.",
    img: '/pictures/site-hero.png',
    tags: ['Next.js', 'React', 'Firebase'],
    badges: [
      { text: 'LIVE', bg: '#00FF88', color: '#000' },
      { text: 'FULLSTACK', bg: '#FF2D78', color: '#fff' },
    ],
    tagColor: '#00C8FF',
    liveUrl: '#home',
  },
  {
    comingSoon: true,
    title: 'project',
    desc: 'coming soon',
    img: '',
    tags: ['NestJS', 'MongoDB'],
    badges: [{ text: 'API', bg: '#9B59FF', color: '#fff' }],
    tagColor: '#9B59FF',
  },
  {
    comingSoon: true,
    title: 'project',
    desc: 'coming soon',
    img: '',
    tags: ['Canvas', 'TypeScript'],
    badges: [{ text: 'TOOL', bg: '#00FF88', color: '#000' }],
    tagColor: '#00FF88',
  },
  {
    comingSoon: true,
    title: 'project',
    desc: 'coming soon',
    img: '',
    tags: ['React', 'NestJS'],
    badges: [{ text: 'APP', bg: '#FF2D78', color: '#fff' }],
    tagColor: '#FF2D78',
  },
  {
    comingSoon: true,
    title: 'project',
    desc: 'coming soon',
    img: '',
    tags: ['Next.js', 'MongoDB'],
    badges: [{ text: 'WIP', bg: '#00C8FF', color: '#000' }],
    tagColor: '#00C8FF',
  },
];
