'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ChatBoardDemoOverlay.module.css';

type ChatBoardDemoMode = 'web' | 'mobile';
type DemoLanguage = 'zh' | 'en';

interface ChatBoardDemoOverlayProps {
  open: boolean;
  mode: ChatBoardDemoMode;
  language: DemoLanguage;
  onClose: () => void;
}

/** Static prototype fallback for when the interactive demo iframe fails. */
const FIGMA_URL = 'https://www.figma.com/design/WZzHgeYX7aYYAiG9CLJNgn/GPT?node-id=0-1&t=nUTe95vnlSnUPaWn-1';

const copy = {
  zh: {
    dialog: 'GPT 聊天管理交互 Demo',
    close: '返回作品集',
    loading: '正在载入交互 Demo…',
    loadingHint: '首次载入需要一点时间，请稍候。',
    error: 'Demo 暂时无法载入',
    errorHint: '可以点击"重新载入"再次尝试，或在 Figma 中查看原型。',
    retry: '重新载入',
    figma: '查看 Figma 原型',
    mobile: '移动端 Demo',
    mobileHint: '在 iPhone 13 样机中体验移动端交互。',
  },
  en: {
    dialog: 'GPT chat management interactive demo',
    close: 'Back to portfolio',
    loading: 'Loading interactive demo…',
    loadingHint: 'The first load may take a moment.',
    error: 'The demo could not be loaded',
    errorHint: 'Use the retry button to try again, or view the prototype in Figma.',
    retry: 'Retry',
    figma: 'View in Figma',
    mobile: 'Mobile demo',
    mobileHint: 'Explore the mobile interaction inside an iPhone 13 frame.',
  },
} as const;

export function ChatBoardDemoOverlay({ open, mode, language, onClose }: ChatBoardDemoOverlayProps) {
  const labels = copy[language];
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [mobileScale, setMobileScale] = useState(1);
  const dialogRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    // The portfolio uses a custom cursor globally. Hide it while the demo
    // takes over the viewport so its dot/ring cannot linger over the iframe.
    document.body.dataset.chatBoardDemoOpen = 'true';
    window.dispatchEvent(new Event('chat-board-demo-statechange'));

    const bodyOverflow = document.body.style.overflow;
    const bodyPaddingRight = document.body.style.paddingRight;
    const scrollTop = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const resetFrame = requestAnimationFrame(() => {
      setIframeReady(false);
      setIframeFailed(false);
      setIframeKey((key) => key + 1);
    });
    const focusFrame = requestAnimationFrame(() => dialogRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(resetFrame);
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = bodyOverflow;
      document.body.style.paddingRight = bodyPaddingRight;
      delete document.body.dataset.chatBoardDemoOpen;
      window.dispatchEvent(new Event('chat-board-demo-statechange'));
      window.scrollTo({ top: scrollTop, left: 0, behavior: 'auto' });
    };
  }, [open, mode, onClose]);

  useEffect(() => {
    if (!open || iframeReady || iframeFailed) return;
    const timeout = window.setTimeout(() => setIframeFailed(true), 60000);
    return () => window.clearTimeout(timeout);
  }, [open, iframeReady, iframeFailed, iframeKey]);

  // Keep the mobile demo on a stable iPhone 13 design viewport (390 × 844).
  // Only the finished viewport is scaled to fit the mockup; this prevents the
  // iframe from reflowing its typography and controls at narrow widths.
  useEffect(() => {
    if (!open || mode !== 'mobile') {
      setMobileScale(1);
      return;
    }

    const frame = frameRef.current;
    if (!frame) return;

    const updateScale = () => {
      const widthScale = frame.clientWidth / 390;
      const heightScale = frame.clientHeight / 844;
      // Cover the entire phone frame so no white bars can show at the top or
      // bottom. The iframe wrapper clips the tiny horizontal excess.
      setMobileScale(Math.max(widthScale, heightScale));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [open, mode]);

  if (!open) return null;

  // Bump the static-demo query when the embedded build changes so a previously
  // opened iframe cannot keep serving an older cached chrome layout.
  const src = `/demo/chat-board/?device=${mode}&v=20260807-5`;
  const title = mode === 'mobile' ? labels.mobile : labels.dialog;
  const retry = () => {
    setIframeFailed(false);
    setIframeReady(false);
    setIframeKey((key) => key + 1);
  };

  const overlayContent = (
    <div
      ref={dialogRef}
      className={`${styles.overlay} ${mode === 'mobile' ? styles.mobileMode : styles.webMode}`}
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog}
      tabIndex={-1}
    >
      <div className={styles.toolbar}>
        <button type="button" className={styles.close} onClick={onClose}>{labels.close}</button>
      </div>

      <div className={styles.stage}>
        {mode === 'mobile' && (
          <div className={styles.phoneIntro}>
            <span>{labels.mobile}</span>
            <small>{labels.mobileHint}</small>
          </div>
        )}

        <div ref={frameRef} className={styles.frame}>
          {mode === 'mobile' && <div className={styles.notch} aria-hidden="true" />}
          <div className={styles.iframeWrap}>
            {!iframeReady && !iframeFailed && (
              <div className={styles.loading} aria-live="polite">
                <span className={styles.loader} aria-hidden="true" />
                <strong>{labels.loading}</strong>
                <span>{labels.loadingHint}</span>
              </div>
            )}
            {iframeFailed ? (
              <div className={styles.error}>
                <strong>{labels.error}</strong>
                <span>{labels.errorHint}</span>
                <div className={styles.errorActions}>
                  <button type="button" className={styles.retryButton} onClick={retry}>{labels.retry}</button>
                  <a className={styles.figmaButton} href={FIGMA_URL} target="_blank" rel="noreferrer">{labels.figma} ↗</a>
                </div>
              </div>
            ) : (
              <iframe
                key={iframeKey}
                title={title}
                src={src}
                className={`${styles.iframe} ${iframeReady ? styles.ready : ''}`}
                style={mode === 'mobile' ? {
                  width: 390,
                  height: 844,
                  transform: `translate(-50%, -50%) scale(${mobileScale})`,
                  transformOrigin: 'center center',
                } : undefined}
                onLoad={() => setIframeReady(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
}
