'use client';

import { useRef, useState } from 'react';

/**
 * Upload widget with click-to-select AND drag-and-drop. Sends each file to
 * POST /api/upload with the given `kind`, then reports back the public URL.
 * Used for blog covers/photos/video and piano audio/video/photos.
 */

// Extension fallbacks per media category — used when the browser reports an
// empty or unusual MIME type (common for .mov, .mkv, .heic, etc).
const EXT: Record<'image' | 'audio' | 'video', string[]> = {
  image: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif', 'heic', 'heif', 'bmp', 'svg'],
  audio: ['mp3', 'wav', 'ogg', 'oga', 'm4a', 'aac', 'flac', 'opus', 'weba'],
  video: ['mp4', 'mov', 'webm', 'mkv', 'avi', 'm4v', 'ogv', '3gp', 'qt'],
};

interface Props {
  kind: 'blog-cover' | 'blog-photo' | 'blog-video' | 'audio' | 'video' | 'photo';
  accept: string;
  label: string;
  color?: string;
  multiple?: boolean;
  onUploaded: (url: string) => void;
}

export default function FileDrop({ kind, accept, label, color = '#00C8FF', multiple, onUploaded }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // e.g. accept="image/*" → category "image"
  const typePrefix = accept.replace('/*', '/');
  const category: 'image' | 'audio' | 'video' = accept.startsWith('video')
    ? 'video'
    : accept.startsWith('audio')
      ? 'audio'
      : 'image';

  // Accept if the MIME type matches OR the extension is a known one for this
  // category (covers files the browser reports with a blank/odd type).
  const matchesAccept = (file: File) => {
    if (file.type && typePrefix && file.type.startsWith(typePrefix)) return true;
    const ext = file.name.split('.').pop()?.toLowerCase();
    return !!ext && EXT[category].includes(ext);
  };

  // Broaden the picker's accept with explicit extensions so the OS dialog shows them too.
  const inputAccept = `${accept},${EXT[category].map((e) => `.${e}`).join(',')}`;

  const uploadOne = async (file: File) => {
    const form = new FormData();
    form.append('file', file);
    form.append('kind', kind);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || 'Upload failed.');
    }
    const { url } = await res.json();
    onUploaded(url);
  };

  const handleFiles = async (files: File[]) => {
    const accepted = files.filter(matchesAccept);
    if (accepted.length === 0) {
      setError('wrong file type for this slot.');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const toUpload = multiple ? accepted : accepted.slice(0, 1);
      for (const file of toUpload) {
        await uploadOne(file);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed.');
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (busy) return;
    handleFiles(Array.from(e.dataTransfer.files));
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => !busy && inputRef.current?.click()}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && !busy && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); if (!busy) setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        style={{
          width: '100%',
          background: dragging ? `${color}22` : 'transparent',
          border: `2px dashed ${color}`,
          color,
          padding: '16px 12px',
          textAlign: 'center',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          cursor: busy ? 'wait' : 'pointer',
          letterSpacing: 1,
          opacity: busy ? 0.6 : 1,
          transform: dragging ? 'scale(1.01)' : 'none',
          transition: 'background .15s, transform .15s',
          userSelect: 'none',
        }}
      >
        {busy ? 'UPLOADING…' : dragging ? '⬇ DROP TO UPLOAD' : `⬆ ${label}`}
        <div style={{ fontSize: 9, color: `${color}99`, marginTop: 4 }}>
          {busy ? '' : 'click or drag & drop'}
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={inputAccept}
        multiple={multiple}
        onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
        style={{ display: 'none' }}
      />
      {error && (
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#FF2D78', marginTop: 6 }}>{error}</div>
      )}
    </div>
  );
}
