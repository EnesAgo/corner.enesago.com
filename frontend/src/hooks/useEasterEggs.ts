'use client';

import { useState, useEffect, useCallback } from 'react';

export function useEasterEggs() {
  const [openEggs, setOpenEggs] = useState<Set<number>>(new Set());
  const [eggsFound, setEggsFound] = useState(0);

  const openEgg = useCallback((n: number) => {
    setOpenEggs((prev) => new Set(prev).add(n));
    setEggsFound((prev) => Math.max(prev, n));
  }, []);

  const closeEgg = useCallback((n: number) => {
    setOpenEggs((prev) => {
      const next = new Set(prev);
      next.delete(n);
      return next;
    });
  }, []);

  const isEggOpen = useCallback(
    (n: number) => openEggs.has(n),
    [openEggs]
  );

  // Konami Code
  useEffect(() => {
    const kcode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let kseq: string[] = [];

    const handler = (e: KeyboardEvent) => {
      kseq.push(e.key);
      kseq = kseq.slice(-10);
      if (kseq.join(',') === kcode.join(',')) openEgg(1);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openEgg]);

  // Bill Cipher
  useEffect(() => {
    const bcode = 'billcipher';
    let bseq = '';

    const handler = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        bseq += e.key.toLowerCase();
        bseq = bseq.slice(-10);
        if (bseq === bcode) openEgg(2);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openEgg]);

  return { openEgg, closeEgg, isEggOpen, eggsFound };
}
