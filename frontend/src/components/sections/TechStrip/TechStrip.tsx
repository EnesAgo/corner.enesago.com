import { techItems } from '@/data/techStrip';

export default function TechStrip() {
  return (
    <div style={{ background: '#0d0d0d', borderTop: '3px solid #111', borderBottom: '3px solid #111', padding: '10px 16px', overflow: 'hidden' }}>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: '#1e1e1e', letterSpacing: 4, whiteSpace: 'nowrap' }}>
        {techItems}
      </span>
    </div>
  );
}
