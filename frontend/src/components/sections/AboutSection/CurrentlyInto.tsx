import { currentlyIntoItems } from '@/data/about';

export default function CurrentlyInto() {
  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', overflow: 'hidden', marginBottom: 16 }}>
      <div style={{ padding: '8px 14px', borderBottom: '2px solid #111', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div className="md" style={{ background: '#00FF88', width: 8, height: 8 }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00FF88', textTransform: 'uppercase', letterSpacing: 2 }}>currently into</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ padding: 14, gap: 10 }}>
        {currentlyIntoItems.map((item) => (
          <div key={item.label} style={{ border: '1px solid #111', padding: 10, background: '#080808' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#333', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{item.icon} {item.label}</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: item.color, lineHeight: 1.4 }}>
              {item.value}<br /><span style={{ color: '#555', fontSize: 11 }}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
