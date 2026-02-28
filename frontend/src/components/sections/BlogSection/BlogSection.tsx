import FeaturedPost from './FeaturedPost';
import SmallPost from './SmallPost';
import CurrentlySidebar from './CurrentlySidebar';
import MultilingualQuotes from './MultilingualQuotes';

export default function BlogSection() {
  return (
    <section id="blog" style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 007</span>
        <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>BRAIN DUMP</h2>
        <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00C8FF,transparent)' }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: posts */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <FeaturedPost />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SmallPost date="OCT 28 · 5 MIN" title="Building Real-Time Chat with NestJS WebSockets" desc="the actual way to do it, not the tutorial way." tag="dev" />
            <SmallPost date="OCT 12 · 3 MIN" title="Playing Piano While Learning to Code" desc="both require muscle memory. both require patience." tag="life" />
          </div>
        </div>
        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <CurrentlySidebar />
          <MultilingualQuotes />
        </div>
      </div>
    </section>
  );
}
