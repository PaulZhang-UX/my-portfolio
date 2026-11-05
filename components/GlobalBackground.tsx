'use client';

import React, { useEffect, useRef } from 'react';

interface GlobalBackgroundProps {
  activeStyle: 'hermes' | 'magazine' | null;
  theme: 'light' | 'dark';
}

export const GlobalBackground: React.FC<GlobalBackgroundProps> = ({ activeStyle, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    if (activeStyle !== 'hermes') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let drops: number[] = [];
    const fontSize = 16;
    let columns = 0;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * (canvas.height / fontSize);
      }
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';

    let lastDrawTime = Date.now();
    const fps = 20; 
    const interval = 1000 / fps;
    let lightMix = themeRef.current === 'light' ? 1 : 0;

    const mixChannel = (dark: number, light: number, amount: number) =>
      Math.round(dark + (light - dark) * amount);

    const draw = () => {
      animationFrameId = requestAnimationFrame(draw);

      const now = Date.now();
      const delta = now - lastDrawTime;

      if (delta > interval) {
        lastDrawTime = now - (delta % interval);

        const targetLightMix = themeRef.current === 'light' ? 1 : 0;
        lightMix += (targetLightMix - lightMix) * 0.08;

        // Trails crossfade between dark and light instead of resetting the canvas.
        const trail = mixChannel(0, 255, lightMix);
        ctx.fillStyle = `rgba(${trail}, ${trail}, ${trail}, 0.12)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = charset.charAt(Math.floor(Math.random() * charset.length));
          
          const isHead = Math.random() > 0.95;
          const darkColor = isHead ? [74, 222, 128] : [21, 128, 61];
          const lightColor = isHead ? [0, 0, 0] : [38, 38, 38];
          ctx.fillStyle = `rgb(${mixChannel(darkColor[0], lightColor[0], lightMix)} ${mixChannel(darkColor[1], lightColor[1], lightMix)} ${mixChannel(darkColor[2], lightColor[2], lightMix)})`;
          
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
          
          drops[i]++;
        }
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', initCanvas);
    };
  }, [activeStyle]);

  if (activeStyle !== 'hermes') return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden transition-colors duration-700 ease-out"
      style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#020202' }}
    >
      <canvas
        ref={canvasRef}
        // Increased opacity from 60 to 85 to make it about ~25% brighter
        className="w-full h-full opacity-85 block"
      />
    </div>
  );
};
