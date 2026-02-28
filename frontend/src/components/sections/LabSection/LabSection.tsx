import ExperimentCard from './ExperimentCard';

export default function LabSection() {
  return (
    <section id="lab" style={{ background: '#0a0a0a', borderTop: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 010</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>THE LAB ⚗</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00FF88,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ExperimentCard
            num="001"
            color="#00FF88"
            title="CSS Glitch Generator"
            desc="real-time css glitch effects. type something, watch it break. pure css, no js."
          >
            <div style={{ border: '2px solid #111', padding: 12, background: '#080808', marginBottom: 14 }}>
              <div className="gt" data-text="HELLO WORLD" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: '#00FF88', letterSpacing: 2 }}>HELLO WORLD</div>
            </div>
          </ExperimentCard>
          <ExperimentCard
            num="002"
            color="#FFE500"
            title="VHS Filter Canvas"
            desc="drop any image, get vhs scanlines + grain + color bleed. canvas api + webgl."
          >
            <div style={{ border: '2px solid #111', overflow: 'hidden', height: 72, position: 'relative', marginBottom: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=400&h=200&fit=crop" alt="vhs" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.4) saturate(.25) brightness(.65)' }} />
              <div className="vhs" style={{ position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', top: 6, right: 8, fontFamily: "'VT323', monospace", fontSize: 14, color: 'rgba(255,45,120,.85)' }}>VHS ●</div>
            </div>
          </ExperimentCard>
          <ExperimentCard
            num="003"
            color="#FF2D78"
            title="Pixel Font Renderer"
            desc="render any text in retro pixel fonts. export as svg or png. for stickers, obviously."
          >
            <div style={{ border: '2px solid #111', padding: 12, background: '#080808', marginBottom: 14, textAlign: 'center' }}>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 12, color: '#FF2D78', lineHeight: 1.9 }}>PIXEL<br />PERFECT</span>
            </div>
          </ExperimentCard>
        </div>
      </div>
    </section>
  );
}
