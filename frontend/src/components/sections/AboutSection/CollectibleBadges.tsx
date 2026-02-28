import { collectibleBadges } from '@/data/about';

export default function CollectibleBadges() {
  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', padding: 12 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// collectibles unlocked</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {collectibleBadges.map((b, i) => (
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
