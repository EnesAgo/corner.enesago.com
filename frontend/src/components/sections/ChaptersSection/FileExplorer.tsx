export default function FileExplorer({ onOpenEgg }: { onOpenEgg: (n: number) => void }) {
  const files = [
    { text: '📁 devkid_world/', color: '#FFE500', indent: 0 },
    { text: '📁 projects/', indent: 24 },
    { text: '📄 skatelog.tsx', indent: 40 },
    { text: '📄 nightshot.tsx', indent: 40 },
    { text: '📁 music/', indent: 24 },
    { text: '🎵 nocturne_take3.mp4', indent: 40 },
    { text: '🔒 hidden_folder/ ← click', indent: 24, color: '#9B59FF', onClick: () => onOpenEgg(5) },
    { text: '📄 readme.md', indent: 0 },
  ];

  return (
    <div style={{ border: '2px solid #222', background: '#0d0d0d', overflow: 'hidden' }}>
      <div style={{ background: '#111', padding: '8px 12px', borderBottom: '2px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FFE500', textTransform: 'uppercase', letterSpacing: 1 }}>📁 file_explorer.exe</span>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{ padding: '6px 0' }}>
        {files.map((f, i) => (
          <div
            key={i}
            className="fi"
            style={{ paddingLeft: f.indent || undefined, color: f.color, cursor: f.onClick ? 'pointer' : undefined }}
            onClick={f.onClick}
          >
            {f.text}
          </div>
        ))}
      </div>
    </div>
  );
}
