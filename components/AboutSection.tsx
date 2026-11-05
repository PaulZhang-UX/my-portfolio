'use client';

import React from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { motion } from 'framer-motion';
import { portfolioCopy } from '../content/portfolioCopy';

interface AboutSectionProps {
  activeStyle: 'hermes' | 'magazine' | null;
}

export const AboutSection = ({ activeStyle }: AboutSectionProps) => {
  const { theme, lang } = useApp();
  const copy = portfolioCopy[lang].about;
  const displayName = portfolioCopy[lang].hero.name;
  const isHermes = activeStyle !== 'magazine'; 

  if (!isHermes) {
    return (
      <section id="profile" className="relative w-full px-6 md:px-10 lg:px-14 py-16 md:py-36 text-left">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-4xl pt-6 md:pt-7 border-t border-black/10 dark:border-white/15"
        >
          <div className="flex items-center justify-between gap-6 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#86868b] dark:text-[#8e8e93]">
            <p>{copy.index}</p>
            <p className="hidden sm:block">{copy.indexNote}</p>
          </div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_160px] items-start gap-10 lg:gap-20">
            <div className="min-w-0 max-w-2xl">
              <div className="space-y-5 text-base md:text-base leading-[1.85] md:leading-[1.9] font-normal md:font-light tracking-[-0.015em] text-[#515154] dark:text-[#d2d2d7]">
                <p className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{copy.greeting}</p>
                {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <figure className="order-first lg:order-none flex lg:block items-center gap-5 w-full lg:w-full justify-self-start lg:justify-self-end">
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-auto lg:aspect-[4/5] overflow-hidden rounded-full lg:rounded-none bg-[#f5f5f7] dark:bg-[#1c1c1e]">
                <img
                  src="/avatar-magazine-portrait.webp"
                  alt={copy.portraitAlt}
                  className="w-full h-full object-cover object-[center_20%] lg:object-top"
                  draggable={false}
                />
              </div>
              <figcaption className="lg:mt-3 text-[9px] tracking-[0.16em] uppercase text-[#86868b] dark:text-[#8e8e93]">
                <span className="block text-[#515154] dark:text-[#d2d2d7]">{displayName}</span>
                <span className="block mt-1.5">{copy.roleLocation}</span>
              </figcaption>
            </figure>
          </div>

            <div className="mt-12 md:mt-24 pt-5 border-t border-black/10 dark:border-white/15 grid grid-cols-3 gap-x-2 md:gap-x-6 lg:gap-8 text-[8px] md:text-[11px] leading-relaxed">
              <div className="min-w-0">
              <p className="mb-1.5 tracking-[0.16em] uppercase text-[#86868b] dark:text-[#8e8e93]">{copy.email}</p>
              <a href="mailto:zhangyong@njfu.edu.cn" className="break-all text-[#515154] dark:text-[#d2d2d7] hover:opacity-55 transition-opacity">
                zhangyong@njfu.edu.cn
              </a>
            </div>
              <div className="min-w-0">
              <p className="mb-1.5 tracking-[0.16em] uppercase text-[#86868b] dark:text-[#8e8e93]">{copy.telephone}</p>
              <a href="tel:+8613075434960" className="break-all text-[#515154] dark:text-[#d2d2d7] hover:opacity-55 transition-opacity">
                +86 130 7543 4960
              </a>
            </div>
              <div className="min-w-0">
              <p className="mb-1.5 tracking-[0.16em] uppercase text-[#86868b] dark:text-[#8e8e93]">{copy.elsewhere}</p>
              <a href="https://github.com/PaulZhang-UX" target="_blank" rel="noopener noreferrer" className="break-all text-[#515154] dark:text-[#d2d2d7] hover:opacity-55 transition-opacity">
                GitHub ↗
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-[50vh] flex flex-col md:flex-row items-start justify-center py-10 md:py-20 px-1 sm:px-4 md:px-12 gap-6 md:gap-12 lg:gap-16">
      
      {/* Profile Photo - Cropped Width, Preserved Height */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative self-center md:self-auto shrink-0 w-full max-w-64 h-72 md:w-72 md:max-w-none md:h-[26rem] lg:w-[22rem] lg:h-[32rem] flex items-center justify-center bg-transparent overflow-hidden ${
          isHermes 
            ? 'drop-shadow-none filter-none' // Strictly ensure no CSS glow is applied
            : 'rounded-2xl shadow-xl'
        }`}
      >
        {isHermes ? (
          <>
            <img
              src="/avatar-hermes.png"
              alt={copy.portraitAlt}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                theme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`}
              draggable={false}
              style={{ filter: 'none', boxShadow: 'none' }}
            />
            <img
              src="/avatar-hermes-light.png"
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                theme === 'light' ? 'opacity-100' : 'opacity-0'
              }`}
              draggable={false}
              style={{ filter: 'none', boxShadow: 'none' }}
            />
          </>
        ) : (
          <img
            src="/avatar-magazine.png"
            alt="Zhang Yong Portrait"
            className="w-full h-full object-cover object-top transition-opacity duration-500"
            draggable={false}
            style={{ filter: 'none', boxShadow: 'none' }}
          />
        )}
      </motion.div>

      {/* Personal Intro Text - Restored Width to prevent squeezing */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xl lg:max-w-2xl text-left space-y-4 md:space-y-6 pt-2 md:pt-10"
      >
        <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-widest ${
          isHermes ? 'matrix-glow-strong font-hacker-en' : 'font-apple'
        }`}>
          {copy.matrixHeading}
        </h2>
        
        <div className={`space-y-4 text-sm md:text-base leading-loose ${
          isHermes ? 'matrix-text-90 font-hacker-zh font-light' : 'text-muted-foreground font-apple font-light'
        }`}>
          <p>{copy.greeting}</p>
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          
          {/* Contact Details */}
          <div className={`mt-6 pt-6 border-t flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm tracking-widest ${
            isHermes ? 'matrix-border-30 matrix-text-60 font-hacker-en' : 'border-current/10 text-muted-foreground font-apple'
          }`}>
            <span>zhangyong@njfu.edu.cn</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <span>13075434960</span>
            <span className="hidden sm:inline opacity-50">|</span>
            <a href="https://github.com/PaulZhang-UX" target="_blank" rel="noopener noreferrer" className={`hover:underline ${isHermes ? 'hover:text-[var(--matrix-ink-color)]' : 'hover:text-foreground'}`}>GITHUB</a>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
