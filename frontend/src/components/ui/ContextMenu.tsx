'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface MenuItem {
  label: string;
  icon: string;
  action: () => void;
  separator?: boolean;
}

export default function ContextMenu() {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [crtOn, setCrtOn] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  const items: MenuItem[] = [
    {
      label: 'Go Home',
      icon: '🏠',
      action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); close(); },
    },
    {
      label: 'View Source',
      icon: '💻',
      action: () => { document.getElementById('sysCore')?.scrollIntoView({ behavior: 'smooth' }); close(); },
    },
    {
      label: 'Sign Guestbook',
      icon: '✍️',
      action: () => { document.getElementById('guestbook')?.scrollIntoView({ behavior: 'smooth' }); close(); },
    },
    {
      label: 'Random Section',
      icon: '🎲',
      separator: true,
      action: () => {
        const sections = ['home', 'about', 'projects', 'polaroids', 'chapters', 'sysCore', 'music', 'playlist', 'blog', 'guestbook', 'vlog', 'lab'];
        const id = sections[Math.floor(Math.random() * sections.length)];
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        close();
      },
    },
    {
      label: 'Toggle CRT Filter',
      icon: '📺',
      action: () => {
        setCrtOn(prev => !prev);
        close();
      },
    },
    {
      label: 'Download vCard',
      icon: '📇',
      action: () => {
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Enes Ago\nEMAIL:enesago010@gmail.com\nURL:https://corner.enesago.com\nEND:VCARD`;
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'enes-ago.vcf';
        a.click();
        URL.revokeObjectURL(url);
        close();
      },
    },
    {
      label: 'Who Made This?',
      icon: '👤',
      separator: true,
      action: () => {
        window.open('https://github.com/EnesAgo', '_blank');
        close();
      },
    },
  ];

  useEffect(() => {
    const handleContext = (e: MouseEvent) => {
      e.preventDefault();
      const x = Math.min(e.clientX, window.innerWidth - 220);
      const y = Math.min(e.clientY, window.innerHeight - 350);
      setPos({ x, y });
      setOpen(true);
    };

    const handleClick = () => setOpen(false);
    const handleScroll = () => setOpen(false);

    document.addEventListener('contextmenu', handleContext);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('contextmenu', handleContext);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* CRT overlay */}
      {crtOn && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 99990,
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)',
            mixBlendMode: 'multiply',
          }}
        />
      )}

      {/* Context menu */}
      {open && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            zIndex: 99999,
            background: '#0d0d0d',
            border: '2px solid #222',
            boxShadow: '4px 4px 0px #000',
            minWidth: 200,
            padding: '4px 0',
          }}
        >
          <div style={{
            padding: '6px 12px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 8,
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: 2,
            borderBottom: '1px solid #111',
            marginBottom: 2,
          }}>
            ENESAGO.EXE
          </div>
          {items.map((item, i) => (
            <div key={i}>
              {item.separator && i > 0 && (
                <div style={{ height: 1, background: '#111', margin: '3px 8px' }} />
              )}
              <button
                onClick={item.action}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '7px 12px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  color: '#888',
                  textAlign: 'left',
                  transition: 'all 0.1s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#1a1a1a';
                  e.currentTarget.style.color = '#FFE500';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#888';
                }}
              >
                <span style={{ fontSize: 13, width: 20, textAlign: 'center' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
