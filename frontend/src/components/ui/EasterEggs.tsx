'use client';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function EasterEggModal({ isOpen, onClose, children }: EasterEggModalProps) {
  if (!isOpen) return null;

  return (
    <div className="em on">
      {children}
    </div>
  );
}

/* ---- Individual Egg Contents ---- */

export function KonamiEgg({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ border: '3px solid #FFE500', background: '#0d0d0d', maxWidth: 480, width: '100%', boxShadow: '8px 8px 0px #FFE500', maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="wb" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#666', marginLeft: 8 }}>secret.txt</span>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: 16 }}>✕</button>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: '#FFE500', marginBottom: 16, lineHeight: 2 }}>🎮 CHEAT CODE ACTIVATED</div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: '#aaa', lineHeight: 1.8, marginBottom: 16 }}>
          hey, you actually did it. the konami code. you&apos;re my kind of person.<br /><br />
          secret: i built this whole site in one night listening to blink-182 on repeat. everything here is real. the guestbook, the visitor counter, the vibes.
        </div>
        <div style={{ border: '2px dashed #333', padding: 14, background: '#0a0a0a', marginBottom: 16 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#555', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 2 }}>// unlocked: secret playlist</div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#FFE500', lineHeight: 1.8 }}>
            1. blink-182 — i miss you<br />2. the strokes — reptilia<br />3. kanye — through the wire<br />4. avril lavigne — sk8er boi<br />5. outkast — hey ya!
          </div>
        </div>
        <button onClick={onClose} style={{ width: '100%', background: '#FFE500', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: 'pointer', boxShadow: '4px 4px 0px #000' }}>
          CLOSE &amp; KEEP THE SECRET
        </button>
      </div>
    </div>
  );
}

export function BillCipherEgg({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ border: '3px solid #FFD700', background: '#0a0800', maxWidth: 500, width: '100%', boxShadow: '8px 8px 0px #FFD700', overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="wb" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#666' }}>bill_cipher.exe</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: 16 }}>✕</button>
      </div>
      <div style={{ padding: 20, textAlign: 'center' }}>
        <div className="bfl" style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', zIndex: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://media1.tenor.com/m/IIOgmIMaDZ4AAAAd/bill-cipher-deal.gif" alt="Bill Cipher" style={{ width: 350, height: 'auto', filter: 'drop-shadow(0 0 20px #FFD700)' }} />
        </div>
        <div className="gfg" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: '#FFD700', letterSpacing: 4, marginBottom: 12 }}>A-HAHAHA! DEAL?</div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#aa9900', lineHeight: 1.8, marginBottom: 20 }}>
          &quot;a developer who builds for fun, not profit. I haven&apos;t seen that since 2009. That auth refactor at 3am? Inspired. Chaotic. <em style={{ color: '#FFD700' }}>My kind of energy.</em>&quot;
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={onClose} style={{ flex: 1, background: '#FFD700', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: 2, cursor: 'pointer', boxShadow: '4px 4px 0px #000' }}>MAKE A DEAL</button>
          <button onClick={onClose} style={{ flex: 1, background: 'transparent', color: '#555', border: '3px solid #333', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: 2, cursor: 'pointer' }}>RESIST</button>
        </div>
      </div>
    </div>
  );
}

export function TimeCapsuleEgg({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ border: '3px solid #00C8FF', background: '#0d0d0d', maxWidth: 480, width: '100%', boxShadow: '8px 8px 0px #00C8FF', maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="wb" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#666' }}>time_capsule.exe — 2009</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: 16 }}>✕</button>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#00C8FF', marginBottom: 16, lineHeight: 2 }}>📼 TIME CAPSULE: 2009</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
          <div style={{ border: '2px solid #111', padding: 10, background: '#0a0a0a' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginBottom: 6, textTransform: 'uppercase' }}>top 8 friends</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#888', lineHeight: 1.7 }}>tom · sk8er_mike<br />xXdarkXx · jess99</div>
          </div>
          <div style={{ border: '2px solid #111', padding: 10, background: '#0a0a0a' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginBottom: 6, textTransform: 'uppercase' }}>mood</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#FFE500', lineHeight: 1.7 }}>♫ linkin park<br />feeling: emo 🖤</div>
          </div>
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#555', textAlign: 'center', marginBottom: 16, lineHeight: 1.7 }}>
          &quot;myspace. 2009. i was 16 and thought html was magic.<br /><span style={{ color: '#888' }}>it still is.</span>&quot;
        </div>
        <button onClick={onClose} style={{ width: '100%', background: '#00C8FF', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: 'pointer', boxShadow: '4px 4px 0px #000' }}>CLOSE TIME CAPSULE</button>
      </div>
    </div>
  );
}

export function MinecraftEgg({ onClose }: { onClose: () => void }) {
  const colors = ['#5D9E3F', '#5D9E3F', '#8B6914', '#5D9E3F', '#4A90D9', '#4A90D9', '#5D9E3F', '#5D9E3F'];
  return (
    <div style={{ border: '3px solid #5D9E3F', background: '#0a0d08', maxWidth: 480, width: '100%', boxShadow: '8px 8px 0px #5D9E3F', overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto' }}>
      <div style={{ background: '#2d4a1e', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #3a6028' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#5D9E3F' }}>minecraft.exe</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 16 }}>✕</button>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#5D9E3F', marginBottom: 14, lineHeight: 2 }}>🌍 WORLD SEED FOUND</div>
        <div style={{ border: '3px solid #3a6028', background: '#0d1a08', padding: 14, marginBottom: 16 }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#5D9E3F', marginBottom: 8 }}>SEED: -6533818095930530816</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 2, marginBottom: 8 }}>
            {colors.map((c, i) => <div key={i} style={{ height: 14, background: c }} />)}
          </div>
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#7ab85a', lineHeight: 1.8, marginBottom: 16 }}>
          &quot;playing since alpha. my first server was &apos;enesago_world&apos;. i built a skatepark. it was terrible. i was so proud.&quot;
        </div>
        <button onClick={onClose} style={{ width: '100%', background: '#5D9E3F', color: '#000', border: '3px solid #000', padding: 10, fontFamily: "'Press Start 2P', monospace", fontSize: 9, cursor: 'pointer', boxShadow: '4px 4px 0px #000' }}>JOIN WORLD</button>
      </div>
    </div>
  );
}

export function HiddenFolderEgg({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ border: '3px solid #9B59FF', background: '#0d0d0d', maxWidth: 460, width: '100%', boxShadow: '8px 8px 0px #9B59FF', maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="wb" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#666' }}>hidden_folder/private.txt</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: 16 }}>✕</button>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#9B59FF', marginBottom: 16, lineHeight: 2 }}>📁 YOU FOUND THE HIDDEN FOLDER</div>
        <div style={{ border: '2px solid #1a1a1a', background: '#080808', padding: 16, marginBottom: 16 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#9B59FF', marginBottom: 8 }}>private.txt — last modified: 3am</div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: '#888', lineHeight: 1.8 }}>
            things i haven&apos;t told the internet:<br /><br />
            1. i&apos;ve never had a gf, waiting for my future wife<br />
            2. i still have my first skate deck<br />
            3. best code i wrote was at 4am (i&apos;m more productive at night)<br />
            4. i&apos;m scared of shipping things<br />
            5. i ship them anyway
          </div>
        </div>
        <button onClick={onClose} style={{ width: '100%', background: '#9B59FF', color: '#fff', border: '3px solid #000', padding: 10, fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 2, cursor: 'pointer', boxShadow: '4px 4px 0px #000' }}>
          CLOSE &amp; FORGET YOU SAW THIS
        </button>
      </div>
    </div>
  );
}
