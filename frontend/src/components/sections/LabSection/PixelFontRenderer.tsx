'use client';

import { useState, useRef, useCallback } from 'react';

const FONTS = [
  { name: 'Press Start 2P', value: "'Press Start 2P', monospace" },
  { name: 'VT323', value: "'VT323', monospace" },
  { name: 'Silkscreen', value: "'Silkscreen', monospace" },
];

const COLORS = [
  { name: 'Pink', value: '#FF2D78' },
  { name: 'Yellow', value: '#FFE500' },
  { name: 'Cyan', value: '#00C8FF' },
  { name: 'Green', value: '#00FF88' },
  { name: 'Purple', value: '#9B59FF' },
  { name: 'White', value: '#FFFFFF' },
];

export default function PixelFontRenderer() {
  const [text, setText] = useState('PIXEL\nPERFECT');
  const [font, setFont] = useState(FONTS[0].value);
  const [color, setColor] = useState(COLORS[0].value);
  const [size, setSize] = useState(32);
  const [isExpanded, setIsExpanded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadPNG = useCallback(() => {
    if (!canvasRef.current || !previewRef.current) return;

    const canvas = canvasRef.current;
    const preview = previewRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with padding
    const padding = 40;
    canvas.width = preview.offsetWidth + padding * 2;
    canvas.height = preview.offsetHeight + padding * 2;

    // Fill background
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text style
    ctx.fillStyle = color;
    ctx.font = `${size}px ${font}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw text (split by lines)
    const lines = text.split('\n');
    const lineHeight = size * 1.4;
    const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, i) => {
      ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
    });

    // Download
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pixel-text.png';
    a.click();
  }, [text, font, color, size]);

  const handleDownloadSVG = useCallback(() => {
    const lines = text.split('\n');
    const lineHeight = size * 1.4;
    const padding = 40;
    const width = 800;
    const height = lines.length * lineHeight + padding * 2;

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#080808"/>
  <text x="50%" y="50%" font-family="${font}" font-size="${size}px" fill="${color}" text-anchor="middle" dominant-baseline="middle">
    ${lines.map((line, i) => {
      const y = (height / 2) - ((lines.length - 1) * lineHeight) / 2 + i * lineHeight;
      return `<tspan x="50%" dy="${i === 0 ? 0 : lineHeight}">${line}</tspan>`;
    }).join('\n    ')}
  </text>
</svg>`;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pixel-text.svg';
    a.click();
    URL.revokeObjectURL(url);
  }, [text, font, color, size]);

  if (!isExpanded) {
    return (
      <>
        <div style={{ border: '2px solid #111', padding: 12, background: '#080808', marginBottom: 14, textAlign: 'center' }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 12, color: '#FF2D78', lineHeight: 1.9 }}>PIXEL<br />PERFECT</span>
        </div>
        <button
          onClick={() => setIsExpanded(true)}
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#fff', background: '#FF2D78', border: '2px solid #000', padding: '6px 14px', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', cursor: 'pointer', width: '100%' }}
        >
          TRY IT →
        </button>
      </>
    );
  }

  return (
    <>
      <div
        ref={previewRef}
        style={{ border: '2px solid #111', padding: 24, background: '#080808', marginBottom: 14, textAlign: 'center', minHeight: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ fontFamily: font, fontSize: size, color, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
          {text || 'TYPE SOMETHING'}
        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div style={{ marginBottom: 10 }}>
        <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'block' }}>
          YOUR TEXT:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.toUpperCase())}
          maxLength={100}
          placeholder="TYPE SOMETHING..."
          rows={3}
          style={{
            width: '100%',
            background: '#080808',
            border: '2px solid #1a1a1a',
            color: '#FF2D78',
            padding: '8px 10px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            outline: 'none',
            resize: 'none',
            transition: 'border-color .2s',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#FF2D78';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = '#1a1a1a';
          }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'block' }}>
          FONT:
        </label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          style={{
            width: '100%',
            background: '#080808',
            border: '2px solid #1a1a1a',
            color: '#FF2D78',
            padding: '8px 10px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          {FONTS.map((f) => (
            <option key={f.value} value={f.value}>{f.name}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'block' }}>
          COLOR:
        </label>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {COLORS.map((c) => (
            <button
              key={c.value}
              onClick={() => setColor(c.value)}
              style={{
                width: 32,
                height: 32,
                background: c.value,
                border: color === c.value ? '3px solid #fff' : '2px solid #222',
                cursor: 'pointer',
                transition: 'all .15s',
                boxShadow: color === c.value ? '0 0 8px ' + c.value : 'none',
              }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
          <span>SIZE:</span>
          <span style={{ color: '#FF2D78' }}>{size}px</span>
        </label>
        <input
          type="range"
          min="12"
          max="72"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
          style={{ width: '100%', accentColor: '#FF2D78', cursor: 'pointer' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 6 }}>
        <button
          onClick={() => {
            setText('PIXEL\nPERFECT');
            setFont(FONTS[0].value);
            setColor(COLORS[0].value);
            setSize(32);
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
            e.currentTarget.style.borderColor = '#FF2D78';
            e.currentTarget.style.color = '#FF2D78';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#222';
            e.currentTarget.style.color = '#555';
          }}
        >
          RESET
        </button>
        <button
          onClick={handleDownloadPNG}
          style={{
            flex: 1,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#fff',
            background: '#FF2D78',
            border: '2px solid #000',
            padding: '6px 10px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          PNG
        </button>
        <button
          onClick={handleDownloadSVG}
          style={{
            flex: 1,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#000',
            background: '#FF2D78',
            border: '2px solid #000',
            padding: '6px 10px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          SVG
        </button>
        <button
          onClick={() => setIsExpanded(false)}
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
            e.currentTarget.style.borderColor = '#FF2D78';
            e.currentTarget.style.color = '#FF2D78';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#222';
            e.currentTarget.style.color = '#555';
          }}
        >
          CLOSE
        </button>
      </div>
    </>
  );
}
