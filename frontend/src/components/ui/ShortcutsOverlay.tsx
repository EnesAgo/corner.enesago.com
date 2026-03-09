'use client';

import { useState, useEffect } from 'react';

const SHORTCUTS = [
  { keys: ['H'], desc: 'Go Home', section: 'Navigation' },
  { keys: ['A'], desc: 'About', section: 'Navigation' },
  { keys: ['P'], desc: 'Projects', section: 'Navigation' },
  { keys: ['G'], desc: 'Guestbook', section: 'Navigation' },
  { keys: ['M'], desc: 'Music', section: 'Navigation' },
  { keys: ['L'], desc: 'Lab', section: 'Navigation' },
  { keys: ['⌘', 'K'], desc: 'Command Palette', section: 'Actions' },
  { keys: ['Esc'], desc: 'Close anything', section: 'Actions' },
  { keys: ['?'], desc: 'This overlay', section: 'Actions' },
  { keys: ['↑↑↓↓←→←→BA'], desc: 'Konami Code', section: 'Secrets' },
  { keys: ['billcipher'], desc: 'Gravity Falls', section: 'Secrets' },
  { keys: ['nyan'], desc: 'Nyan Cat', section: 'Secrets' },
  { keys: ['matrix'], desc: 'Matrix Rain', section: 'Secrets' },
  { keys: ['flip'], desc: 'Flip the site', section: 'Secrets' },
];

export default function ShortcutsOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key === '?') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === 'Escape') setOpen(false);

      // Navigation shortcuts
      const nav: Record<string, string> = {
        h: 'home', a: 'about', p: 'projects',
        g: 'guestbook', m: 'music', l: 'lab',
      };
      if (nav[e.key.toLowerCase()] && !e.metaKey && !e.ctrlKey) {
        document.getElementById(nav[e.key.toLowerCase()])?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  if (!open) return null;

  const sections = ['Navigation', 'Actions', 'Secrets'];

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 99997,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0d0d0d',
          border: '2px solid #222',
          boxShadow: '8px 8px 0px #000',
          maxWidth: 520,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          margin: '0 16px',
        }}
      >
        <div style={{
          padding: '12px 20px',
          borderBottom: '2px solid #111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FFE500', textTransform: 'uppercase', letterSpacing: 2 }}>
            ⌨ Keyboard Shortcuts
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 16 }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 20 }}>
          {sections.map(section => (
            <div key={section} style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 9,
                color: '#444',
                textTransform: 'uppercase',
                letterSpacing: 2,
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom: '1px solid #111',
              }}>
                {section}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {SHORTCUTS.filter(s => s.section === section).map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888' }}>{s.desc}</span>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {s.keys.map((k, j) => (
                        <span key={j}>
                          <kbd style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 10,
                            color: '#FFE500',
                            background: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: 3,
                            padding: '2px 8px',
                            minWidth: 24,
                            textAlign: 'center',
                            display: 'inline-block',
                          }}>
                            {k}
                          </kbd>
                          {j < s.keys.length - 1 && <span style={{ color: '#333', margin: '0 2px' }}>+</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#222',
            textAlign: 'center',
            marginTop: 8,
          }}>
            press ? or Esc to close
          </div>
        </div>
      </div>
    </div>
  );
}
