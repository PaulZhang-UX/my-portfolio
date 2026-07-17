'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/ThemeLanguageContext';
import { DynamicHeading } from './DynamicHeading';

const asciiArt = [
  "███████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗     ██╗   ██╗ ██████╗ ███╗   ██╗ ██████╗ ",
  "╚══███╔╝██║  ██║██╔══██╗████╗  ██║██╔════╝     ╚██╗ ██╔╝██╔═══██╗████╗  ██║██╔════╝ ",
  "  ███╔╝ ███████║███████║██╔██╗ ██║██║  ███╗     ╚████╔╝ ██║   ██║██╔██╗ ██║██║  ███╗",
  " ███╔╝  ██╔══██║██╔══██║██║╚██╗██║██║   ██║      ╚██╔╝  ██║   ██║██║╚██╗██║██║   ██║",
  "███████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝       ██║   ╚██████╔╝██║ ╚████║╚██████╔╝",
  "╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝        ╚═╝    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ "
];

export const Hero: React.FC = () => {
  const { theme, lang, style } = useApp();
  const [asciiLines, setAsciiLines] = useState<string[]>([]);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isFinishedLoading, setIsFinishedLoading] = useState(false);

  // 1. Dark 模式 ASCII 逐行打印效果与终端日志
  useEffect(() => {
    let asciiInterval: NodeJS.Timeout;
    let logInterval: NodeJS.Timeout;

    if (style !== 'hermes') {
      setAsciiLines([]);
      setTerminalLogs([]);
      setIsFinishedLoading(false);
      return;
    }

    let lineIndex = 0;
    setAsciiLines([]);
    setTerminalLogs([]);
    setIsFinishedLoading(false);

    asciiInterval = setInterval(() => {
      if (lineIndex < asciiArt.length) {
        setAsciiLines((prev) => [...prev, asciiArt[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(asciiInterval);
        printLogs();
      }
    }, 100);

    const logs = [
      "SYSTEM: INIT SUCCESSFUL",
      "CPU: ACTIVE // LOAD 14%",
      "PORT: 3000 // RUNNING",
      "STATUS: READY TO DEPLOY"
    ];

    const printLogs = () => {
      let logIndex = 0;
      logInterval = setInterval(() => {
        if (logIndex < logs.length) {
          setTerminalLogs((prev) => [...prev, logs[logIndex]]);
          logIndex++;
        } else {
          clearInterval(logInterval);
          setIsFinishedLoading(true);
        }
      }, 150);
    };

    return () => {
      clearInterval(asciiInterval);
      if (logInterval) clearInterval(logInterval);
    };
  }, [style]);

  // 2. 打印完全结束后，大字 ZHANG YONG 常驻高频“比特漏电流流沙”电荷闪烁 (Matrix ASCII Ripple)
  useEffect(() => {
    if (style !== 'hermes') return;
    if (!isFinishedLoading) return;

    const streamInterval = setInterval(() => {
      const glitched = asciiArt.map((line) => {
        const lineArr = line.split('');
        const len = lineArr.length;
        // 每次渲染随机将 3.5% 的实心方块转化为 0/1 粒子或空格，制造高频电荷颗粒流沙感
        for (let i = 0; i < len; i++) {
          if (lineArr[i] === '█') {
            if (Math.random() < 0.035) {
              lineArr[i] = Math.random() > 0.5 ? '1' : '0';
            }
          } else if (lineArr[i] === '╚') {
            if (Math.random() < 0.012) {
              lineArr[i] = '_';
            }
          }
        }
        return lineArr.join('');
      });
      setAsciiLines(glitched);
    }, 110); // 110ms 的高频律动

    return () => clearInterval(streamInterval);
  }, [style, isFinishedLoading]);

  const appleEase = [0.16, 1, 0.3, 1] as const;

  const lightTitleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const lightTitleItem = {
    hidden: { y: 100, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    show: { 
      y: 0, 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1.2, ease: appleEase }
    }
  };

  const isDark = theme === 'dark';

  return (
    <section className="snap-start h-[calc(100vh-4rem)] shrink-0 relative w-full flex items-center justify-center overflow-hidden px-6 md:px-12 select-none bg-transparent">
      
      {/* 扫描线叠加层 */}
      {(style === 'hermes' || style === 'bladerunner') && <div className="absolute inset-0 z-10 scanline-overlay"></div>}

      {/* 侧栏信息（仅画廊风格） */}
      {style === 'magazine' && (
        <div className="absolute inset-0 z-10 p-12 opacity-40 pointer-events-none flex flex-col justify-between font-mono text-[9px] tracking-widest text-neutral-500 dark:text-neutral-300">
          <div className="w-full flex justify-between">
            <span>PORTFOLIO // V2.0</span>
            <span>南京林业大学 // NAFU</span>
          </div>
          <div className="w-full flex justify-between border-t border-neutral-300/40 dark:border-neutral-800/40 pt-4">
            <span>INDEX.01 // HERO</span>
            <span>ZHANG YONG // CREATIVE DEVELOPER</span>
          </div>
        </div>
      )}

      {/* 核心内容区 */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center h-full">
        <AnimatePresence mode="wait">
          {style === 'magazine' ? (
            /* --------------------------------------------------------- */
            /* 1. 画廊杂志风格 */
            /* --------------------------------------------------------- */
            <motion.div
              key="magazine-hero"
              variants={lightTitleContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="w-full text-left"
            >
              <div className="overflow-hidden mb-2">
                <motion.h1 
                  variants={lightTitleItem} 
                  className="text-[10vw] md:text-[8vw] font-black leading-none tracking-tighter text-neutral-900 dark:text-white"
                >
                  DESIGN &
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6">
                <motion.h1 
                  variants={lightTitleItem} 
                  className="text-[10vw] md:text-[8vw] font-black leading-none tracking-tighter text-neutral-900 dark:text-white flex flex-col md:flex-row md:items-baseline gap-4"
                >
                  INTEGRATE.
                  <span className="text-xs md:text-sm font-mono tracking-widest font-bold text-neutral-500 dark:text-neutral-200 uppercase ml-2">
                    {lang === 'zh' ? '张勇 // 数字作品集 2026' : 'Zhang Yong // Portfolio 2026'}
                  </span>
                </motion.h1>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: appleEase }}
                className="max-w-2xl text-sm md:text-base text-neutral-600 dark:text-neutral-200 leading-relaxed font-normal font-sans"
              >
                {lang === 'zh' 
                  ? '立足于人机交互、AIGC 视觉资产设计与体验冗余量化算法，以严谨的数据逻辑与极简美学，打造顺滑、生动的个人数字级 product 体验。'
                  : 'Grounded in HCI, AIGC visual assets, and UX redundancy algorithms, delivering fluid and vivid digital product experiences with rigorous logic and minimalist aesthetics.'
                }
              </motion.p>
            </motion.div>
          ) : style === 'bladerunner' ? (
            /* --------------------------------------------------------- */
            /* 2. 银翼杀手 2049 专属全息故障首屏 */
            /* --------------------------------------------------------- */
            <motion.div
              key="bladerunner-hero"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, ease: appleEase }}
              className="w-full text-left font-mono space-y-6"
            >
              <div className="space-y-1">
                <span className="text-[#E05A10] text-[10px] tracking-widest font-bold block drop-shadow-[0_0_5px_rgba(224,90,16,0.3)]">
                  // DEPLOY_SECTOR: MESA_DESERT // 2049
                </span>
                
                {/* 动态色差标题 */}
                <DynamicHeading 
                  text="TEARS IN RAIN" 
                  as="h1" 
                  className="text-[8vw] md:text-[6.5vw] font-black tracking-tighter leading-none" 
                />
              </div>

              <div className={`border border-dashed border-[#E05A10]/30 p-6 max-w-2xl backdrop-blur-sm relative rounded-sm transition-colors duration-500 ${
                isDark ? 'bg-[#03050C]/50 text-[#F5EFEB]/80' : 'bg-[#E6CEB8]/60 text-[#1D1107]/80'
              }`}>
                {/* 装饰边角 */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E05A10]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#E05A10]" />
                
                <p className="text-xs md:text-sm leading-relaxed font-light font-mono">
                  {lang === 'zh'
                    ? '立足于人机交互、AIGC 视觉资产与体验冗余算法。在橙色荒漠的余晖与弥漫的漫天尘埃下，以粗野主义框架与偏振色差抖动，重绘全息投影交互的终极物理边界。'
                    : 'Grounded in HCI, AIGC visual assets, and UX redundancy algorithms. Remapping the ultimate physical boundaries of holographic interaction under the heavy dust storms of the Mesa Desert.'
                  }
                </p>
              </div>

              <div className="text-[9px] text-[#E05A10]/60 space-y-0.5">
                <div>&gt; SCANNING_RETINA... SUCCESS</div>
                <div>&gt; REPLICANT_MODEL_DETECTED: NEXUS-9 // SERIAL_K_404</div>
              </div>
            </motion.div>
          ) : (
            /* --------------------------------------------------------- */
            /* 3. HERMES (极客) 终端风格 */
            /* --------------------------------------------------------- */
            <motion.div
              key="hermes-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="w-full font-mono text-left overflow-x-auto no-scrollbar"
            >
              {/* ASCII Art 拼字展示 (常驻比特漏电电荷流沙闪烁效果) */}
              <div className={`mb-8 min-h-[140px] text-[1.4vw] md:text-[0.9vw] leading-tight select-none whitespace-pre font-mono font-bold transition-colors duration-300 ${
                theme === 'dark' ? 'text-green-500' : 'text-neutral-900'
              }`}>
                {asciiLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
                {asciiLines.length < asciiArt.length && (
                  <span className="animate-pulse">_</span>
                )}
              </div>

              {/* 终端实时日志 */}
              <div className="space-y-1 text-xs md:text-sm max-w-2xl select-text">
                <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-neutral-200' : 'text-neutral-850'
                }`}>
                  <span className={theme === 'dark' ? 'text-green-500 font-bold' : 'text-neutral-950 font-black'}>yong@nafu:~$</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={`overflow-hidden whitespace-nowrap border-r-2 pr-1 font-bold transition-colors duration-300 ${
                      theme === 'dark' ? 'border-green-500' : 'border-neutral-900'
                    }`}
                  >
                    ./init_portfolio.sh --verbose
                  </motion.span>
                </div>

                {terminalLogs.map((log, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-neutral-500">[{new Date().toLocaleTimeString()}]</span>
                    <span className={
                      log && (log.includes("SUCCESSFUL") || log.includes("READY")) 
                        ? (theme === 'dark' ? "text-green-400 font-bold" : "text-neutral-950 font-black") 
                        : (theme === 'dark' ? "text-neutral-200" : "text-neutral-800")
                    }>
                      {log}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* 额外说明 */}
              {terminalLogs.length >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: appleEase }}
                  className={`mt-10 max-w-xl text-xs md:text-sm border-l pl-4 py-1 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-neutral-200 border-neutral-800' : 'text-neutral-800 border-neutral-300'
                  }`}
                >
                  <p className="leading-relaxed">
                    {lang === 'zh'
                      ? '本终端是跨学科个人数字资产展示空间。点击右上角风格返回现代排版，或者向下滚动获取项目包列表。'
                      : 'This terminal serves as a cross-disciplinary portfolio space. Toggle style to restore layout, or scroll down to explore project packages.'
                    }
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 页面底部滚动引导 */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center font-mono text-[9px] tracking-widest text-neutral-400 select-none pointer-events-none"
      >
        <span>SCROLL TO EXPLORE</span>
        <svg className="w-4 h-4 mt-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};
