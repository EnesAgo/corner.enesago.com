import { universityModules, securitySkills } from '@/data/systemCore';

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
          {/* Terminal */}
          <div style={{ border: '2px solid #00FF88', background: '#020a02', boxShadow: '0 0 30px rgba(0,255,136,.08)', position: 'relative', overflow: 'hidden' }}>
            <div className="sln" style={{ animationDuration: '5s' }} />
            <div style={{ background: '#001a00', padding: '8px 14px', borderBottom: '2px solid #00FF88', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
              <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
              <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88', marginLeft: 8, opacity: 0.7 }}>terminal — mudt_system.sh</span>
            </div>
            <div style={{ padding: 18, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, lineHeight: 2 }}>
              <div style={{ color: '#1a4a1a' }}>$ whoami</div>
              <div style={{ color: '#00FF88', marginBottom: 8 }}>enes_ago · student · hacker (the good kind)</div>
              <div style={{ color: '#1a4a1a' }}>$ cat university.txt</div>
              <div style={{ color: '#00FF88', marginBottom: 8 }}>Munich University of Digital Technologies<br /><span style={{ color: '#00aa55' }}>B.Sc. Cyber Security · Munich, DE 🇩🇪</span></div>
              <div style={{ color: '#1a4a1a' }}>$ ls subjects/</div>
              <div style={{ color: '#00aa55', marginBottom: 8 }}>network_security/ &nbsp; cryptography/<br />algoritms_&_ds/ &nbsp;&nbsp; secure_coding/</div>
              <div style={{ color: '#1a4a1a' }}>$ cat current_focus.txt</div>
              <div style={{ color: '#00FF88', marginBottom: 8 }}>→ learning how to break things (legally)<br />→ the intersection of dev + security = my thing</div>
              <div style={{ color: '#1a4a1a' }}>$ uptime</div>
              <div style={{ color: '#007733' }}>enrolled for 2 semesters · still going strong</div>
              <div style={{ marginTop: 12, color: '#00FF88' }}>$ <span className="tcur">_</span></div>
            </div>
          </div>
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
