'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useApp } from '../context/ThemeLanguageContext';

interface DynamicHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export const DynamicHeading: React.FC<DynamicHeadingProps> = ({ 
  text, 
  className = '', 
  as = 'h2' 
}) => {
  const { theme, style } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Hermes (极客) 终端风格专属打字机状态与高频电磁扰动状态
  const [displayedText, setDisplayedText] = useState('');
  const [glitchedText, setGlitchedText] = useState('');

  // 1. 打字机初次逐字打印
  useEffect(() => {
    if (style !== 'hermes') return;
    if (!isInView) {
      setDisplayedText('');
      setGlitchedText('');
      return;
    }

    let idx = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      if (idx < text.length) {
        const char = text.charAt(idx);
        setDisplayedText((prev) => prev + char);
        setGlitchedText((prev) => prev + char);
        idx++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [style, text, isInView]);

  // 2. 打印完毕后常驻的高频终端电磁扰动 (Glitch Noise Loop) - 缩短周期至 1.2s，让文字真正动起来！
  useEffect(() => {
    if (style !== 'hermes') return;
    if (displayedText.length < text.length) return;

    const noiseTimer = setInterval(() => {
      const textArr = text.split('');
      // 随机抽取 1-3 个字符进行瞬时乱码替换
      const glitchCount = Math.min(3, Math.floor(Math.random() * 3) + 1);
      for (let i = 0; i < glitchCount; i++) {
        const randIdx = Math.floor(Math.random() * textArr.length);
        if (textArr[randIdx] !== ' ') {
          textArr[randIdx] = ['_', '0', '1', '$', '#', '/', '>', 'X'][Math.floor(Math.random() * 8)];
        }
      }
      setGlitchedText(textArr.join(''));

      // 100ms 后立刻闪烁复原，制造数字跳动抖动
      setTimeout(() => {
        setGlitchedText(text);
      }, 100);
    }, 1200);

    return () => clearInterval(noiseTimer);
  }, [displayedText, style, text]);

  const appleEase = [0.16, 1, 0.3, 1] as const;

  // ==========================================
  // 1. HERMES 风格：雅致无衬线，Light 下纯黑，具有高频乱码跳动与闪烁光标
  // ==========================================
  if (style === 'hermes') {
    const isLight = theme === 'light';
    return (
      <div 
        ref={containerRef} 
        className={`font-sans text-lg md:text-xl font-bold tracking-wider flex items-center gap-1 py-1 transition-colors duration-300 ${
          isLight ? 'text-black' : 'text-green-500'
        }`}
      >
        <span>{glitchedText || displayedText}</span>
        <span className={`animate-ping font-black ${isLight ? 'text-black' : 'text-green-500'}`}>_</span>
      </div>
    );
  }

  // ==========================================
  // 2. Blade Runner 风格：规整为无衬线色差分离故障字
  // ==========================================
  if (style === 'bladerunner') {
    const isBig = className.includes('text-[8vw]') || className.includes('text-[10vw]');
    const headingSize = isBig ? 'text-[6vw] md:text-[5vw] font-black' : 'text-xl md:text-2xl font-bold';

    return React.createElement(
      as,
      { 
        ref: containerRef,
        className: `glitch-text font-sans tracking-wide ${headingSize} ${
          theme === 'dark' ? 'text-[#F5EFEB]' : 'text-[#1D1107]'
        }`, 
        'data-text': text 
      },
      text
    );
  }

  // ==========================================
  // 3. Magazine 画廊风格：大气的无衬线入场 + 静止状态下强烈的字间距往复呼吸拉伸 (Living Typography)
  // ==========================================
  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        initial={{ y: 35, opacity: 0, letterSpacing: "-0.05em" }}
        animate={isInView ? { 
          y: 0, 
          opacity: 1, 
          letterSpacing: ["-0.05em", "0.22em", "-0.05em"] 
        } : {}}
        transition={{
          y: { duration: 1.2, ease: appleEase },
          opacity: { duration: 1.2 },
          // 强烈的字间距拉缩呼吸：3.8秒循环
          letterSpacing: { 
            repeat: Infinity, 
            duration: 3.8, 
            ease: "easeInOut" 
          }
        }}
      >
        {React.createElement(as, { className: `font-sans tracking-tight ${className}` }, text)}
      </motion.div>
    </div>
  );
};
