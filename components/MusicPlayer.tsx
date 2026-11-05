'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useApp } from '../context/ThemeLanguageContext';

interface Track {
  title: string;
  artist: string;
  src: string;
}

const PLAYLIST: Track[] = [
  { title: 'Ambient I', artist: 'Portfolio soundtrack', src: '/music/song1.mp3' },
  { title: 'Ambient II', artist: 'Portfolio soundtrack', src: '/music/song2.mp3' },
  { title: 'Ambient III', artist: 'Portfolio soundtrack', src: '/music/song3.mp3' },
];

export const MusicPlayer = () => {
  const {
    theme,
    lang,
    style,
    activeStyle,
    soundEnabled,
    toggleSound,
  } = useApp();
  const visualStyle = style ?? activeStyle;
  const [trackIndex, setTrackIndex] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const saved = Number.parseInt(window.sessionStorage.getItem('portfolio-music-track') ?? '0', 10);
    return Number.isFinite(saved) && saved >= 0 && saved < PLAYLIST.length ? saved : 0;
  });
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.sessionStorage.getItem('portfolio-music-playing') !== 'false';
  });
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasUserInteractedRef = useRef(false);
  const lastPositionSaveRef = useRef(0);

  const currentTrack = PLAYLIST[trackIndex];
  const isHermes = visualStyle === 'hermes';
  const isDark = theme === 'dark';

  useEffect(() => {
    const unlockAudio = () => {
      hasUserInteractedRef.current = true;
      const audio = audioRef.current;
      if (!audio || style) return;

      // Unlock the media element during the pill click without allowing music
      // to continue on the choice screen.
      audio.muted = true;
      void audio.play()
        .then(() => audio.pause())
        .catch(() => {
          // A later play-button gesture remains available as a fallback.
        });
    };

    window.addEventListener('pointerdown', unlockAudio, { capture: true });
    return () => window.removeEventListener('pointerdown', unlockAudio, { capture: true });
  }, [style]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.22;
    audio.dataset.baseVolume = '0.22';
    audio.muted = !soundEnabled;

    if (style && isPlaying) {
      // Static export reloads the document on every navigation, so keep the
      // music playing across that reload. Browsers may still block autoplay
      // without a recent gesture, in which case the play button is the fallback.
      void audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, soundEnabled, style, trackIndex]);

  useEffect(() => {
    if (!style) return;
    const startOnEntry = window.setTimeout(() => setIsPlaying(true), 0);
    return () => window.clearTimeout(startOnEntry);
  }, [style]);

  const togglePlay = () => {
    hasUserInteractedRef.current = true;
    setIsPlaying((playing) => {
      const next = !playing;
      try {
        window.sessionStorage.setItem('portfolio-music-playing', String(next));
      } catch {
        // Ignore storage failures; in-memory state still works.
      }
      return next;
    });
  };

  const nextTrack = () => {
    setTrackIndex((index) => {
      const next = (index + 1) % PLAYLIST.length;
      try {
        window.sessionStorage.setItem('portfolio-music-track', String(next));
        window.sessionStorage.setItem('portfolio-music-position', '0');
      } catch {
        // Ignore storage failures.
      }
      return next;
    });
  };

  // 定期保存播放进度（节流 1 秒），整页刷新后可从上次位置无缝续播
  const savePosition = () => {
    const now = Date.now();
    if (now - lastPositionSaveRef.current < 1000) return;
    lastPositionSaveRef.current = now;
    const audio = audioRef.current;
    if (!audio || audio.currentTime <= 0) return;
    try {
      window.sessionStorage.setItem('portfolio-music-position', String(audio.currentTime));
    } catch {
      // Ignore storage failures.
    }
  };

  // 音频元数据就绪后，恢复到上次播放位置（跨整页刷新续播）
  const restorePosition = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const saved = window.sessionStorage.getItem('portfolio-music-position');
    if (!saved) return;
    const pos = Number.parseFloat(saved);
    if (Number.isFinite(pos) && pos > 0 && (!audio.duration || pos < audio.duration)) {
      audio.currentTime = pos;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
        onEnded={nextTrack}
        onTimeUpdate={savePosition}
        onLoadedMetadata={restorePosition}
      />

      <AnimatePresence>
        {style && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            data-native-scroll
            className={`fixed right-3 bottom-3 md:right-6 md:bottom-6 z-[95] flex items-center border backdrop-blur-xl ${
              isHermes
                ? 'matrix-theme-transition gap-0 p-0.5 rounded-sm border-[rgb(var(--matrix-ink-rgb)/0.38)] bg-[var(--matrix-page-color)]/88 text-[var(--matrix-ink-color)] font-hacker-en shadow-[0_0_14px_rgb(var(--matrix-ink-rgb)/0.08)]'
                : isDark
                  ? 'gap-0 p-0.5 rounded-full border-white/12 bg-black/70 text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
                  : 'gap-0 p-0.5 rounded-full border-black/8 bg-white/82 text-[#1d1d1f] shadow-[0_10px_35px_rgba(0,0,0,0.08)]'
            }`}
            aria-label={lang === 'zh' ? '背景音乐控制' : 'Background music controls'}
          >
            <button
              onClick={togglePlay}
              className={`flex h-8 w-8 items-center justify-center transition-colors hover:bg-current/8 ${
                isHermes ? 'rounded-none' : 'rounded-full'
              }`}
              title={lang === 'zh'
                ? isPlaying ? '暂停音乐' : '播放音乐'
                : isPlaying ? 'Pause music' : 'Play music'}
              aria-label={lang === 'zh'
                ? isPlaying ? '暂停音乐' : '播放音乐'
                : isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying
                ? <Pause size={14} />
                : <Play size={14} className="translate-x-px" />}
            </button>

            <button
              onClick={toggleSound}
              className={`flex h-8 w-8 items-center justify-center opacity-60 transition-opacity hover:opacity-100 ${
                isHermes
                  ? 'rounded-none border-l border-[rgb(var(--matrix-ink-rgb)/0.2)]'
                  : 'rounded-full'
              }`}
              title={lang === 'zh'
                ? soundEnabled ? '关闭声音' : '开启声音'
                : soundEnabled ? 'Mute sound' : 'Enable sound'}
              aria-label={lang === 'zh'
                ? soundEnabled ? '关闭声音' : '开启声音'
                : soundEnabled ? 'Mute sound' : 'Enable sound'}
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
