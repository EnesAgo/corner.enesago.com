import CDCard from './CDCard';
import type { CDData } from './CDCard';

const cds: CDData[] = [
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

export default function BurnedCDsSection() {
  return (
    <section id="playlist" style={{ background: '#0a0a0a', borderTop: '3px solid #FF2D78', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 006</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>BURNED CDs</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FF2D78,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cds.map((cd, i) => (
            <CDCard key={i} cd={cd} />
          ))}
        </div>
      </div>
    </section>
  );
}
