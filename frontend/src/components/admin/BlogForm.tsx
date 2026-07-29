'use client';

import { useState } from 'react';
import WysiwygEditor from './WysiwygEditor';
import FileDrop from './FileDrop';

const ACCENT = '#00C8FF';

const labelStyle: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 };
const inputStyle: React.CSSProperties = { width: '100%', background: '#080808', border: '2px solid #222', color: '#ccc', padding: '8px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, outline: 'none' };

export default function BlogForm() {
  const [title, setTitle] = useState('');
  const [bodyHtml, setBodyHtml] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [tags, setTags] = useState('');
  const [featured, setFeatured] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  const submit = async () => {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          bodyHtml,
          excerpt,
          coverUrl: coverUrl || null,
          videoUrl: videoUrl || null,
          photoUrls,
          tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
          featured,
          published: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to publish.');
      setMsg({ kind: 'ok', text: `published → /studio/blog/${data.slug}` });
      setTitle(''); setBodyHtml(''); setExcerpt(''); setCoverUrl(''); setVideoUrl(''); setPhotoUrls([]); setTags(''); setFeatured(false);
    } catch (e) {
      setMsg({ kind: 'err', text: e instanceof Error ? e.message : 'Failed to publish.' });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ border: `3px solid ${ACCENT}`, background: '#0d0d0d', boxShadow: `6px 6px 0px ${ACCENT}` }}>
      <div style={{ background: ACCENT, padding: '8px 14px' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>✍ new blog post</span>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={labelStyle}>title</label>
          <input style={inputStyle} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="why i still burn cds in 2026" />
        </div>

        <div>
          <label style={labelStyle}>body</label>
          <WysiwygEditor value={bodyHtml} onChange={setBodyHtml} placeholder="write the post… use the toolbar for bold, headings, lists…" />
        </div>

        <div>
          <label style={labelStyle}>excerpt (optional — auto-generated if empty)</label>
          <input style={inputStyle} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="one-line teaser" />
        </div>

        <div>
          <label style={labelStyle}>cover image</label>
          {coverUrl ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverUrl} alt="cover" style={{ width: 80, height: 50, objectFit: 'cover', border: '2px solid #222' }} />
              <button type="button" onClick={() => setCoverUrl('')} style={{ ...inputStyle, width: 'auto', cursor: 'pointer', color: '#FF2D78', borderColor: '#FF2D78' }}>remove</button>
            </div>
          ) : (
            <FileDrop kind="blog-cover" accept="image/*" label="upload cover image" color={ACCENT} onUploaded={setCoverUrl} />
          )}
        </div>

        <div>
          <label style={labelStyle}>photos (shown in a gallery in the post)</label>
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
          <FileDrop kind="blog-photo" accept="image/*" label="upload photos" color={ACCENT} multiple onUploaded={(url) => setPhotoUrls((prev) => [...prev, url])} />
        </div>

        <div>
          <label style={labelStyle}>video</label>
          {videoUrl ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88' }}>✓ video uploaded</span>
              <button type="button" onClick={() => setVideoUrl('')} style={{ ...inputStyle, width: 'auto', cursor: 'pointer', color: '#FF2D78', borderColor: '#FF2D78', padding: '4px 8px' }}>remove</button>
            </div>
          ) : (
            <FileDrop kind="blog-video" accept="video/*" label="upload video" color={ACCENT} onUploaded={setVideoUrl} />
          )}
        </div>

        <div>
          <label style={labelStyle}>tags (comma separated)</label>
          <input style={inputStyle} value={tags} onChange={(e) => setTags(e.target.value)} placeholder="dev, life, music" />
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', cursor: 'pointer' }}>
          <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
          feature this post (shown large at the top)
        </label>

        {msg && (
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: msg.kind === 'ok' ? '#00FF88' : '#FF2D78', border: `1px solid ${msg.kind === 'ok' ? '#00FF88' : '#FF2D78'}`, padding: '8px 12px' }}>
            {msg.text}
          </div>
        )}

        <button
          onClick={submit}
          disabled={busy || !title || !bodyHtml}
          style={{ width: '100%', background: busy || !title || !bodyHtml ? '#555' : ACCENT, color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: busy ? 'wait' : 'pointer', boxShadow: '4px 4px 0px #000' }}
        >
          {busy ? 'PUBLISHING…' : 'PUBLISH POST →'}
        </button>
      </div>
    </div>
  );
}
