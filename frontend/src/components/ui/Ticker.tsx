export default function Ticker() {
  const text = "★ WELCOME TO MY CORNER OF THE WEB \u00A0\u00A0 ★ last commit: 2 hrs ago \u00A0\u00A0 mood: chaotic but shipping \u00A0\u00A0 react · nestjs · mongodb · vibes \u00A0\u00A0 ★ здраво · merhaba · hallo · hey \u00A0\u00A0";

  return (
    <div style={{ background: '#FFE500', borderBottom: '3px solid #000', height: 30, overflow: 'hidden', position: 'relative', zIndex: 50 }}>
      <div className="ticker-inner" style={{ height: '100%', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#000', padding: '0 40px' }}>
          {text}
        </span>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#000', padding: '0 40px' }}>
          {text}
        </span>
      </div>
    </div>
  );
}
