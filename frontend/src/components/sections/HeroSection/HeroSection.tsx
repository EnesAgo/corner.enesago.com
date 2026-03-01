import { triggerFlash } from '@/components/ui/FlashOverlay';
import WinampPlayer from './WinampPlayer';
import StatusWidget from './StatusWidget';
import PhotoGrid from './PhotoGrid';

interface HeroSectionProps {
  onOpenEgg: (n: number) => void;
}

export default function HeroSection({ onOpenEgg }: HeroSectionProps) {
  return (
    <section id="home" style={{ maxWidth: 1440, margin: '0 auto', padding: '32px 16px 40px' }} className="md:px-8 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left: Text */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 3 }}>// hello world, i&apos;m</span>
            <div style={{ flex: 1, minWidth: 40, height: 1, background: 'linear-gradient(90deg,#222,transparent)' }} />
          </div>
          <div style={{ position: 'relative', marginBottom: 20 }}>
            <h1 className="font-heading gt" data-text="ENES AGO" style={{ fontSize: 'clamp(48px,10vw,104px)', fontWeight: 700, color: '#f0f0f0', lineHeight: 0.88, letterSpacing: -3 }}>ENES AGO</h1>
            <div style={{ position: 'absolute', bottom: -6, left: 0, width: '100%', height: 3, background: 'linear-gradient(90deg,#FFE500 0%,#FF2D78 40%,#00C8FF 70%,transparent 100%)' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 14 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(20px,4vw,30px)', color: '#FF2D78', letterSpacing: 2 }}>FULLSTACK DEV</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: '#333' }}>×</span>
            <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 'clamp(18px,3vw,24px)', color: '#FFE500', transform: 'rotate(-2deg)', display: 'inline-block' }}>skater</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14, color: '#333' }}>×</span>
            <span style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(20px,3.5vw,28px)', color: '#00C8FF' }}>INTERNET ARCHAEOLOGIST</span>
          </div>

          {/* Multilingual */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 14, padding: '10px 14px', border: '1px solid #111', background: '#0a0a0a' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 2 }}>say hi:</span>
            <span className="lp" style={{ color: '#f0f0f0' }}>hey there 👋</span>
            <span style={{ color: '#1a1a1a' }}>·</span>
            <span className="lp" style={{ color: '#FFE500' }}>здраво 🇲🇰</span>
            <span style={{ color: '#1a1a1a' }}>·</span>
            <span className="lp" style={{ color: '#FF2D78' }}>merhaba 🇹🇷</span>
            <span style={{ color: '#1a1a1a' }}>·</span>
            <span className="lp" style={{ color: '#00C8FF' }}>hallo 🇩🇪</span>
          </div>

          <div style={{ position: 'relative', marginBottom: 18 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg,#FFE500,#FF2D78,#00C8FF)' }} />
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', lineHeight: 1.8, paddingLeft: 16 }}>
              i build things with react/nextjs, nestjs + mongodb. i skate, play piano, code, take skate clips, and occasionally write stuff that makes sense (just started).<br />
              <span style={{ color: '#555', fontStyle: 'italic' }}>this is my corner of the internet. not a portfolio. a place.</span>
            </p>
          </div>

          {/* Skill Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {[
              { label: 'React/Next.js', bg: '#FF2D78', color: '#fff', cls: 'sk' },
              { label: 'NestJS', bg: '#FFE500', color: '#000', cls: 'sk2' },
              { label: 'MongoDB', bg: '#00C8FF', color: '#000', cls: 'sk' },
              { label: 'TypeScript', bg: '#00FF88', color: '#000', cls: 'sk2' },
              { label: 'Cyber Security', bg: '#9B59FF', color: '#fff', cls: 'sk3' },
              { label: 'Munich 🇩🇪', bg: '#111', color: '#FFE500', cls: 'sk', borderColor: '#FFE500', shadowColor: '#FFE500' },
            ].map((tag) => (
              <span
                key={tag.label}
                className={tag.cls}
                style={{
                  background: tag.bg,
                  color: tag.color,
                  border: `2px solid ${tag.borderColor || '#000'}`,
                  padding: '4px 10px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  boxShadow: `2px 2px 0px ${tag.shadowColor || '#000'}`,
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <a
              href="#projects"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: 2, color: '#000', background: '#FFE500', border: '3px solid #000', padding: '10px 22px', textDecoration: 'none', boxShadow: '4px 4px 0px #000', transition: 'all .15s' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0px #000'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
            >
              SEE MY WORK →
            </a>
            <a
              href="#blog"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: 2, color: '#FF2D78', background: 'transparent', border: '3px solid #FF2D78', padding: '10px 22px', textDecoration: 'none', boxShadow: '4px 4px 0px #FF2D78', transition: 'all .15s' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#FF2D78'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FF2D78'; }}
            >
              READ MY BRAIN
            </a>
            <button
              className="tt"
              style={{ background: 'none', border: '2px solid #333', color: '#555', padding: '10px 14px', fontSize: 16, cursor: 'pointer', transition: 'all .15s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#555'; }}
              onClick={triggerFlash}
            >
              📸<div className="tc">take a photo!</div>
            </button>
          </div>
        </div>

        {/* Right: Winamp + Status + Photos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <WinampPlayer />
          <StatusWidget />
          <PhotoGrid />
        </div>
      </div>
    </section>
  );
}
