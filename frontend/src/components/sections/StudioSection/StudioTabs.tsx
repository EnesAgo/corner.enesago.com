'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { href: '/studio/blog', label: 'BLOG', icon: '✍', color: '#00C8FF' },
  { href: '/studio/piano', label: 'PIANO', icon: '🎹', color: '#9B59FF' },
];

/**
 * Route-based tab bar: each tab is a real <Link>, so switching tabs changes the
 * URL (navigates between /studio/blog and /studio/piano) rather than toggling
 * client state. The active tab is derived from the current pathname.
 */
export default function StudioTabs() {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
      {TABS.map((tab) => {
        const active = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="stab hs"
            style={{
              borderColor: tab.color,
              color: active ? '#000' : tab.color,
              background: active ? tab.color : '#0d0d0d',
              boxShadow: active ? `5px 5px 0 ${tab.color}` : '3px 3px 0 #000',
            }}
          >
            <span style={{ fontSize: 16 }}>{tab.icon}</span>
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
