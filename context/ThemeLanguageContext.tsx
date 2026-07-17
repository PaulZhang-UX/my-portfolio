'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { playFeedback, playEmptyClick } from '../utils/audioSynth';

type Theme = 'light' | 'dark';
type Language = 'zh' | 'en';
type AppStyle = 'magazine' | 'hermes' | 'bladerunner';

interface AppContextType {
  theme: Theme;
  lang: Language;
  style: AppStyle;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  toggleStyle: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Language>('zh');
  // 默认加载风格改为 HERMES (原极客) 终端风格
  const [style, setStyle] = useState<AppStyle>('hermes');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  // 同步 CSS 风格类名，打通 CSS 主题化
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('magazine', 'hermes', 'bladerunner');
    root.classList.add(style);
  }, [style]);

  // 挂载全局物理空击（点击空白区）音效监听
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      // 判定是否点击了交互式节点 (链接、按钮、输入框、或带有 .interactive-cursor 的节点)
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-cursor');
      if (!isInteractive) {
        playEmptyClick(style);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [style]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    playFeedback(style, 'click');
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
    playFeedback(style, 'click');
  };

  const toggleStyle = () => {
    // 风格轮转顺序重排：Hermes ➔ 画廊 ➔ 银翼
    const styles: AppStyle[] = ['hermes', 'magazine', 'bladerunner'];
    const nextIdx = (styles.indexOf(style) + 1) % styles.length;
    const nextStyle = styles[nextIdx];
    setStyle(nextStyle);
    playFeedback(nextStyle, 'switch');
  };

  return (
    <AppContext.Provider value={{ theme, lang, style, toggleTheme, toggleLanguage, toggleStyle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
