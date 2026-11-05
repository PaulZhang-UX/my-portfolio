'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { placeholderProjects, type PlaceholderProjectId, type PlaceholderProjectTheme } from '../content/placeholderCaseStudies';
import { CaseStudyFrame } from './CaseStudyFrame';
import { ChatBoardDemoOverlay } from './ChatBoardDemoOverlay';
import { DemoFloatingCta } from './DemoFloatingCta';
import { MobileDemoNotice } from './MobileDemoNotice';
import { UiTraceVideoOverlay } from './UiTraceVideoOverlay';
import { Navbar } from './Navbar';
import { ReaddyTemplateGallery } from './ReaddyTemplateGallery';
import { useCaseStudyNavigation } from './useCaseStudyNavigation';
import { useMobileViewport } from './useMobileViewport';
import styles from './MirrorCaseStudy.module.css';

interface PlaceholderProjectCaseStudyProps {
  projectId: PlaceholderProjectId;
}

interface ProjectPalette {
  surface: string;
  secondary: string;
  line: string;
  accent: string;
  demoSurface: string;
  demoTagBg: string;
  demoTagInk: string;
  demoBorder: string;
  demoShadow: string;
}

const palettes: Record<PlaceholderProjectTheme, Record<'light' | 'dark', ProjectPalette>> = {
  default: {
    light: { surface: '#ffffff', secondary: '#68686d', line: 'rgba(29, 29, 31, 0.12)', accent: '#a13c3b', demoSurface: '#faf4f4', demoTagBg: 'rgba(205, 151, 151, 0.36)', demoTagInk: 'rgba(87, 52, 52, 0.72)', demoBorder: 'rgba(161, 60, 59, 0.08)', demoShadow: 'rgba(104, 66, 66, 0.09)' },
    dark: { surface: '#0b0b0d', secondary: '#a1a1a6', line: 'rgba(245, 245, 247, 0.14)', accent: '#cf6b68', demoSurface: '#211516', demoTagBg: 'rgba(198, 107, 104, 0.24)', demoTagInk: 'rgba(255, 229, 228, 0.78)', demoBorder: 'rgba(255, 205, 202, 0.14)', demoShadow: 'rgba(0, 0, 0, 0.32)' },
  },
  green: {
    light: { surface: '#ffffff', secondary: '#68686d', line: 'rgba(29, 29, 31, 0.12)', accent: '#0aa75b', demoSurface: '#edf9f0', demoTagBg: 'rgba(74, 190, 121, 0.24)', demoTagInk: 'rgba(31, 105, 58, 0.8)', demoBorder: 'rgba(26, 135, 73, 0.16)', demoShadow: 'rgba(45, 120, 72, 0.12)' },
    dark: { surface: '#0b0b0d', secondary: '#a1a1a6', line: 'rgba(245, 245, 247, 0.14)', accent: '#42db87', demoSurface: '#0c2b18', demoTagBg: 'rgba(66, 219, 135, 0.2)', demoTagInk: 'rgba(191, 255, 213, 0.86)', demoBorder: 'rgba(148, 244, 179, 0.2)', demoShadow: 'rgba(0, 0, 0, 0.34)' },
  },
  blue: {
    light: { surface: '#ffffff', secondary: '#68686d', line: 'rgba(29, 29, 31, 0.12)', accent: '#2877d8', demoSurface: '#edf5ff', demoTagBg: 'rgba(94, 158, 237, 0.24)', demoTagInk: 'rgba(40, 91, 151, 0.82)', demoBorder: 'rgba(54, 122, 214, 0.16)', demoShadow: 'rgba(52, 100, 171, 0.12)' },
    dark: { surface: '#0b0b0d', secondary: '#a1a1a6', line: 'rgba(245, 245, 247, 0.14)', accent: '#65a9ff', demoSurface: '#0c2039', demoTagBg: 'rgba(101, 169, 255, 0.2)', demoTagInk: 'rgba(207, 231, 255, 0.86)', demoBorder: 'rgba(151, 203, 255, 0.2)', demoShadow: 'rgba(0, 0, 0, 0.36)' },
  },
  purple: {
    light: { surface: '#ffffff', secondary: '#68686d', line: 'rgba(29, 29, 31, 0.12)', accent: '#7c5cd6', demoSurface: '#f5f2ff', demoTagBg: 'rgba(139, 92, 246, 0.2)', demoTagInk: 'rgba(88, 56, 166, 0.84)', demoBorder: 'rgba(139, 92, 246, 0.16)', demoShadow: 'rgba(108, 80, 178, 0.14)' },
    dark: { surface: '#0b0b0d', secondary: '#a1a1a6', line: 'rgba(245, 245, 247, 0.14)', accent: '#a78bfa', demoSurface: '#191233', demoTagBg: 'rgba(167, 139, 250, 0.22)', demoTagInk: 'rgba(226, 217, 255, 0.88)', demoBorder: 'rgba(196, 181, 253, 0.2)', demoShadow: 'rgba(0, 0, 0, 0.36)' },
  },
};

const demoTags = {
  zh: ['灵感输入', '方案生成', '局部修改', '持续复用'],
  en: ['INPUT', 'GENERATE', 'REFINE', 'REUSE'],
} as const;

export function PlaceholderProjectCaseStudy({ projectId }: PlaceholderProjectCaseStudyProps) {
  const router = useRouter();
  const { lang, style, activeStyle, theme } = useApp();
  const visualStyle = style ?? activeStyle ?? 'magazine';
  const isHermes = visualStyle === 'hermes';
  const handleReturn = useCaseStudyNavigation(router);
  const config = placeholderProjects[projectId];
  const copy = config.copy[lang];
  const palette = palettes[config.theme][theme];
  const isChatBoard = projectId === '04';
  const isUiTrace = projectId === '03';
  const isReaddy = projectId === '01';
  const [chatBoardMode, setChatBoardMode] = useState<'web' | 'mobile' | null>(null);
  const [mobileNoticeOpen, setMobileNoticeOpen] = useState(false);
  const [uiTraceVideoOpen, setUiTraceVideoOpen] = useState(false);
  const isMobileViewport = useMobileViewport();
  const openChatBoard = (mode: 'web' | 'mobile') => {
    if (mode === 'web' && isMobileViewport) {
      setMobileNoticeOpen(true);
      return;
    }
    setChatBoardMode(mode);
  };
  const demoCta = isChatBoard
    ? (lang === 'zh' ? '选择 Web 或移动端 Demo。' : 'Choose the Web or mobile demo.')
    : isUiTrace
      ? (lang === 'zh' ? '查看 UI Trace 使用流程视频。' : 'Watch the UI Trace workflow.')
      : (lang === 'zh' ? '立即体验 Demo' : 'Try the demo now');
  const projectThemeClass = config.theme === 'green'
    ? styles.projectGreen
    : config.theme === 'blue'
      ? styles.projectBlue
      : config.theme === 'purple'
        ? styles.projectBlue
        : styles.projectDefault;
  const paletteVars = {
    // Matrix mode owns its screen background. Only the demo folder receives
    // the project-specific surface color; the reading area stays transparent
    // just like Project 01.
    '--detail-surface': isHermes ? 'transparent' : palette.surface,
    ...(isHermes ? {} : {
      '--detail-secondary': palette.secondary,
      '--detail-line': palette.line,
    }),
    '--mirror-red': theme === 'dark' ? palettes.default.dark.accent : palettes.default.light.accent,
    '--mirror-blush': palette.demoSurface,
    '--project-demo-accent': palette.accent,
    '--project-demo-tag-bg': palette.demoTagBg,
    '--project-demo-tag-ink': palette.demoTagInk,
    '--project-demo-border': palette.demoBorder,
    '--project-demo-shadow': palette.demoShadow,
  } as CSSProperties;

  return (
    <CaseStudyFrame
      topBar={(
        <Navbar activeStyle={isHermes ? 'hermes' : 'magazine'} onReturn={handleReturn} />
      )}
    >
      <main
        className={`${styles.page} ${projectThemeClass} ${isHermes ? styles.matrixMode : styles.magazineMode} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}
        style={paletteVars}
      >
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.lead}>{copy.lead}</p>
          <dl className={styles.meta}>
            {copy.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {config.hasDemo && (
          <section className={styles.demoSection} aria-labelledby={`${config.slug}-demo-title`}>
            <div
              className={styles.demoFolder}
              id={`${config.slug}-demo-entry`}
              role="group"
              aria-label={demoCta}
              onClick={isChatBoard
                ? () => openChatBoard('web')
                : isUiTrace
                  ? () => setUiTraceVideoOpen(true)
                  : undefined}
            >
              <div className={styles.demoTags} aria-hidden="true">
                {demoTags[lang].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className={styles.demoPreview}>
                <Image
                  className={styles.demoPreviewImage}
                  src={isChatBoard
                    ? '/projects/chat-board/Group-999.png'
                    : isUiTrace
                      ? '/projects/ui-trace/Group-1004.png'
                      : '/projects/mirror/Starlight.png'}
                  alt={isChatBoard
                    ? 'GPT chat management Web and mobile demo preview'
                    : isUiTrace
                      ? 'UI Trace workflow video preview'
                      : 'Project 01 interactive demo placeholder'}
                  fill
                  sizes="(max-width: 767px) 100vw, 60vw"
                  unoptimized
                  loading="lazy"
                />
              </div>
              {isChatBoard && (
                <div className={styles.demoEntryMarks} aria-label={lang === 'zh' ? '选择 Demo 入口' : 'Choose a demo entry'}>
                  <button
                    type="button"
                    className={`${styles.demoEntryButton} ${styles.demoEntryWeb}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      openChatBoard('web');
                    }}
                  >
                    <span>{lang === 'zh' ? 'WEB' : 'WEB'}</span>
                    <small>{lang === 'zh' ? '全屏体验' : 'Full screen'}</small>
                  </button>
                  <button
                    type="button"
                    className={`${styles.demoEntryButton} ${styles.demoEntryMobile}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      openChatBoard('mobile');
                    }}
                  >
                    <span>{lang === 'zh' ? 'MOBILE' : 'MOBILE'}</span>
                    <small>{lang === 'zh' ? '手机样机' : 'iPhone frame'}</small>
                  </button>
                </div>
              )}
              <div className={styles.demoGlass} aria-hidden="true" />
              {!isChatBoard && <span className={styles.demoHoverCta}>{demoCta}</span>}
            </div>
            {isChatBoard && (
              <ChatBoardDemoOverlay
                open={chatBoardMode !== null}
                mode={chatBoardMode ?? 'web'}
                language={lang}
                onClose={() => setChatBoardMode(null)}
              />
            )}
            {isChatBoard && (
              <MobileDemoNotice
                open={mobileNoticeOpen}
                language={lang}
                title={lang === 'zh' ? 'GPT Chat Board Demo' : 'GPT Chat Board Demo'}
                description={lang === 'zh' ? '完整 Web 体验建议使用电脑浏览。' : 'Use a desktop browser for the complete Web experience.'}
                path="/demo/chat-board/?device=web"
                onClose={() => setMobileNoticeOpen(false)}
              />
            )}
            {isUiTrace && (
              <UiTraceVideoOverlay
                open={uiTraceVideoOpen}
                language={lang}
                onClose={() => setUiTraceVideoOpen(false)}
              />
            )}
            <div className={styles.demoCopy}>
              <h2 id={`${config.slug}-demo-title`} className={styles.demoTitle}>{copy.demoTitle}</h2>
              <p className={styles.demoSummary}>{copy.demoCopy}</p>
              {isUiTrace && (
                <a
                  className={styles.demoGithubLink}
                  href="https://github.com/PaulZhang-UX/UI-Trace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{lang === 'zh' ? '在 GitHub 下载并使用 UI Trace' : 'Download and use UI Trace on GitHub'}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </section>
        )}

        {isReaddy && <ReaddyTemplateGallery />}

        {/* Readdy ships its template gallery instead of placeholder chapters —
            the chapter section is temporarily hidden for project 01. */}
        {!isReaddy && (
          <div className={styles.reader}>
            <div className={styles.pdfStack}>
              {copy.chapterTitles.map((title, index) => (
                <section id={`chapter-${index + 1}`} className={styles.chapter} key={title}>
                  <figure className={styles.figure}>
                    {copy.chapterImages?.[index] ? (
                      <Image
                        className={styles.image}
                        src={copy.chapterImages[index]}
                        alt={`${config.slug} case study page ${index + 1}`}
                          width={3840}
                          height={2160}
                          sizes="(max-width: 800px) 100vw, 62vw"
                          // Case-study pages are high-resolution PNG exports with tiny UI labels.
                          // Keep the original pixels instead of Next's q75 viewport downsampling.
                          unoptimized
                          decoding="async"
                        preload={index === 0}
                      />
                    ) : (
                      <div className={styles.placeholderFigure}>
                        <span className={styles.placeholderIndex}>{String(index + 1).padStart(2, '0')} / 09</span>
                        <strong>{title}</strong>
                        <span>{copy.chapterTexts?.[index] ?? copy.chapterText}</span>
                      </div>
                    )}
                  </figure>
                </section>
              ))}
            </div>
          </div>
        )}

        {config.hasDemo && (
          <DemoFloatingCta
            targetId={`${config.slug}-demo-entry`}
            labels={isUiTrace
              ? { zh: '观看演示视频', en: 'Watch the demo video' }
              : { zh: '进入 Demo 体验', en: 'Enter the demo' }}
            onActivate={isChatBoard
              ? () => openChatBoard('web')
              : isUiTrace
                ? () => setUiTraceVideoOpen(true)
                : undefined}
          />
        )}
      </main>
    </CaseStudyFrame>
  );
}

