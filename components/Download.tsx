'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/ThemeLanguageContext';
import { DynamicHeading } from './DynamicHeading';
import { playDownloadProgress, playDownloadComplete } from '../utils/audioSynth';

export const Download: React.FC = () => {
  const { theme, lang, style } = useApp();
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // 触发下载完成悦耳琶音铃声
          playDownloadComplete(style);
          setTimeout(() => {
            setIsDownloading(false);
            triggerDownload();
          }, 400);
          return 100;
        }
        // 触发下载中步进微小 Beep 声
        playDownloadProgress(style);
        return prev + 8;
      });
    }, 80);
  };

  const triggerDownload = () => {
    const content = "%PDF-1.4 ... (Zhang Yong Resume & Portfolio PDF Placeholder)";
    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Zhang_Yong_Portfolio_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const appleEase = [0.16, 1, 0.3, 1] as const;

  // 汉化与双语内容数据打包
  const doubleLang = {
    zh: {
      reqFile: "请求文件: 张勇个人简历_离线作品集.PDF",
      payload: "数据负载: 4.86 MB // 传输协议: 点对点加密 (P2P)",
      encrypt: "加密校验: RETINA_SHA256 // 验证通过",
      progress: "同步进度",
      statusReady: "当前状态: 就绪 // 等待指令",
      statusActive: "正在同步数据包至 PDF... 请稍候",
      execBtn: "[ 执行: 导出离线简历.PDF ]",
      syncingBtn: "同步传输中...",
      
      hReqFile: "请求文件: ZHANG_YONG_RESUME.PDF",
      hPayload: "文件大小: 4.86 MB // 协议: 本地数据库 (DB)",
      hEncrypt: "信息摘要: 5C5D8B6F8E9C2A4D7F0E1B3A9C8D7E6F",
      hProgress: "传输进度",
      hStatusReady: "状态: 就绪 // 等待指令",
      hStatusActive: "正在读取数据物理扇区... 载入中",
      hExecBtn: "[ 执行: 提取简历档案.PDF ]",
    },
    en: {
      reqFile: "REQUEST_SOURCE: ZHANG_YONG_OFFLINE_PORTFOLIO.PDF",
      payload: "DATA_PAYLOAD: 4.86 MB // PROTOCOL: P2P_SECURE",
      encrypt: "ENCRYPTION: RETINA_SHA256 // VERIFIED",
      progress: "SYNC_PROGRESS",
      statusReady: "STATUS: READY // STANDBY_FOR_RETINA_CONFIRMATION",
      statusActive: "DUMPING_MEMORY_BLOCKS_TO_PDF... IN_PROGRESS",
      execBtn: "[ SYNC: EXPORT_DATA.PDF ]",
      syncingBtn: "SYNCING ARCHIVE...",
      
      hReqFile: "REQUESTED_FILE: ZHANG_YONG_RESUME_AND_DATA.PDF",
      hPayload: "FILE_SIZE: 4.86 MB // SOURCE: LOCAL_STORAGE_DB",
      hEncrypt: "HASH_MD5: 5C5D8B6F8E9C2A4D7F0E1B3A9C8D7E6F",
      hProgress: "PROGRESS",
      hStatusReady: "STATUS: READY // STANDBY_FOR_INSTRUCTION",
      hStatusActive: "FETCHING_DATA_BLOCKS_FROM_NODES... LOADING",
      hExecBtn: "[ EXEC: DOWNLOAD_RESUME ]",
    }
  };

  const textDict = doubleLang[lang];

  // 计算等宽进度条
  const totalBlocks = 20;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  const progressBar = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

  const isDark = theme === 'dark';

  return (
    <section className="snap-start h-[calc(100vh-4rem)] shrink-0 flex items-center justify-center py-0 px-6 md:px-12 w-full max-w-7xl mx-auto border-t border-neutral-200/30 dark:border-neutral-800/30 bladerunner:border-[#E05A10]/30 relative bg-transparent">
      
      {style === 'magazine' ? (
        /* 1. 画廊杂志风格下载卡片 */
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase }}
          className={`w-full max-w-3xl border p-12 md:p-16 text-center rounded-sm space-y-8 transition-colors duration-500 ${
            isDark
              ? 'bg-[#0F0F0F] border-neutral-800 text-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
              : 'bg-white border-neutral-200/60 text-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.02)]'
          }`}
        >
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-neutral-400 dark:text-neutral-500 block">// DOWNLOAD.04</span>
            <DynamicHeading 
              text={lang === 'zh' ? '获取完整作品集与简历' : 'GET COMPLETE RESUME & PORTFOLIO'} 
              as="h2"
              className="text-3xl font-black tracking-tight uppercase text-neutral-900 dark:text-neutral-100"
            />
            <p className="text-sm text-neutral-555 dark:text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
              {lang === 'zh' 
                ? '下载高保真离线 PDF 展示文档，包含完整的眼动实验数据、AI 虚拟试衣 PRD 报告与体验冗余评估数学算法。'
                : 'Download high-fidelity offline PDF, including eye-tracking datasets, virtual fitting PRDs, and algorithm formulas.'
              }
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-4 font-mono text-xs tracking-widest uppercase select-none cursor-pointer min-w-[240px] flex items-center justify-center gap-2 rounded-sm transition-colors duration-300 ${
                isDark
                  ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  : 'bg-neutral-900 text-neutral-100 hover:bg-neutral-800'
              }`}
            >
              {isDownloading ? (
                <span>DOWNLOADING {Math.min(progress, 100)}%</span>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>{lang === 'zh' ? '离线文档下载 .PDF' : 'DOWNLOAD OFFLINE .PDF'}</span>
                </>
              )}
            </motion.button>
            
            <AnimatePresence>
              {isDownloading && (
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "240px" }}
                  exit={{ opacity: 0 }}
                  className={`h-[3px] overflow-hidden mt-1 ${isDark ? 'bg-neutral-800' : 'bg-neutral-250'}`}
                >
                  <motion.div 
                    className={`h-full ${isDark ? 'bg-neutral-200' : 'bg-neutral-900'}`} 
                    animate={{ width: `${progress}%` }} 
                    transition={{ ease: "easeOut", duration: 0.1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : style === 'bladerunner' ? (
        /* 2. 银翼杀手风格：自适应双色全息数据导出器 (已中文化) */
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`w-full max-w-3xl font-mono border border-dashed border-[#E05A10]/40 p-8 md:p-12 relative rounded-sm text-xs backdrop-blur-sm transition-all duration-500 ${
            isDark 
              ? 'bg-[#03050C]/60 text-[#F5EFEB]/90 shadow-[0_20px_50px_rgba(224,90,16,0.03)]' 
              : 'bg-[#E6CEB8]/70 text-[#1D1107] shadow-[0_20px_50px_rgba(29,17,7,0.01)]'
          }`}
        >
          <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider border border-dashed border-[#E05A10]/40 transition-colors duration-500 ${
            isDark ? 'bg-[#03050C] text-[#E05A10]' : 'bg-[#E6CEB8] text-[#1D1107]'
          }`}>
            + REPLICANT_EXPORT_PORTAL_v1.2 +
          </div>

          <div className={`space-y-2 font-mono transition-colors duration-500 ${
            isDark ? 'text-[#F5EFEB]/60' : 'text-[#1D1107]/60'
          }`}>
            <div>&gt; {textDict.reqFile}</div>
            <div>&gt; {textDict.payload}</div>
            <div>&gt; {textDict.encrypt}</div>
          </div>

          {/* 进度控制面板 */}
          <div className={`border-t border-b py-4 my-6 space-y-2 font-mono transition-colors duration-500 ${
            isDark ? 'border-[#E05A10]/20 text-[#F5EFEB]/80' : 'border-[#1D1107]/20 text-[#1D1107]/80'
          }`}>
            <div className="flex justify-between">
              <span>{textDict.progress}: [{progressBar}]</span>
              <span className={progress >= 100 ? "text-[#E05A10] font-bold" : (isDark ? "text-[#F5EFEB]/50" : "text-[#1D1107]/50")}>
                {Math.min(progress, 100)}%
              </span>
            </div>
            <div className={`text-[10px] transition-colors duration-500 ${
              isDark ? 'text-[#E05A10]/60' : 'text-[#1D1107]/60 font-bold'
            }`}>
              STATUS: {isDownloading 
                ? textDict.statusActive 
                : textDict.statusReady
              }
            </div>
          </div>

          <div className="flex justify-start">
            <motion.button
              onClick={handleDownload}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 font-mono tracking-widest uppercase select-none cursor-pointer flex items-center gap-2 transition-all duration-300 bg-[#E05A10] text-[#03050C] hover:bg-[#ff6c1c] font-bold shadow-[0_0_15px_rgba(224,90,16,0.4)] rounded-sm"
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin">⧗</span>
                  <span>{lang === 'zh' ? '同步数据包中...' : 'SYNCING ARCHIVE...'}</span>
                </>
              ) : (
                <>
                  <span>{textDict.execBtn}</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      ) : (
        /* 3. HERMES (极客) 终端风格 BIOS 下载器 (已中文化) */
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`w-full max-w-3xl font-mono border p-8 md:p-12 relative rounded-sm text-xs transition-colors duration-500 ${
            isDark
              ? 'border-neutral-800 bg-neutral-950 text-neutral-300'
              : 'border-neutral-250 bg-neutral-50 text-neutral-700 font-bold'
          }`}
        >
          <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider transition-colors duration-500 ${
            isDark ? 'bg-[#0A0A0A] text-green-500' : 'bg-white text-neutral-950 border'
          }`}>
            + HERMES_FILE_RETRIEVER_V1.0 +
          </div>

          <div className="space-y-2 text-neutral-550 font-mono">
            <div>&gt; {textDict.hReqFile}</div>
            <div>&gt; {textDict.hPayload}</div>
            <div>&gt; {textDict.hEncrypt}</div>
          </div>

          {/* 进度控制台 */}
          <div className={`border-t border-b py-4 my-6 space-y-2 font-mono transition-colors duration-500 ${
            isDark ? 'border-neutral-900' : 'border-neutral-200'
          }`}>
            <div className="flex justify-between">
              <span>{textDict.hProgress}: [{progressBar}]</span>
              <span className={progress >= 100 ? (isDark ? "text-green-500" : "text-black font-extrabold") : "text-neutral-500"}>
                {Math.min(progress, 100)}%
              </span>
            </div>
            <div className="text-[10px] text-neutral-500">
              STATUS: {isDownloading 
                ? textDict.hStatusActive 
                : textDict.hStatusReady
              }
            </div>
          </div>

          <div className="flex justify-start">
            <motion.button
              onClick={handleDownload}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-3 border border-dashed font-mono tracking-widest uppercase select-none cursor-pointer flex items-center gap-2 transition-colors duration-300 ${
                isDark
                  ? 'border-red-900/60 text-red-400 bg-red-950/10 hover:bg-red-950/20'
                  : 'border-neutral-300 text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin">⧗</span>
                  <span>{lang === 'zh' ? '正在执行下载...' : 'EXECUTING DOWNLOAD...'}</span>
                </>
              ) : (
                <>
                  <span>{textDict.hExecBtn}</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      )}

    </section>
  );
};
