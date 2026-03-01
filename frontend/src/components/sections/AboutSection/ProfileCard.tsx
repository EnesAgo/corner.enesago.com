import { profileInfo } from '@/data/about';

export default function ProfileCard() {
  return (
    <div style={{ border: '3px solid #FFE500', background: '#0d0d0d', boxShadow: '6px 6px 0px #FFE500', overflow: 'hidden' }}>
      <div style={{ background: '#FFE500', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>profile.html</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000' }}>✕ □ —</span>
      </div>
      <div className="fp" style={{ overflow: 'hidden', height: 200, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://instagram.fskp4-2.fna.fbcdn.net/v/t51.82787-15/516286478_18165007723359892_4461880865234780063_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzY3MjQ1Mjc5MjY5NTYwODcwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=_gjvkKkxFTsQ7kNvwEQ4DMI&_nc_oc=Adkm-TbEwhBtNQuVarq_0bSTziDva19B-oXU22zrCy9yoMVDWGi_8wXjGnCJcvjs8G0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fskp4-2.fna&_nc_gid=uvqVY7rpTQfqPNcwJ05_fg&_nc_ss=8&oh=00_AfuW6iNmTfKQzfIJCpzTn61xN6mxJevVgkONiKgkrKyveA&oe=69A96975"
         alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: "50% -70px", filter: 'contrast(1.1) saturate(.85) brightness(.9)' }} />
        
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
