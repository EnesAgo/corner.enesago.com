export default function BlogSection() {
  return (
    <section id="blog" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 007</span>
        <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>BRAIN DUMP</h2>
        <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00C8FF,transparent)' }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: posts */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <FeaturedPost />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SmallPost date="OCT 28 · 5 MIN" title="Building Real-Time Chat with NestJS WebSockets" desc="the actual way to do it, not the tutorial way." tag="dev" />
            <SmallPost date="OCT 12 · 3 MIN" title="Playing Piano While Learning to Code" desc="both require muscle memory. both require patience." tag="life" />
          </div>
        </div>
        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <CurrentlySidebar />
          <MultilingualQuotes />
        </div>
      </div>
    </section>
  );
}

function FeaturedPost() {
  return (
    <div className="hl hs" style={{ border: '3px solid #00C8FF', background: '#0d0d0d', boxShadow: '6px 6px 0px #00C8FF', overflow: 'hidden' }}>
      <div className="dh" style={{ position: 'relative', height: 190, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop" alt="blog" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.55) brightness(.65)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 25%,rgba(0,0,0,.92))' }} />
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <span style={{ background: '#00C8FF', color: '#000', border: '2px solid #000', padding: '2px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, textTransform: 'uppercase' }}>LATEST</span>
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
          <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#555', marginBottom: 5 }}>NOV 14 2024 · 03:47</div>
          <h3 className="font-heading" style={{ fontSize: 'clamp(16px,3vw,20px)', fontWeight: 700, color: '#fff', margin: '0 0 5px 0' }}>Why I Still Burn CDs in 2024</h3>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', margin: 0, lineHeight: 1.6 }}>there&apos;s something about making a physical thing that streaming will never replace.</p>
        </div>
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '2px solid #111', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00C8FF', border: '1px solid #00C8FF', padding: '2px 6px' }}>culture</span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00C8FF', border: '1px solid #00C8FF', padding: '2px 6px' }}>music</span>
        </div>
        <a href="#" className="lh" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00C8FF', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1 }}>READ MORE →</a>
      </div>
    </div>
  );
}

function SmallPost({ date, title, desc, tag }: { date: string; title: string; desc: string; tag: string }) {
  return (
    <div className="hl hs" style={{ border: '2px solid #111', background: '#0a0a0a', padding: 16, boxShadow: '4px 4px 0px #111' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 13, color: '#444', marginBottom: 7 }}>{date}</div>
      <h4 className="font-heading" style={{ fontSize: 14, fontWeight: 700, color: '#f0f0f0', margin: '0 0 7px 0', lineHeight: 1.3 }}>{title}</h4>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#555', lineHeight: 1.65, margin: '0 0 10px 0' }}>{desc}</p>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#9B59FF', border: '1px solid #9B59FF', padding: '1px 5px' }}>{tag}</span>
    </div>
  );
}

function CurrentlySidebar() {
  const items = [
    { label: 'reading', value: 'Clean Architecture — Robert C. Martin', color: '#888' },
    { label: 'playing', value: 'Blink-182 — Enema of the State', color: '#888' },
    { label: 'coding', value: 'NightShot v2', color: '#00FF88' },
    { label: 'learning', value: 'Deutsch 🇩🇪', color: '#FFE500' },
    { label: 'feeling', value: 'chaotic but okay ✌️', color: '#FF2D78' },
  ];

  return (
    <div style={{ border: '2px solid #222', background: '#0d0d0d' }}>
      <div style={{ background: '#111', padding: '8px 12px', borderBottom: '2px solid #222' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88', textTransform: 'uppercase', letterSpacing: 1 }}>📡 currently</span>
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', minWidth: 52, letterSpacing: 1 }}>{item.label}</span>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: item.color, lineHeight: 1.4 }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MultilingualQuotes() {
  const quotes = [
    { text: '"немам идеа зошто ова работи" 🇲🇰', sub: '(i have no idea why this works)', hoverColor: '#FFE500' },
    { text: '"bu kod neden çalışıyor?" 🇹🇷', sub: '(why does this code work?)', hoverColor: '#FF2D78' },
    { text: '"ich verstehe das nicht" 🇩🇪', sub: "(i don't understand this)", hoverColor: '#00C8FF' },
  ];

  return (
    <div style={{ border: '2px dashed #1a1a1a', padding: 14, background: '#080808' }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// things i say in different languages</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {quotes.map((q) => (
          <div
            key={q.text}
            style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#333', lineHeight: 1.5, cursor: 'default', transition: 'color .2s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = q.hoverColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = '#333')}
          >
            {q.text}<br /><span style={{ fontSize: 11, color: '#222' }}>{q.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
