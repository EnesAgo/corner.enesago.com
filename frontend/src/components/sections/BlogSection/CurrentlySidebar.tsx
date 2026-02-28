import { currentlySidebarItems } from '@/data/blog';

export default function CurrentlySidebar() {
  return (
    <div style={{ border: '2px solid #222', background: '#0d0d0d' }}>
      <div style={{ background: '#111', padding: '8px 12px', borderBottom: '2px solid #222' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88', textTransform: 'uppercase', letterSpacing: 1 }}>📡 currently</span>
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {currentlySidebarItems.map((item) => (
          <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', minWidth: 52, letterSpacing: 1 }}>{item.label}</span>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: item.color, lineHeight: 1.4 }}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
