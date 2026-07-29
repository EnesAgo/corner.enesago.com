'use client';

import { useState, useEffect, useCallback } from 'react';

interface VideoState {
  isOpen: boolean;
  src: string;
  title: string;
}

/** Global video modal — mirrors Lightbox. Call openVideo(src, title) to play a clip. */
export default function VideoModal() {
  const [state, setState] = useState<VideoState>({ isOpen: false, src: '', title: '' });

  const close = useCallback(() => setState({ isOpen: false, src: '', title: '' }), []);

  useEffect(() => {
    (window as unknown as { __openVideo?: (src: string, title: string) => void }).__openVideo = (src, title) =>
      setState({ isOpen: true, src, title });
    return () => {
      delete (window as unknown as { __openVideo?: unknown }).__openVideo;
    };
  }, []);

  useEffect(() => {
    if (!state.isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [state.isOpen, close]);

  if (!state.isOpen) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.95)', zIndex: 99996, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 14, padding: 16 }}
    >
      <button
        onClick={close}
        style={{ position: 'absolute', top: 16, right: 16, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#888', cursor: 'pointer', border: '2px solid #333', padding: '6px 14px', background: 'transparent' }}
      >
        ✕ CLOSE
      </button>
      <div className="wcf" style={{ position: 'relative', maxWidth: '90vw', maxHeight: '75vh' }}>
        <video
          src={state.src}
          controls
          autoPlay
          playsInline
          style={{ maxWidth: '90vw', maxHeight: '75vh', display: 'block', border: '4px solid #9B59FF', boxShadow: '8px 8px 0 #000', background: '#000' }}
        />
        <div className="vhs" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#fff' }}>{state.title}</div>
    </div>
  );
}

export function openVideo(src: string, title: string) {
  if (typeof window !== 'undefined') {
    (window as unknown as { __openVideo?: (src: string, title: string) => void }).__openVideo?.(src, title);
  }
}
