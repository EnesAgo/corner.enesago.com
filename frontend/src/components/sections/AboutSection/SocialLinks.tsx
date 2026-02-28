export default function SocialLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {[
        { text: 'github.com/devkid' },
        { text: 'devkid@proton.me' },
      ].map((link) => (
        <a
          key={link.text}
          href="#"
          className="lh"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#555', textDecoration: 'none', border: '2px solid #111', padding: '7px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all .15s' }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#fff'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = '#111'; e.currentTarget.style.color = '#555'; }}
        >
          <span>{link.text}</span><span>→</span>
        </a>
      ))}
    </div>
  );
}
