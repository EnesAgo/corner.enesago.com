import { vlogThumbs } from '@/data/vlog';

export default function VlogSection() {

  return (
    <section id="vlog" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 009</span>
        <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>VLOG / FILM</h2>
        <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#9B59FF,transparent)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, border: '2px solid #FF2D78', padding: '4px 12px' }}>
          <div className="md" style={{ background: '#FF2D78' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#FF2D78', textTransform: 'uppercase', letterSpacing: 1 }}>REC</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured */}
        <div className="hl hs lg:col-span-2" style={{ border: '3px solid #9B59FF', background: '#0d0d0d', boxShadow: '6px 6px 0px #9B59FF', overflow: 'hidden' }}>
          <div className="dh" style={{ position: 'relative', height: 250, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop" alt="vlog" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.65) brightness(.6)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 25%,rgba(0,0,0,.88))' }} />
            <div className="vhs" style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'absolute', top: 12, right: 14, fontFamily: "'VT323', monospace", fontSize: 18, color: '#FF2D78', textShadow: '0 0 10px #FF2D78' }}>REC ● 00:23:47</div>
            <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
              <h3 className="font-heading" style={{ fontSize: 'clamp(16px,3vw,20px)', fontWeight: 700, color: '#fff', margin: '0 0 5px 0' }}>Night Skating in Munich — First Winter</h3>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', margin: 0, lineHeight: 1.6 }}>filmed on a sony handycam. no stabilizer. no color grade. just vibes.</p>
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 56, height: 56, background: 'rgba(155,89,255,.88)', border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ color: '#fff', fontSize: 22, marginLeft: 4 }}>▶</span>
            </div>
          </div>
          <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #111', flexWrap: 'wrap', gap: 8 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#9B59FF', border: '1px solid #9B59FF', padding: '2px 6px' }}>skateboarding</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#9B59FF', border: '1px solid #9B59FF', padding: '2px 6px' }}>munich</span>
            </div>
            <span style={{ fontFamily: "'VT323', monospace", fontSize: 16, color: '#444' }}>23:47</span>
          </div>
        </div>
        {/* Thumbnails */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {vlogThumbs.map((v) => (
            <div key={v.title} className="hl hs" style={{ border: '2px solid #222', background: '#0d0d0d', overflow: 'hidden', boxShadow: '4px 4px 0px #222', cursor: 'pointer' }}>
              <div className="dh" style={{ height: 90, overflow: 'hidden', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.img} alt="vlog" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.45) brightness(.6)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 20, opacity: 0.8 }}>▶</span>
                </div>
              </div>
              <div style={{ padding: '8px 10px' }}>
                <h4 className="font-heading" style={{ fontSize: 12, fontWeight: 700, color: '#f0f0f0', margin: '0 0 3px 0', lineHeight: 1.3 }}>{v.title}</h4>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: 13, color: '#444' }}>{v.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
