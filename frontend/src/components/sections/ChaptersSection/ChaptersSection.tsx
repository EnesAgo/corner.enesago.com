import TimelineItem from './TimelineItem';
import CSSStreak from './CSSStreak';
import MinecraftInventory from './MinecraftInventory';
import FileExplorer from './FileExplorer';
import { timeline } from '@/data/chapters';

interface ChaptersSectionProps {
  onOpenEgg: (n: number) => void;
}

export default function ChaptersSection({ onOpenEgg }: ChaptersSectionProps) {
  return (
    <section id="chapters" style={{ background: '#0a0a0a', borderTop: '3px solid #FFE500', borderBottom: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 003</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>CHAPTERS</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FFE500,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((t, i) => (
              <TimelineItem key={i} item={t} isLast={i === timeline.length - 1} />
            ))}
          </div>
          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <CSSStreak />
            <MinecraftInventory onOpenEgg={onOpenEgg} />
            <FileExplorer onOpenEgg={onOpenEgg} />
          </div>
        </div>
      </div>
    </section>
  );
}
