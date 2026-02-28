'use client';

import { useState, useEffect } from 'react';
import { useGuestbook } from '@/hooks/useGuestbook';

interface GuestbookSectionProps {
  onCountChange?: (count: number) => void;
}

export default function GuestbookSection({ onCountChange }: GuestbookSectionProps) {
  const { entries, totalCount, loading, submitting, error, submitEntry } = useGuestbook();
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    onCountChange?.(totalCount);
  }, [totalCount, onCountChange]);

  const handleSubmit = async () => {
    await submitEntry(name, msg);
    setName('');
    setMsg('');
  };

  /** Format a Date into a relative time string. */
  const formatTime = (date: Date): string => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  };

  return (
    <section id="guestbook" style={{ background: '#0a0a0a', borderTop: '3px solid #FFE500', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 008</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>GUESTBOOK</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FFE500,transparent)' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', border: '1px solid #222', padding: '4px 8px' }}>{totalCount} entries</span>
        </div>

        {error && (
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#FF2D78', marginBottom: 16, padding: '8px 12px', border: '1px solid #FF2D78', background: '#1a0008' }}>
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {loading ? (
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#444', padding: 20, textAlign: 'center' }}>
                loading guestbook...
              </div>
            ) : entries.length === 0 ? (
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#555', padding: 20, textAlign: 'center' }}>
                no entries yet. be the first to sign!
              </div>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="gm">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: entry.color }}>{entry.name}</span>
                    <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#333' }}>{formatTime(entry.createdAt)}</span>
                  </div>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#888', margin: 0, lineHeight: 1.5 }}>{entry.msg}</p>
                </div>
              ))
            )}
          </div>
          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ border: '3px solid #FFE500', background: '#0d0d0d', boxShadow: '6px 6px 0px #FFE500', overflow: 'hidden' }}>
              <div style={{ background: '#FFE500', padding: '8px 14px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>✍️ sign the guestbook</span>
              </div>
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                  <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 4 }}>your name / handle</label>
                  <input
                    type="text"
                    placeholder="sk8er_mike or anonymous..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', background: '#080808', border: '2px solid #222', color: '#ccc', padding: '8px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, outline: 'none' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#FFE500')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#222')}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 4 }}>your message</label>
                  <textarea
                    placeholder="leave something real..."
                    rows={4}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    style={{ width: '100%', background: '#080808', border: '2px solid #222', color: '#ccc', padding: '8px 10px', fontFamily: "'Caveat', cursive", fontSize: 15, outline: 'none', resize: 'none' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#FFE500')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#222')}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  style={{ width: '100%', background: submitting ? '#999' : '#FFE500', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: submitting ? 'wait' : 'pointer', boxShadow: '4px 4px 0px #000', transition: 'all .15s', opacity: submitting ? 0.7 : 1 }}
                  onMouseOver={(e) => { if (!submitting) { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0px #000'; } }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
                >
                  {submitting ? 'SIGNING...' : 'SIGN IT →'}
                </button>
              </div>
            </div>
            <div style={{ border: '2px dashed #222', padding: 14, background: '#080808', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#444', lineHeight: 1.7 }}>&quot;this guestbook is real.<br />the visitor counter is real.<br />the vibes are authentic.&quot;</div>
              <div style={{ marginTop: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222' }}>— site owner, probably at 3am</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
