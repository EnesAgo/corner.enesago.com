'use client';

const photos = [
  { src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=800&fit=crop', cap: 'munich, 2am', fullCap: 'munich, 2am 🌃', rot: '-3deg' },
  { src: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=800&h=800&fit=crop', cap: 'the spot 🛹', fullCap: 'the spot 🛹', rot: '2deg' },
  { src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=800&fit=crop', cap: '2am piano 🎹', fullCap: '2am piano 🎹', rot: '-1.5deg' },
  { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop', cap: 'burning cds 💿', fullCap: 'burning cds 💿', rot: '3.5deg' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=800&fit=crop', cap: 'night walk 🌃', fullCap: 'night walk 🌃', rot: '-2.5deg' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop', cap: '3am coding 💻', fullCap: '3am coding 💻', rot: '1deg' },
  { src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=800&fit=crop', cap: '???', fullCap: 'you found it 👀', rot: '-4deg', secret: true },
];

export default function PolaroidWall() {
  const openLB = (src: string, cap: string) => {
    if (typeof window !== 'undefined' && (window as any).__openLightbox) {
      (window as any).__openLightbox(src, cap);
    }
  };

  return (
    <section style={{ overflow: 'hidden', background: '#080808', borderTop: '2px solid #0f0f0f', borderBottom: '2px solid #0f0f0f' }}>
      <div style={{ padding: '24px 16px' }} className="md:px-8">
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 16 }}>// photos</div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', overflowX: 'auto', paddingBottom: 8 }}>
          {photos.map((p, i) => (
            <div
              key={i}
              className={`pol ${p.secret ? 'tt' : ''}`}
              style={{ transform: `rotate(${p.rot})`, flexShrink: 0, width: 120, cursor: 'pointer' }}
              onClick={() => openLB(p.full, p.fullCap)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.cap} style={{ width: '100%', height: 90, objectFit: 'cover', filter: `contrast(1.2) saturate(${p.secret ? '.3' : '.6'}) brightness(${p.secret ? '.5' : '.85'})`, display: 'block' }} />
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 11, color: '#333', textAlign: 'center', paddingTop: 6 }}>{p.cap}</div>
              {p.secret && <div className="tc">secret photo 👀</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
