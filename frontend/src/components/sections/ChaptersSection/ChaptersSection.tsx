import TimelineItem from './TimelineItem';
import type { TimelineItemData } from './TimelineItem';
import CSSStreak from './CSSStreak';
import MinecraftInventory from './MinecraftInventory';
import FileExplorer from './FileExplorer';

interface ChaptersSectionProps {
  onOpenEgg: (n: number) => void;
}

const timeline: TimelineItemData[] = [
  {
    year: '2011 — THE ORIGIN',
    color: '#FF2D78',
    title: 'first html file',
    desc: 'built a myspace page for my skate crew. autoplay music, hit counter, guestbook. terrible. perfect.',
    tags: ['HTML', 'MySpace CSS'],
    company: null,
  },
  {
    year: '2020–2022 — THE GRIND',
    color: '#9B59FF',
    title: 'learning everything',
    desc: 'javascript, then react, then node. youtube tutorials at 2am. building things nobody asked for. breaking things. fixing things. repeat.',
    tags: ['JavaScript', 'React'],
    company: null,
  },
  {
    year: '2023 — EAGLEIT INTERNSHIP',
    color: '#00C8FF',
    title: null,
    company: { name: 'EagleIT', sub: 'Fullstack Internship · 2023' },
    desc: 'first real internship. first real codebase. built features, broke prod once (sorry), learned more in 3 months than 2 years of tutorials.',
    tags: ['React', 'NestJS'],
  },
  {
    year: 'NOW — ZENFULFILLMENT',
    color: '#FFE500',
    title: null,
    company: { name: 'Zenfulfillment', sub: 'Fullstack Internship · Munich, Germany · 2024 → present' },
    desc: 'building real features for a real product in munich. huge codebase. great team. learning german by osmosis and eating too many pretzels.',
    tags: ['Next.js', 'NestJS', 'Munich 🥨'],
    current: true,
  },
];

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
