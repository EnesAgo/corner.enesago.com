'use client';

import { useState, useEffect } from 'react';

export function useClock() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const update = () => setTime(new Date().toTimeString().slice(0, 8));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
