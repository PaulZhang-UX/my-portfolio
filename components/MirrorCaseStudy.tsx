'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { mirrorCaseStudy } from '../content/mirrorCaseStudy';
import { CaseStudyFrame } from './CaseStudyFrame';
import { DemoFloatingCta } from './DemoFloatingCta';
import { MirrorDemoOverlay } from './MirrorDemoOverlay';
import { MobileDemoNotice } from './MobileDemoNotice';
import { Navbar } from './Navbar';
import { useCaseStudyNavigation } from './useCaseStudyNavigation';
import { useMobileViewport } from './useMobileViewport';
import styles from './MirrorCaseStudy.module.css';

export function MirrorCaseStudy() {
  const router = useRouter();
  const { lang, style, activeStyle, theme } = useApp();
  const visualStyle = style ?? activeStyle ?? 'magazine';
  const isHermes = visualStyle === 'hermes';
  const handleReturn = useCaseStudyNavigation(router);
  const copy = mirrorCaseStudy[lang];
  const [demoOpen, setDemoOpen] = useState(false);
  const [mobileNoticeOpen, setMobileNoticeOpen] = useState(false);
  const isMobileViewport = useMobileViewport();
  const closeDemo = useCallback(() => setDemoOpen(false), []);
  const demoCta = lang === 'zh'
    ? '\u7acb\u5373\u4f53\u9a8c Demo'
    : 'Try the demo now';
  const demoCopy = lang === 'zh'
    ? {
        title: '\u8ba9\u8bbe\u8ba1\u56de\u5230\u771f\u5b9e\u7684\u64cd\u4f5c\u91cc\u3002',
        status: demoCta,
        hint: demoCta,
        summary: demoCta,
      }
    : {
        title: 'Put the design back in motion.',
        status: demoCta,
        hint: demoCta,
        summary: demoCta,
      };

  return (
    <CaseStudyFrame
      topBar={(
        <Navbar
          activeStyle={isHermes ? 'hermes' : 'magazine'}
          onReturn={handleReturn}
        />
      )}
    >
      <main className={`${styles.page} ${isHermes ? styles.matrixMode : styles.magazineMode} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>
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

        <section className={styles.demoSection} aria-labelledby="mirror-demo-title">
          <div
            className={styles.demoFolder}
            id="mirror-demo-entry"
            role="button"
            tabIndex={0}
            aria-label={demoCopy.status}
            onClick={() => (isMobileViewport ? setMobileNoticeOpen(true) : setDemoOpen(true))}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                if (isMobileViewport) setMobileNoticeOpen(true);
                else setDemoOpen(true);
              }
            }}
          >
            <div className={styles.demoTags} aria-hidden="true">
              <span>{lang === 'zh' ? '灵感输入' : 'INPUT'}</span>
              <span>{lang === 'zh' ? '方案生成' : 'GENERATE'}</span>
              <span>{lang === 'zh' ? '局部修改' : 'REFINE'}</span>
              <span>{lang === 'zh' ? '持续复用' : 'REUSE'}</span>
            </div>

            <div className={styles.demoPreview}>
              <Image
                className={styles.demoPreviewImage}
                src="/projects/mirror/Starlight.png"
                alt="Mirror interactive demo preview"
                fill
                sizes="(max-width: 800px) 84vw, 52vw"
                quality={75}
                decoding="async"
              />
            </div>

            <div className={styles.demoGlass} aria-hidden="true" />
            <span className={styles.demoHoverCta}>{demoCopy.hint}</span>
          </div>

          <div className={styles.demoCopy}>
            <h2 id="mirror-demo-title" className={styles.demoTitle}>{demoCopy.title}</h2>
            <p className={styles.demoSummary}>{demoCopy.summary}</p>
          </div>
          <MirrorDemoOverlay open={demoOpen} onClose={closeDemo} language={lang} theme={theme} />
          <MobileDemoNotice
            open={mobileNoticeOpen}
            language={lang}
            title="Mirror Demo"
            description={lang === 'zh' ? '完整交互建议使用电脑浏览。' : 'Use a desktop browser for the complete interaction.'}
            path="/demo/?device=web"
            onClose={() => setMobileNoticeOpen(false)}
          />
        </section>

        <div className={styles.reader}>
          <div className={styles.pdfStack}>
            {copy.chapters.map((chapter, index) => (
              <section id={`chapter-${chapter.id}`} className={styles.chapter} key={chapter.id}>
                <figure className={styles.figure}>
                  <Image
                    className={styles.image}
                    src={chapter.image.replace(/\/(\d{2})\.png$/, '/$1-v20260806-2.png')}
                    alt={chapter.imageAlt}
                    width={2048}
                    height={1152}
                    sizes="(max-width: 800px) 100vw, 62vw"
                    quality={75}
                    decoding="async"
                    preload={index === 0}
                  />
                </figure>
              </section>
            ))}
          </div>
        </div>

        <DemoFloatingCta
          targetId="mirror-demo-entry"
          onActivate={() => (isMobileViewport ? setMobileNoticeOpen(true) : setDemoOpen(true))}
        />
      </main>
    </CaseStudyFrame>
  );
}
