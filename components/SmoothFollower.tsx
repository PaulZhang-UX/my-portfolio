'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/ThemeLanguageContext';

export const SmoothFollower: React.FC = () => {
  const { theme, style } = useApp();
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderPosition = useRef({ x: 0, y: 0 });

  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_SMOOTHNESS = 0.15;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-cursor');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    let animationId: number;
    const animate = () => {
      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderPosition.current.x = lerp(borderPosition.current.x, mousePosition.current.x, BORDER_SMOOTHNESS);
      borderPosition.current.y = lerp(borderPosition.current.y, mousePosition.current.y, BORDER_SMOOTHNESS);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${borderPosition.current.x}px, ${borderPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  // 根据当前 style 和 theme 返回跟随器颜色 (自适应极客/Hermes 的黑底绿鼠、白底黑鼠，以及银翼的黑底橙鼠、白底红褐鼠)
  const getFollowerColors = () => {
    const isLight = theme === 'light';
    
    if (style === 'hermes') {
      return {
        dotBg: isLight ? '#000000' : '#22c55e',
        borderColor: isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(34, 197, 94, 0.5)',
      };
    }
    
    if (style === 'bladerunner') {
      return {
        dotBg: isLight ? '#1D1107' : '#E05A10',
        borderColor: isLight ? 'rgba(29, 17, 7, 0.4)' : 'rgba(224, 90, 16, 0.5)',
      };
    }

    // 画廊 Magazine 经典色
    return {
      dotBg: isLight ? '#171717' : '#FFFFFF',
      borderColor: isLight ? 'rgba(23, 23, 23, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    };
  };

  if (!isVisible) return null;

  const colors = getFollowerColors();

  return (
    <div 
      className="pointer-events-none fixed inset-0 hidden md:block"
      style={{ zIndex: 999999 }}
    >
      {/* 中心实心圆点 */}
      <div
        ref={dotRef}
        className="absolute w-2 h-2 rounded-full transition-colors duration-300 ease-in-out"
        style={{
          backgroundColor: colors.dotBg,
          willChange: 'transform',
        }}
      />

      {/* 外圈边框圆环 */}
      <div
        ref={borderRef}
        className="absolute rounded-full border transition-all duration-300 ease-[var(--ease-apple)]"
        style={{
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          borderColor: colors.borderColor,
          willChange: 'transform, width, height',
        }}
      />
    </div>
  );
};
