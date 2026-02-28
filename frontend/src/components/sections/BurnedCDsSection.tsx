const cds = [
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

interface CDData {
  name: string;
  date: string;
  color: string;
  bgTint: string;
  gradient: string;
  note: string | null;
  small?: boolean;
  tracks: { n: string; title: string; artist: string; dur: string; highlight?: boolean }[];
}

function CDCard({ cd }: { cd: CDData }) {
  const discSize = cd.small ? 48 : 52;
  const innerSize = cd.small ? 12 : 13;

  return (
    <div className={cd.small ? '' : 'hl hs'} style={{ display: 'flex', flexDirection: 'column', gap: cd.small ? 14 : 0 }}>
      <div className={cd.small ? 'hl hs' : ''} style={{ border: `3px solid ${cd.color}`, background: '#0d0d0d', boxShadow: `6px 6px 0px ${cd.color}`, overflow: 'hidden' }}>
        <div style={{ background: cd.bgTint, padding: 12, borderBottom: `2px solid ${cd.color}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="cds" style={{ width: discSize, height: discSize, flexShrink: 0, borderRadius: '50%', background: cd.gradient, border: '3px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div style={{ width: innerSize, height: innerSize, background: '#0d0d0d', borderRadius: '50%', border: '2px solid #333' }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: cd.small ? 14 : 15, color: cd.color, lineHeight: 1.2 }}>{cd.name}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', marginTop: 3 }}>{cd.date}</div>
          </div>
        </div>
        <div>
          {cd.tracks.map((track) => (
            <div key={track.n} className="cdt">
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: track.highlight ? cd.color : '#444', minWidth: 16 }}>{track.n}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: track.highlight ? cd.color : '#ccc' }}>{track.title}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>{track.artist}</div>
              </div>
              <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#444' }}>{track.dur}</span>
            </div>
          ))}
        </div>
        {cd.note && (
          <div style={{ padding: '10px 12px', borderTop: '1px solid #1a1a1a' }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: '#555', fontStyle: 'italic' }}>{cd.note}</div>
          </div>
        )}
      </div>
      {cd.small && (
        <div style={{ border: '2px dashed #333', background: '#0a0a0a', padding: 16, textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '3px dashed #222', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 22, opacity: 0.3 }}>💿</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#444', lineHeight: 1.6 }}>what would you put on a cd for someone you like?</div>
        </div>
      )}
    </div>
  );
}
