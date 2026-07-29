'use client';

import { openVideo } from '@/components/ui';
import type { PianoRecording } from '@/data/pianoRecordings';

const ACCENT = '#9B59FF';

function ClipThumb({ rec }: { rec: PianoRecording }) {
  const poster = rec.photoUrls[0];
  return (
    <button
      onClick={() => rec.videoUrl && openVideo(rec.videoUrl, rec.title)}
      className="hl hs"
      style={{ display: 'block', textAlign: 'left', padding: 0, cursor: 'pointer', border: `3px solid ${ACCENT}`, background: '#0d0d0d', boxShadow: `5px 5px 0 ${ACCENT}`, overflow: 'hidden', width: '100%' }}
    >
      <div className="dh" style={{ position: 'relative', height: 160, overflow: 'hidden', background: '#000' }}>
        {poster ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={poster} alt={rec.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.15) saturate(.7) brightness(.65)' }} />
        ) : (
          <video src={rec.videoUrl ?? undefined} preload="metadata" muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.15) saturate(.7) brightness(.65)' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%,rgba(0,0,0,.85))' }} />
        <div className="vhs" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', top: 8, right: 10, fontFamily: "'VT323', monospace", fontSize: 14, color: '#FF2D78', textShadow: '0 0 8px #FF2D78' }}>REC ●</span>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 48, height: 48, background: 'rgba(155,89,255,.9)', border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: 18, marginLeft: 3 }}>▶</span>
        </div>
      </div>
      <div style={{ padding: '10px 12px' }}>
        <h4 className="font-heading" style={{ fontSize: 13, fontWeight: 700, color: '#f0f0f0', margin: '0 0 6px', lineHeight: 1.3 }}>{rec.title}</h4>
        {rec.tags.length > 0 && (
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {rec.tags.slice(0, 3).map((t) => (
              <span key={t} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: ACCENT, border: `1px solid ${ACCENT}`, padding: '1px 5px' }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}

export default function ClipGrid({ clips, minWidth = 240 }: { clips: PianoRecording[]; minWidth?: number }) {
  if (clips.length === 0) {
    return (
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#444', padding: 20, textAlign: 'center', border: '2px dashed #1e1e1e' }}>
        no clips here 🎬
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}px, 1fr))`, gap: 14, alignItems: 'start' }}>
      {clips.map((rec) => (
        <ClipThumb key={rec.id} rec={rec} />
      ))}
    </div>
  );
}
