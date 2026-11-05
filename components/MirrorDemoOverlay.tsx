'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './MirrorDemoOverlay.module.css';

type DemoLanguage = 'zh' | 'en';
type DemoTheme = 'light' | 'dark';

interface MirrorDemoOverlayProps {
  open: boolean;
  onClose: () => void;
  language: DemoLanguage;
  theme: DemoTheme;
}

/** Static prototype fallback for when the interactive demo iframe fails. */
const FIGMA_URL = 'https://www.figma.com/design/byWTkCpHTFwhJGPOsdslec/Mirro?node-id=0-1&t=idfdVMM5hP7sOOIT-1';

const copy = {
  zh: {
    close: '\u8fd4\u56de\u4f5c\u54c1\u96c6',
    loading: '\u6b63\u5728\u8f7d\u5165\u4ea4\u4e92 Demo\u2026',
    loadingHint: '\u9996\u6b21\u8f7d\u5165\u9700\u8981\u4e00\u70b9\u65f6\u95f4\uff0c\u8bf7\u7a0d\u5019\u3002',
    error: 'Demo \u6682\u65f6\u65e0\u6cd5\u8f7d\u5165',
    errorHint: '\u53ef\u4ee5\u91cd\u8bd5\uff0c\u6216\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00\u3002',
    retry: '\u91cd\u65b0\u8f7d\u5165',
    newWindow: '\u65b0\u7a97\u53e3\u6253\u5f00',
    figma: '\u67e5\u770b Figma \u539f\u578b',
    mobileTitle: 'Mirror Demo',
    mobileHint: '\u5b8c\u6574\u4ea4\u4e92\u5efa\u8bae\u4f7f\u7528\u7535\u8111\u4f53\u9a8c\u3002',
    viewIntro: '\u67e5\u770b\u9879\u76ee\u4ecb\u7ecd',
    copyLink: '\u590d\u5236\u7535\u8111\u7aef\u94fe\u63a5',
    copied: '\u94fe\u63a5\u5df2\u590d\u5236',
  },
  en: {
    close: 'Back to portfolio',
    loading: 'Loading interactive demo\u2026',
    loadingHint: 'The first load may take a moment.',
    error: 'The demo could not be loaded',
    errorHint: 'Retry here, or open it in a new window.',
    retry: 'Retry',
    newWindow: 'Open in new window',
    figma: 'View in Figma',
    mobileTitle: 'Mirror Demo',
    mobileHint: 'For the complete interaction, use a desktop browser.',
    viewIntro: 'View project intro',
    copyLink: 'Copy desktop link',
    copied: 'Link copied',
  },
} as const;

export function MirrorDemoOverlay({ open, onClose, language, theme }: MirrorDemoOverlayProps) {
  const labels = copy[language];
  const [isMobile, setIsMobile] = useState(false);
  const [viewportReady, setViewportReady] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => {
      setIsMobile(media.matches);
      setViewportReady(true);
    };
    const frame = requestAnimationFrame(update);
    media.addEventListener?.('change', update);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener?.('change', update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    // The portfolio cursor is rendered globally. Mark the demo as the active
    // surface so SmoothFollower hides itself while the iframe owns the viewport.
    document.body.dataset.chatBoardDemoOpen = 'true';
    window.dispatchEvent(new Event('chat-board-demo-statechange'));

    const bodyOverflow = document.body.style.overflow;
    const bodyPaddingRight = document.body.style.paddingRight;
    const matrixScroller = document.querySelector<HTMLElement>('[data-ratchet-scroll]');
    const matrixTop = matrixScroller?.scrollTop ?? null;
    const windowTop = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    const resetFrame = requestAnimationFrame(() => {
      setIframeReady(false);
      setIframeFailed(false);
      setCopied(false);
      setIframeKey((key) => key + 1);
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const focusFrame = requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      cancelAnimationFrame(resetFrame);
      cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = bodyOverflow;
      document.body.style.paddingRight = bodyPaddingRight;
      delete document.body.dataset.chatBoardDemoOpen;
      window.dispatchEvent(new Event('chat-board-demo-statechange'));

      if (matrixScroller && matrixTop !== null) {
        matrixScroller.scrollTop = matrixTop;
      } else {
        window.scrollTo({ top: windowTop, left: 0, behavior: 'auto' });
        window.dispatchEvent(new CustomEvent('portfolio:restore-scroll', { detail: { top: windowTop } }));
      }
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !viewportReady || isMobile || iframeReady || iframeFailed) return;
    // Generous timeout: cold CDN caches can be slow on first load. The demo
    // was slimmed down, but keep a long window so it never gives up early.
    const timeout = window.setTimeout(() => setIframeFailed(true), 60000);
    return () => window.clearTimeout(timeout);
  }, [open, viewportReady, isMobile, iframeReady, iframeFailed, iframeKey]);

  if (!open) return null;

  const handleCopyLink = async () => {
    const url = `${window.location.origin}/demo/?device=web`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const overlayContent = (
    <div
      className={`${styles.overlay} ${theme === 'dark' ? styles.dark : styles.light}`}
      role="dialog"
      aria-modal="true"
      aria-label={language === 'zh' ? 'Mirror \u4ea4\u4e92 Demo' : 'Mirror interactive demo'}
      tabIndex={-1}
      ref={dialogRef}
    >
      <div className={styles.toolbar}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label={labels.close}>
          <span className={styles.closeGlyph} aria-hidden="true">←</span>
          <span className={styles.closeText}>{labels.close}</span>
        </button>
      </div>

      {!viewportReady ? (
        <div className={styles.viewportLoading} aria-live="polite">
          <span className={styles.loader} aria-hidden="true" />
        </div>
      ) : isMobile ? (
        <div className={styles.mobilePanel}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneNotch} aria-hidden="true" />
            <Image
              src="/projects/mirror/Starlight.png"
              alt="Mirror demo preview"
              fill
              sizes="min(76vw, 320px)"
              className={styles.mobilePreview}
              priority
            />
          </div>
          <h2>{labels.mobileTitle}</h2>
          <p>{labels.mobileHint}</p>
          <div className={styles.mobileActions}>
            <button type="button" className={styles.secondaryButton} onClick={onClose}>{labels.viewIntro}</button>
            <button type="button" className={styles.primaryButton} onClick={handleCopyLink}>{copied ? labels.copied : labels.copyLink}</button>
          </div>
          <a className={styles.newWindowLink} href="/demo/?device=web" target="_blank" rel="noreferrer">
            {labels.newWindow} \u2197
          </a>
        </div>
      ) : (
        <div className={styles.desktopShell}>
          <div className={styles.desktopHeader}>
            <span>INTERACTIVE PROTOTYPE</span>
            <a href="/demo/?device=web" target="_blank" rel="noreferrer">{labels.newWindow} \u2197</a>
          </div>
          <div className={styles.iframeWrap}>
            {!iframeReady && !iframeFailed && (
              <div className={styles.loadingState}>
                <span className={styles.loader} aria-hidden="true" />
                <strong>{labels.loading}</strong>
                <span>{labels.loadingHint}</span>
              </div>
            )}
            {iframeFailed ? (
              <div className={styles.errorState}>
                <strong>{labels.error}</strong>
                <span>{labels.errorHint}</span>
                <div className={styles.errorActions}>
                  <button type="button" className={styles.primaryButton} onClick={() => {
                    setIframeFailed(false);
                    setIframeReady(false);
                    setIframeKey((key) => key + 1);
                  }}>{labels.retry}</button>
                  <a className={styles.secondaryButton} href="/demo/?device=web" target="_blank" rel="noreferrer">{labels.newWindow}</a>
                  <a className={styles.secondaryButton} href={FIGMA_URL} target="_blank" rel="noreferrer">{labels.figma} ↗</a>
                </div>
              </div>
            ) : (
              <iframe
                key={iframeKey}
                title={language === 'zh' ? 'Mirror \u4ea4\u4e92 Demo' : 'Mirror interactive demo'}
                src="/demo/?device=web"
                className={`${styles.iframe} ${iframeReady ? styles.ready : ''}`}
                onLoad={() => setIframeReady(true)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );

  return createPortal(overlayContent, document.body);
}
