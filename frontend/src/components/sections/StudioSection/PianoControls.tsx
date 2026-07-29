'use client';

export type Segment = 'all' | 'clips' | 'audio';
export type Sort = 'newest' | 'oldest';

interface Props {
  segment: Segment;
  setSegment: (s: Segment) => void;
  clipCount: number;
  audioCount: number;
  allTags: string[];
  activeTags: Set<string>;
  toggleTag: (t: string) => void;
  query: string;
  setQuery: (q: string) => void;
  sort: Sort;
  setSort: (s: Sort) => void;
}

const SEGMENTS: { key: Segment; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'clips', label: '🎬 CLIPS' },
  { key: 'audio', label: '🎧 RECORDINGS' },
];

export default function PianoControls(p: Props) {
  const count = (seg: Segment) => (seg === 'clips' ? p.clipCount : seg === 'audio' ? p.audioCount : p.clipCount + p.audioCount);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
      {/* Segments + search + sort */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {SEGMENTS.map((s) => {
            const active = p.segment === s.key;
            return (
              <button
                key={s.key}
                onClick={() => p.setSegment(s.key)}
                className="stab hs"
                style={{ fontSize: 15, padding: '6px 14px', borderColor: '#9B59FF', color: active ? '#000' : '#9B59FF', background: active ? '#9B59FF' : '#0d0d0d', boxShadow: active ? '4px 4px 0 #9B59FF' : '3px 3px 0 #000' }}
              >
                {s.label} <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, opacity: 0.8, marginLeft: 4 }}>{count(s.key)}</span>
              </button>
            );
          })}
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, border: '2px solid #222', background: '#080808', padding: '4px 10px' }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#9B59FF' }}>&gt;</span>
          <input
            value={p.query}
            onChange={(e) => p.setQuery(e.target.value)}
            placeholder="search…"
            style={{ background: 'transparent', border: 'none', outline: 'none', color: '#ccc', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, width: 120 }}
          />
        </div>

        <button
          onClick={() => p.setSort(p.sort === 'newest' ? 'oldest' : 'newest')}
          style={{ background: '#0d0d0d', border: '2px solid #222', color: '#888', padding: '6px 10px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1 }}
        >
          {p.sort === 'newest' ? '↓ newest' : '↑ oldest'}
        </button>
      </div>

      {/* Tag chips */}
      {p.allTags.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {p.allTags.map((tag) => {
            const active = p.activeTags.has(tag);
            return (
              <button
                key={tag}
                onClick={() => p.toggleTag(tag)}
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, padding: '3px 9px', border: `1px solid ${active ? '#9B59FF' : '#2a2a2a'}`, background: active ? '#9B59FF' : 'transparent', color: active ? '#000' : '#777', cursor: 'pointer', letterSpacing: 0.5, transition: 'all .15s' }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
