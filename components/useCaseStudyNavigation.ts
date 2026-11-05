'use client';

import { useCallback, useEffect } from 'react';

interface RouterLike {
  back: () => void;
  push: (href: string, options?: { scroll?: boolean }) => void;
}

/**
 * Case studies are new reading contexts: they always open at the beginning.
 * When a list position was recorded, Return uses the portfolio route directly
 * so the saved position can be restored deterministically instead of relying
 * on browser history restoration.
 */
export function useCaseStudyNavigation(router: RouterLike) {
  useEffect(() => {
    let frame = 0;
    let passes = 0;

    const resetScroll = () => {
      const matrixScroller = document.querySelector<HTMLElement>('[data-ratchet-scroll]');
      if (matrixScroller) matrixScroller.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      window.dispatchEvent(new CustomEvent('portfolio:reset-scroll'));

      passes += 1;
      if (passes < 3) frame = window.requestAnimationFrame(resetScroll);
    };

    frame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return useCallback(() => {
    // Always navigate home directly. Relying on history.back() breaks when the
    // case study was opened in a new tab / via a direct URL (no home entry in
    // history), and the full-page-reload model makes back() unreliable anyway.
    router.push('/', { scroll: false });
  }, [router]);
}
