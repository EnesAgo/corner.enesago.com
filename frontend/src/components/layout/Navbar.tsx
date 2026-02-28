'use client';

import { useClock } from '@/hooks';
import { toggleMobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenEgg: (n: number) => void;
}

const navLinks = [
  { href: '#home', label: 'HOME', hoverColor: '#FFE500', isActive: true },
  { href: '#about', label: 'ABOUT', hoverColor: '#FF2D78' },
  { href: '#projects', label: 'WORK', hoverColor: '#00C8FF' },
  { href: '#chapters', label: 'ERAS', hoverColor: '#FFE500' },
  { href: '#sysCore', label: 'SYS', hoverColor: '#00FF88' },
  { href: '#music', label: 'MUSIC', hoverColor: '#9B59FF' },
  { href: '#playlist', label: '💿 CD', hoverColor: '#FF2D78' },
  { href: '#blog', label: 'BLOG', hoverColor: '#00C8FF' },
  { href: '#guestbook', label: 'GUESTBOOK', hoverColor: '#FFE500' },
  { href: '#lab', label: 'LAB ⚗', hoverColor: '#FFE500' },
];

export default function Navbar({ onOpenEgg }: NavbarProps) {
  const time = useClock();

  return (
    <nav style={{ background: 'rgba(10,10,10,.96)', borderBottom: '3px solid #FFE500', padding: '0 16px', position: 'sticky', top: 0, zIndex: 200, backdropFilter: 'blur(8px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="tt">
            <div
              data-clickable
              onClick={() => onOpenEgg(3)}
              style={{ width: 36, height: 36, background: '#FFE500', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#000', boxShadow: '2px 2px 0px #fff', cursor: 'pointer', flexShrink: 0 }}
            >
              AE
            </div>
            <div className="tc">est. 2009 · click me 👀</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: '#FFE500', letterSpacing: 2, lineHeight: 1 }}>ENESAGO.EXE</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.3, color: '#444' }}>v2.0.11 · <span>{time}</span></div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hs"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 9,
                color: link.isActive ? '#FFE500' : '#ccc',
                textTransform: 'uppercase',
                letterSpacing: 1,
                padding: '5px 10px',
                border: link.isActive ? '2px solid #FFE500' : '2px solid #222',
                textDecoration: 'none',
                transition: 'all .15s',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = link.hoverColor;
                (e.currentTarget as HTMLElement).style.color = link.hoverColor;
                if (link.isActive) (e.currentTarget as HTMLElement).style.background = link.hoverColor;
                if (link.isActive) (e.currentTarget as HTMLElement).style.color = '#000';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = link.isActive ? '#FFE500' : '#222';
                (e.currentTarget as HTMLElement).style.color = link.isActive ? '#FFE500' : '#ccc';
                if (link.isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="hidden lg:flex items-center gap-2" style={{ border: '1px solid #1a1a1a', padding: '4px 10px', background: '#0d0d0d' }}>
            <div className="md" style={{ background: '#00FF88' }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#00FF88', textTransform: 'uppercase', letterSpacing: 1 }}>online</span>
          </div>
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            style={{ background: 'none', border: '2px solid #FFE500', color: '#FFE500', padding: '6px 12px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, cursor: 'pointer', letterSpacing: 1 }}
          >
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
}
