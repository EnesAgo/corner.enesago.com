const bars = [
  { color: '#FF2D78', dur: '.4s', delay: '0s', h: '60%' },
  { color: '#FF2D78', dur: '.3s', delay: '.1s', h: '90%' },
  { color: '#FFE500', dur: '.5s', delay: '0s', h: '40%' },
  { color: '#FFE500', dur: '.35s', delay: '.15s', h: '75%' },
  { color: '#00FF88', dur: '.45s', delay: '.2s', h: '55%' },
  { color: '#00C8FF', dur: '.42s', delay: '.12s', h: '45%' },
  { color: '#9B59FF', dur: '.48s', delay: '0s', h: '95%' },
  { color: '#FF2D78', dur: '.41s', delay: '.14s', h: '80%' },
];

export default function WinampPlayer() {
  return (
    <div style={{ border: '2px solid #2a2a4a', background: '#0d0d0d', boxShadow: '4px 4px 0px #FFE500', transform: 'rotate(-1deg)' }}>
      <div className="wb" style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '2px solid #2a2a4a' }}>
        <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginLeft: 8 }}>winamp.exe — now playing</span>
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, flexShrink: 0, border: '2px solid #222', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" alt="album" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.4) contrast(1.1)', opacity: 0.8 }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>I Miss You — Blink-182</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginTop: 2 }}>Take Off Your Pants · 2001</div>
          <div style={{ marginTop: 8, height: 4, background: '#1a1a1a', border: '1px solid #222' }}>
            <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg,#FF2D78,#9B59FF)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>1:47</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>3:48</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['⏮', '▶', '⏭'].map((icon, i) => (
            <button
              key={i}
              style={{
                background: i === 1 ? '#FFE500' : 'none',
                border: i === 1 ? '1px solid #000' : '1px solid #222',
                color: i === 1 ? '#000' : '#555',
                width: 26,
                height: 26,
                fontSize: 10,
                cursor: 'pointer',
                fontWeight: i === 1 ? 700 : 400,
              }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 16px 10px', display: 'flex', gap: 3, alignItems: 'flex-end', height: 28 }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: bar.color,
              animation: `eq ${bar.dur} ease-in-out infinite alternate`,
              height: bar.h,
              animationDelay: bar.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
