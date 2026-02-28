'use client';

import { useState } from 'react';
import { statuses } from '@/data/hero';

export default function StatusWidget() {
  const [si, setSi] = useState(0);
  const [opacity, setOpacity] = useState(1);

  function cycleStatus() {
    setOpacity(0);
    setTimeout(() => {
      setSi((prev) => (prev + 1) % statuses.length);
      setOpacity(1);
    }, 200);
  }

  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', padding: '12px 14px' }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>// random status</div>
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: '#888', lineHeight: 1.5, minHeight: 38, transition: 'opacity .2s', opacity }}>{statuses[si]}</div>
      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="md" style={{ background: '#FFE500', width: 6, height: 6 }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333' }}>updated 3 mins ago</span>
        </div>
        <button
          onClick={cycleStatus}
          style={{ background: 'none', border: '1px solid #222', color: '#444', padding: '3px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, cursor: 'pointer' }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = '#FFE500'; e.currentTarget.style.color = '#FFE500'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#444'; }}
        >
          next →
        </button>
      </div>
    </div>
  );
}
