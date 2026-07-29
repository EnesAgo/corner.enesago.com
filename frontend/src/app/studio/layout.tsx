'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CustomCursor, BackgroundBlobs, Lightbox, VideoModal } from '@/components/ui';
import Footer from '@/components/layout/Footer';
import StudioTabs from '@/components/sections/StudioSection/StudioTabs';
import { getTotalVisits } from '@/services';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  const [visitCount, setVisitCount] = useState(0);

  // Read-only count (does NOT record a visit — that only happens on the homepage).
  useEffect(() => {
    getTotalVisits().then(setVisitCount).catch(() => {});
  }, []);

  return (
    <>
      <BackgroundBlobs />
      <CustomCursor />
      <Lightbox />
      <VideoModal />

      {/* Slim top bar back to the homepage */}
      <div style={{ background: 'rgba(10,10,10,.96)', borderBottom: '3px solid #FFE500', position: 'sticky', top: 0, zIndex: 200, backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 16px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="md:px-8">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, background: '#FFE500', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#000', boxShadow: '2px 2px 0px #fff', flexShrink: 0 }}>AE</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: '#FFE500', letterSpacing: 2 }}>ENESAGO.EXE</div>
          </Link>
          <Link href="/" className="lh" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#888', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1 }}>← back home</Link>
        </div>
      </div>

      <main style={{ position: 'relative', zIndex: 1, minHeight: '70vh' }}>
        {/* Centered studio shell. Blog re-centers to a narrow reading column;
            piano uses the full width for its up-to-3 video grid. */}
        <section style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
          {/* Umbrella header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// studio</span>
            <h1 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>THE STUDIO</h1>
            <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#9B59FF,transparent)' }} />
          </div>

          <StudioTabs />

          {children}
        </section>
      </main>

      <Footer eggsFound={0} entryCount={0} visitCount={visitCount} />
    </>
  );
}
