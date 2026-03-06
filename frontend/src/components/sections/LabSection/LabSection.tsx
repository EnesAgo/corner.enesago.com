import ExperimentCard from './ExperimentCard';
import GlitchGenerator from './GlitchGenerator';
import VHSFilter from './VHSFilter';
import PixelFontRenderer from './PixelFontRenderer';
import { experiments } from '@/data/lab';

export default function LabSection() {
  const experimentChildren: Record<string, React.ReactNode> = {
    '001': <GlitchGenerator />,
    '002': <VHSFilter />,
    '003': <PixelFontRenderer />,
  };

  return (
    <section id="lab" style={{ background: '#0a0a0a', borderTop: '3px solid #111' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 16px' }} className="md:px-8">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3 }}>// 010</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(28px,5vw,40px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: 0 }}>THE LAB ⚗</h2>
          <div style={{ flex: 1, minWidth: 40, height: 2, background: 'linear-gradient(90deg,#00FF88,transparent)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((exp) => (
            <ExperimentCard key={exp.num} num={exp.num} color={exp.color} title={exp.title} desc={exp.desc}>
              {experimentChildren[exp.num]}
            </ExperimentCard>
          ))}
        </div>
      </div>
    </section>
  );
}
