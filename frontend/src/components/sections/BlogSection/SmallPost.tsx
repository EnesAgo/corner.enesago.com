export default function SmallPost({ date, title, desc, tag }: { date: string; title: string; desc: string; tag: string }) {
  return (
    <div className="hl hs" style={{ border: '2px solid #111', background: '#0a0a0a', padding: 16, boxShadow: '4px 4px 0px #111' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 13, color: '#444', marginBottom: 7 }}>{date}</div>
      <h4 className="font-heading" style={{ fontSize: 14, fontWeight: 700, color: '#f0f0f0', margin: '0 0 7px 0', lineHeight: 1.3 }}>{title}</h4>
      <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#555', lineHeight: 1.65, margin: '0 0 10px 0' }}>{desc}</p>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#9B59FF', border: '1px solid #9B59FF', padding: '1px 5px' }}>{tag}</span>
    </div>
  );
}
