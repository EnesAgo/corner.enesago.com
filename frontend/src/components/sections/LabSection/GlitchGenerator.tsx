'use client';

import { useState } from 'react';

export default function GlitchGenerator() {
  const [text, setText] = useState('HELLO WORLD');
  const [intensity, setIntensity] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return (
      <>
        <div style={{ border: '2px solid #111', padding: 12, background: '#080808', marginBottom: 14 }}>
          <div className="gt" data-text="HELLO WORLD" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: '#00FF88', letterSpacing: 2 }}>
            HELLO WORLD
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(true)}
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', background: '#00FF88', border: '2px solid #000', padding: '6px 14px', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', cursor: 'pointer', width: '100%' }}
        >
          TRY IT →
        </button>
      </>
    );
  }

  return (
    <>
      <div style={{ border: '2px solid #111', padding: 12, background: '#080808', marginBottom: 14, minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          className="gt"
          data-text={text || 'TYPE SOMETHING'}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: Math.max(12, 32 - text.length * 0.3),
            color: '#00FF88',
            letterSpacing: 2,
            '--glitch-intensity': intensity,
          } as React.CSSProperties}
        >
          {text || 'TYPE SOMETHING'}
        </div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'block' }}>
          YOUR TEXT:
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value.toUpperCase())}
          maxLength={30}
          placeholder="TYPE SOMETHING..."
          style={{
            width: '100%',
            background: '#080808',
            border: '2px solid #1a1a1a',
            color: '#00FF88',
            padding: '8px 10px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            outline: 'none',
            transition: 'border-color .2s',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#00FF88';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#1a1a1a';
          }}
        />
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
          <span>GLITCH INTENSITY:</span>
          <span style={{ color: '#00FF88' }}>{intensity}</span>
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={intensity}
          onChange={(e) => setIntensity(parseInt(e.target.value))}
          style={{
            width: '100%',
            accentColor: '#00FF88',
            cursor: 'pointer',
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <button
          onClick={() => {
            setText('HELLO WORLD');
            setIntensity(5);
          }}
          style={{
            flex: 1,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#555',
            background: 'transparent',
            border: '2px solid #222',
            padding: '6px 10px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all .15s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#00FF88';
            e.currentTarget.style.color = '#00FF88';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#222';
            e.currentTarget.style.color = '#555';
          }}
        >
          RESET
        </button>
        <button
          onClick={() => setIsExpanded(false)}
          style={{
            flex: 1,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#000',
            background: '#00FF88',
            border: '2px solid #000',
            padding: '6px 10px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          CLOSE
        </button>
      </div>
    </>
  );
}
