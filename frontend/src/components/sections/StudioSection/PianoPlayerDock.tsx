'use client';

import { useRef } from 'react';
import { usePianoPlayer } from './PianoPlayerContext';

const bars = [
  { color: '#9B59FF', dur: '.48s', delay: '0s', h: '95%' },
  { color: '#FF2D78', dur: '.4s', delay: '.1s', h: '60%' },
  { color: '#FFE500', dur: '.5s', delay: '0s', h: '40%' },
  { color: '#00C8FF', dur: '.42s', delay: '.12s', h: '80%' },
  { color: '#00FF88', dur: '.45s', delay: '.2s', h: '55%' },
];

function fmt(s: number): string {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

/** Sticky bottom mini-player for the piano studio. Only shows once a track loads. */
export default function PianoPlayerDock() {
  const { current, isPlaying, currentTime, duration, progress, toggle, next, prev, seekRatio } = usePianoPlayer();
  const barRef = useRef<HTMLDivElement>(null);

  if (!current) return null;

  const onSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = barRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    seekRatio((e.clientX - rect.left) / rect.width);
  };

  const ctrlStyle = (accent = false): React.CSSProperties => ({
    background: accent ? '#9B59FF' : 'none',
    border: accent ? '2px solid #000' : '1px solid #333',
    color: accent ? '#fff' : '#888',
    width: accent ? 40 : 30,
    height: accent ? 40 : 30,
    fontSize: accent ? 15 : 11,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: accent ? '3px 3px 0 #000' : 'none',
  });

  return (
    <div style={{ position: 'sticky', bottom: 12, zIndex: 50, marginTop: 24 }}>
      <div style={{ border: '3px solid #9B59FF', background: '#0d0d0d', boxShadow: '5px 5px 0px #000' }}>
        <div className="wb" style={{ padding: '5px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '2px solid #2a2a4a' }}>
          <div style={{ width: 9, height: 9, background: '#FF2D78', borderRadius: '50%' }} />
          <div style={{ width: 9, height: 9, background: '#FFE500', borderRadius: '50%' }} />
          <div style={{ width: 9, height: 9, background: '#00FF88', borderRadius: '50%' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', marginLeft: 6 }}>
            piano.exe — {isPlaying ? 'now playing' : 'paused'}
          </span>
        </div>

        <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={prev} style={ctrlStyle()} aria-label="previous">⏮</button>
            <button onClick={toggle} style={ctrlStyle(true)} aria-label={isPlaying ? 'pause' : 'play'}>{isPlaying ? '⏸' : '▶'}</button>
            <button onClick={next} style={ctrlStyle()} aria-label="next">⏭</button>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{current.title}</div>
            <div ref={barRef} onClick={onSeek} style={{ marginTop: 7, height: 6, background: '#1a1a1a', border: '1px solid #222', cursor: 'pointer', position: 'relative' }}>
              <div style={{ width: `${progress * 100}%`, height: '100%', background: 'linear-gradient(90deg,#FF2D78,#9B59FF)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>{fmt(currentTime)}</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>{fmt(duration)}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 24, width: 46, flexShrink: 0 }}>
            {bars.map((bar, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: bar.color,
                  animationName: isPlaying ? 'eq' : 'none',
                  animationDuration: bar.dur,
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  animationDelay: bar.delay,
                  height: isPlaying ? bar.h : '15%',
                  transition: 'height 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
