import CDCard from './CDCard';
import { cds } from '@/data/burnedCds';

export default function BurnedCDsSection() {
  return (
    <section id="playlist" style={{ background: '#0a0a0a', borderTop: '3px solid #FF2D78', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 006</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>BURNED CDs</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FF2D78,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cds.map((cd, i) => (
            <CDCard key={i} cd={cd} />
          ))}
        </div>
      </div>
    </section>
  );
}
