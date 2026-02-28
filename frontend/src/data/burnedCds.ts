export interface CDData {
  name: string;
  date: string;
  color: string;
  bgTint: string;
  gradient: string;
  note: string | null;
  small?: boolean;
  tracks: { n: string; title: string; artist: string; dur: string; highlight?: boolean }[];
}

export const cds: CDData[] = [
  {
    name: 'for the 3am people',
    date: 'burned NOV 2024 · 74 min',
    color: '#FF2D78',
    bgTint: '#1a0008',
    gradient: 'conic-gradient(#FF2D78,#9B59FF,#00C8FF,#FFE500,#FF2D78)',
    note: 'written on the disc: "play track 3 first"',
    tracks: [
      { n: '01', title: 'I Miss You', artist: 'Blink-182', dur: '3:48' },
      { n: '02', title: 'Reptilia', artist: 'The Strokes', dur: '3:33' },
      { n: '03', title: 'Through the Wire ← if they get it', artist: 'Kanye West', dur: '3:32', highlight: true },
      { n: '04', title: 'Hey Ya!', artist: 'OutKast', dur: '3:55' },
      { n: '05', title: "I'm Not Okay (I Promise)", artist: 'My Chemical Romance', dur: '3:08' },
    ],
  },
  {
    name: 'skate session vol.2',
    date: 'burned OCT 2024 · 68 min',
    color: '#9B59FF',
    bgTint: '#0d0a1a',
    gradient: 'conic-gradient(#9B59FF,#FF2D78,#FFE500,#00FF88,#9B59FF)',
    note: 'for the parking lot sessions',
    tracks: [
      { n: '01', title: 'Sk8er Boi', artist: 'Avril Lavigne', dur: '3:24' },
      { n: '02', title: 'All the Small Things', artist: 'Blink-182', dur: '2:49' },
      { n: '03', title: 'Last Nite', artist: 'The Strokes', dur: '3:15' },
      { n: '04', title: 'Welcome to the Black Parade', artist: 'My Chemical Romance', dur: '5:12' },
      { n: '05', title: 'Gold Digger', artist: 'Kanye West', dur: '3:28' },
    ],
  },
  {
    name: 'late night coding',
    date: 'burned SEP 2024',
    color: '#FFE500',
    bgTint: '#1a1500',
    gradient: 'conic-gradient(#FFE500,#FF6B00,#FF2D78,#FFE500)',
    note: null,
    small: true,
    tracks: [
      { n: '01', title: 'Nocturne Op.9 No.2', artist: 'Chopin', dur: '4:33' },
      { n: '02', title: 'Runaway', artist: 'Kanye West', dur: '9:08' },
      { n: '03', title: 'Clair de Lune', artist: 'Debussy', dur: '5:02' },
    ],
  },
];
