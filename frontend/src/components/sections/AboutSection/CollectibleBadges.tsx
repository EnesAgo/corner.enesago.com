const badges = [
  { text: '🦅 INTERN', bg: '#FF2D78', color: '#fff', r: '-2deg', delay: '0s' },
  { text: '🇩🇪 MUNICH', bg: '#00FF88', color: '#000', r: '3deg', delay: '.5s' },
  { text: '🔥 121 DAYS', bg: '#FF6B00', color: '#fff', r: '-1deg', delay: '1s' },
  { text: '🏆 TOP #50', bg: '#9B59FF', color: '#fff', r: '2deg', delay: '1.5s' },
  { text: '🔐 SEC LAB', bg: '#00C8FF', color: '#000', r: '-3deg', delay: '.8s' },
  { text: '⛏ ALPHA', bg: '#5D9E3F', color: '#fff', r: '1.5deg', delay: '1.2s' },
  { text: '🌍 4 LANGS', bg: '#FFE500', color: '#000', r: '-2.5deg', delay: '.3s' },
];

export default function CollectibleBadges() {
  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', padding: 12 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// collectibles unlocked</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {badges.map((b, i) => (
          <div
            key={i}
            className="flb"
            style={{
              ['--r' as string]: b.r,
              background: b.bg,
              color: b.color,
              border: '2px solid #000',
              padding: '4px 8px',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 7,
              boxShadow: '2px 2px 0px #000',
              transform: `rotate(${b.r})`,
              animationDelay: b.delay,
              cursor: 'default',
            }}
          >
            {b.text}
          </div>
        ))}
      </div>
    </div>
  );
}
