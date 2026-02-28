const tapes = [
  { title: 'nocturne_eb_major_take3.mp4', meta: 'NOV 12 · 23:14 · piano', dur: '3:42', borderColor: '#9B59FF' },
  { title: 'cover_i_miss_you_vocals.mp4', meta: 'OCT 28 · 01:33 · piano + vocals', dur: '4:11', borderColor: '#FF2D78' },
  { title: 'original_thing_no_name_yet.mp4', meta: 'OCT 15 · 02:58 · original', dur: '2:07', borderColor: '#FFE500' },
  { title: 'singing_alone_at_3am.mp4', meta: 'SEP 30 · 03:12 · vocals only', dur: '1:55', borderColor: '#00C8FF' },
];

export default function MusicSection() {
  return (
    <section id="music" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 005</span>
        <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>MUSIC / PIANO</h2>
        <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#9B59FF,transparent)' }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Video */}
          <div style={{ border: '3px solid #9B59FF', background: '#0d0d0d', boxShadow: '6px 6px 0px #9B59FF', overflow: 'hidden' }}>
            <div style={{ background: '#110d1a', padding: '8px 14px', borderBottom: '2px solid #9B59FF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="md" style={{ background: '#FF2D78', width: 8, height: 8 }} />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#9B59FF', textTransform: 'uppercase', letterSpacing: 1 }}>tape_archive</span>
              </div>
              <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#444' }}>SONY DCR-HC52</span>
            </div>
            <div className="wcf" style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=400&fit=crop" alt="piano" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturate(.45) brightness(.6) sepia(.2)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%,rgba(0,0,0,.85))' }} />
              <div className="vhs" style={{ position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: 'rgba(155,89,255,.8)', marginBottom: 5 }}>recorded on my laptop webcam, 11pm</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: '#fff', letterSpacing: 1 }}>Nocturne in E-flat — Chopin (badly)</div>
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 52, height: 52, background: 'rgba(155,89,255,.85)', border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: '#fff', fontSize: 18, marginLeft: 4 }}>▶</span>
              </div>
            </div>
          </div>
          <div style={{ border: '2px dashed #333', padding: 14, background: '#0a0a0a' }}>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#666', lineHeight: 1.7, margin: 0 }}>&quot;i&apos;m not a musician. i just play piano and sometimes sing when nobody&apos;s home. these are webcam recordings. the quality is bad. the feeling is real.&quot;</p>
          </div>
        </div>
        {/* Tape archive list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ border: '2px solid #222', background: '#0d0d0d', overflow: 'hidden' }}>
            <div style={{ background: '#111', padding: '8px 12px', borderBottom: '2px solid #222' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#9B59FF', textTransform: 'uppercase', letterSpacing: 1 }}>📼 tape archive</span>
            </div>
            <div>
              {tapes.map((tape, i) => (
                <div key={i} className="hs" style={{ padding: '10px 14px', borderBottom: i < tapes.length - 1 ? '1px solid #111' : 'none', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                  <div style={{ width: 32, height: 32, background: '#1a1a1a', border: `2px solid ${tape.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>▶</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#ccc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tape.title}</div>
                    <div style={{ fontFamily: "'VT323', monospace", fontSize: 13, color: '#444' }}>{tape.meta}</div>
                  </div>
                  <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#444', flexShrink: 0 }}>{tape.dur}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
