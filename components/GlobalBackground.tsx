'use client';

import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/ThemeLanguageContext';

type AmbientParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity?: number;
};

type MatrixColumn = {
  x: number;
  y: number;
  speed: number;
  fontSize: number;
  opacity: number;
  length: number;
  glyphs: string[];
};

const binaryGlyph = () => (Math.random() > 0.48 ? '1' : '0');

export const GlobalBackground: React.FC = () => {
  const { theme, style } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.targetX = event.clientX;
      mouseRef.current.targetY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let ambientTime = 0;
    let matrixColumns: MatrixColumn[] = [];

    const particles: AmbientParticle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 2 + 1,
    }));

    const dustParticles: AmbientParticle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.3) * 0.15 - 0.05,
      vy: (Math.random() - 0.5) * 0.2 - 0.1,
      radius: Math.random() * 2.5 + 0.8,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const createMatrixColumn = (x: number, startAcrossViewport = false): MatrixColumn => {
      const depth = Math.random() * 0.72 + 0.28;
      const length = Math.floor(24 + depth * 25 + Math.random() * 10);

      return {
        x,
        y: startAcrossViewport
          ? Math.random() * (height * 1.8) - height * 0.7
          : -Math.random() * height * 0.75 - 40,
        speed: 1.8 + depth * 3.4,
        fontSize: Math.floor(10 + depth * 5),
        opacity: 0.16 + depth * 0.42,
        length,
        glyphs: Array.from({ length }, binaryGlyph),
      };
    };

    const rebuildMatrix = () => {
      const columnSpacing = width < 768 ? 16 : 18;
      const count = Math.ceil(width / columnSpacing) + 2;
      matrixColumns = Array.from({ length: count }, (_, index) =>
        createMatrixColumn(index * columnSpacing + (Math.random() - 0.5) * 5, true),
      );
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      rebuildMatrix();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const renderMagazine = (isDark: boolean, relativeX: number, relativeY: number) => {
      const particleColor = isDark ? 'rgba(255,255,255,.28)' : 'rgba(23,23,23,.20)';
      const lineColor = isDark ? 'rgba(255,255,255,.08)' : 'rgba(23,23,23,.06)';

      particles.forEach((particle) => {
        const drawX = particle.x + relativeX * 30;
        const drawY = particle.y + relativeY * 30;
        ctx.beginPath();
        ctx.arc(drawX, drawY, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        particle.x = (particle.x + particle.vx + width) % width;
        particle.y = (particle.y + particle.vy + height) % height;
      });

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.8;
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const dx = particles[first].x - particles[second].x;
          const dy = particles[first].y - particles[second].y;
          if (Math.hypot(dx, dy) >= 120) continue;

          ctx.beginPath();
          ctx.moveTo(particles[first].x + relativeX * 30, particles[first].y + relativeY * 30);
          ctx.lineTo(particles[second].x + relativeX * 30, particles[second].y + relativeY * 30);
          ctx.stroke();
        }
      }
    };

    const renderBladeRunner = (isDark: boolean, relativeX: number, relativeY: number) => {
      ambientTime += 0.01;
      ctx.beginPath();
      ctx.strokeStyle = isDark ? 'rgba(224,90,16,.08)' : 'rgba(29,17,7,.06)';
      ctx.lineWidth = 1.5;

      for (let x = 0; x < width; x += 15) {
        const y = height * 0.78 + Math.sin(x * 0.004 + ambientTime * 0.8) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      dustParticles.forEach((particle) => {
        const drawX = particle.x + relativeX * 45;
        const drawY = particle.y + relativeY * 45;
        const opacity = particle.opacity ?? 0.2;

        ctx.beginPath();
        ctx.arc(drawX, drawY, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(224,90,16,${opacity})`
          : `rgba(29,17,7,${opacity * 0.75})`;
        ctx.shadowColor = isDark && particle.radius > 2 ? '#E05A10' : 'transparent';
        ctx.shadowBlur = isDark && particle.radius > 2 ? 4 : 0;
        ctx.fill();

        particle.x += particle.vx + Math.sin(ambientTime + particle.radius) * 0.05;
        particle.y += particle.vy;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      });
      ctx.shadowBlur = 0;
    };

    const renderMatrix = (isDark: boolean) => {
      // A solid reset keeps the rain as the only HERMES background element.
      ctx.fillStyle = isDark ? '#030403' : '#f7f8f7';
      ctx.fillRect(0, 0, width, height);

      matrixColumns.forEach((column, columnIndex) => {
        ctx.font = `700 ${column.fontSize}px "JetBrains Mono", monospace`;
        ctx.textBaseline = 'top';

        for (let index = column.length - 1; index >= 0; index -= 1) {
          const y = column.y - index * (column.fontSize + 1);
          if (y < -column.fontSize || y > height + column.fontSize) continue;

          const trailProgress = 1 - index / column.length;
          const topFade = y < 90 ? Math.max(0, y / 90) : 1;
          const edgeFade = Math.min(1, y / 55, (height - y + 55) / 55);
          const alpha = Math.max(0, column.opacity * trailProgress * topFade * edgeFade);

          if (index === 0) {
            ctx.shadowColor = isDark ? '#8dffad' : 'transparent';
            ctx.shadowBlur = isDark ? 7 : 0;
            ctx.fillStyle = isDark
              ? `rgba(174,255,195,${Math.min(0.92, alpha * 1.7)})`
              : `rgba(0,28,8,${Math.min(0.78, alpha * 1.4)})`;
          } else {
            ctx.shadowColor = isDark ? '#22c55e' : 'transparent';
            ctx.shadowBlur = isDark && index < 5 ? 3 : 0;
            ctx.fillStyle = isDark
              ? `rgba(34,197,94,${alpha})`
              : `rgba(0,45,14,${alpha * 0.82})`;
          }

          ctx.fillText(column.glyphs[index], column.x, y);
        }

        ctx.shadowBlur = 0;
        column.y += column.speed;

        // Refresh a few cells instead of flickering every glyph on every frame.
        if ((frame + columnIndex) % 5 === 0) {
          const glyphIndex = Math.floor(Math.random() * column.length);
          column.glyphs[glyphIndex] = binaryGlyph();
        }

        if (column.y - column.length * (column.fontSize + 1) > height + 80) {
          const replacement = createMatrixColumn(column.x);
          Object.assign(column, replacement);
        }
      });
    };

    const render = () => {
      const isDark = theme === 'dark';
      frame += 1;
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      const relativeX = mouseRef.current.x / Math.max(width, 1) - 0.5;
      const relativeY = mouseRef.current.y / Math.max(height, 1) - 0.5;

      if (style === 'hermes') {
        renderMatrix(isDark);
      } else {
        ctx.clearRect(0, 0, width, height);
        if (style === 'magazine') renderMagazine(isDark, relativeX, relativeY);
        else renderBladeRunner(isDark, relativeX, relativeY);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [theme, style]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 block h-screen w-screen pointer-events-none"
    />
  );
};
