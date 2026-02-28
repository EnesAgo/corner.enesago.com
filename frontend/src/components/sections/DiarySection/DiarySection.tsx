import { diaryEntries } from '@/data/diary';

export default function DiarySection() {
  return (
    <section style={{ background: '#0a0a0a', borderTop: '2px solid #111', borderBottom: '2px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 16px' }} className="md:px-8">
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'center' }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase', letterSpacing: 3, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>diary</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diaryEntries.map((entry, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,229,0,.1)', paddingBottom: 8 }}>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: 13, color: '#333', marginBottom: 4 }}>{entry.date}</div>
                <p style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#666', lineHeight: 1.5, margin: 0 }}>{entry.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
