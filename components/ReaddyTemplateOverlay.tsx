'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useApp } from '../context/ThemeLanguageContext';
import { readdyTemplatePrompts, type ReaddyPromptSection } from '../content/readdyTemplatePrompts.generated';
import type { ReaddyTemplate } from '../content/readdyTemplates';
import styles from './ReaddyTemplateOverlay.module.css';

interface ReaddyTemplateOverlayProps {
  /** 当前打开的模板；为 null 时浮层不渲染。 */
  template: ReaddyTemplate | null;
  onClose: () => void;
}

const copy = {
  zh: {
    dialogLabel: '模板详情',
    close: '关闭',
    urlLabel: '模板预览',
    openPreview: '打开实时预览',
    promptLabel: (count: number) => `Prompt · 共 ${count} 段`,
    partial: (shown: number, total: number) => `这里展示前 ${shown} 段。完整 ${total} 段内容一键复制即可拿去用。`,
    copyAll: '复制全部',
    preparing: '准备中…',
    copiedAll: '已复制全部',
    copy: '复制',
    copied: '已复制',
    failed: '复制失败',
    pending: '这套模板的 prompt 还在整理中。',
  },
  en: {
    dialogLabel: 'Template detail',
    close: 'Close',
    urlLabel: 'Live preview',
    openPreview: 'Open live preview',
    promptLabel: (count: number) => `Prompt · ${count} sections`,
    partial: (shown: number, total: number) => `Showing the first ${shown}. Copy all ${total} sections to use them directly.`,
    copyAll: 'Copy all',
    preparing: 'Preparing…',
    copiedAll: 'All copied',
    copy: 'Copy',
    copied: 'Copied',
    failed: 'Copy failed',
    pending: 'Notes for this template are still being written.',
  },
} as const;

/** 单段 prompt 转成可复制的纯文本。 */
function sectionText(section: ReaddyPromptSection) {
  return `${section.id} — ${section.title}\n\n${section.body}`;
}

async function writeClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}

export function ReaddyTemplateOverlay({ template, onClose }: ReaddyTemplateOverlayProps) {
  const { lang } = useApp();
  const labels = copy[lang];
  const [feedback, setFeedback] = useState<string | null>(null);
  const [copyingAll, setCopyingAll] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  // 「复制全部」的完整文本按模板缓存，避免重复下载。
  const fullTextCache = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    if (!template) return;

    const bodyOverflow = document.body.style.overflow;
    const bodyPaddingRight = document.body.style.paddingRight;
    const scrollTop = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    setFeedback(null);
    setCopyingAll(false);

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
  }, [template, onClose]);

  if (!template) return null;

  const data = readdyTemplatePrompts[template.slug];
  const sections = data?.previewSections ?? [];
  const sectionCount = data?.sectionCount ?? sections.length;

  const flash = (message: string) => {
    setFeedback(message);
    window.setTimeout(() => setFeedback((current) => (current === message ? null : current)), 2000);
  };

  const copySection = async (section: ReaddyPromptSection) => {
    try {
      await writeClipboard(sectionText(section));
      flash(`${labels.copied} · ${section.id}`);
    } catch {
      flash(labels.failed);
    }
  };

  // 完整内容放在 public 下（单模板 25–43KB），点击时才拉取，不进首屏 bundle。
  const copyAll = async () => {
    if (!data) return;
    setCopyingAll(true);
    try {
      const cached = fullTextCache.current.get(template.slug);
      const text = cached ?? await (async () => {
        const response = await fetch(data.fullPromptPath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })();
      fullTextCache.current.set(template.slug, text);
      await writeClipboard(text);
      flash(labels.copiedAll);
    } catch {
      flash(labels.failed);
    } finally {
      setCopyingAll(false);
    }
  };

  const copyAllLabel = copyingAll
    ? labels.preparing
    : feedback === labels.copiedAll
      ? labels.copiedAll
      : feedback === labels.failed
        ? labels.failed
        : labels.copyAll;

  const overlayContent = (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${template.name} ${labels.dialogLabel}`}
      tabIndex={-1}
      onClick={(event) => {
        // 点击卡片外的遮罩关闭；卡片内部的点击不冒泡到这里。
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.card} onClick={(event) => event.stopPropagation()}>
        <div className={styles.head}>
          <div className={styles.headText}>
            <h2 className={styles.title}>{template.name}</h2>
            <div className={styles.tags}>
              {template.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <button type="button" className={styles.close} onClick={onClose} aria-label={labels.close}>
            ×
          </button>
        </div>

        <div className={styles.body}>
          {data?.previewUrl ? (
            <section className={styles.block}>
              <p className={styles.label}>{labels.urlLabel}</p>
              <div className={styles.urlRow}>
                <a className={styles.url} href={data.previewUrl} target="_blank" rel="noreferrer">
                  {data.previewUrl.replace(/^https?:\/\//, '')}
                </a>
                <a className={styles.primary} href={data.previewUrl} target="_blank" rel="noreferrer">
                  {labels.openPreview} ↗
                </a>
              </div>
            </section>
          ) : null}

          <section className={styles.block}>
            <div className={styles.blockHead}>
              <p className={styles.label}>
                {sectionCount > 0 ? labels.promptLabel(sectionCount) : 'Prompt'}
              </p>
              {data && sectionCount > 0 ? (
                <button type="button" className={styles.ghost} onClick={copyAll} disabled={copyingAll}>
                  {copyAllLabel}
                </button>
              ) : null}
            </div>

            {sections.length === 0 ? (
              <p className={styles.empty}>{labels.pending}</p>
            ) : (
              <>
                {sections.map((section) => (
                  <article className={styles.prompt} key={section.id}>
                    <div className={styles.promptHead}>
                      <span className={styles.promptIndex}>{section.id}</span>
                      <h3 className={styles.promptTitle}>{section.title}</h3>
                      <button
                        type="button"
                        className={styles.ghost}
                        onClick={() => copySection(section)}
                      >
                        {labels.copy}
                      </button>
                    </div>
                    <p className={styles.promptBody}>{section.body}</p>
                  </article>
                ))}

                {sectionCount > sections.length ? (
                  <p className={styles.more}>
                    {labels.partial(sections.length, sectionCount)}
                  </p>
                ) : null}
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
}
