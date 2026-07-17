'use client';
import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/ThemeLanguageContext';

export const GlobalBackground: React.FC = () => {
  const { theme, style } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // 跨组件全局鼠标移动监听 (用于视差效果)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas 渲染回路
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // ==========================================
    // 1. Gallery 风格：漂浮粒子数据初始化
    // ==========================================
    const particlesCount = 45;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 1,
      });
    }

    // ==========================================
    // 2. Blade Runner 风格：酸性橙红尘埃粒子数据
    // ==========================================
    const dustCount = 50;
    const dustParticles: { x: number; y: number; vx: number; vy: number; radius: number; opacity: number }[] = [];
    for (let i = 0; i < dustCount; i++) {
      dustParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.3) * 0.15 - 0.05,
        vy: (Math.random() - 0.5) * 0.2 - 0.1,
        radius: Math.random() * 2.5 + 0.8,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    // ==========================================
    // 3. HERMES (极客) 风格：3D 层次数据瀑布列初始化
    // ==========================================
    const colSpacing = 36;
    const matrixColsCount = Math.floor(width / colSpacing);
    const matrixColumns: { x: number; y: number; speed: number; fontSize: number; opacity: number; depth: number }[] = [];
    
    for (let i = 0; i < matrixColsCount; i++) {
      const depth = Math.random() * 0.85 + 0.15;
      matrixColumns.push({
        x: i * colSpacing + Math.random() * 8,
        y: Math.random() * height - height,
        speed: depth * 2.8 + 0.5,
        fontSize: Math.floor(depth * 8) + 8,
        opacity: depth * 0.30 + 0.08,
        depth,
      });
    }

    // 公共时间与 3D 波浪网格参数
    let waveTime = 0;
    const waveCols = 28;
    const waveRows = 20;
    const dotSpacing = 45;

    const render = () => {
      const isDark = theme === 'dark';

      // 强力重置发光阴影属性，防止阴影溢出污染
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      if (style === 'hermes') {
        ctx.fillStyle = isDark ? 'rgba(3, 3, 3, 0.078)' : 'rgba(250, 250, 250, 0.078)';
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      // 缓动更新鼠标相对坐标
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const relativeX = mouseRef.current.x / width - 0.5;
      const relativeY = mouseRef.current.y / height - 0.5;

      if (style === 'magazine') {
        // ------------------------------------------
        // RENDER: Gallery Magazine Drifting Particles
        // ------------------------------------------
        const pColor = isDark ? 'rgba(255, 255, 255, 0.28)' : 'rgba(23, 23, 23, 0.20)';
        const lColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(23, 23, 23, 0.06)';

        particles.forEach((p) => {
          const drawX = p.x + relativeX * 30;
          const drawY = p.y + relativeY * 30;

          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = pColor;
          ctx.fill();

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        });

        ctx.strokeStyle = lColor;
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particlesCount; i++) {
          for (let j = i + 1; j < particlesCount; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const drawXi = particles[i].x + relativeX * 30;
              const drawYi = particles[i].y + relativeY * 30;
              const drawXj = particles[j].x + relativeX * 30;
              const drawYj = particles[j].y + relativeY * 30;

              ctx.beginPath();
              ctx.moveTo(drawXi, drawYi);
              ctx.lineTo(drawXj, drawYj);
              ctx.stroke();
            }
          }
        }
      } else if (style === 'bladerunner') {
        // ------------------------------------------
        // RENDER: Blade Runner 2049 Mesa Dust & Holographic Horizon
        // ------------------------------------------
        waveTime += 0.01;

        // A. 绘制地平线 (Horizon Pulse)
        ctx.beginPath();
        ctx.strokeStyle = isDark ? 'rgba(224, 90, 16, 0.08)' : 'rgba(29, 17, 7, 0.06)';
        ctx.lineWidth = 1.5;
        for (let x = 0; x < width; x += 15) {
          const y = height * 0.78 + Math.sin(x * 0.004 + waveTime * 0.8) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // B. 绘制酸性橙尘埃粒子 / 沙尘暴红砂
        dustParticles.forEach((p) => {
          const drawX = p.x + relativeX * 45;
          const drawY = p.y + relativeY * 45;

          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
          
          ctx.fillStyle = isDark 
            ? `rgba(224, 90, 16, ${p.opacity})` 
            : `rgba(29, 17, 7, ${p.opacity * 0.75})`;
          
          if (isDark && p.radius > 2) {
            ctx.shadowColor = '#E05A10';
            ctx.shadowBlur = 4;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();

          // 粒子物理移动
          p.x += p.vx + Math.sin(waveTime + p.radius) * 0.05;
          p.y += p.vy;

          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        });
        ctx.shadowBlur = 0;

      } else {
        // ------------------------------------------
        // RENDER: HERMES 3D Dot Matrix Wave & 3D Matrix Code Rain
        // ------------------------------------------
        waveTime += 0.015;

        // A. 绘制经典的、有深浅层次的数据瀑布雨 (3D Matrix Rain)
        matrixColumns.forEach((col) => {
          ctx.font = `bold ${col.fontSize}px monospace`;

          const totalTrail = 14;
          for (let k = 0; k < totalTrail; k++) {
            const char = Math.random() > 0.45 ? '1' : '0';
            const charY = col.y - k * (col.fontSize + 2);

            if (charY < -20 || charY > height + 20) continue;

            // 顶部渐入消隐，防止顶端生成白光扎堆
            let topFade = 1;
            if (charY < 120) {
              topFade = Math.max(0, (charY - 15) / 105);
            }

            if (k === 0) {
              // ------------------------------------------
              // 终极精修：头部引领字符变绿 (或 Light 灰色)，彻底取消发光
              // 消除白色光晕干扰，能够清晰分辨是在跳动的 0 或 1 数字
              // ------------------------------------------
              ctx.shadowBlur = 0;
              ctx.shadowColor = 'transparent';
              
              const headOpacity = col.opacity * 2.25 * topFade;
              const finalHeadOpacity = Math.min(0.8, headOpacity); // 略微调亮以引领，但不突兀

              ctx.fillStyle = isDark 
                ? `rgba(34, 197, 94, ${finalHeadOpacity})` 
                : `rgba(23, 23, 23, ${finalHeadOpacity})`;
            } else {
              // 尾部渐变消影字符 (Dark 绿，Light 灰黑，随着尾迹和深度双重衰减)
              ctx.shadowBlur = 0;
              const alpha = col.opacity * (1 - k / totalTrail) * 0.85 * topFade;
              ctx.fillStyle = isDark 
                ? `rgba(34, 197, 94, ${alpha})` 
                : `rgba(0, 0, 0, ${alpha * 0.85})`;
            }

            ctx.fillText(char, col.x, charY);
          }
          ctx.shadowBlur = 0;

          // 字符雨向下流淌
          col.y += col.speed;

          // 越过底部后重置回顶部上方
          if (col.y - 180 > height) {
            col.y = -col.fontSize - 40;
            const newDepth = Math.random() * 0.85 + 0.15;
            col.speed = newDepth * 2.8 + 0.5;
            col.fontSize = Math.floor(newDepth * 8) + 8;
            col.opacity = newDepth * 0.30 + 0.08;
          }
        });

        // B. 绘制 3D 悬浮网格波浪 (重置 shadow 以防网格受污染)
        ctx.shadowBlur = isDark ? 2.5 : 0;
        ctx.shadowColor = isDark ? '#22c55e' : 'transparent';
        
        const dotColor = isDark ? 'rgba(34, 197, 94, 0.35)' : 'rgba(23, 23, 23, 0.22)';
        ctx.fillStyle = dotColor;

        const centerX = width / 2;
        const centerY = height / 2 + 50;
        const focalLength = 350;

        for (let r = 0; r < waveRows; r++) {
          for (let c = 0; c < waveCols; c++) {
            const x3d = (c - waveCols / 2) * dotSpacing;
            const z3d = (r - waveRows / 2) * dotSpacing + 200;

            const waveY1 = Math.sin(c * 0.2 + waveTime) * 35;
            const waveY2 = Math.cos(r * 0.25 + waveTime) * 35;
            const y3d = waveY1 + waveY2;

            const tiltedX = x3d + relativeX * 150;
            const tiltedY = y3d + relativeY * 150;

            if (z3d > 0) {
              const scale = focalLength / (focalLength + z3d);
              const screenX = centerX + tiltedX * scale;
              const screenY = centerY + tiltedY * scale;

              const radius = Math.max(0.8, 2.5 * scale);

              ctx.beginPath();
              ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
        ctx.shadowBlur = 0; // 重置
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, style]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 w-screen h-screen object-cover pointer-events-none block" 
    />
  );
};
