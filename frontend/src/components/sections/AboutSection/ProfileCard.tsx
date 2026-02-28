import { profileInfo } from '@/data/about';

export default function ProfileCard() {
  return (
    <div style={{ border: '3px solid #FFE500', background: '#0d0d0d', boxShadow: '6px 6px 0px #FFE500', overflow: 'hidden' }}>
      <div style={{ background: '#FFE500', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>profile.html</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000' }}>✕ □ —</span>
      </div>
      <div className="fp" style={{ overflow: 'hidden', height: 180, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) saturate(.85) brightness(.9)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,.85))', padding: '20px 12px 10px' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: '#fff', letterSpacing: 1 }}>ENES AGO</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#888' }}>Skopje → Munich → The Internet</div>
        </div>
      </div>
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
        {profileInfo.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < profileInfo.length - 1 ? '1px solid #111' : 'none', paddingBottom: i < profileInfo.length - 1 ? 4 : 0 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase' }}>{item.label}</span>
            <span style={{ fontFamily: item.font || "'IBM Plex Mono', monospace", fontSize: item.size || 9, color: item.color, display: 'flex', alignItems: 'center', gap: 4 }}>
              {item.dot && <span className="md" style={{ background: item.color, width: 6, height: 6 }} />}
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
