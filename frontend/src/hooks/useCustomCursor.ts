'use client';

import { useEffect, useRef, useCallback } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  useEffect(() => {
    const addHover = () => cursorRef.current?.classList.add('h');
    const removeHover = () => cursorRef.current?.classList.remove('h');

    const elements = document.querySelectorAll('a, button, [data-clickable]');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  });

  return cursorRef;
}
