export interface TimelineItemData {
  year: string;
  color: string;
  title?: string | null;
  company?: { name: string; sub: string } | null;
  desc: string;
  tags: string[];
  current?: boolean;
}

export default function TimelineItem({ item: t, isLast }: { item: TimelineItemData; isLast: boolean }) {
  const isCompany = !!t.company;
  const isCurrent = !!t.current;

  return (
    <div style={{ display: 'flex', gap: 16, paddingBottom: isLast ? 0 : 22 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: isCurrent ? 18 : 14, height: isCurrent ? 18 : 14, background: t.color, border: '3px solid #080808', outline: `${isCurrent ? 3 : 2}px solid ${t.color}`, ...(isCurrent ? { animation: 'pm 1.5s ease-in-out infinite' } : {}) }} />
        {!isLast && <div style={{ width: 2, flex: 1, background: `linear-gradient(180deg,${t.color},#333)`, marginTop: 4, minHeight: 50 }} />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: t.color, letterSpacing: 2, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {t.year}
          {isCurrent && <span className="md" style={{ background: t.color, width: 8, height: 8 }} />}
        </div>
        <div style={{ border: `${isCurrent ? 3 : isCompany ? 2 : 2}px solid ${isCompany ? t.color : '#1a1a1a'}`, background: '#0d0d0d', padding: 12, ...(isCompany ? { boxShadow: `${isCurrent ? 6 : 4}px ${isCurrent ? 6 : 4}px 0px ${t.color}` } : {}) }}>
          {t.company ? (
            <>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: t.color, letterSpacing: 2, marginBottom: 2 }}>{t.company.name}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: isCurrent ? '#888' : '#555', marginBottom: 8 }}>{t.company.sub}</div>
            </>
          ) : (
            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 15, color: t.color, marginBottom: 6 }}>{t.title}</div>
          )}
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: isCurrent ? '#777' : '#666', lineHeight: 1.7, margin: '0 0 8px 0' }}>{t.desc}</p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {t.tags.map((tag) => (
              <span key={tag} style={{ ...(isCurrent ? { background: t.color, color: '#000', border: '2px solid #000', fontWeight: 700 } : { border: `1px solid ${t.color}`, color: t.color }), padding: '2px 6px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9 }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
