export default function PhotoGrid() {
  return (
    <div className="hidden sm:grid grid-cols-2 gap-3">
      <div className="pf fp dh" style={{ overflow: 'hidden', height: 130, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pictures/IMG_snow.png" alt="night" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.3) saturate(.75) brightness(.85)' }} />
        <div style={{ position: 'absolute', bottom: 6, left: 6, fontFamily: "'Caveat', cursive", fontSize: 14, color: 'rgba(255,255,255,.7)' }}>munich, 20:00</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="pf2 fp dh" style={{ overflow: 'hidden', height: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pictures/1000024739.JPG" alt="skate" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: "50% -307px", filter: 'contrast(1.4) saturate(.65) brightness(.8)' }} />
        </div>
        <div className="pf fp dh" style={{ overflow: 'hidden', height: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/pictures/812025e0-e624-42ef-9e31-62ac3055fbab.JPG" alt="music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.65) brightness(.75)' }} />
        </div>
      </div>
    </div>
  );
}
