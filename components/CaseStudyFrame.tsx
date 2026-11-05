'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GlobalBackground } from './GlobalBackground';
import { RatchetScroll } from './RatchetScroll';
import { useApp } from '../context/ThemeLanguageContext';
import styles from './CaseStudyFrame.module.css';

interface CaseStudyFrameProps {
  children: ReactNode;
  topBar?: ReactNode;
}

export function CaseStudyFrame({ children, topBar }: CaseStudyFrameProps) {
  const { style, activeStyle, theme } = useApp();
  const visualStyle = style ?? activeStyle ?? 'magazine';

    if (visualStyle === 'hermes') {
      return (
        <>
          <GlobalBackground activeStyle="hermes" theme={theme} />
          <RatchetScroll enabled />
          {topBar}

          <div className={`${styles.frame} ${styles.matrixFrame} ${theme === 'dark' ? styles.matrixDark : styles.matrixLight}`}>
          <motion.div
            className={styles.matrixChassis}
            initial={{ opacity: 0, scale: 0.94, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.matrixScreen} data-matrix-screen>
              <div className={styles.matrixVignette} aria-hidden="true" />
              <div className={styles.matrixScanlines} aria-hidden="true" />
              <div className={styles.matrixGlare} aria-hidden="true" />

              <div className={styles.matrixViewport}>
                <div className={styles.matrixTerminalHeader}>
                  <span className={styles.matrixTerminalTitle}>_ SYSTEM // ZHANG-YONG // CASE STUDY</span>
                  <span className={styles.matrixTerminalVersion}>V 2.0.26</span>
                </div>
                <div data-ratchet-scroll className={styles.matrixScroll}>
                  {children}
                </div>
              </div>
            </div>

            <div className={styles.matrixBezel} aria-hidden="true">
              <div className={styles.matrixVents}>
                <span />
                <span />
              </div>
              <div className={styles.matrixPower}>
                <i />
                <span>POWER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      {topBar}
      <div className={`${styles.frame} ${styles.magazineFrame} ${theme === 'dark' ? styles.magazineDark : styles.magazineLight}`}>
        <motion.div
          className={styles.magazineShell}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
