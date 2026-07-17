'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/ThemeLanguageContext';

interface Track {
  title: string;
  artist: string;
  src: string;
}

const PLAYLIST: Track[] = [
  { title: "Blade Runner Ambient", artist: "Vangelis / Synth", src: "/music/song1.mp3" },
  { title: "2049 Mesa Desert", artist: "Hans Zimmer", src: "/music/song2.mp3" },
  { title: "Sea Wall Pulse", artist: "Zimmer / Benjamin", src: "/music/song3.mp3" },
];

export const MusicPlayer: React.FC = () => {
  const { theme, style } = useApp();
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // 默认 true，让唱片一加载即自动旋转
  const [isMuted, setIsMuted] = useState(true);     // 默认静音以绕过浏览器自动播放策略限制
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = PLAYLIST[trackIndex];

  // 1. 全局交互后解除静音 (实现自动播放效果)
  useEffect(() => {
    const handleUserActive = () => {
      setIsMuted(false);
      // 成功产生物理交互后立即卸载事件监听，节约开销
      window.removeEventListener('click', handleUserActive);
      window.removeEventListener('scroll', handleUserActive);
      window.removeEventListener('touchstart', handleUserActive);
      window.removeEventListener('mousedown', handleUserActive);
    };

    window.addEventListener('click', handleUserActive);
    window.addEventListener('scroll', handleUserActive);
    window.addEventListener('touchstart', handleUserActive);
    window.addEventListener('mousedown', handleUserActive);

    return () => {
      window.removeEventListener('click', handleUserActive);
      window.removeEventListener('scroll', handleUserActive);
      window.removeEventListener('touchstart', handleUserActive);
      window.removeEventListener('mousedown', handleUserActive);
    };
  }, []);

  // 2. 同步播放状态与静音属性
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;

    if (isPlaying) {
      audio.play().catch(() => {
        // 如果未有交互且无静音状态导致中断，仅在非静音时回退
        if (!isMuted) {
          setIsPlaying(false);
          setHasError(true);
        }
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, trackIndex, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setHasError(false);
  };

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
    setHasError(false);
  };

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
    setHasError(false);
  };

  const handleEnded = () => {
    nextTrack();
  };

  const isDark = theme === 'dark';

  return (
    <div 
      className={`fixed bottom-6 left-6 z-50 p-3 flex items-center gap-4 transition-all duration-500 ease-[var(--ease-apple)] border rounded-full backdrop-blur-md shadow-lg ${
        style === 'bladerunner'
          ? (isDark 
              ? 'bg-[#03050C]/90 border-[#E05A10]/30 text-[#F5EFEB]' 
              : 'bg-[#E6CEB8]/95 border-[#E05A10]/20 text-[#1D1107]')
          : (isDark 
              ? 'bg-black/80 border-neutral-800 text-white' 
              : 'bg-white/80 border-neutral-200 text-neutral-800')
      }`}
    >
      <audio 
        ref={audioRef} 
        src={currentTrack.src} 
        onEnded={handleEnded} 
        preload="metadata"
      />

      {/* 唱片旋转动画控制盘 */}
      <div 
        onClick={togglePlay}
        className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border shrink-0 transition-transform hover:scale-105 active:scale-95 ${
          style === 'bladerunner'
            ? 'border-[#E05A10]/40 bg-[#03050C]'
            : (isDark ? 'border-neutral-700 bg-neutral-900' : 'border-neutral-300 bg-neutral-100')
        }`}
      >
        {/* 唱片黑胶同心圆纹理 */}
        <div 
          className="absolute inset-0.5 rounded-full border border-dashed border-neutral-600/30 animate-spin"
          style={{
            animationDuration: '6s',
            animationPlayState: isPlaying ? 'running' : 'paused',
            backgroundImage: 'radial-gradient(circle, transparent 35%, rgba(0,0,0,0.15) 36%, rgba(0,0,0,0.15) 40%, transparent 41%)',
            backgroundSize: '100% 100%'
          }}
        />
        
        {/* 唱片中心胶带 (完全重构为 CSS 几何图元，规整偏心误差) */}
        <div className={`w-3.5 h-3.5 rounded-full z-10 flex items-center justify-center relative transition-colors duration-300 ${
          style === 'bladerunner'
            ? (isPlaying ? 'bg-[#E05A10]' : 'bg-[#E05A10]/30')
            : (isPlaying 
                ? (isDark ? 'bg-green-500' : 'bg-neutral-900') 
                : (isDark ? 'bg-neutral-800' : 'bg-neutral-300'))
        }`}>
          {isPlaying ? (
            /* 播放状态：双竖线暂停符号 (极客/银翼下为黑线，画廊下为白线) */
            <div className="flex gap-[1.5px] items-center justify-center">
              <span className={`w-[1.5px] h-[4px] rounded-[0.5px] ${
                style === 'bladerunner' ? 'bg-[#03050C]' : (isDark ? 'bg-black' : 'bg-white')
              }`} />
              <span className={`w-[1.5px] h-[4px] rounded-[0.5px] ${
                style === 'bladerunner' ? 'bg-[#03050C]' : (isDark ? 'bg-black' : 'bg-white')
              }`} />
            </div>
          ) : (
            /* 暂停状态：纯 CSS 偏置微调三角形 (解决文字不同心缺陷) */
            <div 
              className="w-0 h-0 border-t-[2.5px] border-t-transparent border-b-[2.5px] border-b-transparent border-l-[4px] translate-x-[0.5px]"
              style={{
                borderLeftColor: style === 'bladerunner' ? '#F5EFEB' : (isDark ? '#FFF' : '#000')
              }}
            />
          )}
        </div>
      </div>

      {/* 歌曲信息与切歌控制 */}
      <div className="flex flex-col pr-3 font-mono text-[10px] min-w-[120px] max-w-[165px]">
        <span className="font-bold truncate select-none leading-tight">
          {currentTrack.title}
        </span>
        <span className="opacity-50 truncate select-none leading-none mt-0.5">
          {currentTrack.artist}
        </span>
        
        {/* 状态控制与切歌键 */}
        <div className="flex items-center gap-3 mt-1.5 opacity-80">
          <button 
            onClick={prevTrack} 
            className={`hover:opacity-60 transition-opacity cursor-pointer text-[9px] font-bold ${
              style === 'bladerunner' ? 'text-[#E05A10]' : ''
            }`}
            title="Previous"
          >
            |≪
          </button>
          <button 
            onClick={togglePlay} 
            className={`hover:opacity-60 transition-opacity cursor-pointer text-[9px] font-bold ${
              style === 'bladerunner' ? 'text-[#E05A10]' : ''
            }`}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </button>
          <button 
            onClick={nextTrack} 
            className={`hover:opacity-60 transition-opacity cursor-pointer text-[9px] font-bold ${
              style === 'bladerunner' ? 'text-[#E05A10]' : ''
            }`}
            title="Next"
          >
            ≫|
          </button>
          {hasError && (
            <span className="text-red-500 text-[8px] animate-pulse ml-1 select-none">
              (NO AUDIO)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
