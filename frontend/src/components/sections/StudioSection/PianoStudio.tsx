'use client';

import { useMemo, useState } from 'react';
import { pianoRecordings } from '@/data/pianoRecordings';
import { PianoPlayerProvider } from './PianoPlayerContext';
import PianoPlayerDock from './PianoPlayerDock';
import PianoControls, { type Segment, type Sort } from './PianoControls';
import ClipGrid from './ClipGrid';
import AudioTrackList from './AudioTrackList';

const paneLabel: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 12, display: 'block' };

export default function PianoStudio() {
  const recordings = pianoRecordings;
  const [segment, setSegment] = useState<Segment>('all');
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('newest');

  const toggleTag = (t: string) =>
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });

  const allTags = useMemo(() => {
    const set = new Set<string>();
    recordings.forEach((r) => r.tags.forEach((t) => set.add(t)));
    return [...set].sort();
  }, [recordings]);

  const { clips, audios } = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = recordings.filter((r) => {
      if (q && !r.title.toLowerCase().includes(q)) return false;
      if (activeTags.size > 0 && !r.tags.some((t) => activeTags.has(t))) return false;
      return true;
    });
    if (sort === 'oldest') list = [...list].reverse(); // array is authored newest-first
    return {
      clips: list.filter((r) => !!r.videoUrl),
      audios: list.filter((r) => !r.videoUrl && !!r.audioUrl),
    };
  }, [recordings, query, activeTags, sort]);

  if (recordings.length === 0) {
    return (
      <div style={{ border: '2px dashed #222', padding: 40, textAlign: 'center', background: '#080808' }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: '#555' }}>no recordings yet. the piano is warming up 🎹</div>
      </div>
    );
  }

  return (
    <PianoPlayerProvider>
      <PianoControls
        segment={segment}
        setSegment={setSegment}
        clipCount={clips.length}
        audioCount={audios.length}
        allTags={allTags}
        activeTags={activeTags}
        toggleTag={toggleTag}
        query={query}
        setQuery={setQuery}
        sort={sort}
        setSort={setSort}
      />

      {segment === 'all' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <span style={paneLabel}>// clips</span>
            <ClipGrid clips={clips} minWidth={200} />
          </div>
          <div>
            <span style={paneLabel}>// recordings</span>
            <AudioTrackList audios={audios} />
          </div>
        </div>
      )}

      {segment === 'clips' && <ClipGrid clips={clips} minWidth={240} />}

      {segment === 'audio' && (
        <div style={{ maxWidth: 720 }}>
          <AudioTrackList audios={audios} />
        </div>
      )}

      <PianoPlayerDock />
    </PianoPlayerProvider>
  );
}
