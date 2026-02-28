export default function FeaturedPost() {
  return (
    <div className="hl hs" style={{ border: '3px solid #00C8FF', background: '#0d0d0d', boxShadow: '6px 6px 0px #00C8FF', overflow: 'hidden' }}>
      <div className="dh" style={{ position: 'relative', height: 190, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop" alt="blog" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.55) brightness(.65)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 25%,rgba(0,0,0,.92))' }} />
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <span style={{ background: '#00C8FF', color: '#000', border: '2px solid #000', padding: '2px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, textTransform: 'uppercase' }}>LATEST</span>
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
          <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#555', marginBottom: 5 }}>NOV 14 2024 · 03:47</div>
          <h3 className="font-heading" style={{ fontSize: 'clamp(16px,3vw,20px)', fontWeight: 700, color: '#fff', margin: '0 0 5px 0' }}>Why I Still Burn CDs in 2024</h3>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', margin: 0, lineHeight: 1.6 }}>there&apos;s something about making a physical thing that streaming will never replace.</p>
        </div>
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #111', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00C8FF', border: '1px solid #00C8FF', padding: '2px 6px' }}>culture</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00C8FF', border: '1px solid #00C8FF', padding: '2px 6px' }}>music</span>
        </div>
        <a href="#" className="lh" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00C8FF', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1 }}>READ MORE →</a>
      </div>
    </div>
  );
}
