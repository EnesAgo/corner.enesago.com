import { universityModules, securitySkills } from '@/data/systemCore';
import InteractiveTerminal from './InteractiveTerminal';

export default function SystemCoreSection() {

  return (
    <section id="sysCore" style={{ background: '#050508', borderTop: '3px solid #00FF88', borderBottom: '3px solid #00FF88', position: 'relative', overflow: 'hidden' }}>
      <div className="sln" />
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px', position: 'relative', zIndex: 2 }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#1a4a1a', textTransform: 'uppercase', letterSpacing: 3 }}>// 004</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#00FF88', letterSpacing: -1, margin: 0, textShadow: '0 0 20px rgba(0,255,136,.3)' }}>SYSTEM CORE</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00FF88,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Interactive Terminal */}
          <InteractiveTerminal />
          {/* Right info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ border: '2px solid #1a3a1a', background: '#020a02', padding: 16 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#1a4a1a', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// why cyber security</div>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#557755', lineHeight: 1.7, margin: 0 }}>i build things. i want to understand how they break. security isn&apos;t separate from development — it&apos;s the same thing, just from a different angle. also hacking sounds cool and i won&apos;t pretend otherwise.</p>
            </div>
            <div style={{ border: '2px solid #1a3a1a', background: '#020a02', padding: 16 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#1a4a1a', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// current modules</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {universityModules.map((m) => (
                  <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00FF88' }}>▶</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#557755' }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: '2px dashed #1a3a1a', background: '#010501', padding: 14 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#1a4a1a', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>// dev + security</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {securitySkills.map((s) => (
                  <span key={s} style={{ background: '#001a00', color: '#00FF88', border: '1px solid #00FF88', padding: '3px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, textTransform: 'uppercase' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
