interface FooterProps {
  eggsFound: number;
  entryCount: number;
  visitCount: number;
}

export default function Footer({ eggsFound, entryCount, visitCount }: FooterProps) {
  const pages = [
    { href: '#home', label: '→ home', color: '#444' },
    { href: '#about', label: '→ about', color: '#444' },
    { href: '#projects', label: '→ projects', color: '#444' },
    { href: '#chapters', label: '→ chapters', color: '#444' },
    { href: '#sysCore', label: '→ system core', color: '#00FF88' },
    { href: '#music', label: '→ music', color: '#444' },
    { href: '#playlist', label: '→ 💿 burned cds', color: '#FF2D78' },
    { href: '#blog', label: '→ blog', color: '#444' },
    { href: '#guestbook', label: '→ guestbook', color: '#FFE500' },
    { href: '#lab', label: '→ lab ⚗', color: '#444' },
  ];

  const secrets = [
    { hint: '↑↑↓↓←→←→BA', desc: 'konami code' },
    { hint: 'type "billcipher"', desc: 'gravity falls' },
    { hint: 'click the ae logo', desc: 'time capsule' },
    { hint: 'open the inventory', desc: 'minecraft world' },
    { hint: 'find the hidden folder', desc: 'private.txt' },
  ];

  const thanks = [
    { text: 'благодарам 🇲🇰', color: '#FFE500' },
    { text: 'teşekkürler 🇹🇷', color: '#FF2D78' },
    { text: 'danke 🇩🇪', color: '#00C8FF' },
    { text: 'thank you 🇬🇧', color: '#f0f0f0' },
  ];

  return (
    <footer style={{ background: '#080808', borderTop: '3px solid #FFE500' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: '#FFE500', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#000', boxShadow: '2px 2px 0px #fff', flexShrink: 0 }}>AE</div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#FFE500', letterSpacing: 2 }}>ENESAGO.EXE</span>
            </div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#444', lineHeight: 1.85, maxWidth: 340, margin: '0 0 16px 0' }}>
              a personal website. just a person on the internet making stuff and writing about it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
              {thanks.map((t, i) => (
                <span
                  key={i}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#222', cursor: 'default', transition: 'color .2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = t.color)}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#222')}
                >
                  {t.text}
                </span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#FFE500', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14, borderBottom: '1px solid #111', paddingBottom: 8 }}>PAGES</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {pages.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="lh"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: p.color, textDecoration: 'none', transition: 'color .15s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseOut={(e) => (e.currentTarget.style.color = p.color)}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>

          {/* Secrets */}
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#FFE500', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14, borderBottom: '1px solid #111', paddingBottom: 8 }}>SECRETS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {secrets.map((s, i) => (
                <div key={i} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222', lineHeight: 1.7 }}>
                  {s.hint}<br /><span style={{ color: '#1a1a1a' }}>{s.desc}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#1a1a1a', border: '1px solid #111', padding: '6px 10px' }}>
                {eggsFound}/5 secrets found
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '2px solid #111', paddingTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222' }}>© 2024 ENESAGO.EXE · built with html, css, vibes, and too many Duman songs</div>
          <div style={{ fontFamily: "'VT323', monospace", fontSize: 15, color: '#1a1a1a' }}>visitors: {String(visitCount).padStart(6, '0')} · entries: {entryCount}</div>
        </div>
      </div>
    </footer>
  );
}
