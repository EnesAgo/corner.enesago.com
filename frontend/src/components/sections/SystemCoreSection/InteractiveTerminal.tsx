'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Line {
  type: 'input' | 'output';
  text: string;
  color?: string;
}

const FS: Record<string, string> = {
  'university.txt':
    'Munich University of Digital Technologies\nB.Sc. Cyber Security · Munich, DE 🇩🇪\nenrolled: 2 semesters · still going strong',
  'current_focus.txt':
    '→ learning how to break things (legally)\n→ the intersection of dev + security = my thing\n→ building stuff at night, studying by day',
  'skills.txt':
    'React / Next.js ···· ████████████████████░░ 92%\nNestJS / Node.js ··· █████████████████░░░░░ 85%\nMongoDB / Redis ···· ████████████████░░░░░░ 78%\nFailing ····· ██████████████░░░░░░░░ 0%',
  'about.txt':
    'im just a random person that likes coding, skating, minecraft, cars, cartoon network, audi, piano and hangouts. my passiong for coding: i started coding in 7th grade with c++. I started with competitive programming (for competitions & olympiad) but after that i discovered web dev and i loved it. \n\nMy first website was terible but now i build prod apps. by day: fullstack dev + cyber security student in munich. by night: skating, playing piano, gaming, filming clips with an old camera, driving my audiii and being myself.',
  'interests.txt':
    '🛹 skateboarding\n🎤 hip-hop\n🎸 rock\n📸 film skate clips\n💿 cd burning\n🌃 night city walks\n🎹 piano & singing\n🎮 minecraft\n🏎️ Audi',
  'contact.txt':
    'github: github.com/EnesAgo\nemail:  enesago010@gmail.com\nstatus: available · Munich, DE',
  'secret.txt':
    '🔐 ACCESS DENIED\n\njk. you found it.\nthe konami code still works. ↑↑↓↓←→←→BA\nalso try typing "billcipher".\n\n— enes',
};

const DIRS: Record<string, string[]> = {
  '~': ['subjects/', 'projects/', 'university.txt', 'current_focus.txt', 'skills.txt', 'about.txt', 'interests.txt', 'contact.txt', 'secret.txt'],
  'subjects': ['network_security/', 'cryptography/', 'algorithms_&_ds/', 'secure_coding/'],
  'projects': ['SkateLog/', 'MixTape_API/', 'GrainFilter.js/', 'NightShot/', 'CrateDigger/'],
};

const HELP = `available commands:
  help          — show this message
  whoami        — who am i?
  ls [dir]      — list files (try: ls, ls projects, ls subjects)
  cat <file>    — read a file (try: cat skills.txt, cat secret.txt)
  pwd           — print working directory
  date          — current date
  uptime        — system uptime
  ping <host>   — ping a host
  clear         — clear the terminal
  neofetch      — system info
  sudo rm -rf / — don't.
  exit          — close terminal (just kidding, you can't leave)`;

const NEOFETCH = `
       ████████            enes@corner.enesago.com
     ██░░░░░░░░██          ————————————————————————
   ██░░████████░░██        OS:      enesOS v2.4.0
  ██░░██      ██░░██       Host:    Munich, DE 🇩🇪
  ██░░██      ██░░██       Kernel:  curiosity-6.1.0
  ██░░████████░░██         Shell:   zsh + vibes
   ██░░░░░░░░██            Theme:   Y2K Dark [hacker]
     ██░░░░██              Lang:    TS, JS, Python
       ████                WM:      chaos-manager
                           Music:   Duman — now playing
  ████████████████         Uptime:  2 semesters
                           Coffee:  ████████████ 100%`;

function processCommand(input: string): Line[] {
  const trimmed = input.trim();
  const parts = trimmed.split(/\s+/);
  const cmd = parts[0]?.toLowerCase() ?? '';
  const arg = parts.slice(1).join(' ');

  if (!cmd) return [];

  switch (cmd) {
    case 'help':
      return [{ type: 'output', text: HELP, color: '#00aa55' }];

    case 'whoami':
      return [{ type: 'output', text: 'enes_ago · student · hacker (the good kind)', color: '#00FF88' }];

    case 'pwd':
      return [{ type: 'output', text: '/home/enes/corner', color: '#00FF88' }];

    case 'ls': {
      const dir = arg.replace(/\/$/, '') || '~';
      const contents = DIRS[dir];
      if (!contents) return [{ type: 'output', text: `ls: cannot access '${arg}': No such file or directory`, color: '#FF2D78' }];
      return [{ type: 'output', text: contents.join('  '), color: '#00aa55' }];
    }

    case 'cat': {
      if (!arg) return [{ type: 'output', text: 'cat: missing operand. try: cat skills.txt', color: '#FF2D78' }];
      const file = FS[arg];
      if (!file) return [{ type: 'output', text: `cat: ${arg}: No such file or directory`, color: '#FF2D78' }];
      return [{ type: 'output', text: file, color: '#00FF88' }];
    }

    case 'date':
      return [{ type: 'output', text: new Date().toString(), color: '#00FF88' }];

    case 'uptime':
      return [{ type: 'output', text: 'up 2 semesters, 0 burnouts (yet)', color: '#00FF88' }];

    case 'ping': {
      if (!arg) return [{ type: 'output', text: 'ping: missing host. try: ping google.com', color: '#FF2D78' }];
      const ms1 = (Math.random() * 40 + 10).toFixed(1);
      const ms2 = (Math.random() * 40 + 10).toFixed(1);
      const ms3 = (Math.random() * 40 + 10).toFixed(1);
      return [{ type: 'output', text: `PING ${arg}\n64 bytes: time=${ms1}ms\n64 bytes: time=${ms2}ms\n64 bytes: time=${ms3}ms\n--- ${arg} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss`, color: '#00aa55' }];
    }

    case 'clear':
      return [{ type: 'output', text: '__CLEAR__' }];

    case 'neofetch':
      return [{ type: 'output', text: NEOFETCH, color: '#00FF88' }];

    case 'sudo':
      if (arg.startsWith('rm')) {
        return [{ type: 'output', text: '🔥 nice try. the portfolio survives another day.', color: '#FF2D78' }];
      }
      return [{ type: 'output', text: 'enes is not in the sudoers file. this incident will be reported.', color: '#FF2D78' }];

    case 'exit':
      return [{ type: 'output', text: 'logout\n\njk. you\'re stuck here forever. try "help" instead.', color: '#FFE500' }];

    case 'cd':
      return [{ type: 'output', text: 'nice try. this is a single-page app. you\'re already home.', color: '#FFE500' }];

    case 'rm':
      return [{ type: 'output', text: 'rm: permission denied. i worked too hard on these files.', color: '#FF2D78' }];

    case 'vim':
    case 'nano':
    case 'emacs':
      return [{ type: 'output', text: `${cmd}: command blocked. we use VS Code here.`, color: '#FFE500' }];

    case 'npm':
      return [{ type: 'output', text: 'added 847 packages, audited 847 packages in 2s\nfound 0 vulnerabilities (suspicious)\n\njust kidding, node_modules is 2.3GB', color: '#00aa55' }];

    case 'git':
      return [{ type: 'output', text: 'last commit: "fixed bug" (it was not fixed)\nbranch: main (always main, never develop)', color: '#00aa55' }];

    default:
      return [{ type: 'output', text: `command not found: ${cmd}. type "help" for available commands.`, color: '#FF2D78' }];
  }
}

const INITIAL_LINES: Line[] = [
  { type: 'output', text: 'Welcome to enesOS v2.4.0 — type "help" to get started', color: '#007733' },
  { type: 'output', text: '————————————————————————————————————————\n', color: '#1a3a1a' },
  { type: 'input', text: 'whoami' },
  { type: 'output', text: 'enes_ago · student · hacker (the good kind)', color: '#00FF88' },
  { type: 'input', text: 'cat university.txt' },
  { type: 'output', text: 'Munich University of Digital Technologies\nB.Sc. Cyber Security · Munich, DE 🇩🇪', color: '#00FF88' },
  { type: 'input', text: 'ls subjects/' },
  { type: 'output', text: 'network_security/  cryptography/  algorithms_&_ds/  secure_coding/', color: '#00aa55' },
  { type: 'input', text: 'cat current_focus.txt' },
  { type: 'output', text: '→ learning how to break things (legally)\n→ the intersection of dev + security = my thing\n', color: '#00FF88' },
  { type: 'input', text: 'uptime' },
  { type: 'output', text: 'enrolled: 2 semesters · still going strong', color: '#00FF88' },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const inputLine: Line = { type: 'input', text: cmd };
    const outputLines = processCommand(cmd);

    // Handle clear
    if (outputLines.length === 1 && outputLines[0].text === '__CLEAR__') {
      setLines(INITIAL_LINES);
    } else {
      setLines((prev) => [...prev, inputLine, ...outputLines]);
    }

    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  }, [input]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = prev === -1 ? history.length - 1 : Math.max(0, prev - 1);
        if (history[next]) setInput(history[next]);
        return next;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const next = prev + 1;
        if (next >= history.length) {
          setInput('');
          return -1;
        }
        if (history[next]) setInput(history[next]);
        return next;
      });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocomplete for filenames
      const val = input.trim();
      const parts = val.split(/\s+/);
      if (parts.length === 2 && (parts[0] === 'cat' || parts[0] === 'ls')) {
        const partial = parts[1].toLowerCase();
        const pool = parts[0] === 'cat' ? Object.keys(FS) : Object.keys(DIRS);
        const match = pool.find((k) => k.toLowerCase().startsWith(partial));
        if (match) setInput(`${parts[0]} ${match}`);
      }
    }
  }, [history, input]);

  return (
    <div style={{ border: '2px solid #00FF88', background: '#020a02', boxShadow: '0 0 30px rgba(0,255,136,.08)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className="sln" style={{ animationDuration: '5s' }} />
      <div style={{ background: '#001a00', padding: '8px 14px', borderBottom: '2px solid #00FF88', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00FF88', marginLeft: 8, opacity: 0.7 }}>terminal — mudt_system.sh</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: '#1a4a1a', marginLeft: 'auto', textTransform: 'uppercase', letterSpacing: 1 }}>interactive</span>
      </div>
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        style={{ padding: 18, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, lineHeight: 1.8, flex: 1, overflowY: 'auto', maxHeight: 420, minHeight: 320, cursor: 'text' }}
      >
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === 'input' ? (
              <div>
                <span style={{ color: '#00aa55' }}>enes</span>
                <span style={{ color: '#1a4a1a' }}>@</span>
                <span style={{ color: '#00aa55' }}>corner</span>
                <span style={{ color: '#1a4a1a' }}> $ </span>
                <span style={{ color: '#ccc' }}>{line.text}</span>
              </div>
            ) : (
              <div style={{ color: line.color ?? '#00FF88', whiteSpace: 'pre-wrap', marginBottom: 8 }}>{line.text}</div>
            )}
          </div>
        ))}
        {/* Active input line */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#00FF88' }}>enes</span>
          <span style={{ color: '#1a4a1a' }}>@</span>
          <span style={{ color: '#00aa55' }}>corner <span style={{ color: '#1a4a1a' }}> $ </span></span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ccc',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              lineHeight: 1.8,
              caretColor: '#00FF88',
              padding: 0,
              paddingLeft: "0.5em",
              margin: 0,
            }}
          />
        </form>
      </div>
    </div>
  );
}
