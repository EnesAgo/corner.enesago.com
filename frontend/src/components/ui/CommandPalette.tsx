'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface PaletteItem {
  label: string;
  icon: string;
  category: string;
  action: () => void;
}

const ITEMS: Omit<PaletteItem, 'action'>[] = [
  // Sections
  { label: 'Go to Home', icon: '🏠', category: 'Navigation' },
  { label: 'Go to About', icon: '👤', category: 'Navigation' },
  { label: 'Go to Projects', icon: '📁', category: 'Navigation' },
  { label: 'Go to Polaroids', icon: '📸', category: 'Navigation' },
  { label: 'Go to Chapters', icon: '📖', category: 'Navigation' },
  { label: 'Go to System Core', icon: '💻', category: 'Navigation' },
  { label: 'Go to Music', icon: '🎵', category: 'Navigation' },
  { label: 'Go to Burned CDs', icon: '💿', category: 'Navigation' },
  { label: 'Go to Blog', icon: '✍️', category: 'Navigation' },
  { label: 'Go to Guestbook', icon: '📝', category: 'Navigation' },
  { label: 'Go to Vlog', icon: '🎬', category: 'Navigation' },
  { label: 'Go to Lab', icon: '⚗️', category: 'Navigation' },
  // Actions
  { label: 'Random Section', icon: '🎲', category: 'Action' },
  { label: 'Keyboard Shortcuts', icon: '⌨️', category: 'Action' },
  { label: 'Download vCard', icon: '📇', category: 'Action' },
  { label: 'Open GitHub', icon: '🐙', category: 'Action' },
  // Easter Eggs
  { label: 'Trigger Matrix Rain', icon: '🟢', category: 'Fun' },
  { label: 'Flip the Site', icon: '🔄', category: 'Fun' },
  { label: 'Nyan Cat', icon: '🐱', category: 'Fun' },
];

const SECTION_MAP: Record<string, string> = {
  'Go to Home': 'home',
  'Go to About': 'about',
  'Go to Projects': 'projects',
  'Go to Polaroids': 'polaroids',
  'Go to Chapters': 'chapters',
  'Go to System Core': 'sysCore',
  'Go to Music': 'music',
  'Go to Burned CDs': 'playlist',
  'Go to Blog': 'blog',
  'Go to Guestbook': 'guestbook',
  'Go to Vlog': 'vlog',
  'Go to Lab': 'lab',
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = ITEMS.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const executeItem = useCallback((item: typeof ITEMS[0]) => {
    setOpen(false);
    setQuery('');

    // Navigation
    if (SECTION_MAP[item.label]) {
      document.getElementById(SECTION_MAP[item.label])?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    switch (item.label) {
      case 'Random Section': {
        const ids = Object.values(SECTION_MAP);
        const id = ids[Math.floor(Math.random() * ids.length)];
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'Keyboard Shortcuts':
        // Simulate pressing ?
        document.dispatchEvent(new KeyboardEvent('keydown', { key: '?' }));
        break;
      case 'Download vCard': {
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Enes Ago\nEMAIL:enesago010@gmail.com\nURL:https://corner.enesago.com\nEND:VCARD`;
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'enes-ago.vcf';
        a.click();
        URL.revokeObjectURL(url);
        break;
      }
      case 'Open GitHub':
        window.open('https://github.com/EnesAgo', '_blank');
        break;
      case 'Trigger Matrix Rain':
        // Type "matrix" programmatically
        for (const ch of 'matrix') {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ch }));
        }
        break;
      case 'Flip the Site':
        for (const ch of 'flip') {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ch }));
        }
        break;
      case 'Nyan Cat':
        for (const ch of 'nyan') {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ch }));
        }
        break;
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
        setQuery('');
        setSelectedIdx(0);
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const items = listRef.current.querySelectorAll('[data-palette-item]');
      items[selectedIdx]?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIdx]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIdx(prev => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIdx(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIdx]) {
      executeItem(filtered[selectedIdx]);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={() => { setOpen(false); setQuery(''); }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 99998,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '15vh',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0d0d0d',
          border: '2px solid #333',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          width: '100%',
          maxWidth: 480,
          maxHeight: 420,
          display: 'flex',
          flexDirection: 'column',
          margin: '0 16px',
          alignSelf: 'flex-start',
        }}
      >
        {/* Search input */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: '#FFE500', fontSize: 14 }}>⌘</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f0f0f0',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 13,
            }}
          />
          <kbd style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: '#555',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: 3,
            padding: '2px 6px',
          }}>
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: '4px 0' }}>
          {filtered.length === 0 && (
            <div style={{ padding: '20px 16px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#444', textAlign: 'center' }}>
              no results found
            </div>
          )}
          {filtered.map((item, i) => (
            <button
              key={item.label}
              data-palette-item
              onClick={() => executeItem(item)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '8px 16px',
                background: i === selectedIdx ? '#1a1a1a' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.08s',
              }}
              onMouseEnter={() => setSelectedIdx(i)}
            >
              <span style={{ fontSize: 14, width: 22, textAlign: 'center' }}>{item.icon}</span>
              <span style={{ flex: 1, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: i === selectedIdx ? '#f0f0f0' : '#888' }}>
                {item.label}
              </span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#333', textTransform: 'uppercase' }}>
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
