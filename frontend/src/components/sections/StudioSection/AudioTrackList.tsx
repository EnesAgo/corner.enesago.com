'use client';

import { useState } from 'react';
import { openLightbox } from '@/components/ui';
import type { PianoRecording } from '@/data/pianoRecordings';
import { usePianoPlayer } from './PianoPlayerContext';
import WaveformBars from './WaveformBars';
import RichText from './RichText';

const ACCENT = '#9B59FF';

function fmt(s: number): string {
  if (!isFinite(s) || s <= 0) return '--:--';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function TrackRow({ rec, queue }: { rec: PianoRecording; queue: PianoRecording[] }) {
  const { current, isPlaying, progress, duration, playTrack } = usePianoPlayer();
  const [expanded, setExpanded] = useState(false);
  const isActive = current?.id === rec.id;
  const hasExtra = !!rec.descriptionHtml || rec.photoUrls.length > 0;

  const durLabel = isActive && duration ? fmt(duration) : rec.duration || '--:--';

  return (
    <div style={{ border: `1px solid ${isActive ? ACCENT : '#181818'}`, background: isActive ? '#12091f' : '#0a0a0a', transition: 'border-color .2s, background .2s' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px' }}>
        <button
          onClick={() => playTrack(rec, queue)}
          aria-label={isActive && isPlaying ? 'pause' : 'play'}
          style={{ flexShrink: 0, width: 34, height: 34, background: isActive ? ACCENT : '#151515', border: '2px solid #000', color: isActive ? '#fff' : '#888', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isActive && isPlaying ? '⏸' : '▶'}
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: isActive ? '#fff' : '#ccc', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 4 }}>
            {rec.title}
          </div>
          <WaveformBars seed={rec.id} progress={isActive ? progress : 0} color={ACCENT} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
          <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#555' }}>{durLabel}</span>
          {hasExtra && (
            <button onClick={() => setExpanded((v) => !v)} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}>
              {expanded ? '▲ less' : '▼ more'}
            </button>
          )}
        </div>
      </div>

      {rec.tags.length > 0 && (
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', padding: '0 12px 10px 58px' }}>
          {rec.tags.map((t) => (
            <span key={t} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: ACCENT, border: `1px solid ${ACCENT}`, padding: '1px 5px' }}>{t}</span>
          ))}
        </div>
      )}

      {expanded && hasExtra && (
        <div style={{ padding: '0 12px 12px 58px', borderTop: '1px solid #181818', marginTop: 2 }}>
          {rec.descriptionHtml && <div style={{ marginTop: 10 }}><RichText html={rec.descriptionHtml} /></div>}
          {rec.photoUrls.length > 0 && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
              {rec.photoUrls.map((url, i) => (
                <button key={url} onClick={() => openLightbox(url, rec.title)} className="dh" style={{ width: 60, height: 60, border: '2px solid #222', padding: 0, cursor: 'pointer', overflow: 'hidden', background: '#000' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`${rec.title} photo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AudioTrackList({ audios }: { audios: PianoRecording[] }) {
  if (audios.length === 0) {
    return (
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#444', padding: 20, textAlign: 'center', border: '2px dashed #1e1e1e' }}>
        no recordings here 🎧
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {audios.map((rec) => (
        <TrackRow key={rec.id} rec={rec} queue={audios} />
      ))}
    </div>
  );
}
