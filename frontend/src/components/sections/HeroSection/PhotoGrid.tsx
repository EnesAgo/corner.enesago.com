export default function PhotoGrid() {
  return (
    <div className="hidden sm:grid grid-cols-2 gap-3">
      <div className="pf fp dh" style={{ overflow: 'hidden', height: 130, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop" alt="night" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.3) saturate(.75) brightness(.85)' }} />
        <div style={{ position: 'absolute', bottom: 6, left: 6, fontFamily: "'Caveat', cursive", fontSize: 12, color: 'rgba(255,255,255,.7)' }}>munich, 2am 🌃</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="pf2 fp dh" style={{ overflow: 'hidden', height: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=300&h=200&fit=crop" alt="skate" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.4) saturate(.65) brightness(.8)' }} />
        </div>
        <div className="pf fp dh" style={{ overflow: 'hidden', height: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop" alt="music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.55) brightness(.75)' }} />
        </div>
      </div>
    </div>
  );
}
