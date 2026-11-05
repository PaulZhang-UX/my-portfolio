'use client';

import { useEffect, useState } from 'react';

/** Keeps viewport decisions in React UI in sync with the CSS mobile breakpoint. */
export function useMobileViewport(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, [breakpoint]);

  return isMobile;
}
