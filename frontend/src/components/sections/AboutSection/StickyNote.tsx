export default function StickyNote() {
  return (
    <div
      style={{
        background: '#FFE500',
        padding: '12px 14px',
        boxShadow: '2px 2px 0px rgba(0,0,0,.4), inset 0 -2px 4px rgba(0,0,0,.08)',
        position: 'relative',
        display: 'inline-block',
        transform: 'rotate(3deg)',
        transition: 'transform .2s ease',
        cursor: 'default',
      }}
      onMouseOver={(e) => { e.currentTarget.style.transform = 'rotate(-2deg) scale(1.08)'; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'rotate(3deg)'; }}
    >
      {/* Top tape effect */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'rgba(0,0,0,.08)' }} />
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#000', lineHeight: 1.6 }}>
        &quot;Life is more than just scrolling. Go outside & have fun. Don’t waste your life.&quot; — me
      </div>
    </div>
  );
}
