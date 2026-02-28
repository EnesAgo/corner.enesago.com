'use client';

import { useState, useEffect } from 'react';

const links = [
  { href: '#home', label: 'HOME', color: '#FFE500' },
  { href: '#about', label: 'ABOUT', color: '#f0f0f0' },
  { href: '#projects', label: 'WORK', color: '#f0f0f0' },
  { href: '#chapters', label: 'ERAS', color: '#f0f0f0' },
  { href: '#sysCore', label: 'SYS', color: '#00FF88' },
  { href: '#music', label: 'MUSIC', color: '#9B59FF' },
  { href: '#playlist', label: '💿 CD', color: '#FF2D78' },
  { href: '#blog', label: 'BLOG', color: '#f0f0f0' },
  { href: '#guestbook', label: 'GUESTBOOK', color: '#FFE500' },
  { href: '#lab', label: 'LAB ⚗', color: '#f0f0f0' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // expose toggle globally for nav button
  useEffect(() => {
    (window as any).__toggleMobileMenu = () => setIsOpen((v) => !v);
    return () => { delete (window as any).__toggleMobileMenu; };
  }, []);

  return (
    <div
      style={{
        display: isOpen ? 'flex' : 'none',
        position: 'fixed',
        inset: 0,
        background: 'rgba(8,8,8,.98)',
        zIndex: 9998,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}
    >
      <button
        onClick={() => setIsOpen(false)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'none',
          border: '2px solid #333',
          color: '#888',
          padding: '8px 14px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          cursor: 'pointer',
        }}
      >
        ✕ CLOSE
      </button>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 32,
            color: link.color,
            letterSpacing: 3,
            textDecoration: 'none',
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function toggleMobileMenu() {
  if (typeof window !== 'undefined' && (window as any).__toggleMobileMenu) {
    (window as any).__toggleMobileMenu();
  }
}
