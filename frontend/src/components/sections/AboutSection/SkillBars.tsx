import { skillBars } from '@/data/about';

export default function SkillBars() {
  return (
    <div style={{ border: '2px solid #111', background: '#0a0a0a', overflow: 'hidden' }}>
      <div style={{ padding: '8px 14px', borderBottom: '2px solid #111', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 8, height: 8, background: '#FF2D78', borderRadius: '50%' }} />
        <div style={{ width: 8, height: 8, background: '#FFE500', borderRadius: '50%' }} />
        <div style={{ width: 8, height: 8, background: '#00FF88', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginLeft: 8 }}>skill_levels.exe</span>
      </div>
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {skillBars.map((skill) => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#777' }}>{skill.name}</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: skill.color }}>{skill.pct}%</span>
            </div>
            <div style={{ height: 6, background: '#111', border: '1px solid #1a1a1a' }}>
              <div className="sbf" style={{ ['--tw' as string]: `${skill.pct}%`, height: '100%', background: skill.grad, animationDelay: skill.delay }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
