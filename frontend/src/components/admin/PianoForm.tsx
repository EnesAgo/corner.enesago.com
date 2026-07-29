'use client';

import { useState } from 'react';
import WysiwygEditor from './WysiwygEditor';
import FileDrop from './FileDrop';

const ACCENT = '#9B59FF';

const labelStyle: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 };
const inputStyle: React.CSSProperties = { width: '100%', background: '#080808', border: '2px solid #222', color: '#ccc', padding: '8px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, outline: 'none' };

export default function PianoForm() {
  const [title, setTitle] = useState('');
  const [descriptionHtml, setDescriptionHtml] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [recordedAt, setRecordedAt] = useState('');
  const [tags, setTags] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  const hasMedia = audioUrl || videoUrl || photoUrls.length > 0;

  const submit = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch('/api/piano', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          descriptionHtml,
          audioUrl: audioUrl || null,
          videoUrl: videoUrl || null,
          photoUrls,
          recordedAt: recordedAt || null,
          tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
          published: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to publish.');
      setMsg({ kind: 'ok', text: 'recording published → /studio/piano' });
      setTitle(''); setDescriptionHtml(''); setAudioUrl(''); setVideoUrl(''); setPhotoUrls([]); setRecordedAt(''); setTags('');
    } catch (e) {
      setMsg({ kind: 'err', text: e instanceof Error ? e.message : 'Failed to publish.' });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ border: `3px solid ${ACCENT}`, background: '#0d0d0d', boxShadow: `6px 6px 0px ${ACCENT}` }}>
      <div style={{ background: ACCENT, padding: '8px 14px' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>🎹 new piano recording</span>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={labelStyle}>title</label>
          <input style={inputStyle} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="nocturne in eb major — take 3" />
        </div>

        <div>
          <label style={labelStyle}>description / notes</label>
          <WysiwygEditor value={descriptionHtml} onChange={setDescriptionHtml} placeholder="filmed at 2am. no color grade. just vibes." minHeight={140} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <label style={labelStyle}>audio</label>
            {audioUrl ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88' }}>✓ uploaded</span>
                <button type="button" onClick={() => setAudioUrl('')} style={{ ...inputStyle, width: 'auto', cursor: 'pointer', color: '#FF2D78', borderColor: '#FF2D78', padding: '4px 8px' }}>x</button>
              </div>
            ) : (
              <FileDrop kind="audio" accept="audio/*" label="upload sound file" color={ACCENT} onUploaded={setAudioUrl} />
            )}
          </div>
          <div>
            <label style={labelStyle}>video</label>
            {videoUrl ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88' }}>✓ uploaded</span>
                <button type="button" onClick={() => setVideoUrl('')} style={{ ...inputStyle, width: 'auto', cursor: 'pointer', color: '#FF2D78', borderColor: '#FF2D78', padding: '4px 8px' }}>x</button>
              </div>
            ) : (
              <FileDrop kind="video" accept="video/*" label="upload video" color={ACCENT} onUploaded={setVideoUrl} />
            )}
          </div>
        </div>

        <div>
          <label style={labelStyle}>photos</label>
          {photoUrls.length > 0 && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
              {photoUrls.map((url, i) => (
                <div key={url} style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={url} alt={`photo ${i + 1}`} style={{ width: 56, height: 56, objectFit: 'cover', border: '2px solid #222' }} />
                  <button type="button" onClick={() => setPhotoUrls((prev) => prev.filter((u) => u !== url))} style={{ position: 'absolute', top: -8, right: -8, width: 18, height: 18, background: '#FF2D78', color: '#fff', border: '1px solid #000', fontSize: 10, cursor: 'pointer', padding: 0, lineHeight: '16px' }}>×</button>
                </div>
              ))}
            </div>
          )}
          <FileDrop kind="photo" accept="image/*" label="upload photos" color={ACCENT} multiple onUploaded={(url) => setPhotoUrls((prev) => [...prev, url])} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <label style={labelStyle}>recorded (label, optional)</label>
            <input style={inputStyle} value={recordedAt} onChange={(e) => setRecordedAt(e.target.value)} placeholder="NOV 12 · 23:14" />
          </div>
          <div>
            <label style={labelStyle}>tags (comma separated)</label>
            <input style={inputStyle} value={tags} onChange={(e) => setTags(e.target.value)} placeholder="piano, original, 2am" />
          </div>
        </div>

        {msg && (
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: msg.kind === 'ok' ? '#00FF88' : '#FF2D78', border: `1px solid ${msg.kind === 'ok' ? '#00FF88' : '#FF2D78'}`, padding: '8px 12px' }}>
            {msg.text}
          </div>
        )}

        <button
          onClick={submit}
          disabled={busy || !title || !hasMedia}
          style={{ width: '100%', background: busy || !title || !hasMedia ? '#555' : ACCENT, color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: busy ? 'wait' : 'pointer', boxShadow: '4px 4px 0px #000' }}
        >
          {busy ? 'PUBLISHING…' : 'PUBLISH RECORDING →'}
        </button>
      </div>
    </div>
  );
}
