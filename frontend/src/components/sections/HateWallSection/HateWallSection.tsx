'use client';

import { useState } from 'react';
import { hateItems } from '@/data/hateWall';
import type { HateItem } from '@/data/hateWall';

function HateCard({ item, index }: { item: HateItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const rotation = ((index % 5) - 2) * 1.2; // slight random tilt

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0d0d0d',
        border: `2px solid ${hovered ? item.color : '#222'}`,
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-4px) rotate(0deg)' : `rotate(${rotation}deg)`,
        transition: 'all .2s ease',
        boxShadow: hovered ? `4px 4px 0px ${item.color}` : '3px 3px 0px #111',
        cursor: 'default',
      }}
    >
      {/* Header bar */}
      <div style={{ background: item.color, padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#000', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
          {item.emoji} {item.thing}
        </span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#000' }}>
          {'🔥'.repeat(item.rage)}
        </span>
      </div>
      {/* Rant body */}
      <div style={{ padding: '12px 14px 14px' }}>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 15,
          color: '#999',
          margin: 0,
          lineHeight: 1.5,
          transition: 'color .2s',
          ...(hovered ? { color: '#ccc' } : {}),
        }}>
          {item.rant}
        </p>
      </div>
      {/* Rage meter bar at bottom */}
      <div style={{ height: 3, background: '#111' }}>
        <div style={{ height: '100%', width: `${item.rage * 20}%`, background: item.color, transition: 'width .3s ease' }} />
      </div>
    </div>
  );
}

export default function HateWallSection() {
  return (
    <section id="hatewall" style={{ background: '#080808', borderTop: '3px solid #FF2D78', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 009</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>HATE WALL</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FF2D78,transparent)' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', border: '1px solid #222', padding: '4px 8px' }}>
            🔥 rage-fueled opinions
          </span>
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginBottom: 28, letterSpacing: 1 }}>
          things that make me mass-delete node_modules at 3am. no filter. no apologies.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hateItems.map((item, i) => (
            <HateCard key={item.thing} item={item} index={i} />
          ))}
        </div>

        {/* Footer quip */}
        <div style={{ marginTop: 24, textAlign: 'center', padding: 16, border: '2px dashed #222', background: '#0a0a0a' }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: '#444', lineHeight: 1.6 }}>
            &quot;if you agree with all of these,<br />we should probably be friends.&quot;
          </div>
          <div style={{ marginTop: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222' }}>
            — this wall updates whenever something new annoys me
          </div>
        </div>
      </div>
    </section>
  );
}
