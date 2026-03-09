export interface EDCItem {
  name: string;
  desc: string;
  emoji: string;
  category: 'tech' | 'daily' | 'creative';
  color: string;
}

export const edcItems: EDCItem[] = [
  {
    name: 'MacBook Pro 14"',
    desc: 'M3 Pro, 18GB. the machine that runs everything. never leaves the backpack.',
    emoji: '💻',
    category: 'tech',
    color: '#00C8FF',
  },
  {
    name: 'AirPods Pro',
    desc: 'noise cancelling at cafés is a survival need, not a luxury.',
    emoji: '🎧',
    category: 'tech',
    color: '#00C8FF',
  },
  {
    name: 'iPhone 15 Pro',
    desc: 'camera for content, Spotify for sanity, and way too many dev apps.',
    emoji: '📱',
    category: 'tech',
    color: '#00C8FF',
  },
  {
    name: 'Mechanical Keyboard',
    desc: 'Keychron K2 with brown switches. satisfying clicks, annoyed roommates.',
    emoji: '⌨️',
    category: 'tech',
    color: '#00C8FF',
  },
  {
    name: 'Field Notes Notebook',
    desc: 'for sketching UI layouts, writing bugs, and existential crisis notes.',
    emoji: '📓',
    category: 'creative',
    color: '#FFE500',
  },
  {
    name: 'Muji 0.38mm Pen',
    desc: 'if you know, you know. the pen that makes you write more.',
    emoji: '🖊️',
    category: 'creative',
    color: '#FFE500',
  },
  {
    name: 'USB-C Hub',
    desc: 'dongles on dongles. the price of living in a USB-C world.',
    emoji: '🔌',
    category: 'tech',
    color: '#00C8FF',
  },
  {
    name: 'Hydroflask',
    desc: '40oz water bottle. hydration is the most underrated productivity hack.',
    emoji: '💧',
    category: 'daily',
    color: '#FF2D78',
  },
  {
    name: 'Backpack',
    desc: 'Herschel Little America — fits everything including bad decisions.',
    emoji: '🎒',
    category: 'daily',
    color: '#FF2D78',
  },
  {
    name: 'Sunglasses',
    desc: 'for pretending i go outside. also monitor glare protection (copium).',
    emoji: '🕶️',
    category: 'daily',
    color: '#FF2D78',
  },
  {
    name: 'Portable Charger',
    desc: 'Anker 20K mAh. the anxiety of a dead phone at 3pm is unmatched.',
    emoji: '🔋',
    category: 'tech',
    color: '#00C8FF',
  },
  {
    name: 'Sticker Collection',
    desc: 'laptop is 60% stickers at this point. each one has a story.',
    emoji: '🏷️',
    category: 'creative',
    color: '#FFE500',
  },
];

export const categoryLabels: Record<EDCItem['category'], string> = {
  tech: 'TECH',
  daily: 'DAILY',
  creative: 'CREATIVE',
};
