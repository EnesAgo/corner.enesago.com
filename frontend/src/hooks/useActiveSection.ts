'use client';

import { useState, useEffect, useRef } from 'react';

const sectionIds = [
  'home',
  'about',
  'projects',
  'chapters',
  'sysCore',
  'music',
  'playlist',
  'blog',
  'guestbook',
  'lab',
];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('home');
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY + 120; // offset for navbar + ticker
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      // If scrolled to very bottom, activate the last section
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return activeSection;
}
