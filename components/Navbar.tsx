'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/ThemeLanguageContext';
import { Moon, Sun, Undo2, Terminal } from 'lucide-react';

interface NavbarProps {
  activeStyle: 'hermes' | 'magazine' | null;
  onReturn?: () => void;
}

export const Navbar = ({ activeStyle, onReturn }: NavbarProps) => {
  const { theme, lang, toggleTheme, toggleLanguage, setStyle } = useApp();
  const isHermes = activeStyle === 'hermes';
  const handleReturn = () => {
    if (onReturn) {
      onReturn();
      return;
    }
    setStyle(null);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full h-16 md:h-20 z-[100] flex items-center justify-between px-4 md:px-16 pointer-events-none ${
        isHermes ? 'matrix-theme-transition text-[var(--matrix-ink-color)] font-hacker-en' : 'text-foreground font-apple'
      }`}
    >
      {/* Left side: Logo or Name */}
      <div className="font-bold tracking-[0.2em] pointer-events-auto cursor-pointer flex flex-col justify-center">
        {isHermes ? (
          <span className="matrix-glow-strong text-base md:text-xl opacity-90">
            {theme === 'dark' ? 'MATRIX' : 'ZION'}
          </span>
        ) : (
          <span className="text-xl">ZHANG YONG</span>
        )}
      </div>

      {/* Right side: Controls */}
      <div className="flex items-center gap-2 md:gap-6 pointer-events-auto">

        <button
          onClick={toggleLanguage}
          className={`h-9 min-w-9 px-2 flex items-center justify-center text-[10px] md:text-xs font-medium tracking-[0.12em] transition-colors ${
            isHermes
              ? 'matrix-control border border-[rgb(var(--matrix-ink-rgb)/0.35)] rounded-none'
              : 'rounded-full hover:bg-foreground/10'
          }`}
          title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
          aria-label={lang === 'zh' ? 'Switch to English' : '切换为中文'}
        >
          {isHermes
            ? `[ ${lang === 'zh' ? 'EN' : '中'} ]`
            : lang === 'zh' ? 'EN' : '中'}
        </button>
        
        {/* Toggle Theme (Restored for both modes) */}
        <button 
          onClick={toggleTheme}
          className={`p-2.5 md:p-2 rounded-full transition-colors flex items-center justify-center ${
            isHermes ? 'matrix-control border border-transparent' : 'hover:bg-foreground/10'
          }`}
          title={lang === 'zh'
            ? `切换为${theme === 'light' ? '深色' : '浅色'}模式`
            : `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Back to Choice (Red/Blue Pill) */}
        <button 
          onClick={handleReturn}
          className={`flex items-center gap-2 transition-all ${
            isHermes 
              ? 'matrix-return-control px-2 md:px-3 py-1.5 border text-[10px] sm:text-xs md:text-sm tracking-wider md:tracking-widest uppercase' 
              : 'p-2 rounded-full hover:bg-foreground/10 text-xs tracking-widest uppercase'
          }`}
          title="Return to Choice"
        >
          {isHermes ? (
            <>
              <Terminal size={16} className="opacity-80" />
              <span>[ RETURN ]</span>
            </>
          ) : (
            <>
              <Undo2 size={20} />
              <span className="hidden md:inline-block">Restart</span>
            </>
          )}
        </button>

      </div>
    </motion.nav>
  );
};
