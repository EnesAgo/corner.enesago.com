export interface Project {
  featured?: boolean;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  badges: { text: string; bg: string; color: string }[];
  tagColor: string;
}

export default function ProjectCard({ project: p }: { project: Project }) {
  const border = p.featured ? '3px solid #FFE500' : '2px solid #222';
  const shadow = p.featured ? '6px 6px 0px #FFE500' : '4px 4px 0px #222';
  const imgH = p.featured ? 200 : p.badges[0]?.text === 'API' ? 120 : 100;

  return (
    <div
      className={`hl hs ${p.featured ? 'md:col-span-2' : ''}`}
      style={{ border, background: '#0d0d0d', boxShadow: shadow, overflow: 'hidden', display: p.featured ? undefined : 'flex', flexDirection: p.featured ? undefined : 'column' }}
    >
      <div className="dh" style={{ position: 'relative', height: imgH, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.img} alt="project" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.55) brightness(.65)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 35%,rgba(0,0,0,.92))' }} />
        <div style={{ position: 'absolute', top: 8, left: 8, display: 'flex', gap: 6 }}>
          {p.badges.map((b) => (
            <span key={b.text} style={{ background: b.bg, color: b.color, border: '2px solid #000', padding: '2px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, textTransform: 'uppercase' }}>{b.text}</span>
          ))}
        </div>
        {p.featured && (
          <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
            <h3 className="font-heading" style={{ fontSize: 'clamp(16px,3vw,22px)', fontWeight: 700, color: '#fff', margin: '0 0 5px 0' }}>{p.title}</h3>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#999', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
          </div>
        )}
      </div>
      <div style={{ padding: p.featured ? '12px 16px' : 14, borderTop: p.featured ? '2px solid #1a1a1a' : undefined, flex: p.featured ? undefined : 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {!p.featured && (
          <div style={{ marginBottom: 10 }}>
            <h3 className="font-heading" style={{ fontSize: p.badges[0]?.text === 'API' ? 15 : 14, fontWeight: 700, color: '#f0f0f0', margin: '0 0 5px 0' }}>{p.title}</h3>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#555', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: p.featured ? 'center' : undefined, justifyContent: p.featured ? 'space-between' : undefined, flexWrap: p.featured ? 'wrap' : undefined, gap: p.featured ? 8 : 4 }}>
          <div style={{ display: 'flex', gap: p.featured ? 6 : 4, flexWrap: 'wrap' }}>
            {p.tags.map((t) => (
              <span key={t} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: p.tagColor, border: `1px solid ${p.tagColor}`, padding: p.featured ? '2px 6px' : '1px 5px' }}>{t}</span>
            ))}
          </div>
          {p.featured && (
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="#" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', background: '#FFE500', border: '2px solid #000', padding: '5px 14px', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase' }}>LIVE →</a>
              <a href="#" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#888', background: 'transparent', border: '2px solid #333', padding: '5px 14px', textDecoration: 'none', textTransform: 'uppercase' }}>CODE</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
