'use client';

import { useState } from 'react';
import { edcItems, categoryLabels } from '@/data/edc';
import type { EDCItem } from '@/data/edc';

function EDCCard({ item }: { item: EDCItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0d0d0d',
        border: `2px solid ${hovered ? item.color : '#1a1a1a'}`,
        padding: '14px 16px',
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        transition: 'all .2s ease',
        boxShadow: hovered ? `3px 3px 0px ${item.color}` : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{item.emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            color: '#f0f0f0',
            fontWeight: 700,
          }}>
            {item.name}
          </span>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 7,
            color: '#000',
            background: item.color,
            padding: '1px 5px',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: 1,
          }}>
            {categoryLabels[item.category]}
          </span>
        </div>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 14,
          color: hovered ? '#aaa' : '#555',
          margin: 0,
          lineHeight: 1.4,
          transition: 'color .2s',
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function EDCSection() {
  const [filter, setFilter] = useState<EDCItem['category'] | 'all'>('all');
  const filtered = filter === 'all' ? edcItems : edcItems.filter(i => i.category === filter);
  const categories: Array<EDCItem['category'] | 'all'> = ['all', 'tech', 'daily', 'creative'];

  return (
    <section id="edc" style={{ borderTop: '3px solid #00C8FF', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 011</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>WHAT&apos;S IN MY BAG</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00C8FF,transparent)' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', border: '1px solid #222', padding: '4px 8px' }}>
            🎒 {edcItems.length} items
          </span>
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginBottom: 20, letterSpacing: 1 }}>
          everyday carry — the stuff that keeps me functional (debatable).
        </p>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 9,
                color: filter === cat ? '#000' : '#555',
                background: filter === cat ? (cat === 'all' ? '#f0f0f0' : cat === 'tech' ? '#00C8FF' : cat === 'daily' ? '#FF2D78' : '#FFE500') : 'transparent',
                border: `1px solid ${filter === cat ? 'transparent' : '#222'}`,
                padding: '4px 12px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontWeight: 700,
                transition: 'all .15s',
              }}
            >
              {cat === 'all' ? '★ ALL' : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(item => (
            <EDCCard key={item.name} item={item} />
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 24, textAlign: 'center', padding: 12, border: '2px dashed #222', background: '#0a0a0a' }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#444' }}>
            &quot;if it doesn&apos;t fit in the backpack, it doesn&apos;t come with me.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
