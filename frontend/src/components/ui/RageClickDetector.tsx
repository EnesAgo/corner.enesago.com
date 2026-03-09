'use client';

import { useEffect, useState } from 'react';

export default function RageClickDetector() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    let clicks: number[] = [];
    let lastX = 0;
    let lastY = 0;

    const handler = (e: MouseEvent) => {
      const dist = Math.sqrt((e.clientX - lastX) ** 2 + (e.clientY - lastY) ** 2);
      lastX = e.clientX;
      lastY = e.clientY;

      // Only count clicks in roughly the same area (within 50px)
      if (dist > 50) {
        clicks = [];
      }

      clicks.push(Date.now());
      // Keep only clicks from last 2 seconds
      clicks = clicks.filter(t => Date.now() - t < 2000);

      if (clicks.length >= 8) {
        setShow(true);
        clicks = [];
        setTimeout(() => setShow(false), 4000);
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        background: '#0d0d0d',
        border: '2px solid #FFE500',
        boxShadow: '4px 4px 0px #FFE500',
        padding: '14px 20px',
        zIndex: 99998,
        animation: 'slideInUp 0.3s ease',
        maxWidth: 320,
      }}
    >
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#FFE500', marginBottom: 8 }}>
        RAGE DETECTED
      </div>
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: '#aaa', lineHeight: 1.6 }}>
        hey. you good? take a breath.<br />here&apos;s a cookie 🍪
      </div>
      <style jsx>{`
        @keyframes slideInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
