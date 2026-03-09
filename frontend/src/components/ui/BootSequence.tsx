'use client';

import { useState, useEffect, useRef } from 'react';

const BOOT_LINES = [
  { text: '[■■■■■■■■■■] LOADING ENESAGO.EXE...', delay: 0 },
  { text: '> mounting filesystem...', delay: 400 },
  { text: '> loading vibes...', delay: 700 },
  { text: '> connecting to the internet circa 2004...', delay: 1100 },
  { text: '> initializing skateboard.dll...', delay: 1500 },
  { text: '> compiling duman-playlist.mp3...', delay: 1800 },
  { text: '> injecting css glitches...', delay: 2100 },
  { text: '> checking for easter eggs... found 6', delay: 2400 },
  { text: '> READY.', delay: 2800 },
  { text: '', delay: 3200 },
];

export default function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Only show once per session
    if (sessionStorage.getItem('boot_done')) return;

    setVisible(true);
    // Prevent scrolling during boot
    document.body.style.overflow = 'hidden';

    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        if (line.text) {
          setLines(prev => [...prev, line.text]);
        }
        // Last line triggers fade out
        if (i === BOOT_LINES.length - 1) {
          setFadeOut(true);
          setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = '';
            sessionStorage.setItem('boot_done', '1');
          }, 600);
        }
      }, line.delay);
    });
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <div style={{ maxWidth: 520, width: '100%', padding: '0 24px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#00FF88', marginBottom: 16 }}>
          ENESAGO.EXE v20.0.0
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: line.startsWith('[') ? '#FFE500' : line === '> READY.' ? '#FF2D78' : '#555',
                lineHeight: 1.8,
              }}
            >
              {line}
            </div>
          ))}
          <span
            style={{
              display: 'inline-block',
              width: 8,
              height: 14,
              background: '#00FF88',
              animation: 'bootBlink 0.8s step-end infinite',
            }}
          />
        </div>
        <style jsx>{`
          @keyframes bootBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
}
