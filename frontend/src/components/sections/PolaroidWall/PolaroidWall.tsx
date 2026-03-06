'use client';

const photos = [
  { src: '/pictures/IMG_snow.png', full: '/pictures/IMG_snow.png', cap: 'munich, 2am', fullCap: 'munich, 2am 🌃', rot: '-3deg' },
  { src: '/pictures/1000024739.JPG', full: '/pictures/1000024739.JPG', cap: 'the shot 🛹🔥', fullCap: 'the shot 🛹🔥', rot: '2deg' },
  { src: '/pictures/myCar.JPG', full: '/pictures/myCar.JPG', cap: 'the love', fullCap: 'the love audi a3', rot: '2deg' },
  { src: '/pictures/piano.JPG', full: '/pictures/piano.JPG', cap: '2am piano 🎹', fullCap: '2am piano 🎹', rot: '-1.5deg' },
  { src: '/pictures/pop_shovit.jpg', full: '/pictures/pop_shovit.jpg', cap: 'pop shov 🛹', fullCap: 'pop shov 🛹', rot: '3.5deg' },
  { src: '/pictures/weihnachtsmarktmuenchen.png', full: '/pictures/weihnachtsmarktmuenchen.png', cap: 'new year market munich', fullCap: 'new year market munich', rot: '-2.5deg' },
  { src: '/pictures/meAndMyCar.png', full: '/pictures/meAndMyCar.png', cap: 'meAndMyCar.png', fullCap: 'me And My Car', rot: '3.5deg' },
  { src: '/pictures/foggyMunchen.png', full: '/pictures/foggyMunchen.png', cap: 'foggy munich', fullCap: 'foggy munich', rot: '-1.5deg' },
  // { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop', cap: '3am coding 💻', fullCap: '3am coding 💻', rot: '1deg' },
  // { src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=200&fit=crop', full: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=800&fit=crop', cap: '???', fullCap: 'you found it 👀', rot: '-4deg', secret: true },
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
              className={`pol`}
              style={{ transform: `rotate(${p.rot})`, flexShrink: 0, width: 120, cursor: 'pointer' }}
              onClick={() => openLB(p.full, p.fullCap)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.cap} style={{ width: '100%', height: 90, objectFit: 'cover', filter: `contrast(1.2) saturate('.6') brightness('.85')`, display: 'block' }} />
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 11, color: '#333', textAlign: 'center', paddingTop: 6 }}>{p.cap}</div>
              {/* {p.secret && <div className="tc">secret photo 👀</div>} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
