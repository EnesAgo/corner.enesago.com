export default function ExperimentCard({ num, color, title, desc, children }: { num: string; color: string; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="hl hs" style={{ border: `2px solid ${color}`, background: '#0a0a0a', boxShadow: `4px 4px 0px ${color}`, padding: 20 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span className="md" style={{ background: color, width: 6, height: 6 }} />
        EXPERIMENT #{num}
      </div>
      <h3 className="font-heading" style={{ fontSize: 17, fontWeight: 700, color: '#f0f0f0', margin: '0 0 8px 0' }}>{title}</h3>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#555', lineHeight: 1.7, margin: '0 0 14px 0' }}>{desc}</p>
      {children}
      <a href="#" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: color === '#FF2D78' ? '#fff' : '#000', background: color, border: '2px solid #000', padding: '6px 14px', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block' }}>TRY IT →</a>
    </div>
  );
}
