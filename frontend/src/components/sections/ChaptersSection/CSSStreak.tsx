export default function CSSStreak() {
  return (
    <div className="spb" style={{ border: '3px solid #FF6B00', background: '#0d0800', boxShadow: '6px 6px 0px #FF6B00', overflow: 'hidden' }}>
      <div style={{ background: '#1a0d00', padding: '8px 14px', borderBottom: '2px solid #FF6B00', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 14 }}>🔥</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FF6B00', textTransform: 'uppercase', letterSpacing: 1 }}>cssbattle.dev — streak</span>
      </div>
      <div style={{ padding: 14, display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: '#FF6B00', lineHeight: 1, textShadow: '0 0 20px rgba(255,107,0,.4)' }}>121</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#3a2000', textTransform: 'uppercase', letterSpacing: 2 }}>day streak</div>
        </div>
        <div style={{ flex: 1, borderLeft: '2px solid #1a0d00', paddingLeft: 12 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, color: '#FF6B00', letterSpacing: 2, marginBottom: 4 }}>TOP #50 GLOBAL</div>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#664400', lineHeight: 1.5, margin: '0 0 8px 0' }}>&quot;121 days of daily css challenges. no days off. pure pixel obsession.&quot;</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ background: '#FF6B00', color: '#000', border: '2px solid #000', padding: '2px 6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700 }}>CSS</span>
            <span style={{ border: '1px solid #FF6B00', color: '#FF6B00', padding: '2px 6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9 }}>top 50 🏆</span>
          </div>
        </div>
      </div>
    </div>
  );
}
