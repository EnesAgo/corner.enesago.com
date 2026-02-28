const skills = [
  { name: 'React / Next.js', pct: 92, color: '#FF2D78', grad: 'linear-gradient(90deg,#FF2D78,#9B59FF)', delay: '0s' },
  { name: 'NestJS / Node.js', pct: 85, color: '#FFE500', grad: 'linear-gradient(90deg,#FFE500,#FF2D78)', delay: '.5s' },
  { name: 'MongoDB / Redis', pct: 78, color: '#00FF88', grad: 'linear-gradient(90deg,#00FF88,#00C8FF)', delay: '.7s' },
  { name: 'Cyber Security', pct: 68, color: '#00C8FF', grad: 'linear-gradient(90deg,#00C8FF,#9B59FF)', delay: '.9s' },
];

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
        {skills.map((skill) => (
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
