'use client';

import { useEffect, useState } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import styles from './MatrixScrollHint.module.css';

/**
 * A persistent "scroll down" hint for the matrix (red pill) terminal window.
 * macOS uses auto-hiding overlay scrollbars, so the green scrollbar alone is
 * not discoverable there — this hint stays visible until the user scrolls.
 */
export function MatrixScrollHint() {
  const { lang } = useApp();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>('[data-ratchet-scroll]');
    if (!scroller) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const canScroll = scroller.scrollHeight > scroller.clientHeight + 24;
      const scrolled = scroller.scrollTop > 48;
      setHidden(!canScroll || scrolled);
    };

    update();
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('load', update);

    return () => {
      scroller.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('load', update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const label = lang === 'zh' ? '向下滚动' : 'SCROLL';

  return (
    <div className={`${styles.hint} ${hidden ? styles.hidden : ''}`} aria-hidden="true">
      <span className={styles.label}>{label}</span>
      <span className={styles.chevron}>▼</span>
    </div>
  );
}
