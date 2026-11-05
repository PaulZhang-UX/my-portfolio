'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Repeat } from 'lucide-react';
import { useApp } from '../context/ThemeLanguageContext';

/**
 * 右侧风格切换悬浮球。
 * - hover 悬浮球显示提示语；点击悬浮球直接切换红/蓝两种视觉风格
 * - 进入页面后提示语先自动显示 5 秒，帮助用户发现该功能，随后淡出
 */
export const StyleSwitcherFAB = () => {
  const { style, activeStyle, setStyle, lang, theme } = useApp();
  const visualStyle = style ?? activeStyle;
  const [autoVisible, setAutoVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Show the hint every time the user enters a new surface (pill selection →
  // main, main → case study via full reload, or a style switch). Start the
  // timer from the moment a style is actually active — not from mount, which
  // would expire the hint while the user is still on the pill screen.
  useEffect(() => {
    if (!visualStyle) return;
    setAutoVisible(true);
    const timer = window.setTimeout(() => setAutoVisible(false), 5000);
    return () => window.clearTimeout(timer);
  }, [visualStyle]);

  // 药丸选择屏不显示切换悬浮球
  if (!visualStyle) return null;

  const isHermes = visualStyle === 'hermes';
  const isDark = theme === 'dark';
  const isZh = lang === 'zh';
  const showHint = autoVisible || hovered;

  const hint = isHermes
    ? (isZh ? '可读性不佳？点我切换' : 'Hard to read? Click to switch')
    : (isZh ? '不够沉浸？点我切换' : 'Want more immersion? Click to switch');

  const switchStyle = () => setStyle(isHermes ? 'magazine' : 'hermes');

  return (
    <div
      className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-[96] flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-none max-w-[220px] px-4 py-2.5 text-[12px] md:text-[13px] leading-snug border backdrop-blur-xl ${
              isHermes
                ? 'font-hacker-en border-[rgb(var(--matrix-ink-rgb)/0.4)] bg-[var(--matrix-page-color)]/90 text-[var(--matrix-ink-color)] rounded-sm shadow-[0_0_14px_rgb(var(--matrix-ink-rgb)/0.12)]'
                : isDark
                  ? 'rounded-full border-white/12 bg-black/70 text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
                  : 'rounded-full border-black/8 bg-white/85 text-[#1d1d1f] shadow-[0_10px_35px_rgba(0,0,0,0.08)]'
            }`}
          >
            {hint}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={switchStyle}
        aria-label={isZh ? '切换红蓝药丸风格' : 'Switch visual style'}
        title={isZh ? '切换风格' : 'Switch style'}
        className={`flex h-9 w-9 shrink-0 items-center justify-center border backdrop-blur-xl transition-all ${
          isHermes
            ? 'rounded-sm border-[rgb(var(--matrix-ink-rgb)/0.4)] bg-[var(--matrix-page-color)]/88 text-[var(--matrix-ink-color)] font-hacker-en shadow-[0_0_14px_rgb(var(--matrix-ink-rgb)/0.12)]'
            : isDark
              ? 'rounded-full border-white/12 bg-black/70 text-white shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
              : 'rounded-full border-black/8 bg-white/82 text-[#1d1d1f] shadow-[0_10px_35px_rgba(0,0,0,0.08)]'
        }`}
      >
        <Repeat size={15} />
      </button>
    </div>
  );
};
