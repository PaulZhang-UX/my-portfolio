'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LogoEffect } from './LogoEffect';
import { useApp } from '../context/ThemeLanguageContext';
import { portfolioCopy } from '../content/portfolioCopy';

interface HeroSectionProps {
  activeStyle: 'hermes' | 'magazine' | null;
}

export const HeroSection = ({ activeStyle }: HeroSectionProps) => {
  const { lang } = useApp();
  const copy = portfolioCopy[lang].hero;
  const isHermes = activeStyle !== 'magazine';

  if (!isHermes) {
    return (
      <section className="relative w-full min-h-[58svh] md:min-h-[78svh] px-6 md:px-10 lg:px-14 pt-20 md:pt-40 pb-12 md:pb-28 flex items-center text-left">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-4xl"
        >
          <p className="text-[10px] md:text-[11px] font-medium tracking-[0.22em] uppercase text-[#86868b] dark:text-[#8e8e93]">
            {copy.role}
          </p>

          <h1 className="mt-9 md:mt-12 text-[clamp(2.25rem,3.5vw,3.5rem)] leading-none font-normal md:font-light tracking-[-0.045em] text-[#1d1d1f] dark:text-[#f5f5f7]">
            {copy.name}
          </h1>

          <div className="mt-7 md:mt-9 max-w-2xl">
            <p className="text-lg md:text-[22px] leading-relaxed font-normal md:font-light tracking-[-0.025em] text-[#515154] dark:text-[#d2d2d7]">
              {copy.statement}
            </p>
          </div>

          <div className="mt-12 md:mt-16 pt-5 border-t border-black/10 dark:border-white/15">
            <p className="text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#86868b] dark:text-[#8e8e93]">
              {copy.location}
            </p>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-4 md:pt-8 pb-10 md:pb-20 px-1 md:px-4">
      
      {/* The Animated SVG Wordmark */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto flex items-center justify-center mb-4 md:mb-8"
      >
        <LogoEffect />
      </motion.div>

      {/* Profile Intro / Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-2xl text-center space-y-4"
      >
        {/* Changed font to thin/light */}
        <p className={`text-[11px] sm:text-xs md:text-lg leading-relaxed tracking-[0.18em] md:tracking-[0.3em] uppercase font-light ${
          isHermes ? 'matrix-text-90 matrix-glow-strong font-hacker-en' : 'text-muted-foreground font-apple'
        }`}>
          {copy.matrixStatement}
        </p>
      </motion.div>

    </section>
  );
};
