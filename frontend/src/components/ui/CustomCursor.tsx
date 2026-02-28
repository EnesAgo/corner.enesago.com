'use client';

import { useCustomCursor } from '@/hooks';

export default function CustomCursor() {
  const cursorRef = useCustomCursor();
  return <div ref={cursorRef} id="cur" />;
}

