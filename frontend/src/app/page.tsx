'use client';

import { useState, useCallback } from 'react';
import { useEasterEggs } from '@/hooks';
import {
  Ticker,
  CustomCursor,
  BackgroundBlobs,
  FlashOverlay,
  Lightbox,
  EasterEggModal,
  KonamiEgg,
  BillCipherEgg,
  TimeCapsuleEgg,
  MinecraftEgg,
  HiddenFolderEgg,
} from '@/components/ui';
import { Navbar, Footer, MobileMenu } from '@/components/layout';
import {
  HeroSection,
  TechStrip,
  DiarySection,
  AboutSection,
  ProjectsSection,
  PolaroidWall,
  ChaptersSection,
  SystemCoreSection,
  MusicSection,
  BurnedCDsSection,
  BlogSection,
  GuestbookSection,
  VlogSection,
  LabSection,
} from '@/components/sections';

export default function Home() {
  const { openEgg, closeEgg, isEggOpen, eggsFound } = useEasterEggs();
  const [entryCount, setEntryCount] = useState(0);
  const handleCountChange = useCallback((count: number) => setEntryCount(count), []);

  return (
    <>
      {/* Global overlays */}
      <BackgroundBlobs />
      <CustomCursor />
      <FlashOverlay />
      <Lightbox />
      <MobileMenu />

      {/* Easter egg modals */}
      <EasterEggModal isOpen={isEggOpen(1)} onClose={() => closeEgg(1)}>
        <KonamiEgg onClose={() => closeEgg(1)} />
      </EasterEggModal>
      <EasterEggModal isOpen={isEggOpen(2)} onClose={() => closeEgg(2)}>
        <BillCipherEgg onClose={() => closeEgg(2)} />
      </EasterEggModal>
      <EasterEggModal isOpen={isEggOpen(3)} onClose={() => closeEgg(3)}>
        <TimeCapsuleEgg onClose={() => closeEgg(3)} />
      </EasterEggModal>
      <EasterEggModal isOpen={isEggOpen(4)} onClose={() => closeEgg(4)}>
        <MinecraftEgg onClose={() => closeEgg(4)} />
      </EasterEggModal>
      <EasterEggModal isOpen={isEggOpen(5)} onClose={() => closeEgg(5)}>
        <HiddenFolderEgg onClose={() => closeEgg(5)} />
      </EasterEggModal>

      {/* Navigation */}
      <Ticker />
      <Navbar onOpenEgg={openEgg} />

      {/* Page sections */}
      <HeroSection onOpenEgg={openEgg} />
      <TechStrip />
      <DiarySection />
      <AboutSection onOpenEgg={openEgg} />
      <ProjectsSection />
      <PolaroidWall />
      <ChaptersSection onOpenEgg={openEgg} />
      <SystemCoreSection />
      <MusicSection />
      <BurnedCDsSection />
      <BlogSection />
      <GuestbookSection onCountChange={handleCountChange} />
      <VlogSection />
      <LabSection />

      {/* Footer */}
      <Footer eggsFound={eggsFound} entryCount={entryCount} />
    </>
  );
}

