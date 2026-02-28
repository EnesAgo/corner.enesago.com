const quotes = [
  { text: '"немам идеа зошто ова работи" 🇲🇰', sub: '(i have no idea why this works)', hoverColor: '#FFE500' },
  { text: '"bu kod neden çalışıyor?" 🇹🇷', sub: '(why does this code work?)', hoverColor: '#FF2D78' },
  { text: '"ich verstehe das nicht" 🇩🇪', sub: "(i don't understand this)", hoverColor: '#00C8FF' },
];

export default function MultilingualQuotes() {
  return (
    <div style={{ border: '2px dashed #1a1a1a', padding: 14, background: '#080808' }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 }}>// things i say in different languages</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {quotes.map((q) => (
          <div
            key={q.text}
            style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#333', lineHeight: 1.5, cursor: 'default', transition: 'color .2s' }}
            onMouseOver={(e) => (e.currentTarget.style.color = q.hoverColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = '#333')}
          >
            {q.text}<br /><span style={{ fontSize: 11, color: '#222' }}>{q.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
