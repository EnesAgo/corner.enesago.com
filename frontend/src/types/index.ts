// Profile Types
export interface Profile {
  name: string;
  title: string;
  location: string;
  studying: string;
  working: string;
  status: 'available' | 'busy' | 'offline';
  vibe: string;
  bio: string[];
  image: string;
  journey: string;
  socials: Social[];
}

export interface Social {
  label: string;
  url: string;
}

// Skills & Badges
export interface Skill {
  name: string;
  percentage: number;
  color: string;
  gradient: string;
}

export interface Badge {
  emoji: string;
  label: string;
  color: string;
  textColor: string;
  rotation: number;
  delay?: number;
}

export interface Interest {
  emoji: string;
  label: string;
  color: string;
  textColor: string;
  rotation: number;
}

export interface Language {
  flag: string;
  name: string;
  color: string;
  textColor: string;
  rotation: number;
  learning?: boolean;
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: 'FEATURED' | 'API' | 'TOOL' | 'APP' | 'WIP';
  typeColor: string;
  featured?: boolean;
  liveUrl?: string;
  codeUrl?: string;
}

// Music & Playlists
export interface NowPlaying {
  title: string;
  artist: string;
  album: string;
  year: number;
  albumArt: string;
  currentTime: string;
  totalTime: string;
  progress: number;
}

export interface Track {
  number: number;
  title: string;
  artist: string;
  duration: string;
  highlight?: boolean;
  highlightNote?: string;
}

export interface BurnedCD {
  id: string;
  title: string;
  burnedDate: string;
  duration: string;
  gradientColors: string[];
  borderColor: string;
  bgColor: string;
  tracks: Track[];
  note?: string;
}

export interface PianoRecording {
  id: string;
  filename: string;
  date: string;
  time: string;
  type: string;
  duration: string;
  borderColor: string;
}

// Timeline & Chapters
export interface Chapter {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  isCurrent?: boolean;
  company?: string;
  role?: string;
}

// Blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  readTime: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

// Photos
export interface Photo {
  id: string;
  src: string;
  thumbnail: string;
  caption: string;
  rotation: number;
}

// Diary Entries
export interface DiaryEntry {
  id: string;
  date: string;
  time: string;
  content: string;
}

// Guestbook
export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  color: string;
}

// Currently Into
export interface CurrentlyInto {
  listening: { main: string; also: string };
  coding: { main: string; description: string };
  reading: { main: string; author: string };
  learning: { main: string; note: string };
}

// Easter Eggs
export interface EasterEgg {
  id: number;
  type: 'konami' | 'billcipher' | 'timecapsule' | 'minecraft' | 'hidden';
  title: string;
  borderColor: string;
  bgColor: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  color?: string;
  hoverColor?: string;
  active?: boolean;
}

// Status
export interface StatusMessage {
  text: string;
}

// Experiments/Lab
export interface Experiment {
  id: string;
  number: string;
  title: string;
  description: string;
  color: string;
  demo?: React.ReactNode;
}

// Ticker
export interface TickerItem {
  text: string;
}

