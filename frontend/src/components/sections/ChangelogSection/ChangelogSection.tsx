'use client';

import { useState } from 'react';
import { changelog, tagColors } from '@/data/changelog';
import type { ChangelogEntry } from '@/data/changelog';

function ChangelogCard({ entry, isLatest }: { entry: ChangelogEntry; isLatest: boolean }) {
  const [expanded, setExpanded] = useState(isLatest);
  const color = tagColors[entry.tag];

  return (
    <div style={{ position: 'relative', paddingLeft: 28 }}>
      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 6,
        width: 12,
        height: 12,
        border: `2px solid ${color}`,
        background: expanded ? color : '#0d0d0d',
        transition: 'background .2s',
      }} />
      {/* Timeline line */}
      <div style={{
        position: 'absolute',
        left: 5,
        top: 20,
        bottom: -10,
        width: 2,
        background: '#1a1a1a',
      }} />

      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          background: '#0d0d0d',
          border: `2px solid ${expanded ? color : '#1a1a1a'}`,
          cursor: 'pointer',
          transition: 'all .2s',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            color: color,
            fontWeight: 700,
            border: `1px solid ${color}`,
            padding: '2px 6px',
          }}>
            {entry.version}
          </span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>
            {entry.date}
          </span>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 8,
            color: '#000',
            background: color,
            padding: '2px 6px',
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: 1,
          }}>
            {entry.tag}
          </span>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 16,
            color: '#f0f0f0',
            letterSpacing: 1,
            flex: 1,
          }}>
            {entry.title}
          </span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444' }}>
            {expanded ? '▼' : '▶'} {entry.changes.length} changes
          </span>
        </div>

        {/* Expanded changes */}
        {expanded && (
          <div style={{ padding: '0 14px 12px', borderTop: '1px solid #1a1a1a' }}>
            <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {entry.changes.map((change, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: color, fontSize: 10, marginTop: 2, flexShrink: 0 }}>+</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', lineHeight: 1.5 }}>
                    {change}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChangelogSection() {
  return (
    <section id="changelog" style={{ borderTop: '3px solid #00FF88', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 010</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>CHANGELOG</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00FF88,transparent)' }} />
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginBottom: 28, letterSpacing: 1 }}>
          git log --oneline --all — every version of this site, documented.
        </p>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {changelog.map((entry, i) => (
            <ChangelogCard key={entry.version} entry={entry} isLatest={i === 0} />
          ))}
        </div>

        {/* Footer quip */}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333' }}>
            ∞ more commits to come — this site is never &quot;done&quot;
          </span>
        </div>
      </div>
    </section>
  );
}
