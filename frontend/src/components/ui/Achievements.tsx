'use client';

import { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_scroll', title: 'FIRST SCROLL', desc: 'scrolled past the hero', icon: '📜' },
  { id: 'dj_mode', title: 'DJ MODE', desc: 'played a song', icon: '🎵' },
  { id: 'signed_wall', title: 'SIGNED THE WALL', desc: 'left a guestbook entry', icon: '✍️' },
  { id: 'lab_rat', title: 'LAB RAT', desc: 'tried a lab experiment', icon: '🧪' },
  { id: 'explorer', title: 'EXPLORER', desc: 'visited every section', icon: '🧭' },
  { id: 'night_owl', title: 'NIGHT OWL', desc: 'visiting between 1-5am', icon: '🦉' },
  { id: 'konami_kid', title: 'KONAMI KID', desc: 'found an easter egg', icon: '🎮' },
  { id: 'speed_reader', title: 'SPEED READER', desc: 'scrolled to the bottom in under 30s', icon: '⚡' },
  { id: 'right_clicker', title: 'RIGHT CLICKER', desc: 'used the custom context menu', icon: '🖱️' },
  { id: 'power_user', title: 'POWER USER', desc: 'opened the command palette', icon: '⌨️' },
];

interface AchievementContextType {
  unlock: (id: string) => void;
  unlocked: Set<string>;
  total: number;
}

const AchievementContext = createContext<AchievementContextType>({
  unlock: () => {},
  unlocked: new Set(),
  total: ACHIEVEMENTS.length,
});

export const useAchievements = () => useContext(AchievementContext);

export function AchievementProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<Achievement | null>(null);
  const toastTimeout = useRef<NodeJS.Timeout>(null);
  const initialized = useRef(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try {
      const saved = localStorage.getItem('achievements');
      if (saved) {
        setUnlocked(new Set(JSON.parse(saved)));
      }
    } catch { /* ignore */ }
  }, []);

  const unlock = useCallback((id: string) => {
    setUnlocked(prev => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      // Save to localStorage
      try {
        localStorage.setItem('achievements', JSON.stringify([...next]));
      } catch { /* ignore */ }
      // Show toast
      const achievement = ACHIEVEMENTS.find(a => a.id === id);
      if (achievement) {
        setToast(achievement);
        if (toastTimeout.current) clearTimeout(toastTimeout.current);
        toastTimeout.current = setTimeout(() => setToast(null), 3500);
      }
      return next;
    });
  }, []);

  // Auto-detect night owl
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 1 && hour < 5) {
      unlock('night_owl');
    }
  }, [unlock]);

  // Detect first scroll past hero
  useEffect(() => {
    const handler = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        unlock('first_scroll');
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [unlock]);

  // Detect speed reader (bottom in <30s)
  useEffect(() => {
    const startTime = Date.now();
    const handler = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 100) {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed < 30) {
          unlock('speed_reader');
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [unlock]);

  // Detect context menu usage
  useEffect(() => {
    const handler = () => unlock('right_clicker');
    document.addEventListener('contextmenu', handler);
    return () => document.removeEventListener('contextmenu', handler);
  }, [unlock]);

  // Detect command palette
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        unlock('power_user');
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [unlock]);

  // Listen for custom achievement events from other components
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail;
      if (typeof id === 'string') unlock(id);
    };
    window.addEventListener('achievement', handler);
    return () => window.removeEventListener('achievement', handler);
  }, [unlock]);

  // Detect explorer (visited every section)
  useEffect(() => {
    const SECTION_IDS = ['home', 'about', 'projects', 'chapters', 'blog', 'vlog', 'music', 'playlist', 'lab', 'sysCore', 'guestbook'];
    const visited = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.id) {
            visited.add(entry.target.id);
            if (visited.size >= SECTION_IDS.length) {
              unlock('explorer');
            }
          }
        });
      },
      { threshold: 0.15 }
    );
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [unlock]);

  return (
    <AchievementContext.Provider value={{ unlock, unlocked, total: ACHIEVEMENTS.length }}>
      {children}
      {/* Toast notification */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 99999,
            background: '#0d0d0d',
            border: '2px solid #FFE500',
            boxShadow: '4px 4px 0px #FFE500',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            animation: 'achieveSlide 0.3s ease',
            maxWidth: 360,
          }}
        >
          <span style={{ fontSize: 24 }}>{toast.icon}</span>
          <div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#FFE500', marginBottom: 4, letterSpacing: 1 }}>
              🏆 ACHIEVEMENT UNLOCKED
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#f0f0f0', fontWeight: 700 }}>
              {toast.title}
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555' }}>
              {toast.desc}
            </div>
          </div>
          <style jsx>{`
            @keyframes achieveSlide {
              from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
              to { transform: translateX(-50%) translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </AchievementContext.Provider>
  );
}

export { ACHIEVEMENTS };
