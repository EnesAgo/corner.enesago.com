import type { CDData } from '@/data/burnedCds';

function openYouTube(artist: string, title: string) {
  // Strip annotations like "← if they get it" from title
  const cleanTitle = title.replace(/\s*←.*$/, '').trim();
  const query = encodeURIComponent(`${artist} - ${cleanTitle}`);
  window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank', 'noopener');
}

export default function CDCard({ cd }: { cd: CDData }) {
  const discSize = cd.small ? 48 : 52;
  const innerSize = cd.small ? 12 : 13;

  return (
    <div className={cd.small ? '' : 'hl hs'} style={{ display: 'flex', flexDirection: 'column', gap: cd.small ? 14 : 0 }}>
      <div className={cd.small ? 'hl hs' : ''} style={{ border: `3px solid ${cd.color}`, background: '#0d0d0d', boxShadow: `6px 6px 0px ${cd.color}`, overflow: 'hidden' }}>
        <div style={{ background: cd.bgTint, padding: 12, borderBottom: `2px solid ${cd.color}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="cds" style={{ width: discSize, height: discSize, flexShrink: 0, borderRadius: '50%', background: cd.gradient, border: '3px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <div style={{ width: innerSize, height: innerSize, background: '#0d0d0d', borderRadius: '50%', border: '2px solid #333' }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: cd.small ? 14 : 15, color: cd.color, lineHeight: 1.2 }}>{cd.name}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', marginTop: 3 }}>{cd.date}</div>
          </div>
        </div>
        <div>
          {cd.tracks.map((track) => (
            <div
              key={track.n}
              className="cdt"
              onClick={() => openYouTube(track.artist, track.title)}
              style={{ cursor: 'pointer', transition: 'background .15s' }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#1a1a1a';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: track.highlight ? cd.color : '#444', minWidth: 16 }}>{track.n}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: track.highlight ? cd.color : '#ccc' }}>{track.title}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>{track.artist}</div>
              </div>
              <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#555', marginRight: 4, opacity: 0.6 }}>▶</span>
              <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#444' }}>{track.dur}</span>
            </div>
          ))}
        </div>
        {cd.note && (
          <div style={{ padding: '10px 12px', borderTop: '1px solid #1a1a1a' }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: '#555', fontStyle: 'italic' }}>{cd.note}</div>
          </div>
        )}
      </div>
      {cd.small && (
        <div style={{ border: '2px dashed #333', background: '#0a0a0a', padding: 16, textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', border: '3px dashed #222', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 22, opacity: 0.3 }}>💿</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#444', lineHeight: 1.6 }}>what would you put on a cd for someone you like?</div>
        </div>
      )}
    </div>
  );
}
