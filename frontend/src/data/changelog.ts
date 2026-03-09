export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  changes: string[];
  tag: 'feature' | 'fix' | 'refactor' | 'easter-egg' | 'design';
}

export const changelog: ChangelogEntry[] = [
  {
    version: 'v2.4.0',
    date: '2025-01',
    title: 'THE BIG INTERACTIVE UPDATE',
    changes: [
      'added achievement system with 10 unlockable badges',
      'command palette (⌘K) with fuzzy search',
      'keyboard shortcuts overlay — press ?',
      'custom right-click context menu',
      'boot sequence splash on first visit',
      'nyan cat, matrix rain, site flip easter eggs',
      'rage click detection — stop clicking so hard',
      'idle detection with snarky status message',
      'scroll progress bar with gradient',
      'console.log ASCII art for devtools nerds',
    ],
    tag: 'feature',
  },
  {
    version: 'v2.3.0',
    date: '2024-12',
    title: 'LAB EXPERIMENTS',
    changes: [
      'glitch generator — break images on purpose',
      'VHS filter — retro scan lines & noise',
      'pixel font renderer — 5×7 dot matrix text',
      'GitHub live ticker pulling real commit data',
    ],
    tag: 'feature',
  },
  {
    version: 'v2.2.0',
    date: '2024-11',
    title: 'INTERACTIVE TERMINAL',
    changes: [
      'fully functional terminal in SystemCore section',
      'commands: help, about, skills, contact, projects, clear',
      'tab-completion and command history',
      'clickable CD tracks with WinAMP-style player',
    ],
    tag: 'feature',
  },
  {
    version: 'v2.1.0',
    date: '2024-10',
    title: 'SCROLL ANIMATION & NAV',
    changes: [
      'active section detection via IntersectionObserver',
      'smooth scroll navigation with offset',
      'mobile hamburger menu with backdrop blur',
    ],
    tag: 'feature',
  },
  {
    version: 'v2.0.0',
    date: '2024-09',
    title: 'NEXT.JS REWRITE',
    changes: [
      'migrated entire site from static HTML to Next.js',
      'component-based architecture',
      'Tailwind + inline styles for neobrutalist design',
      'Firebase guestbook with real-time entries',
      'visitor counter',
    ],
    tag: 'refactor',
  },
  {
    version: 'v1.5.0',
    date: '2024-08',
    title: 'EASTER EGG HUNT',
    changes: [
      'konami code — classic arcade treat',
      'bill cipher easter egg — gravity falls fan?',
      'time capsule — messages from past enes',
      'minecraft inventory — full of bad decisions',
      'hidden folder — browser filesystem vibes',
    ],
    tag: 'easter-egg',
  },
  {
    version: 'v1.0.0',
    date: '2024-07',
    title: 'INITIAL LAUNCH',
    changes: [
      'static HTML/CSS/JS personal site',
      'brutalist design with old internet corner aesthetic',
      'sections: hero, about, projects, chapters, music, blog',
      'polaroid wall with lightbox',
      'burned CDs section with custom artwork',
    ],
    tag: 'design',
  },
];

export const tagColors: Record<ChangelogEntry['tag'], string> = {
  feature: '#00FF88',
  fix: '#FF2D78',
  refactor: '#00C8FF',
  'easter-egg': '#FFE500',
  design: '#FF6B00',
};
