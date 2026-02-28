'use client';

import { useState, useCallback, useEffect } from 'react';

interface LightboxState {
  isOpen: boolean;
  src: string;
  caption: string;
}

export default function Lightbox() {
  const [state, setState] = useState<LightboxState>({ isOpen: false, src: '', caption: '' });

  const close = useCallback(() => setState({ isOpen: false, src: '', caption: '' }), []);

  // Expose open function globally so sections can call it
  useEffect(() => {
    (window as any).__openLightbox = (src: string, caption: string) => {
      setState({ isOpen: true, src, caption });
    };
    return () => { delete (window as any).__openLightbox; };
  }, []);

  if (!state.isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.95)',
        zIndex: 99996,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16,
        padding: 16,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <button
        onClick={close}
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
          color: '#888',
          cursor: 'pointer',
          border: '2px solid #333',
          padding: '6px 14px',
          background: 'transparent',
        }}
      >
        ✕ CLOSE
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={state.src}
        alt={state.caption}
        style={{
          maxWidth: '90vw',
          maxHeight: '65vh',
          objectFit: 'contain',
          border: '4px solid #fff',
          boxShadow: '8px 8px 0px #000',
        }}
      />
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: '#fff' }}>
        {state.caption}
      </div>
    </div>
  );
}

export function openLightbox(src: string, caption: string) {
  if (typeof window !== 'undefined' && (window as any).__openLightbox) {
    (window as any).__openLightbox(src, caption);
  }
}
