'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { StyleWrapper } from './StyleWrapper';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { DownloadSection } from './DownloadSection';

interface MainAppProps {
  activeStyle: 'hermes' | 'magazine' | null;
}

export const MainApp = ({ activeStyle }: MainAppProps) => {
  const isHermes = activeStyle !== 'magazine';

  useEffect(() => {
    const storedTop = window.sessionStorage.getItem('portfolio-return-scroll-top');
    const storedContext = window.sessionStorage.getItem('portfolio-return-scroll-context');
    if (storedTop === null) return;

    const top = Number.parseFloat(storedTop);
    if (!Number.isFinite(top)) return;

    const restore = () => {
      if (storedContext === 'matrix') {
        const scroller = document.querySelector<HTMLElement>('[data-ratchet-scroll]');
        if (scroller) scroller.scrollTop = top;
      } else {
        window.scrollTo({ top, left: 0, behavior: 'auto' });
        window.dispatchEvent(new CustomEvent('portfolio:restore-scroll', { detail: { top } }));
      }
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(restore);
    });

    // 静态导出下返回首页是整页刷新，懒加载图片会逐步撑高页面，
    // 多次重试 + load 事件确保滚动位置能可靠恢复到作品集入口。
    const retryTimers = [120, 360, 800].map((ms) => window.setTimeout(restore, ms));

    const onLoad = () => restore();
    if (document.readyState === 'complete') {
      restore();
    } else {
      window.addEventListener('load', onLoad);
    }

    const clearMarker = window.setTimeout(() => {
      window.sessionStorage.removeItem('portfolio-return-scroll-top');
      window.sessionStorage.removeItem('portfolio-return-scroll-context');
    }, 1600);

    return () => {
      window.cancelAnimationFrame(frame);
      retryTimers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener('load', onLoad);
      window.clearTimeout(clearMarker);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen w-full relative"
    >
      <Navbar activeStyle={activeStyle} />
      
      <StyleWrapper activeStyle={activeStyle}>
        
        {/* Sections Wrapper */}
        <div className={`flex flex-col w-full items-center justify-start text-center ${
          isHermes ? 'pb-[10vh] space-y-6 md:space-y-16' : ''
        }`}>
          
          <HeroSection activeStyle={activeStyle} />
          
          <AboutSection activeStyle={activeStyle} />

          <ProjectsSection activeStyle={activeStyle} />

          <DownloadSection activeStyle={activeStyle} />

        </div>

      </StyleWrapper>
    </motion.div>
  );
};
