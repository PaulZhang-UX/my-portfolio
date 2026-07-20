'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/ThemeLanguageContext';

const TRAIL_LENGTH = 13;

type Point = { x: number; y: number };

export const SmoothFollower: React.FC = () => {
  const { theme, style } = useApp();
  const mousePosition = useRef<Point>({ x: 0, y: 0 });
  const dotPosition = useRef<Point>({ x: 0, y: 0 });
  const borderPosition = useRef<Point>({ x: 0, y: 0 });
  const trailPositions = useRef<Point[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })),
  );
  const hasPosition = useRef(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };

      if (!hasPosition.current) {
        hasPosition.current = true;
        dotPosition.current = { ...mousePosition.current };
        borderPosition.current = { ...mousePosition.current };
        trailPositions.current = trailPositions.current.map(() => ({ ...mousePosition.current }));
        setIsVisible(true);
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, .interactive-cursor',
      );
      setIsHovering(Boolean(interactive));
    };

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    let animationId = 0;
    const animate = () => {
      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, 0.34);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, 0.34);
      borderPosition.current.x = lerp(borderPosition.current.x, mousePosition.current.x, 0.12);
      borderPosition.current.y = lerp(borderPosition.current.y, mousePosition.current.y, 0.12);

      trailPositions.current.forEach((point, index) => {
        const target = index === 0 ? dotPosition.current : trailPositions.current[index - 1];
        const followStrength = Math.max(0.2, 0.34 - index * 0.008);
        point.x = lerp(point.x, target.x, followStrength);
        point.y = lerp(point.y, target.y, followStrength);

        const element = trailRefs.current[index];
        if (element) {
          element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
        }
      });

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${borderPosition.current.x}px, ${borderPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  const isLight = theme === 'light';
  const colors = style === 'hermes'
    ? {
        dot: isLight ? '#001a08' : '#8dffad',
        border: isLight ? 'rgba(0,26,8,.45)' : 'rgba(72,255,126,.58)',
        trail: isLight ? '0,70,20' : '34,197,94',
      }
    : style === 'bladerunner'
      ? {
          dot: isLight ? '#1D1107' : '#E05A10',
          border: isLight ? 'rgba(29,17,7,.4)' : 'rgba(224,90,16,.5)',
          trail: isLight ? '29,17,7' : '224,90,16',
        }
      : {
          dot: isLight ? '#171717' : '#FFFFFF',
          border: isLight ? 'rgba(23,23,23,.5)' : 'rgba(255,255,255,.5)',
          trail: isLight ? '23,23,23' : '255,255,255',
        };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 hidden md:block"
      style={{ zIndex: 999999 }}
    >
      {style === 'hermes' && Array.from({ length: TRAIL_LENGTH }, (_, index) => {
        const progress = 1 - index / TRAIL_LENGTH;
        const size = 2.2 + progress * 3.2;
        return (
          <div
            key={index}
            ref={(element) => { trailRefs.current[index] = element; }}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.08 + progress * 0.42,
              backgroundColor: `rgb(${colors.trail})`,
              boxShadow: isLight ? 'none' : `0 0 ${4 + progress * 8}px rgba(${colors.trail},.8)`,
              willChange: 'transform',
            }}
          />
        );
      })}

      <div
        ref={dotRef}
        className="absolute h-2 w-2 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: colors.dot,
          boxShadow: style === 'hermes' && !isLight ? '0 0 12px rgba(141,255,173,.95)' : 'none',
          willChange: 'transform',
        }}
      />

      <div
        ref={borderRef}
        className="absolute rounded-full border transition-[width,height,border-color] duration-300 ease-[var(--ease-apple)]"
        style={{
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          borderColor: colors.border,
          boxShadow: style === 'hermes' && !isLight ? 'inset 0 0 8px rgba(34,197,94,.12)' : 'none',
          willChange: 'transform, width, height',
        }}
      />
    </div>
  );
};
