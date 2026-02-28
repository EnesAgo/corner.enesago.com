'use client';

import { useState } from 'react';

export default function MinecraftInventory({ onOpenEgg }: { onOpenEgg: (n: number) => void }) {
  const [tooltip, setTooltip] = useState('');
  const hotbar = [
    { emoji: '⚛', count: '64', name: 'React' },
    { emoji: '🪺', count: '32', name: 'NestJS' },
    { emoji: '🍃', count: '16', name: 'MongoDB' },
    { emoji: '🎹', count: '8', name: 'Piano 🎹' },
    { emoji: '✨', count: '∞', name: 'Vibes ✨' },
    { emoji: '🛹', count: '1', name: 'Skateboard 🛹' },
  ];

  return (
    <div style={{ border: '2px solid #3a6028', background: '#0a0d08', overflow: 'hidden' }}>
      <div
        style={{ background: '#2d4a1e', padding: '8px 12px', borderBottom: '2px solid #3a6028', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
        onClick={() => onOpenEgg(4)}
      >
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#5D9E3F' }}>🎮 inventory.exe</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#3a6028' }}>click →</span>
      </div>
      <div style={{ padding: 12 }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#3a6028', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>hotbar — things i carry</div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {hotbar.map((item) => (
            <div key={item.name} className="mcs" data-c={item.count} onMouseOver={() => setTooltip(item.name)} onMouseOut={() => setTooltip('')}>{item.emoji}</div>
          ))}
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#5D9E3F', marginTop: 8, minHeight: 14 }}>{tooltip}</div>
      </div>
    </div>
  );
}
