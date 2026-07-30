'use client';

import { openLightbox } from '@/components/ui';

const scenes = [
  {
    src: '/pictures/room.png',
    title: 'my room',
    sub: '',
    accent: '#9B59FF',
    vhs: true,
  },
  {
    src: '/pictures/car.png',
    title: 'ohrid nights',
    sub: 'me and my love · audi a3',
    accent: '#FF6B00',
    vhs: false,
  },
];

export default function ScenesSection() {
  return (
    <section id="scenes" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// scenes</span>
        <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>MY WORLD</h2>
        <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#9B59FF,transparent)' }} />
      </div>

      <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        {scenes.map((s) => (
          <div
            key={s.src}
            className="hl hs"
            onClick={() => openLightbox(s.src, `${s.title} — ${s.sub}`)}
            style={{ border: `3px solid ${s.accent}`, background: '#0d0d0d', boxShadow: `6px 6px 0px ${s.accent}`, overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', maxWidth: '100%', position: 'relative', zIndex: s.vhs ? undefined : 9991 }}
          >
            <div className="dh" style={{ position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.title} className="scene-img" />
              {s.vhs && <div className="vhs" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />}
            </div>
            <div style={{ padding: '10px 14px', borderTop: `2px solid ${s.accent}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
              <span className="font-heading" style={{ fontSize: 16, fontWeight: 700, color: '#f0f0f0', letterSpacing: 0.5 }}>{s.title}</span>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: s.accent }}>{s.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
