'use client';
import React from 'react';
import { useApp } from '../context/ThemeLanguageContext';

export const Navbar: React.FC = () => {
  const { theme, lang, style, toggleTheme, toggleLanguage, toggleStyle } = useApp();

  // 根据当前 style 计算下一个要切换的风格 Label (轮转：Hermes ➔ 画廊 ➔ 银翼)
  const getStyleLabel = () => {
    if (style === 'hermes') {
      return lang === 'zh' ? '✿ 杂志画廊' : '✿ GALLERY';
    }
    if (style === 'magazine') {
      return lang === 'zh' ? '☄ 银翼杀手' : '☄ 2049 MESA';
    }
    return lang === 'zh' ? '⌨ HERMES终端' : '⌨ HERMES TERM';
  };

  const content = {
    zh: {
      logo: 'INDEX.DB',
      themeLabel: theme === 'dark' ? '☼ LIGHT' : '☽ DARK',
      langLabel: 'EN / 中文',
    },
    en: {
      logo: 'INDEX.DB',
      themeLabel: theme === 'dark' ? '☼ LIGHT' : '☽ DARK',
      langLabel: 'ZH / ENGLISH',
    },
  };

  const isDark = theme === 'dark';

  // 动态决定 Nav 容器的样式组合
  const getNavStyles = () => {
    if (style === 'bladerunner') {
      return isDark
        ? 'bg-[#03050C]/90 text-[#F5EFEB] border-[#E05A10]/30 shadow-[0_10px_30px_rgba(224,90,16,0.04)]'
        : 'bg-[#E6CEB8]/95 text-[#1D1107] border-[#E05A10]/20 shadow-[0_10px_30px_rgba(29,17,7,0.02)]';
    }
    return isDark 
      ? 'bg-black text-white border-neutral-900' 
      : 'bg-white text-black border-neutral-200';
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b backdrop-blur-md ${getNavStyles()}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-xs tracking-widest">
        {/* Logo */}
        <div className={`font-bold select-none cursor-pointer ${
          style === 'bladerunner' ? 'text-[#E05A10] drop-shadow-[0_0_8px_#E05A10]' : ''
        }`}>
          {content[lang].logo}
        </div>
        
        {/* 控制面板 */}
        <div className="flex items-center space-x-8">
          <button 
            onClick={toggleLanguage} 
            className="hover:opacity-70 transition-opacity duration-300 uppercase cursor-pointer"
          >
            {content[lang].langLabel}
          </button>
          
          <button 
            onClick={toggleStyle} 
            className={`hover:opacity-80 transition-all duration-300 uppercase font-bold cursor-pointer ${
              style === 'bladerunner' 
                ? 'text-[#E05A10] drop-shadow-[0_0_8px_#E05A10]' 
                : (style === 'hermes' 
                    ? (isDark ? 'text-green-400' : 'text-neutral-950') 
                    : 'text-neutral-900 dark:text-white')
            }`}
          >
            {getStyleLabel()}
          </button>

          <button 
            onClick={toggleTheme} 
            className="hover:opacity-70 transition-opacity duration-300 uppercase cursor-pointer"
          >
            {content[lang].themeLabel}
          </button>
        </div>
      </div>
    </nav>
  );
};
