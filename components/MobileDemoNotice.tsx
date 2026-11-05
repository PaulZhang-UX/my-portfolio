'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './MobileDemoNotice.module.css';

type DemoLanguage = 'zh' | 'en';

interface MobileDemoNoticeProps {
  open: boolean;
  language: DemoLanguage;
  title: string;
  description: string;
  path: string;
  onClose: () => void;
}

export function MobileDemoNotice({ open, language, title, description, path, onClose }: MobileDemoNoticeProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  if (!open) return null;

  const link = `${window.location.origin}${path}`;
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const input = document.createElement('textarea');
      input.value = link;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return createPortal(
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-demo-notice-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="mobile-demo-notice-title">{title}</h2>
        <p>{description}</p>
        <div className={styles.linkRow}>
          <input aria-label={language === 'zh' ? 'Demo 链接' : 'Demo link'} value={link} readOnly />
          <button type="button" onClick={copyLink}>{copied ? (language === 'zh' ? '已复制' : 'Copied') : (language === 'zh' ? '复制' : 'Copy')}</button>
        </div>
        <button type="button" className={styles.close} onClick={onClose}>{language === 'zh' ? '关闭' : 'Close'}</button>
      </section>
    </div>,
    document.body,
  );
}
