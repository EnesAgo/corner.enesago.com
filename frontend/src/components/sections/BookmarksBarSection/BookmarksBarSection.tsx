'use client';

import { useState } from 'react';
import { bookmarks, bookmarkFolders, folderColors } from '@/data/bookmarks';

function BookmarkItem({ title, url, favicon, desc, color }: { title: string; url: string; favicon: string; desc?: string; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 10px',
        background: hovered ? '#1a1a1a' : 'transparent',
        border: `1px solid ${hovered ? color : 'transparent'}`,
        textDecoration: 'none',
        transition: 'all .15s',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: 13, flexShrink: 0 }}>{favicon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          color: hovered ? color : '#ccc',
          fontWeight: 600,
          transition: 'color .15s',
          display: 'block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {title}
        </span>
        {desc && hovered && (
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 8,
            color: '#555',
            display: 'block',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {desc}
          </span>
        )}
      </div>
      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 8,
        color: '#333',
        opacity: hovered ? 1 : 0,
        transition: 'opacity .15s',
      }}>
        ↗
      </span>
    </a>
  );
}

export default function BookmarksBarSection() {
  const [activeFolder, setActiveFolder] = useState<string>('Daily');
  const filtered = bookmarks.filter(b => b.folder === activeFolder);
  const color = folderColors[activeFolder] || '#FFE500';

  return (
    <section id="bookmarks" style={{ borderTop: '3px solid #B388FF', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 012</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>BOOKMARKS BAR</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#B388FF,transparent)' }} />
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginBottom: 20, letterSpacing: 1 }}>
          my browser bookmarks bar exported — curated links i actually use.
        </p>

        {/* Browser-style bookmarks bar */}
        <div style={{ background: '#0d0d0d', border: '2px solid #222', overflow: 'hidden' }}>
          {/* Bar top — browser tab look */}
          <div style={{
            background: '#111',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            borderBottom: '2px solid #222',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
            <div style={{
              flex: 1,
              marginLeft: 8,
              background: '#0d0d0d',
              border: '1px solid #222',
              padding: '4px 10px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9,
              color: '#444',
            }}>
              ★ Bookmarks Bar / {activeFolder}
            </div>
          </div>

          {/* Folder tabs */}
          <div style={{
            display: 'flex',
            gap: 0,
            borderBottom: '2px solid #222',
            overflowX: 'auto',
          }}>
            {bookmarkFolders.map(folder => {
              const isActive = folder === activeFolder;
              const fColor = folderColors[folder];
              return (
                <button
                  key={folder}
                  onClick={() => setActiveFolder(folder)}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 9,
                    color: isActive ? '#000' : '#555',
                    background: isActive ? fColor : 'transparent',
                    border: 'none',
                    borderRight: '1px solid #222',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontWeight: isActive ? 700 : 400,
                    transition: 'all .15s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  📁 {folder}
                </button>
              );
            })}
          </div>

          {/* Bookmarks list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 0 }}>
            {filtered.map(bm => (
              <BookmarkItem key={bm.title} {...bm} color={color} />
            ))}
          </div>

          {/* Status bar */}
          <div style={{
            borderTop: '1px solid #1a1a1a',
            padding: '4px 12px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#333' }}>
              {filtered.length} bookmarks in {activeFolder}
            </span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#333' }}>
              {bookmarks.length} total across {bookmarkFolders.length} folders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
