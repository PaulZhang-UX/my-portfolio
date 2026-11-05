'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { playFeedback } from '../utils/audioSynth';
import styles from './PillSelection.module.css';

type PillKind = 'red' | 'blue';

const MatrixPills = dynamic(
  () => import('./MatrixPills').then((module) => module.MatrixPills),
  {
    ssr: false,
    loading: () => (
      <div className={styles.sceneLoading} aria-label="3D 场景加载中" role="status">
        <span className={styles.loader} aria-hidden="true" />
        <span className={styles.loadingText}>正在加载 3D 场景…</span>
        <span className={styles.progressTrack} aria-hidden="true">
          <span className={styles.progressBar} />
        </span>
      </div>
    ),
  },
);

export const PillSelection = () => {
  const { setStyle } = useApp();
  const [hovered, setHovered] = useState<PillKind | null>(null);
  const [selection, setSelection] = useState<PillKind | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('magazine', 'hermes');

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const selectPill = (pill: PillKind) => {
    if (selection) return;
    playFeedback(pill === 'red' ? 'hermes' : 'magazine', 'switch');
    setSelection(pill);
    timerRef.current = setTimeout(() => {
      setStyle(pill === 'red' ? 'hermes' : 'magazine');
    }, 560);
  };

  // Public interaction boundaries for the future camera-transition phase.
  const redPillClick = () => selectPill('red');
  const bluePillClick = () => selectPill('blue');

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: selection ? 1.035 : 1,
        filter: selection ? 'blur(12px)' : 'none',
      }}
      transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
      className={styles.hero}
    >
      <section className={styles.choice} aria-labelledby="choice-title">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16 }}
          className={styles.titleBlock}
        >
          <h1 id="choice-title">THE CHOICE IS YOURS</h1>
          <span>选择一种风格，进入我的个人网站。</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className={styles.scene}
        >
          <MatrixPills
            onRedPillClick={redPillClick}
            onBluePillClick={bluePillClick}
            onHoverChange={setHovered}
          />
        </motion.div>

        <div
          className={`${styles.hoverPrompt} ${hovered ? styles.visible : ''} ${
            hovered === 'red' ? styles.redPrompt : styles.bluePrompt
          }`}
          role="status"
          aria-live="polite"
        >
          {hovered === 'red' && '个性体验，沉浸浏览//EXPRESSIVE VIEW'}
          {hovered === 'blue' && '快速了解，清晰直达//QUICK VIEW'}
        </div>
      </section>
    </motion.main>
  );
};
