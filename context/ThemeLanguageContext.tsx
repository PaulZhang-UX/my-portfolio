'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { setAudioFeedbackEnabled } from '../utils/audioSynth';

type Theme = 'light' | 'dark';
type Language = 'zh' | 'en';
// `bladerunner` is kept as a legacy type alias for older, still type-checked
// components. The current entry flow uses `magazine` and `hermes`.
export type AppStyle = 'magazine' | 'hermes' | 'bladerunner' | null; // null means we are at the Red/Blue pill selection screen
type CurrentAppStyle = Exclude<AppStyle, null | 'bladerunner'>;

interface AppContextType {
  theme: Theme;
  lang: Language;
  style: AppStyle;
  activeStyle: CurrentAppStyle | null;
  soundEnabled: boolean;
  setStyle: (style: AppStyle) => void;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  toggleStyle: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    // Persist the theme per tab so a full-page reload (static export has no
    // RSC server) keeps dark/light consistent when navigating into a case study.
    return window.sessionStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
  });
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'zh';
    return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh';
  });
  const [style, setStyleState] = useState<AppStyle>(() => {
    if (typeof window === 'undefined') return null;
    // Persist the chosen style per tab so a full-page reload (static export has
    // no RSC server, so <Link> navigation reloads the document) restores the
    // visual mode instead of dropping back to the pill selection screen.
    const saved = window.sessionStorage.getItem('portfolio-style');
    return saved === 'magazine' || saved === 'hermes' ? saved : null;
  });
  const [activeStyle, setActiveStyle] = useState<CurrentAppStyle | null>(null);
  const [soundEnabled, setSoundEnabledState] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.localStorage.getItem('portfolio-sound-enabled') !== 'false';
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-sound-enabled', String(soundEnabled));
    setAudioFeedbackEnabled(soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', lang);
    window.document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  // Sync theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    try {
      window.sessionStorage.setItem('portfolio-theme', theme);
    } catch {
      // sessionStorage may be unavailable in private browsing; state still works in-memory.
    }
  }, [theme]);

  // Sync style
  useEffect(() => {
    const root = window.document.documentElement;
    if (style) {
      root.classList.remove('magazine', 'hermes');
      root.classList.add(style);
    }
  }, [style]);

  const setStyle = (nextStyle: AppStyle) => {
    if (nextStyle && nextStyle !== 'bladerunner') {
      setActiveStyle(nextStyle);
    }
    setStyleState(nextStyle);
    try {
      if (nextStyle) {
        window.sessionStorage.setItem('portfolio-style', nextStyle);
      } else {
        window.sessionStorage.removeItem('portfolio-style');
      }
    } catch {
      // sessionStorage may be unavailable in private browsing; state still works in-memory.
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const toggleStyle = () => {
    if (!style) return;
    setStyle(style === 'hermes' ? 'magazine' : 'hermes');
  };

  const setSoundEnabled = (enabled: boolean) => setSoundEnabledState(enabled);
  const toggleSound = () => setSoundEnabledState((enabled) => !enabled);

  return (
    <AppContext.Provider value={{
      theme,
      lang,
      style,
      activeStyle,
      soundEnabled,
      setStyle,
      setSoundEnabled,
      toggleSound,
      toggleTheme,
      toggleLanguage,
      toggleStyle,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
