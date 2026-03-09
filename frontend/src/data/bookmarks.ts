export interface Bookmark {
  title: string;
  url: string;
  favicon: string; // emoji as favicon
  folder?: string;
  desc?: string;
}

export const bookmarkFolders = ['Daily', 'Dev Tools', 'Inspiration', 'Music', 'Learning', 'Fun'] as const;

export const bookmarks: Bookmark[] = [
  // Daily
  { title: 'GitHub', url: 'https://github.com', favicon: '🐙', folder: 'Daily', desc: 'where the code lives' },
  { title: 'Vercel', url: 'https://vercel.com', favicon: '▲', folder: 'Daily', desc: 'deploy everything' },
  { title: 'Notion', url: 'https://notion.so', favicon: '📝', folder: 'Daily', desc: 'second brain (first one is overloaded)' },
  { title: 'Discord', url: 'https://discord.com', favicon: '💬', folder: 'Daily', desc: 'where the homies are' },

  // Dev Tools
  { title: 'Can I Use', url: 'https://caniuse.com', favicon: '✅', folder: 'Dev Tools', desc: 'reality check for CSS features' },
  { title: 'Bundlephobia', url: 'https://bundlephobia.com', favicon: '📦', folder: 'Dev Tools', desc: 'before you npm install that 2MB library' },
  { title: 'regex101', url: 'https://regex101.com', favicon: '🔍', folder: 'Dev Tools', desc: 'regex without losing sanity' },
  { title: 'DevDocs', url: 'https://devdocs.io', favicon: '📚', folder: 'Dev Tools', desc: 'all the docs in one place' },

  // Inspiration
  { title: 'Awwwards', url: 'https://awwwards.com', favicon: '🏆', folder: 'Inspiration', desc: 'sites that make me question my skills' },
  { title: 'Dribbble', url: 'https://dribbble.com', favicon: '🏀', folder: 'Inspiration', desc: 'design eye candy' },
  { title: 'Brutalist Websites', url: 'https://brutalistwebsites.com', favicon: '🧱', folder: 'Inspiration', desc: 'the aesthetic we love' },

  // Music
  { title: 'Spotify', url: 'https://open.spotify.com', favicon: '🎵', folder: 'Music', desc: 'coding playlist on repeat' },
  { title: 'SoundCloud', url: 'https://soundcloud.com', favicon: '☁️', folder: 'Music', desc: 'underground finds' },
  { title: 'YouTube Music', url: 'https://music.youtube.com', favicon: '▶️', folder: 'Music', desc: 'for the stuff Spotify doesn\'t have' },

  // Learning
  { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', favicon: '🦊', folder: 'Learning', desc: 'the bible of web dev' },
  { title: 'The Odin Project', url: 'https://theodinproject.com', favicon: '⚔️', folder: 'Learning', desc: 'where it all started' },
  { title: 'Josh W Comeau', url: 'https://joshwcomeau.com', favicon: '✨', folder: 'Learning', desc: 'CSS wizardry explained beautifully' },

  // Fun
  { title: 'Neal.fun', url: 'https://neal.fun', favicon: '🎮', folder: 'Fun', desc: 'internet at its finest' },
  { title: 'The Useless Web', url: 'https://theuselessweb.com', favicon: '🌀', folder: 'Fun', desc: 'procrastination fuel' },
  { title: 'Window Swap', url: 'https://window-swap.com', favicon: '🪟', folder: 'Fun', desc: 'look through someone else\'s window' },
];

export const folderColors: Record<string, string> = {
  Daily: '#FFE500',
  'Dev Tools': '#00FF88',
  Inspiration: '#FF2D78',
  Music: '#00C8FF',
  Learning: '#FF6B00',
  Fun: '#B388FF',
};
