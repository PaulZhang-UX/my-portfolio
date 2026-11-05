'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '../context/ThemeLanguageContext';
import { portfolioCopy } from '../content/portfolioCopy';

interface ProjectsSectionProps {
  activeStyle: 'hermes' | 'magazine' | null;
}

const projectCoverSrc: Record<string, string> = {
  '01': '/projects/covers/project-01.png',
  '02': '/projects/covers/project-02.png',
  '03': '/projects/covers/project-03.png',
  '04': '/projects/covers/project-04.png',
  '05': '/projects/covers/project-05.png',
};

const matrixCoverSrc: Record<string, string> = {
  '01': '/projects/covers/project-01-red.png',
  '02': '/projects/covers/project-02-red.png',
  '03': '/projects/covers/project-03-red.png',
  '04': '/projects/covers/project-04-red.png',
  '05': '/projects/covers/project-05-red.png',
};

const projectHref: Record<string, string> = {
  '01': '/work/readdy',
  '02': '/work/mirror',
  '03': '/work/ui-trace',
  '04': '/work/chatgpt-redesign',
  '05': '/work/meituan',
};

const ProjectLink = ({
  href,
  label,
  onClick,
  children,
}: {
  href?: string;
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  if (!href) return <>{children}</>;

  return (
    <Link href={href} onClick={onClick} aria-label={label} className="block focus-visible:outline-2 focus-visible:outline-offset-4">
      {children}
    </Link>
  );
};

export const ProjectsSection = ({ activeStyle }: ProjectsSectionProps) => {
  const { lang } = useApp();
  const copy = portfolioCopy[lang].projects;
  const projectList = copy.items;
  const isHermes = activeStyle !== 'magazine'; 

  const rememberReturnPosition = () => {
    if (typeof window === 'undefined') return;

    const matrixScroller = document.querySelector<HTMLElement>('[data-ratchet-scroll]');
    const top = matrixScroller ? matrixScroller.scrollTop : window.scrollY;
    window.sessionStorage.setItem('portfolio-return-scroll-top', String(Math.max(0, top)));
    window.sessionStorage.setItem('portfolio-return-scroll-context', matrixScroller ? 'matrix' : 'page');
  };

  if (!isHermes) {
    return (
      <section id="work" className="relative w-full px-6 md:px-10 lg:px-14 py-16 md:py-36 text-left">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 md:pt-7 border-t border-black/10 dark:border-white/15"
          >
            <div className="flex items-center justify-between gap-6 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#86868b] dark:text-[#8e8e93]">
              <p>{copy.index}</p>
              <p>2025 — 2026</p>
            </div>

            <p className="mt-10 md:mt-20 max-w-xl text-base leading-[1.85] md:leading-[1.9] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
              {copy.intro}
            </p>
          </motion.div>

          <div className="mt-10 md:mt-16 border-t border-black/10 dark:border-white/15">
            {projectList.map((proj, idx) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group py-9 md:py-14 border-b border-black/10 dark:border-white/15"
              >
                <ProjectLink
                  href={projectHref[proj.id]}
                  onClick={rememberReturnPosition}
                  label={`${proj.title} — ${copy.viewDetails}`}
                >
                  <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.08fr)_minmax(210px,0.92fr)] gap-6 xl:gap-12 items-start">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-transparent border-0">
                    {projectCoverSrc[proj.id] ? (
                      <Image
                        src={projectCoverSrc[proj.id]}
                        alt={`${proj.title} project overview`}
                        fill
                        sizes="(max-width: 1279px) 100vw, 52vw"
                        unoptimized
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#a1a1a6] dark:text-[#6e6e73]">
                        <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
                          {copy.overviewLabel}
                        </span>
                        <span className="mt-2 text-[8px] tracking-[0.16em] uppercase opacity-65">
                          {copy.placeholderLabel} / {proj.id}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <span className="pt-1 text-[9px] md:text-[10px] font-medium tracking-[0.16em] text-[#86868b] dark:text-[#8e8e93]">
                        {proj.id}
                      </span>
                      <span className="text-[9px] md:text-[10px] tracking-[0.14em] uppercase text-[#86868b] dark:text-[#8e8e93]">
                        {proj.year}
                      </span>
                    </div>

                    <h3 className="mt-6 md:mt-8 text-[21px] md:text-2xl leading-tight font-normal md:font-light tracking-[-0.035em] text-[#1d1d1f] dark:text-[#f5f5f7]">
                      {proj.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium md:font-normal text-[#515154] dark:text-[#d2d2d7]">
                      {proj.subtitle}
                    </p>
                    <p className="mt-5 text-sm leading-[1.8] font-normal md:font-light text-[#6e6e73] dark:text-[#a1a1a6]">
                      {proj.overview}
                    </p>

                    <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/15 flex items-center justify-between gap-5">
                      <p className="text-[9px] md:text-[10px] leading-relaxed tracking-[0.14em] uppercase text-[#86868b] dark:text-[#8e8e93]">
                        {proj.discipline}
                      </p>
                      <span className="text-base font-light text-[#86868b] dark:text-[#8e8e93] transition-transform duration-500 ease-out group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                  </div>
                  </div>
                </ProjectLink>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start py-10 md:py-20 px-1 sm:px-4 md:px-12 text-left">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mb-8 md:mb-16 text-left border-b pb-4 border-current opacity-80"
      >
        <h2 className={`text-xl md:text-2xl tracking-widest uppercase ${isHermes ? 'font-hacker-en' : 'font-apple font-bold'}`}>
          {copy.matrixHeading}
        </h2>
      </motion.div>

      <div className="w-full max-w-4xl flex flex-col gap-6 md:gap-12 text-left">
        {projectList.map((proj, idx) => (
          <ProjectLink
            key={proj.id}
            href={projectHref[proj.id]}
            onClick={rememberReturnPosition}
            label={`${proj.title} — ${copy.viewDetails}`}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row gap-5 md:gap-8 p-4 sm:p-6 md:p-8 transition-all duration-300 ${
                isHermes 
                  ? 'matrix-project-card border' 
                  : 'rounded-2xl hover:bg-foreground/5'
              }`}
            >
            {/* Project cover / ID placeholder */}
            <div className={`relative shrink-0 w-full h-28 md:w-48 md:h-32 flex items-center justify-center ${
              isHermes
                ? matrixCoverSrc[proj.id]
                  ? 'overflow-hidden'
                  : 'matrix-project-thumb border border-dashed'
                : 'bg-foreground/10 rounded-xl'
            }`}>
              {isHermes && matrixCoverSrc[proj.id] ? (
                <Image
                  src={matrixCoverSrc[proj.id]}
                  alt={`${proj.title} project overview`}
                  fill
                  sizes="(max-width: 767px) 100vw, 192px"
                  unoptimized
                  className="object-contain"
                />
              ) : (
                <span className={`text-2xl font-bold opacity-30 ${isHermes ? 'font-hacker-en' : ''}`}>
                  {proj.id}
                </span>
              )}
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center items-start space-y-4 text-left w-full">
              <div className="space-y-2 w-full">
                
                {/* Title Line - Force consistent font for Chinese/English mixed titles so the baseline aligns perfectly */}
                <h3 className={`text-lg md:text-xl tracking-wider flex items-center flex-wrap gap-2 ${
                  isHermes ? 'font-hacker-zh text-[var(--matrix-ink-color)]' : 'font-apple font-bold text-foreground'
                }`}>
                  <span className={isHermes ? 'matrix-glow-soft font-bold' : ''}>
                    {proj.title}
                  </span>
                  <span className={`opacity-50 ${isHermes ? '' : 'text-muted-foreground'}`}>｜</span>
                  <span>{proj.subtitle}</span>
                </h3>
                
                <p className={`text-sm md:text-base leading-relaxed ${
                  isHermes ? 'matrix-text-80 font-hacker-zh font-light' : 'text-muted-foreground font-apple font-light'
                }`}>
                  {proj.overview}
                </p>
              </div>

              <div className="pt-2 w-full text-left">
                <span className={`inline-block text-xs uppercase tracking-widest ${
                  isHermes ? 'matrix-project-link transition-colors font-hacker-en' : 'font-bold hover:underline font-apple'
                }`}>
                  {copy.viewDetails}
                </span>
              </div>
            </div>
            </motion.div>
          </ProjectLink>
        ))}
      </div>

    </section>
  );
};
