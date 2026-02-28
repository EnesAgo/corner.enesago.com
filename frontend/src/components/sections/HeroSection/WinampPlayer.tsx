'use client';

/// <reference types="youtube" />

import { useState, useRef, useEffect, useCallback } from 'react';

const VIDEO_ID = '3bfkyXtuIXk';

const bars = [
  { color: '#FF2D78', dur: '.4s', delay: '0s', h: '60%' },
  { color: '#FF2D78', dur: '.3s', delay: '.1s', h: '90%' },
  { color: '#FFE500', dur: '.5s', delay: '0s', h: '40%' },
  { color: '#FFE500', dur: '.35s', delay: '.15s', h: '75%' },
  { color: '#00FF88', dur: '.45s', delay: '.2s', h: '55%' },
  { color: '#00C8FF', dur: '.42s', delay: '.12s', h: '45%' },
  { color: '#9B59FF', dur: '.48s', delay: '0s', h: '95%' },
  { color: '#FF2D78', dur: '.41s', delay: '.14s', h: '80%' },
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function WinampPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(239); // 3:59 fallback
  const [isReady, setIsReady] = useState(false);

  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Unmute on first user interaction anywhere on the page
  useEffect(() => {
    function handleInteraction() {
      if (playerRef.current && isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        setIsMuted(false);
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction, true);
    }

    if (isMuted) {
      document.addEventListener('click', handleInteraction);
      document.addEventListener('keydown', handleInteraction);
      document.addEventListener('scroll', handleInteraction, true);
    }

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('scroll', handleInteraction, true);
    };
  }, [isMuted]);

  // Load YouTube IFrame API
  useEffect(() => {
    // If API is already loaded, create player immediately
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    // Set up the callback for when API loads
    const win = window as unknown as { onYouTubeIframeAPIReady?: () => void };
    const prevCallback = win.onYouTubeIframeAPIReady;
    win.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      createPlayer();
    };

    // Only add the script tag if it doesn't exist
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      playerRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createPlayer() {
    if (!containerRef.current || playerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      height: '0',
      width: '0',
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: (event: YT.PlayerEvent) => {
          setDuration(event.target.getDuration());
          setIsReady(true);
          event.target.mute();
          event.target.playVideo();
        },
        onStateChange: (event: YT.OnStateChangeEvent) => {
          const playing = event.data === window.YT.PlayerState.PLAYING;
          setIsPlaying(playing);

          if (playing) {
            intervalRef.current = setInterval(() => {
              if (playerRef.current) {
                setCurrentTime(playerRef.current.getCurrentTime());
              }
            }, 250);
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }

          // Reset when ended
          if (event.data === window.YT.PlayerState.ENDED) {
            setCurrentTime(0);
            setIsPlaying(false);
          }
        },
      },
    });
  }

  const togglePlay = useCallback(() => {
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }, [isPlaying, isReady]);

  const restart = useCallback(() => {
    if (!playerRef.current || !isReady) return;
    playerRef.current.seekTo(0, true);
    playerRef.current.playVideo();
  }, [isReady]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!playerRef.current || !isReady || !progressRef.current) return;
      const rect = progressRef.current.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const seekTime = ratio * duration;
      playerRef.current.seekTo(seekTime, true);
      setCurrentTime(seekTime);
    },
    [isReady, duration],
  );

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const controls = [
    { icon: '⏮', action: restart },
    { icon: isPlaying ? '⏸' : '▶', action: togglePlay },
    { icon: '⏭', action: restart },
  ];

  return (
    <div style={{ border: '2px solid #2a2a4a', background: '#0d0d0d', boxShadow: '4px 4px 0px #FFE500', transform: 'rotate(-1deg)' }}>
      {/* Hidden YouTube player */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div ref={containerRef} />
      </div>

      <div className="wb" style={{ padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '2px solid #2a2a4a' }}>
        <div style={{ width: 10, height: 10, background: '#FF2D78', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#FFE500', borderRadius: '50%' }} />
        <div style={{ width: 10, height: 10, background: '#00FF88', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#444', marginLeft: 8 }}>
          winamp.exe — {isPlaying ? (isMuted ? '🔇 click to unmute' : 'now playing') : isReady ? 'paused' : 'loading...'}
        </span>
      </div>
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, flexShrink: 0, border: '2px solid #222', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${VIDEO_ID}/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDB3BBYiyaHKSA0zf5woT-XFMHEDg`} alt="album" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(1.4) contrast(1.1)', opacity: 0.8 }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Senden Daha Güzel - Duman</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444', marginTop: 2 }}>Duman II · 2009</div>
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            style={{ marginTop: 8, height: 4, background: '#1a1a1a', border: '1px solid #222', cursor: 'pointer', position: 'relative' }}
          >
            <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg,#FF2D78,#9B59FF)', transition: 'width 0.25s linear' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>{formatTime(currentTime)}</span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#444' }}>{formatTime(duration)}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {controls.map((ctrl, i) => (
            <button
              key={i}
              onClick={ctrl.action}
              style={{
                background: i === 1 ? '#FFE500' : 'none',
                border: i === 1 ? '1px solid #000' : '1px solid #222',
                color: i === 1 ? '#000' : '#555',
                width: 26,
                height: 26,
                fontSize: 10,
                cursor: isReady ? 'pointer' : 'not-allowed',
                fontWeight: i === 1 ? 700 : 400,
                opacity: isReady ? 1 : 0.5,
                transition: 'opacity .2s',
              }}
            >
              {ctrl.icon}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 16px 10px', display: 'flex', gap: 3, alignItems: 'flex-end', height: 28 }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: bar.color,
              animationName: isPlaying ? 'eq' : 'none',
              animationDuration: bar.dur,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDirection: 'alternate',
              animationDelay: bar.delay,
              height: isPlaying ? bar.h : '15%',
              transition: 'height 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
