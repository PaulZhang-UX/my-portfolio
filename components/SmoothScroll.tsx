'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { useApp } from '../context/ThemeLanguageContext';

export const SmoothScroll = () => {
  const { style } = useApp();

  useEffect(() => {
    if (style !== 'magazine') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      anchors: true,
      allowNestedScroll: true,
      overscroll: true,
    });

    const restorePortfolioScroll = (event: Event) => {
      const top = (event as CustomEvent<{ top?: number }>).detail?.top;
      if (typeof top === 'number' && Number.isFinite(top)) {
        lenis.scrollTo(top, { immediate: true });
      }
    };

    const resetPortfolioScroll = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('portfolio:restore-scroll', restorePortfolioScroll);
    window.addEventListener('portfolio:reset-scroll', resetPortfolioScroll);

    return () => {
      window.removeEventListener('portfolio:restore-scroll', restorePortfolioScroll);
      window.removeEventListener('portfolio:reset-scroll', resetPortfolioScroll);
      lenis.destroy();
    };
  }, [style]);

  return null;
};
