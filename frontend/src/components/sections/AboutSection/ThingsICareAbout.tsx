const interests = [
  { text: '🛹 skateboarding', bg: '#FF2D78', color: '#fff', r: '-2.5deg' },
  { text: '🎸 punk/rock', bg: '#FFE500', color: '#000', r: '3deg' },
  { text: '🎤 hip-hop', bg: '#00C8FF', color: '#000', r: '-1.5deg' },
  { text: '📸 film photography', bg: '#00FF88', color: '#000', r: '2.5deg' },
  { text: '💿 cd burning', bg: '#9B59FF', color: '#fff', r: '-3.5deg' },
  { text: '🌃 night city', bg: '#111', color: '#FFE500', r: '1.5deg', borderColor: '#FFE500', shadowColor: '#FFE500' },
  { text: '🎹 piano & singing', bg: '#FF6B00', color: '#fff', r: '-2deg' },
  { text: '🎮 minecraft', bg: '#5D9E3F', color: '#fff', r: '2deg' },
];

const languages = [
  { text: '🇬🇧 english', bg: '#FF2D78', color: '#fff', r: '-2deg' },
  { text: '🇲🇰 macedonian', bg: '#FFE500', color: '#000', r: '3.5deg' },
  { text: '🇹🇷 turkish', bg: '#00C8FF', color: '#000', r: '-1.5deg' },
];

export default function ThingsICareAbout() {
  return (
    <div style={{ border: '2px solid #111', padding: 16, background: '#0a0a0a', marginBottom: 16 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>things i care about:</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        {interests.map((t) => (
          <span
            key={t.text}
            style={{ display: 'inline-block', transform: `rotate(${t.r})`, transition: 'transform .2s', background: t.bg, color: t.color, border: `2px solid ${t.borderColor || '#000'}`, padding: '5px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', boxShadow: `3px 3px 0px ${t.shadowColor || '#000'}`, cursor: 'default' }}
            onMouseOver={(e) => (e.currentTarget.style.transform = `rotate(${parseFloat(t.r) * -0.5}deg) scale(1.08)`)}
            onMouseOut={(e) => (e.currentTarget.style.transform = `rotate(${t.r})`)}
          >
            {t.text}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #1a1a1a' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>languages i speak:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {languages.map((l) => (
            <span key={l.text} style={{ display: 'inline-block', transform: `rotate(${l.r})`, background: l.bg, color: l.color, border: '2px solid #000', padding: '5px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', boxShadow: '3px 3px 0px #000', cursor: 'default' }}>{l.text}</span>
          ))}
          <span style={{ display: 'inline-block', transform: 'rotate(2deg)', background: '#111', color: '#00FF88', border: '2px dashed #00FF88', padding: '5px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', boxShadow: '3px 3px 0px #00FF88', cursor: 'default' }}>
            🇩🇪 german <span style={{ fontFamily: "'Caveat', cursive", fontSize: 11, fontWeight: 400, textTransform: 'lowercase' }}>learning...</span>
          </span>
        </div>
      </div>
    </div>
  );
}
