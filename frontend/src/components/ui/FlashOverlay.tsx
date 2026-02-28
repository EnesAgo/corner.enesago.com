'use client';

import { useCallback, useRef } from 'react';

export default function FlashOverlay() {
  const flashRef = useRef<HTMLDivElement>(null);

  const triggerFlash = useCallback(() => {
    const f = flashRef.current;
    if (f) {
      f.style.opacity = '1';
      setTimeout(() => (f.style.opacity = '0'), 120);
    }
  }, []);

  // Expose via data attribute so other components can call it
  return (
    <div
      ref={flashRef}
      id="flash-overlay"
      data-trigger-flash=""
      onClick={triggerFlash}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#fff',
        pointerEvents: 'none',
        zIndex: 9995,
        opacity: 0,
        transition: 'opacity .05s',
      }}
    />
  );
}

export function triggerFlash() {
  const f = document.getElementById('flash-overlay');
  if (f) {
    f.style.opacity = '1';
    setTimeout(() => (f.style.opacity = '0'), 120);
  }
}
