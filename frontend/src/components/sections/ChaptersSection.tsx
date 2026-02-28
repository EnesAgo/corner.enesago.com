'use client';

import { useState } from 'react';

interface ChaptersSectionProps {
  onOpenEgg: (n: number) => void;
}

const timeline = [
  {
    year: '2011 — THE ORIGIN',
    color: '#FF2D78',
    title: 'first html file',
    desc: 'built a myspace page for my skate crew. autoplay music, hit counter, guestbook. terrible. perfect.',
    tags: ['HTML', 'MySpace CSS'],
    company: null,
  },
  {
    year: '2020–2022 — THE GRIND',
    color: '#9B59FF',
    title: 'learning everything',
    desc: 'javascript, then react, then node. youtube tutorials at 2am. building things nobody asked for. breaking things. fixing things. repeat.',
    tags: ['JavaScript', 'React'],
    company: null,
  },
  {
    year: '2023 — EAGLEIT INTERNSHIP',
    color: '#00C8FF',
    title: null,
    company: { name: 'EagleIT', sub: 'Fullstack Internship · 2023' },
    desc: 'first real internship. first real codebase. built features, broke prod once (sorry), learned more in 3 months than 2 years of tutorials.',
    tags: ['React', 'NestJS'],
  },
  {
    year: 'NOW — ZENFULFILLMENT',
    color: '#FFE500',
    title: null,
    company: { name: 'Zenfulfillment', sub: 'Fullstack Internship · Munich, Germany · 2024 → present' },
    desc: 'building real features for a real product in munich. huge codebase. great team. learning german by osmosis and eating too many pretzels.',
    tags: ['Next.js', 'NestJS', 'Munich 🥨'],
    current: true,
  },
];

export default function ChaptersSection({ onOpenEgg }: ChaptersSectionProps) {
  return (
    <section id="chapters" style={{ background: '#0a0a0a', borderTop: '3px solid #FFE500', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 003</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>CHAPTERS</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FFE500,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((t, i) => (
              <TimelineItem key={i} item={t} isLast={i === timeline.length - 1} />
            ))}
          </div>
          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <CSSStreak />
            <MinecraftInventory onOpenEgg={onOpenEgg} />
            <FileExplorer onOpenEgg={onOpenEgg} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemData {
  year: string;
  color: string;
  title?: string | null;
  company?: { name: string; sub: string } | null;
  desc: string;
  tags: string[];
  current?: boolean;
}

function TimelineItem({ item: t, isLast }: { item: TimelineItemData; isLast: boolean }) {
  const isCompany = !!t.company;
  const isCurrent = !!t.current;

  return (
    <div style={{ display: 'flex', gap: 16, paddingBottom: isLast ? 0 : 22 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: isCurrent ? 18 : 14, height: isCurrent ? 18 : 14, background: t.color, border: '3px solid #080808', outline: `${isCurrent ? 3 : 2}px solid ${t.color}`, ...(isCurrent ? { animation: 'pm 1.5s ease-in-out infinite' } : {}) }} />
        {!isLast && <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg,${t.color},#333)`, marginTop: 4, minHeight: 50 }} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: t.color, letterSpacing: 2, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {t.year}
          {isCurrent && <span className="md" style={{ background: t.color, width: 8, height: 8 }} />}
        </div>
        <div style={{ border: `${isCurrent ? 3 : isCompany ? 2 : 2}px solid ${isCompany ? t.color : '#1a1a1a'}`, background: '#0d0d0d', padding: 12, ...(isCompany ? { boxShadow: `${isCurrent ? 6 : 4}px ${isCurrent ? 6 : 4}px 0px ${t.color}` } : {}) }}>
          {t.company ? (
            <>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: t.color, letterSpacing: 2, marginBottom: 2 }}>{t.company.name}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: isCurrent ? '#888' : '#555', marginBottom: 8 }}>{t.company.sub}</div>
            </>
          ) : (
            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 15, color: t.color, marginBottom: 6 }}>{t.title}</div>
          )}
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: isCurrent ? '#777' : '#666', lineHeight: 1.7, margin: '0 0 8px 0' }}>{t.desc}</p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {t.tags.map((tag) => (
              <span key={tag} style={{ ...(isCurrent ? { background: t.color, color: '#000', border: '2px solid #000', fontWeight: 700 } : { border: `1px solid ${t.color}`, color: t.color }), padding: '2px 6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CSSStreak() {
  return (
    <div className="spb" style={{ border: '3px solid #FF6B00', background: '#0d0800', boxShadow: '6px 6px 0px #FF6B00', overflow: 'hidden' }}>
      <div style={{ background: '#1a0d00', padding: '8px 14px', borderBottom: '2px solid #FF6B00', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 14 }}>🔥</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FF6B00', textTransform: 'uppercase', letterSpacing: 1 }}>cssbattle.dev — streak</span>
      </div>
      <div style={{ padding: 14, display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: '#FF6B00', lineHeight: 1, textShadow: '0 0 20px rgba(255,107,0,.4)' }}>121</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#3a2000', textTransform: 'uppercase', letterSpacing: 2 }}>day streak</div>
        </div>
        <div style={{ flex: 1, borderLeft: '2px solid #1a0d00', paddingLeft: 12 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, color: '#FF6B00', letterSpacing: 2, marginBottom: 4 }}>TOP #50 GLOBAL</div>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#664400', lineHeight: 1.5, margin: '0 0 8px 0' }}>&quot;121 days of daily css challenges. no days off. pure pixel obsession.&quot;</p>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ background: '#FF6B00', color: '#000', border: '2px solid #000', padding: '2px 6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700 }}>CSS</span>
            <span style={{ border: '1px solid #FF6B00', color: '#FF6B00', padding: '2px 6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9 }}>top 50 🏆</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinecraftInventory({ onOpenEgg }: { onOpenEgg: (n: number) => void }) {
  const [tooltip, setTooltip] = useState('');
  const hotbar = [
    { emoji: '⚛', count: '64', name: 'React' },
    { emoji: '🪺', count: '32', name: 'NestJS' },
    { emoji: '🍃', count: '16', name: 'MongoDB' },
    { emoji: '🎹', count: '8', name: 'Piano 🎹' },
    { emoji: '✨', count: '∞', name: 'Vibes ✨' },
    { emoji: '🛹', count: '1', name: 'Skateboard 🛹' },
  ];

  return (
    <div style={{ border: '2px solid #3a6028', background: '#0a0d08', overflow: 'hidden' }}>
      <div
        style={{ background: '#2d4a1e', padding: '8px 12px', borderBottom: '2px solid #3a6028', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
        onClick={() => onOpenEgg(4)}
      >
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#5D9E3F' }}>🎮 inventory.exe</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#3a6028' }}>click →</span>
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#3a6028', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>hotbar — things i carry</div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {hotbar.map((item) => (
            <div key={item.name} className="mcs" data-c={item.count} onMouseOver={() => setTooltip(item.name)} onMouseOut={() => setTooltip('')}>{item.emoji}</div>
          ))}
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#5D9E3F', marginTop: 8, minHeight: 14 }}>{tooltip}</div>
      </div>
    </div>
  );
}

function FileExplorer({ onOpenEgg }: { onOpenEgg: (n: number) => void }) {
  const files = [
    { text: '📁 devkid_world/', color: '#FFE500', indent: 0 },
    { text: '📁 projects/', indent: 24 },
    { text: '📄 skatelog.tsx', indent: 40 },
    { text: '📄 nightshot.tsx', indent: 40 },
    { text: '📁 music/', indent: 24 },
    { text: '🎵 nocturne_take3.mp4', indent: 40 },
    { text: '🔒 hidden_folder/ ← click', indent: 24, color: '#9B59FF', onClick: () => onOpenEgg(5) },
    { text: '📄 readme.md', indent: 0 },
  ];

  return (
    <div style={{ border: '2px solid #222', background: '#0d0d0d', overflow: 'hidden' }}>
      <div style={{ background: '#111', padding: '8px 12px', borderBottom: '2px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FFE500', textTransform: 'uppercase', letterSpacing: 1 }}>📁 file_explorer.exe</span>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{ padding: '6px 0' }}>
        {files.map((f, i) => (
          <div
            key={i}
            className="fi"
            style={{ paddingLeft: f.indent || undefined, color: f.color, cursor: f.onClick ? 'pointer' : undefined }}
            onClick={f.onClick}
          >
            {f.text}
          </div>
        ))}
      </div>
    </div>
  );
}
