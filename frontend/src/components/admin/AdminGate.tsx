'use client';

import { useEffect, useState } from 'react';

/**
 * Password gate for the /admin authoring page. Checks for an existing session on
 * mount, otherwise shows a login form that POSTs to /api/admin/login (which sets
 * the httpOnly session cookie). Renders children only when authed.
 */
export default function AdminGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch('/api/admin/login')
      .then((r) => r.json())
      .then((d) => setAuthed(!!d.authed))
      .catch(() => setAuthed(false));
  }, []);

  const login = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || 'Login failed.');
      }
      setAuthed(true);
      setPassword('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Login failed.');
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    setAuthed(false);
  };

  if (authed === null) {
    return <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#444', padding: 40, textAlign: 'center' }}>checking session…</div>;
  }

  if (!authed) {
    return (
      <div style={{ maxWidth: 380, margin: '80px auto', border: '3px solid #FFE500', background: '#0d0d0d', boxShadow: '6px 6px 0 #FFE500' }}>
        <div style={{ background: '#FFE500', padding: '8px 14px' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#000', fontWeight: 700, textTransform: 'uppercase' }}>🔒 admin access</span>
        </div>
        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
            placeholder="password"
            autoFocus
            style={{ width: '100%', background: '#080808', border: '2px solid #222', color: '#ccc', padding: '10px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, outline: 'none' }}
          />
          {error && <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#FF2D78' }}>{error}</div>}
          <button
            onClick={login}
            disabled={busy}
            style={{ width: '100%', background: '#FFE500', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: busy ? 'wait' : 'pointer', boxShadow: '4px 4px 0px #000' }}
          >
            {busy ? 'CHECKING…' : 'UNLOCK →'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button onClick={logout} style={{ background: 'transparent', border: '2px solid #333', color: '#888', padding: '6px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1 }}>
          log out
        </button>
      </div>
      {children}
    </div>
  );
}
