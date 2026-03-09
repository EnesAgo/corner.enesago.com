'use client';

import { useEffect, useRef, useState } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(false);
  const animRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    let seq = '';
    const handler = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        seq += e.key.toLowerCase();
        seq = seq.slice(-6);
        if (seq === 'matrix') {
          setActive(true);
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    // Randomize initial drops for a more natural look
    for (let i = 0; i < cols; i++) {
      drops[i] = Math.random() * -50;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head character is brighter
        ctx.fillStyle = '#00FF88';
        ctx.fillText(char, x, y);

        // Trailing glow
        if (drops[i] > 0) {
          ctx.fillStyle = 'rgba(0, 255, 136, 0.3)';
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Auto-stop after 6 seconds
    timeoutRef.current = setTimeout(() => {
      setActive(false);
    }, 6000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      onClick={() => setActive(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        cursor: 'pointer',
        pointerEvents: 'auto',
      }}
    />
  );
}
