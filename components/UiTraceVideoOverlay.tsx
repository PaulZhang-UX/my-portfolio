'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './UiTraceVideoOverlay.module.css';

type VideoLanguage = 'zh' | 'en';

interface UiTraceVideoOverlayProps {
  open: boolean;
  onClose: () => void;
  language: VideoLanguage;
}

const FIGMA_URL = 'https://www.figma.com/design/p8BWZVQ2qN8rnF8J44jM0i/ui-trace?node-id=0-1&t=qBvXVrHU3yVms2T1-1';

const copy = {
  zh: {
    dialog: 'UI Trace 使用流程视频',
    close: '返回作品集',
    loading: '正在准备视频…',
    error: '视频暂时无法加载',
    errorHint: '请稍后重试，或在 Figma 中查看原型。',
    retry: '重试',
    figma: '查看 Figma 原型',
  },
  en: {
    dialog: 'UI Trace workflow video',
    close: 'Back to portfolio',
    loading: 'Preparing video…',
    error: 'The video could not be loaded',
    errorHint: 'Try again, or view the prototype in Figma.',
    retry: 'Retry',
    figma: 'View in Figma',
  },
} as const;

export function UiTraceVideoOverlay({ open, onClose, language }: UiTraceVideoOverlayProps) {
  const labels = copy[language];
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [retryNonce, setRetryNonce] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const bodyOverflow = document.body.style.overflow;
    const bodyPaddingRight = document.body.style.paddingRight;
    const scrollTop = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Keep the normal system cursor available in the video experience. The
    // portfolio's custom cursor is only disabled by the interactive demos.
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    setReady(false);
    setFailed(false);

    const focusFrame = requestAnimationFrame(() => dialogRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = bodyOverflow;
      document.body.style.paddingRight = bodyPaddingRight;
      window.scrollTo({ top: scrollTop, left: 0, behavior: 'auto' });
    };
  }, [open, onClose]);

  if (!open) return null;

  const overlayContent = (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog}
      tabIndex={-1}
    >
      <div className={styles.toolbar}>
        <div className={styles.toolbarActions}>
          <button type="button" className={styles.close} onClick={onClose}>
            {labels.close}
          </button>
        </div>
      </div>

      <div className={styles.stage}>
        <div className={styles.device}>
          <div className={styles.videoWrap}>
            {!ready && !failed && (
              <div className={styles.loading} aria-live="polite">
                <span className={styles.loader} aria-hidden="true" />
                <span>{labels.loading}</span>
              </div>
            )}
            {failed ? (
              <div className={styles.error}>
                <strong>{labels.error}</strong>
                <span>{labels.errorHint}</span>
                <div className={styles.errorActions}>
                  <button type="button" className={styles.retryButton} onClick={() => { setFailed(false); setReady(false); setRetryNonce((n) => n + 1); }}>{labels.retry}</button>
                  <a className={styles.figmaButton} href={FIGMA_URL} target="_blank" rel="noreferrer">{labels.figma} ↗</a>
                </div>
              </div>
            ) : (
              <video
                key={retryNonce}
                className={`${styles.video} ${ready ? styles.ready : ''}`}
                src="https://portfolio-yongzhang-1455249345.cos.ap-beijing.myqcloud.com/videos/ui-trace/workflow.mp4"
                poster="/projects/ui-trace/Group-1004.png"
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                onCanPlay={() => setReady(true)}
                onError={() => setFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
}
