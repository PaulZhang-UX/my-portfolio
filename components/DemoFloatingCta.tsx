'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../context/ThemeLanguageContext';
import styles from './DemoFloatingCta.module.css';

interface DemoFloatingCtaProps {
  /** The DOM id of the demo entry (the interactive folder) to scroll to. */
  targetId: string;
  /** Optional per-project label; defaults to the interactive-demo wording. */
  labels?: { zh: string; en: string };
  /** When provided, clicking the pill activates the demo directly instead of scrolling. */
  onActivate?: () => void;
}

const DEFAULT_LABELS = { zh: '进入 Demo 体验', en: 'Enter the demo' } as const;

/**
 * A floating pill that scrolls the user straight back to the demo entry. It
 * appears once the demo block has scrolled out of view.
 *
 * Rendered through a portal to `document.body`: the case-study pages live
 * inside animated (transform/filter) wrappers which would otherwise turn this
 * `position: fixed` pill into a mispositioned, clipped element. In matrix mode
 * the pill is then re-anchored inside the CRT screen via JS-measured bounds.
 */
export function DemoFloatingCta({ targetId, labels = DEFAULT_LABELS, onActivate }: DemoFloatingCtaProps) {
  const { lang, style, activeStyle, theme } = useApp();
  const visualStyle = style ?? activeStyle ?? 'magazine';
  const isHermes = visualStyle === 'hermes';
  const [visible, setVisible] = useState(false);
  const [fabTop, setFabTop] = useState<number | null>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  // Visibility: show once the demo entry top scrolls past the viewport top.
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    // Matrix mode scrolls inside [data-ratchet-scroll]; magazine mode scrolls
    // the window. Listen to both so the pill works in either style.
    const scroller = target.closest<HTMLElement>('[data-ratchet-scroll]');

    const update = () => {
      setVisible(target.getBoundingClientRect().top < 0);
    };

    update();
    if (scroller) scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      if (scroller) scroller.removeEventListener('scroll', update);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetId]);

  // Matrix mode: anchor the pill inside the CRT screen's bottom edge (with a
  // small gap), instead of the viewport bottom where the device doesn't reach.
  useLayoutEffect(() => {
    if (!visible || !isHermes) {
      setFabTop(null);
      return;
    }

    const screen = document.querySelector<HTMLElement>('[data-matrix-screen]');
    if (!screen) {
      setFabTop(null);
      return;
    }

    const GAP = 28;
    const update = () => {
      const rect = screen.getBoundingClientRect();
      const pillHeight = fabRef.current?.offsetHeight || 44;
      setFabTop(rect.bottom - GAP - pillHeight);
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('load', update);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('load', update);
    };
  }, [visible, isHermes]);

  if (!visible) return null;

  const label = lang === 'zh' ? labels.zh : labels.en;

  const handleClick = () => {
    if (onActivate) {
      onActivate();
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const positionStyle: React.CSSProperties =
    isHermes && fabTop !== null ? { top: fabTop, bottom: 'auto' } : {};

  const fab = (
    <button
      ref={fabRef}
      type="button"
      className={`${styles.fab} ${isHermes ? styles.hermes : styles.magazine} ${
        theme === 'dark' ? styles.dark : styles.light
      }`}
      style={positionStyle}
      onClick={handleClick}
      aria-label={label}
    >
      <span className={styles.dot} aria-hidden="true" />
      <span>{label}</span>
      <span className={styles.arrow} aria-hidden="true">→</span>
    </button>
  );

  return createPortal(fab, document.body);
}
