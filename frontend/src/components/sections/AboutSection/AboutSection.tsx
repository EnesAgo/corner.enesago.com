import ProfileCard from './ProfileCard';
import CollectibleBadges from './CollectibleBadges';
import SocialLinks from './SocialLinks';
import ThingsICareAbout from './ThingsICareAbout';
import CurrentlyInto from './CurrentlyInto';
import SkillBars from './SkillBars';
import { aboutParagraphs } from '@/data/about';

interface AboutSectionProps {
  onOpenEgg: (n: number) => void;
}

export default function AboutSection({ onOpenEgg }: AboutSectionProps) {
  void onOpenEgg;
  return (
    <section id="about" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Profile Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <ProfileCard />
          <CollectibleBadges />
          <SocialLinks />
        </div>

        {/* Right: About Content */}
        <div className="lg:col-span-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 001</span>
            <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>WHO AM I</h2>
            <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#FFE500,transparent)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {aboutParagraphs.map((text, i) => (
              <p key={i} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#777', lineHeight: 1.85, margin: 0 }}>
                {text}
              </p>
            ))}
          </div>

          <ThingsICareAbout />
          <CurrentlyInto />
          <SkillBars />
        </div>
      </div>
    </section>
  );
}
