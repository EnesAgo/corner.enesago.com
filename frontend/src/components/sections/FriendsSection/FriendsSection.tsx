'use client';

import { useState } from 'react';
import { friends, coolLinks } from '@/data/friends';
import type { Friend } from '@/data/friends';

function FriendCard({ friend }: { friend: Friend }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={friend.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        background: '#0d0d0d',
        border: `2px solid ${hovered ? friend.color : '#1a1a1a'}`,
        padding: 0,
        textDecoration: 'none',
        transition: 'all .2s ease',
        boxShadow: hovered ? `4px 4px 0px ${friend.color}` : 'none',
        transform: hovered ? 'translateY(-3px)' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Header with avatar */}
      <div style={{ padding: '14px 16px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40,
          height: 40,
          background: '#111',
          border: `2px solid ${friend.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          flexShrink: 0,
        }}>
          {friend.avatar}
        </div>
        <div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#f0f0f0', fontWeight: 700 }}>
            {friend.name}
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: friend.color }}>
            {friend.handle}
          </div>
        </div>
      </div>
      {/* Role tag */}
      <div style={{ padding: '0 16px 4px' }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 8,
          color: '#000',
          background: friend.color,
          padding: '2px 6px',
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: 1,
        }}>
          {friend.role}
        </span>
      </div>
      {/* Vibe */}
      <div style={{ padding: '6px 16px 14px' }}>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 14,
          color: hovered ? '#aaa' : '#555',
          margin: 0,
          lineHeight: 1.4,
          transition: 'color .2s',
        }}>
          &quot;{friend.vibe}&quot;
        </p>
      </div>
    </a>
  );
}

export default function FriendsSection() {
  return (
    <section id="friends" style={{ borderTop: '3px solid #00FF88', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 013</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>FRIENDS &amp; LINKS</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00FF88,transparent)' }} />
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginBottom: 28, letterSpacing: 1 }}>
          people who make the internet less lonely + links worth clicking.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Friends grid */}
          <div className="lg:col-span-2">
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 2 }}>
              👾 the crew
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {friends.map(f => (
                <FriendCard key={f.handle} friend={f} />
              ))}
            </div>
          </div>

          {/* Right: Cool Links sidebar */}
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 2 }}>
              🔗 cool corners of the internet
            </div>
            <div style={{ border: '2px solid #222', background: '#0d0d0d', overflow: 'hidden' }}>
              {coolLinks.map((link, i) => (
                <CoolLink key={link.title} {...link} isLast={i === coolLinks.length - 1} />
              ))}
            </div>

            {/* Add yourself */}
            <div style={{
              marginTop: 12,
              border: '2px dashed #222',
              padding: 14,
              background: '#0a0a0a',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#444', lineHeight: 1.5 }}>
                wanna be on this wall?<br />DM me or sign the guestbook ↗
              </div>
              <div style={{ marginTop: 6, fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#222' }}>
                real connections only, no bots
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoolLink({ title, url, emoji, desc, isLast }: { title: string; url: string; emoji: string; desc: string; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        borderBottom: isLast ? 'none' : '1px solid #1a1a1a',
        background: hovered ? '#111' : 'transparent',
        textDecoration: 'none',
        transition: 'background .15s',
      }}
    >
      <span style={{ fontSize: 14, flexShrink: 0 }}>{emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          color: hovered ? '#00FF88' : '#ccc',
          fontWeight: 600,
          transition: 'color .15s',
        }}>
          {title}
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#444' }}>
          {desc}
        </div>
      </div>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#333' }}>↗</span>
    </a>
  );
}
