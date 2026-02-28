'use client';

import { polaroidPhotos } from '@/data/polaroids';

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
          {polaroidPhotos.map((p, i) => (
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
