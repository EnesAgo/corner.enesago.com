export interface ProjectData {
  featured?: boolean;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  badges: { text: string; bg: string; color: string }[];
  tagColor: string;
}

export const projects: ProjectData[] = [
  {
    featured: true,
    title: 'SkateLog — Session Tracker',
    desc: 'track your skate sessions, tricks, spots. built for the culture.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    tags: ['Next.js', 'NestJS', 'MongoDB'],
    badges: [
      { text: 'FEATURED', bg: '#FFE500', color: '#000' },
      { text: 'FULLSTACK', bg: '#FF2D78', color: '#fff' },
    ],
    tagColor: '#00C8FF',
  },
  {
    title: 'MixTape API',
    desc: 'spotify-like playlist api. because streaming killed the cd.',
    img: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&h=200&fit=crop',
    tags: ['NestJS', 'MongoDB'],
    badges: [{ text: 'API', bg: '#9B59FF', color: '#fff' }],
    tagColor: '#9B59FF',
  },
  {
    title: 'GrainFilter.js',
    desc: 'add film grain + vhs effects to any image.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
    tags: ['Canvas', 'TypeScript'],
    badges: [{ text: 'TOOL', bg: '#00FF88', color: '#000' }],
    tagColor: '#00FF88',
  },
  {
    title: 'NightShot',
    desc: 'photo sharing app. no likes. no algorithm. just photos.',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop',
    tags: ['React', 'NestJS'],
    badges: [{ text: 'APP', bg: '#FF2D78', color: '#fff' }],
    tagColor: '#FF2D78',
  },
  {
    title: 'CrateDigger',
    desc: 'vinyl record discovery app. find rare records near you.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
    tags: ['Next.js', 'MongoDB'],
    badges: [{ text: 'WIP', bg: '#00C8FF', color: '#000' }],
    tagColor: '#00C8FF',
  },
];
