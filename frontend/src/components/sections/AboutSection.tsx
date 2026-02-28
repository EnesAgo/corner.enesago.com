interface AboutSectionProps {
  onOpenEgg: (n: number) => void;
}

export default function AboutSection({ onOpenEgg }: AboutSectionProps) {
  return (
    <section id="about" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Profile Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <ProfileCard />
          <CollectibleBadges />
          <SocialLinks />
        </div>

        {/* Right: About Content */}
        <div className="lg:col-span-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 001</span>
            <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>WHO AM I</h2>
            <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FFE500,transparent)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#777', lineHeight: 1.85, margin: 0 }}>
              i started coding when i was 16 because i wanted to make a website for my skate crew. it was terrible. it had autoplay music and a hit counter. i loved it. now i build production apps but i still think about that site.
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#777', lineHeight: 1.85, margin: 0 }}>
              by day: fullstack dev + cyber security student in munich. by night: skating, playing piano, burning mix cds, taking photos with a disposable camera, and writing blog posts nobody asked for.
            </p>
          </div>

          <ThingsICareAbout />
          <CurrentlyInto />
          <SkillBars />
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  const info = [
    { label: 'status', value: 'available', color: '#00FF88', dot: true },
    { label: 'location', value: 'Munich, DE 🇩🇪', color: '#888' },
    { label: 'studying', value: 'Cyber Security', color: '#888' },
    { label: 'working', value: 'Zenfulfillment', color: '#00FF88' },
    { label: 'vibe', value: 'chaotic good', color: '#FFE500', font: "'Caveat', cursive", size: 14 },
  ];

  return (
    <div style={{ border: '3px solid #FFE500', background: '#0d0d0d', boxShadow: '6px 6px 0px #FFE500', overflow: 'hidden' }}>
      <div style={{ background: '#FFE500', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>profile.html</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000' }}>✕ □ —</span>
      </div>
      <div className="fp" style={{ overflow: 'hidden', height: 180, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturate(.85) brightness(.9)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.85))', padding: '20px 12px 10px' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: '#fff', letterSpacing: 1 }}>ENES AGO</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#888' }}>Skopje → Munich → The Internet</div>
        </div>
      </div>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
        {info.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < info.length - 1 ? '1px solid #111' : 'none', paddingBottom: i < info.length - 1 ? 4 : 0 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase' }}>{item.label}</span>
            <span style={{ fontFamily: item.font || "'IBM Plex Mono', monospace", fontSize: item.size || 9, color: item.color, display: 'flex', alignItems: 'center', gap: 4 }}>
              {item.dot && <span className="md" style={{ background: item.color, width: 6, height: 6 }} />}
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectibleBadges() {
  const badges = [
    { text: '🦅 INTERN', bg: '#FF2D78', color: '#fff', r: '-2deg', delay: '0s' },
    { text: '🇩🇪 MUNICH', bg: '#00FF88', color: '#000', r: '3deg', delay: '.5s' },
    { text: '🔥 121 DAYS', bg: '#FF6B00', color: '#fff', r: '-1deg', delay: '1s' },
    { text: '🏆 TOP #50', bg: '#9B59FF', color: '#fff', r: '2deg', delay: '1.5s' },
    { text: '🔐 SEC LAB', bg: '#00C8FF', color: '#000', r: '-3deg', delay: '.8s' },
    { text: '⛏ ALPHA', bg: '#5D9E3F', color: '#fff', r: '1.5deg', delay: '1.2s' },
    { text: '🌍 4 LANGS', bg: '#FFE500', color: '#000', r: '-2.5deg', delay: '.3s' },
  ];

  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', padding: 12 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// collectibles unlocked</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {badges.map((b, i) => (
          <div
            key={i}
            className="flb"
            style={{
              ['--r' as string]: b.r,
              background: b.bg,
              color: b.color,
              border: '2px solid #000',
              padding: '4px 8px',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 7,
              boxShadow: '2px 2px 0px #000',
              transform: `rotate(${b.r})`,
              animationDelay: b.delay,
              cursor: 'default',
            }}
          >
            {b.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[
        { text: 'github.com/devkid' },
        { text: 'devkid@proton.me' },
      ].map((link) => (
        <a
          key={link.text}
          href="#"
          className="lh"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#555', textDecoration: 'none', border: '2px solid #111', padding: '7px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all .15s' }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#fff'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = '#111'; e.currentTarget.style.color = '#555'; }}
        >
          <span>{link.text}</span><span>→</span>
        </a>
      ))}
    </div>
  );
}

function ThingsICareAbout() {
  const interests = [
    { text: '🛹 skateboarding', bg: '#FF2D78', color: '#fff', r: '-2.5deg' },
    { text: '🎸 punk/rock', bg: '#FFE500', color: '#000', r: '3deg' },
    { text: '🎤 hip-hop', bg: '#00C8FF', color: '#000', r: '-1.5deg' },
    { text: '📸 film photography', bg: '#00FF88', color: '#000', r: '2.5deg' },
    { text: '💿 cd burning', bg: '#9B59FF', color: '#fff', r: '-3.5deg' },
    { text: '🌃 night city', bg: '#111', color: '#FFE500', r: '1.5deg', borderColor: '#FFE500', shadowColor: '#FFE500' },
    { text: '🎹 piano & singing', bg: '#FF6B00', color: '#fff', r: '-2deg' },
    { text: '🎮 minecraft', bg: '#5D9E3F', color: '#fff', r: '2deg' },
  ];

  const languages = [
    { text: '🇬🇧 english', bg: '#FF2D78', color: '#fff', r: '-2deg' },
    { text: '🇲🇰 macedonian', bg: '#FFE500', color: '#000', r: '3.5deg' },
    { text: '🇹🇷 turkish', bg: '#00C8FF', color: '#000', r: '-1.5deg' },
  ];

  return (
    <div style={{ border: '2px solid #111', padding: 16, background: '#0a0a0a', marginBottom: 16 }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>things i care about:</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        {interests.map((t) => (
          <span
            key={t.text}
            style={{ display: 'inline-block', transform: `rotate(${t.r})`, transition: 'transform .2s', background: t.bg, color: t.color, border: `2px solid ${t.borderColor || '#000'}`, padding: '5px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', boxShadow: `3px 3px 0px ${t.shadowColor || '#000'}`, cursor: 'default' }}
            onMouseOver={(e) => (e.currentTarget.style.transform = `rotate(${parseFloat(t.r) * -0.5}deg) scale(1.08)`)}
            onMouseOut={(e) => (e.currentTarget.style.transform = `rotate(${t.r})`)}
          >
            {t.text}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #1a1a1a' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>languages i speak:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {languages.map((l) => (
            <span key={l.text} style={{ display: 'inline-block', transform: `rotate(${l.r})`, background: l.bg, color: l.color, border: '2px solid #000', padding: '5px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', boxShadow: '3px 3px 0px #000', cursor: 'default' }}>{l.text}</span>
          ))}
          <span style={{ display: 'inline-block', transform: 'rotate(2deg)', background: '#111', color: '#00FF88', border: '2px dashed #00FF88', padding: '5px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', boxShadow: '3px 3px 0px #00FF88', cursor: 'default' }}>
            🇩🇪 german <span style={{ fontFamily: "'Caveat', cursive", fontSize: 11, fontWeight: 400, textTransform: 'lowercase' }}>learning...</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function CurrentlyInto() {
  const items = [
    { icon: '🎵', label: 'listening', value: 'Blink-182', sub: 'also: Kanye, Strokes', color: '#888' },
    { icon: '💻', label: 'coding', value: 'NightShot v2', sub: 'photo sharing', color: '#00FF88' },
    { icon: '📖', label: 'reading', value: 'Clean Architecture', sub: 'Robert C. Martin', color: '#888' },
    { icon: '🇩🇪', label: 'learning', value: 'Deutsch', sub: 'langsam aber sicher', color: '#FFE500' },
  ];

  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', overflow: 'hidden', marginBottom: 16 }}>
      <div style={{ padding: '8px 14px', borderBottom: '2px solid #111', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div className="md" style={{ background: '#00FF88', width: 8, height: 8 }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00FF88', textTransform: 'uppercase', letterSpacing: 2 }}>currently into</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ padding: 14, gap: 10 }}>
        {items.map((item) => (
          <div key={item.label} style={{ border: '1px solid #111', padding: 10, background: '#080808' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#333', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{item.icon} {item.label}</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: item.color, lineHeight: 1.4 }}>
              {item.value}<br /><span style={{ color: '#555', fontSize: 11 }}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillBars() {
  const skills = [
    { name: 'React / Next.js', pct: 92, color: '#FF2D78', grad: 'linear-gradient(90deg,#FF2D78,#9B59FF)', delay: '0s' },
    { name: 'NestJS / Node.js', pct: 85, color: '#FFE500', grad: 'linear-gradient(90deg,#FFE500,#FF2D78)', delay: '.5s' },
    { name: 'MongoDB / Redis', pct: 78, color: '#00FF88', grad: 'linear-gradient(90deg,#00FF88,#00C8FF)', delay: '.7s' },
    { name: 'Cyber Security', pct: 68, color: '#00C8FF', grad: 'linear-gradient(90deg,#00C8FF,#9B59FF)', delay: '.9s' },
  ];

  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', overflow: 'hidden' }}>
      <div style={{ padding: '8px 14px', borderBottom: '2px solid #111', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 8, height: 8, background: '#FF2D78', borderRadius: '50%' }} />
        <div style={{ width: 8, height: 8, background: '#FFE500', borderRadius: '50%' }} />
        <div style={{ width: 8, height: 8, background: '#00FF88', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginLeft: 8 }}>skill_levels.exe</span>
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {skills.map((skill) => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#777' }}>{skill.name}</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: skill.color }}>{skill.pct}%</span>
            </div>
            <div style={{ height: 6, background: '#111', border: '1px solid #1a1a1a' }}>
              <div className="sbf" style={{ ['--tw' as string]: `${skill.pct}%`, height: '100%', background: skill.grad, animationDelay: skill.delay }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
