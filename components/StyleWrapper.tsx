'use client';

import React from 'react';
import { GlobalBackground } from './GlobalBackground';
import { MatrixScrollHint } from './MatrixScrollHint';
import { RatchetScroll } from './RatchetScroll';
import { useApp } from '../context/ThemeLanguageContext';

interface StyleWrapperProps {
  children: React.ReactNode;
  activeStyle: 'hermes' | 'magazine' | null;
}

export const StyleWrapper = ({ children, activeStyle }: StyleWrapperProps) => {
  const { theme } = useApp();

  if (activeStyle === 'hermes') {
    return (
      <>
        {/* Isolated Matrix Background Layer */}
        <GlobalBackground activeStyle={activeStyle} theme={theme} />
        <RatchetScroll enabled />
        
        {/* Retro Convex CRT Monitor Viewport */}
        <div className="matrix-theme-transition fixed inset-0 flex items-stretch md:items-center justify-center pt-[4.5rem] md:pt-20 pb-2 md:pb-8 px-2 md:px-4 pointer-events-none z-10 font-hacker-zh font-light">
          
          {/* The Physical Monitor Chassis (Outer Shell) 
              Restored thick bezel (p-6 md:p-10) 
              Forced 4:3 aspect ratio and narrower width */}
          <div
            className="relative w-full h-full md:h-auto md:max-w-5xl md:aspect-[4/3] md:max-h-[85vh] rounded-[24px] md:rounded-[40px] flex flex-col p-2.5 sm:p-4 md:p-10 pointer-events-auto border-t border-b mx-auto"
            style={{
              backgroundColor: 'var(--matrix-chassis-color)',
              borderColor: 'var(--matrix-chassis-border)',
              boxShadow: 'var(--matrix-chassis-shadow)',
            }}
          >
            
            {/* The Convex Glass Screen */}
            <div className="w-full flex-1 relative overflow-hidden rounded-[18px] md:rounded-[30px]"
                 style={{ 
                   backgroundColor: 'var(--matrix-screen-color)',
                   boxShadow: 'var(--matrix-screen-shadow)',
                   backdropFilter: 'blur(4px)',
                 }}>
              
              {/* Heavy Vignette */}
              <div className="absolute inset-0 pointer-events-none z-[45] rounded-[18px] md:rounded-[30px]" 
                   style={{
                     background: 'var(--matrix-vignette)'
                   }} 
              />

              {/* Scanlines Overlay */}
              <div className="matrix-scanline-overlay absolute inset-0 pointer-events-none z-[40]"
                   style={{
                     backgroundImage: 'var(--matrix-scanlines)',
                     backgroundSize: '100% 3px, 3px 100%'
                   }} 
              />
              
              {/* Convex Glare/Reflection */}
              <div className="absolute inset-0 pointer-events-none z-[41] rounded-[18px] md:rounded-[30px] opacity-100"
                   style={{
                     background: 'var(--matrix-glare-primary)'
                   }} 
              />
              <div className="absolute inset-0 pointer-events-none z-[41] rounded-[18px] md:rounded-[30px] opacity-100 mix-blend-screen"
                   style={{
                     background: 'var(--matrix-glare-secondary)'
                   }} 
              />

              {/* The Actual UI Content */}
              <div className="w-full h-full flex flex-col relative z-20 overflow-hidden text-[var(--matrix-ink-color)]">
                
                {/* Internal Terminal Header */}
                <div
                  className="h-8 md:h-10 w-full border-b flex items-center justify-between px-3 md:px-6 select-none shrink-0"
                  style={{
                    borderColor: 'rgb(var(--matrix-ink-rgb) / 0.3)',
                    background: 'var(--matrix-header-gradient)',
                  }}
                >
                  <div className="flex items-center gap-1.5 md:gap-3 text-[var(--matrix-ink-color)] text-[8px] sm:text-[10px] md:text-xs font-hacker-en tracking-[0.12em] md:tracking-widest font-normal opacity-80">
                    <span className="animate-pulse">_</span>
                    <span>SYSTEM // ZHANG-YONG // PORTFOLIO</span>
                  </div>
                  <div className="matrix-text-70 text-[8px] md:text-[10px] font-hacker-en tracking-wider md:tracking-widest">
                    V 2.0.26
                  </div>
                </div>

                {/* Scrollable Content Area */}
                <div
                  data-lenis-prevent
                  data-ratchet-scroll
                  className="flex-1 w-full overflow-y-auto overflow-x-hidden overscroll-contain relative p-3 sm:p-4 md:p-10 font-light"
                  style={{ filter: 'drop-shadow(0 0 5px var(--matrix-glow-shadow))' }}
                >
                  {children}
                </div>

              </div>

              {/* Persistent scroll hint: macOS auto-hides overlay scrollbars. */}
              <MatrixScrollHint />
            </div>

            {/* Hardware Control Panel (Bottom Bezel) */}
            <div className="w-full h-6 md:h-8 mt-2 md:mt-4 shrink-0 flex items-center justify-between px-3 md:px-6 opacity-80">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-10 sm:w-12 md:w-16 h-1 md:h-1.5 rounded-full" style={{ backgroundColor: 'var(--matrix-vent-color)', boxShadow: 'var(--matrix-vent-shadow)' }}></div>
                <div className="w-10 sm:w-12 md:w-16 h-1 md:h-1.5 rounded-full" style={{ backgroundColor: 'var(--matrix-vent-color)', boxShadow: 'var(--matrix-vent-shadow)' }}></div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                {/* Glowing Green LED Power Indicator */}
                <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e,inset_0_1px_1px_rgba(255,255,255,0.8)]"></div>
                {/* Power Button Label */}
                <span className="text-[9px] text-[#888] font-hacker-en tracking-[0.2em] uppercase">
                  POWER
                </span>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }

  if (activeStyle === 'magazine') {
    return (
      <div className="magazine-scroll w-full min-h-screen bg-[#fbfbfd] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-500 relative z-10">
        <div className="magazine-shell z-[1] mx-auto w-full md:w-[60%] min-h-screen relative overflow-hidden bg-white dark:bg-[#0b0b0d] transition-colors duration-500">
          {children}
        </div>
      </div>
    );
  }

  return null;
};
