'use client';

import { useState } from 'react';
import { triggerFlash } from '@/components/ui/FlashOverlay';

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
              i build things with react, nextjs, nestjs + mongodb. i skate, play piano at 2am, burn cds nobody asked for, take grainy photos, and occasionally write stuff that makes sense.<br />
              <span style={{ color: '#555', fontStyle: 'italic' }}>this is my site. not a portfolio. a place.</span>
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

function WinampPlayer() {
  const bars = [
    { color: '#FF2D78', dur: '.4s', delay: '0s', h: '60%' },
    { color: '#FF2D78', dur: '.3s', delay: '.1s', h: '90%' },
    { color: '#FFE500', dur: '.5s', delay: '0s', h: '40%' },
    { color: '#FFE500', dur: '.35s', delay: '.15s', h: '75%' },
    { color: '#00FF88', dur: '.45s', delay: '.2s', h: '55%' },
    { color: '#00C8FF', dur: '.42s', delay: '.12s', h: '45%' },
    { color: '#9B59FF', dur: '.48s', delay: '0s', h: '95%' },
    { color: '#FF2D78', dur: '.41s', delay: '.14s', h: '80%' },
  ];

  return (
    <div style={{ border: '2px solid #2a2a4a', background: '#0d0d0d', boxShadow: '4px 4px 0px #FFE500', transform: 'rotate(-1deg)' }}>
      <div className="wb" style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '2px solid #2a2a4a' }}>
        <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginLeft: 8 }}>winamp.exe — now playing</span>
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, flexShrink: 0, border: '2px solid #222', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" alt="album" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.4) contrast(1.1)', opacity: 0.8 }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>I Miss You — Blink-182</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginTop: 2 }}>Take Off Your Pants · 2001</div>
          <div style={{ marginTop: 8, height: 4, background: '#1a1a1a', border: '1px solid #222' }}>
            <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg,#FF2D78,#9B59FF)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>1:47</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>3:48</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['⏮', '▶', '⏭'].map((icon, i) => (
            <button
              key={i}
              style={{
                background: i === 1 ? '#FFE500' : 'none',
                border: i === 1 ? '1px solid #000' : '1px solid #222',
                color: i === 1 ? '#000' : '#555',
                width: 26,
                height: 26,
                fontSize: 10,
                cursor: 'pointer',
                fontWeight: i === 1 ? 700 : 400,
              }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 16px 10px', display: 'flex', gap: 3, alignItems: 'flex-end', height: 28 }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: bar.color,
              animation: `eq ${bar.dur} ease-in-out infinite alternate`,
              height: bar.h,
              animationDelay: bar.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function StatusWidget() {
  const statuses = [
    '"refactoring something that wasn\'t broken"',
    '"3am. the code works. i don\'t know why."',
    '"currently: pretending to understand kubernetes"',
    '"burning a cd nobody asked for"',
    '"learning german one pretzel at a time 🥨"',
    '"committed something. praying it doesn\'t break prod"',
    '"skating > standup meetings"',
    '"playing chopin badly at 2am"',
    '"writing code like it\'s a love letter"',
    '"munich is cold. the codebase is warm."',
  ];

  const [si, setSi] = useState(0);
  const [opacity, setOpacity] = useState(1);

  function cycleStatus() {
    setOpacity(0);
    setTimeout(() => {
      setSi((prev) => (prev + 1) % statuses.length);
      setOpacity(1);
    }, 200);
  }

  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', padding: '12px 14px' }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>// random status</div>
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: '#888', lineHeight: 1.5, minHeight: 38, transition: 'opacity .2s', opacity }}>{statuses[si]}</div>
      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="md" style={{ background: '#FFE500', width: 6, height: 6 }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333' }}>updated 3 mins ago</span>
        </div>
        <button
          onClick={cycleStatus}
          style={{ background: 'none', border: '1px solid #222', color: '#444', padding: '3px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, cursor: 'pointer' }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = '#FFE500'; e.currentTarget.style.color = '#FFE500'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#444'; }}
        >
          next →
        </button>
      </div>
    </div>
  );
}

function PhotoGrid() {
  return (
    <div className="hidden sm:grid grid-cols-2 gap-3">
      <div className="pf fp dh" style={{ overflow: 'hidden', height: 130, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop" alt="night" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.3) saturate(.75) brightness(.85)' }} />
        <div style={{ position: 'absolute', bottom: 6, left: 6, fontFamily: "'Caveat', cursive", fontSize: 12, color: 'rgba(255,255,255,.7)' }}>munich, 2am 🌃</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="pf2 fp dh" style={{ overflow: 'hidden', height: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=300&h=200&fit=crop" alt="skate" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.4) saturate(.65) brightness(.8)' }} />
        </div>
        <div className="pf fp dh" style={{ overflow: 'hidden', height: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop" alt="music" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.55) brightness(.75)' }} />
        </div>
      </div>
    </div>
  );
}
