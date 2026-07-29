'use client';

import { createContext, useContext, useRef, useState, useCallback, useEffect } from 'react';
import type { PianoRecording } from '@/data/pianoRecordings';

/**
 * Shared audio player state for the piano studio. One <audio> element (owned by
 * the dock) is driven through this context so any TrackRow can start playback and
 * reflect the currently-playing track, and the dock can auto-advance the queue.
 */

interface PlayerState {
  current: PianoRecording | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number; // 0..1
  playTrack: (track: PianoRecording, queue: PianoRecording[]) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seekRatio: (ratio: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const PianoPlayerContext = createContext<PlayerState | null>(null);

export function usePianoPlayer(): PlayerState {
  const ctx = useContext(PianoPlayerContext);
  if (!ctx) throw new Error('usePianoPlayer must be used within PianoPlayerProvider');
  return ctx;
}

export function PianoPlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState<PianoRecording | null>(null);
  const [queue, setQueue] = useState<PianoRecording[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playTrack = useCallback((track: PianoRecording, q: PianoRecording[]) => {
    setQueue(q);
    setCurrent((prev) => {
      // Toggle if same track is clicked again
      if (prev?.id === track.id) {
        const a = audioRef.current;
        if (a) { if (a.paused) a.play(); else a.pause(); }
        return prev;
      }
      return track;
    });
  }, []);

  // Load + play whenever `current` changes to a new src.
  useEffect(() => {
    const a = audioRef.current;
    if (!a || !current?.audioUrl) return;
    a.src = current.audioUrl;
    a.play().catch(() => {/* autoplay may be blocked until interaction */});
    window.dispatchEvent(new CustomEvent('achievement', { detail: 'dj_mode' }));
  }, [current]);

  const stepBy = useCallback((delta: number) => {
    setCurrent((prev) => {
      if (!prev || queue.length === 0) return prev;
      const idx = queue.findIndex((t) => t.id === prev.id);
      if (idx === -1) return prev;
      const nextIdx = (idx + delta + queue.length) % queue.length;
      return queue[nextIdx];
    });
  }, [queue]);

  const next = useCallback(() => stepBy(1), [stepBy]);
  const prev = useCallback(() => stepBy(-1), [stepBy]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) a.play(); else a.pause();
  }, []);

  const seekRatio = useCallback((ratio: number) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    a.currentTime = Math.max(0, Math.min(1, ratio)) * a.duration;
  }, []);

  const progress = duration > 0 ? currentTime / duration : 0;

  const value: PlayerState = {
    current,
    isPlaying,
    currentTime,
    duration,
    progress,
    playTrack,
    toggle,
    next,
    prev,
    seekRatio,
    audioRef,
  };

  return (
    <PianoPlayerContext.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => next()}
      />
    </PianoPlayerContext.Provider>
  );
}
