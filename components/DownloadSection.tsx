'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase } from 'lucide-react';
import { useApp } from '../context/ThemeLanguageContext';
import { portfolioCopy } from '../content/portfolioCopy';

interface DownloadSectionProps {
  activeStyle: 'hermes' | 'magazine' | null;
}

export const DownloadSection = ({ activeStyle }: DownloadSectionProps) => {
  const { lang } = useApp();
  const copy = portfolioCopy[lang].contact;
  const isHermes = activeStyle !== 'magazine';

  if (!isHermes) {
    return (
      <section id="contact" className="relative w-full px-6 md:px-10 lg:px-14 pt-16 md:pt-36 pb-20 md:pb-40 text-left">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-4xl pt-6 md:pt-7 border-t border-black/10 dark:border-white/15"
        >
          <div className="flex items-center justify-between gap-6 text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-[#86868b] dark:text-[#8e8e93]">
            <p>{copy.index}</p>
            <p className="hidden sm:block">{copy.indexNote}</p>
          </div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_220px] gap-10 xl:gap-20 items-start">
            <div className="max-w-2xl">
              <p className="max-w-xl text-base leading-[1.85] md:leading-[1.9] font-medium tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f5f5f7]">
                {copy.statement}
              </p>
            </div>

            <div className="border-t border-black/10 dark:border-white/15">
              <a
                href="/zhang-yong-resume.png"
                download={lang === 'zh' ? '张雍简历.png' : 'Zhang-Yong-Resume.png'}
                className="group w-full py-4 border-b border-black/10 dark:border-white/15 flex items-center justify-between text-xs font-normal text-left transition-opacity hover:opacity-55"
              >
                <span>{copy.resume}</span>
                <span className="text-[#86868b] dark:text-[#8e8e93] transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
              <a
                href="/zhang-yong-portfolio.pdf"
                download={lang === 'zh' ? '张雍作品集.pdf' : 'Zhang-Yong-Portfolio.pdf'}
                className="group w-full py-4 border-b border-black/10 dark:border-white/15 flex items-center justify-between text-xs font-normal text-left transition-opacity hover:opacity-55"
              >
                <span>{copy.portfolio}</span>
                <span className="text-[#86868b] dark:text-[#8e8e93] transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-36 pt-5 border-t border-black/10 dark:border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-[#86868b] dark:text-[#8e8e93]">
            <p>{copy.designedBy}</p>
            <p>{copy.location}</p>
          </div>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[10px] text-[#86868b] dark:text-[#8e8e93] hover:opacity-70 transition-opacity"
          >
            渝ICP备2026016672号-1
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-8 md:pt-10 pb-16 md:pb-32 px-1 sm:px-4 md:px-12 border-t border-dashed border-current opacity-90 mt-6 md:mt-10">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl text-center space-y-6 md:space-y-8 mt-8 md:mt-12"
      >
        <h2 className={`text-xl md:text-2xl tracking-widest uppercase ${isHermes ? 'matrix-glow-soft font-hacker-en font-bold' : 'font-apple font-bold'}`}>
          {copy.matrixHeading}
        </h2>
        
        <p className={`text-sm md:text-base leading-relaxed ${isHermes ? 'matrix-text-70 font-hacker-zh font-light' : 'text-muted-foreground font-apple font-light'}`}>
          {copy.matrixStatement}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          
          {/* Resume Download Button */}
          <a
            href="/zhang-yong-resume.png"
            download={lang === 'zh' ? '张雍简历.png' : 'Zhang-Yong-Resume.png'}
            className={`group relative w-full sm:w-auto justify-center flex items-center gap-3 px-5 sm:px-8 py-4 transition-all duration-300 ${
            isHermes 
              ? 'matrix-download-primary border font-hacker-en uppercase tracking-widest' 
              : 'rounded-full bg-foreground text-background hover:bg-foreground/80 font-apple'
          }`}
          >
            <FileText className="w-5 h-5" />
            <span className="text-sm font-bold">{copy.downloadResume}</span>
          </a>

          {/* Portfolio Download Button */}
          <a
            href="/zhang-yong-portfolio.pdf"
            download={lang === 'zh' ? '张雍作品集.pdf' : 'Zhang-Yong-Portfolio.pdf'}
            className={`group relative w-full sm:w-auto justify-center flex items-center gap-3 px-5 sm:px-8 py-4 transition-all duration-300 ${
            isHermes 
              ? 'matrix-download-secondary border font-hacker-en uppercase tracking-widest' 
              : 'rounded-full border border-foreground/20 bg-transparent hover:bg-foreground/5 font-apple'
          }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-bold">{copy.downloadPortfolio}</span>
          </a>

        </div>
      </motion.div>

      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-[10px] text-[#86868b] dark:text-[#8e8e93] hover:opacity-70 transition-opacity"
      >
        渝ICP备2026016672号-1
      </a>
    </section>
  );
};
