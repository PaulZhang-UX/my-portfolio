'use client';

import React, { useRef, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Works } from '../components/Works';
import { Download } from '../components/Download';
import { useApp } from '../context/ThemeLanguageContext';
import { playPageTransition } from '../utils/audioSynth';

export default function Home() {
  const { style } = useApp();
  const lastPageRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 监听滚动吸附翻页事件并发声
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const pageHeight = container.clientHeight;
    if (pageHeight <= 0) return;

    // 计算当前的页码 (scrollTop / clientHeight)
    const currentPage = Math.round(container.scrollTop / pageHeight);
    
    if (currentPage !== lastPageRef.current) {
      lastPageRef.current = currentPage;
      // 触发当前风格对应的物理翻页声音
      playPageTransition(style);
    }
  };

  return (
    /* 
      开启全局 CSS Scroll Snap 单页吸附滚动机制 
      利用原生浏览器机制实现轻微吸附感与页对齐
    */
    <div 
      ref={containerRef}
      onScroll={handleScroll}
      className="snap-y snap-mandatory h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar relative z-10 scroll-smooth"
    >
      <Hero />
      <About />
      <Works />
      <Download />
    </div>
  );
}
