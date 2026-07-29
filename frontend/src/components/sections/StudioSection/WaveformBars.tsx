'use client';

import { useMemo } from 'react';

/** Deterministic pseudo-random 0..1 from a string seed. */
function seededBars(seed: string, count: number): number[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const out: number[] = [];
  for (let i = 0; i < count; i++) {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    out.push(0.25 + (Math.abs(h) % 1000) / 1000 * 0.75);
  }
  return out;
}

/**
 * Decorative static waveform seeded from the track id, so it's stable per track.
 * `progress` (0..1) tints the played portion.
 */
export default function WaveformBars({ seed, progress = 0, color = '#9B59FF' }: { seed: string; progress?: number; color?: string }) {
  const bars = useMemo(() => seededBars(seed, 40), [seed]);
  const playedIndex = Math.round(progress * bars.length);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 22, flex: 1, minWidth: 60 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h * 100}%`,
            background: i < playedIndex ? color : '#333',
            transition: 'background .15s',
          }}
        />
      ))}
    </div>
  );
}
