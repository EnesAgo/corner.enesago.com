'use client';

import { useState } from 'react';

const initialEntries = [
  { name: 'sk8er_mike', color: '#FFE500', time: '2 days ago', msg: 'dude your site is sick. reminds me of the old web. keep it up 🤙' },
  { name: 'anonymous', color: '#00C8FF', time: '1 week ago', msg: 'found this site at 2am. stayed for an hour. this is the internet i miss.' },
  { name: 'css_nerd_99', color: '#FF2D78', time: '2 weeks ago', msg: '121 day streak on cssbattle?? absolute legend. i gave up at day 12 😭' },
  { name: 'piano_enjoyer', color: '#9B59FF', time: '3 weeks ago', msg: "the chopin recording is beautiful. don't stop playing." },
  { name: 'devgirl_mk', color: '#00FF88', time: '1 month ago', msg: 'здраво од Македонија! 🇲🇰 nice to see someone from the balkans building cool stuff in munich' },
  { name: 'konami_guy', color: '#FFE500', time: '1 month ago', msg: '↑↑↓↓←→←→BA — you know what i mean 😏' },
];

const nameColors = ['#FFE500', '#FF2D78', '#00C8FF', '#00FF88', '#9B59FF'];

interface GuestbookSectionProps {
  entryCount: number;
  setEntryCount: (n: number) => void;
}

export default function GuestbookSection({ entryCount, setEntryCount }: GuestbookSectionProps) {
  const [entries, setEntries] = useState(initialEntries);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const addEntry = () => {
    const n = name.trim() || 'anonymous';
    const m = msg.trim();
    if (!m) return;
    const c = nameColors[Math.floor(Math.random() * nameColors.length)];
    setEntries([{ name: n, color: c, time: 'just now', msg: m }, ...entries]);
    setName('');
    setMsg('');
    setEntryCount(entryCount + 1);
  };

  return (
    <section id="guestbook" style={{ background: '#0a0a0a', borderTop: '3px solid #FFE500', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 008</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>GUESTBOOK</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FFE500,transparent)' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', border: '1px solid #222', padding: '4px 8px' }}>{entryCount} entries</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {entries.map((entry, i) => (
              <div key={i} className="gm">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: entry.color }}>{entry.name}</span>
                  <span style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#333' }}>{entry.time}</span>
                </div>
                <p style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#888', margin: 0, lineHeight: 1.5 }}>{entry.msg}</p>
              </div>
            ))}
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
                  onClick={addEntry}
                  style={{ width: '100%', background: '#FFE500', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: 'pointer', boxShadow: '4px 4px 0px #000', transition: 'all .15s' }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0px #000'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
                >
                  SIGN IT →
                </button>
              </div>
            </div>
            <div style={{ border: '2px dashed #222', padding: 14, background: '#080808', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#444', lineHeight: 1.7 }}>&quot;this guestbook is real.<br />the visitor counter is fake.<br />the vibes are authentic.&quot;</div>
              <div style={{ marginTop: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#222' }}>— site owner, probably at 3am</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
