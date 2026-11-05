'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { readdyTemplates, type ReaddyTemplate } from '../content/readdyTemplates';
import { ReaddyTemplateOverlay } from './ReaddyTemplateOverlay';
import styles from './MirrorCaseStudy.module.css';

const tagLabels: Record<string, { zh: string; en: string }> = {
  多页面: { zh: '多页面', en: 'Multi-page' },
  含动效: { zh: '含动效', en: 'Motion' },
};

const galleryCopy = {
  zh: { label: '网站模板与生成资产', count: '已上线模板' },
  en: { label: 'Templates & generation assets', count: 'Shipped templates' },
} as const;

function ReaddyTemplateCard({
  template,
  onOpen,
  isOpen,
}: {
  template: ReaddyTemplate;
  onOpen: (template: ReaddyTemplate) => void;
  isOpen: boolean;
}) {
  const { lang } = useApp();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hover previews stay inert until the pointer enters, so the page never
  // downloads ~36MB of video upfront (preload="none" + play() on demand).
  const startPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    const started = video.play();
    if (started && typeof started.catch === 'function') started.catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  };

  // The dialog covers the grid, so no mouseleave will arrive to stop playback.
  useEffect(() => {
    if (isOpen) stopPreview();
  }, [isOpen]);

  return (
    <article
      className={styles.readdyCard}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
      onClick={() => onOpen(template)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(template);
        }
      }}
    >
      <div className={styles.readdyCardMedia}>
        {/* Blurred cover backing: fills the letterbox bands that appear when the
            clip is shown with object-fit: contain, so no flat empty area shows. */}
        <Image
          className={styles.readdyCardBackdrop}
          src={`/projects/readdy/templates/${template.slug}.webp`}
          alt=""
          fill
          sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 30vw"
          unoptimized
          aria-hidden="true"
        />
        <Image
          className={styles.readdyCardImage}
          src={`/projects/readdy/templates/${template.slug}.webp`}
          alt={template.name}
          fill
          sizes="(max-width: 520px) 100vw, (max-width: 800px) 50vw, 30vw"
          unoptimized
        />
        <video
          ref={videoRef}
          className={styles.readdyCardVideo}
          src={`/projects/readdy/templates/${template.slug}.mp4`}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <span className={styles.readdyCardPlay} aria-hidden="true">▶</span>
      </div>
      <div className={styles.readdyCardMeta}>
        <h3 className={styles.readdyCardTitle}>{template.name}</h3>
        <div className={styles.readdyCardTags}>
          {template.tags.map((tag) => (
            <span key={tag}>{tagLabels[tag]?.[lang] ?? tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ReaddyTemplateGallery() {
  const { lang } = useApp();
  const text = galleryCopy[lang];
  const [activeTemplate, setActiveTemplate] = useState<ReaddyTemplate | null>(null);
  const closeOverlay = useCallback(() => setActiveTemplate(null), []);

  return (
    <section className={styles.readdyGallerySection} aria-labelledby="readdy-gallery-title">
      <div className={styles.readdyGalleryIntro}>
        <p id="readdy-gallery-title" className={styles.readdyGalleryLabel}>{text.label}</p>
        <span className={styles.readdyGalleryCount}>
          {String(readdyTemplates.length).padStart(2, '0')} {text.count}
        </span>
      </div>
      <div className={styles.readdyGallery}>
        {readdyTemplates.map((template) => (
          <ReaddyTemplateCard
            key={template.slug}
            template={template}
            onOpen={setActiveTemplate}
            isOpen={activeTemplate?.slug === template.slug}
          />
        ))}
      </div>
      <ReaddyTemplateOverlay template={activeTemplate} onClose={closeOverlay} />
    </section>
  );
}
