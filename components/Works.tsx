'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/ThemeLanguageContext';
import { DynamicHeading } from './DynamicHeading';

interface Project {
  id: string;
  num: string;
  titleZh: string;
  titleEn: string;
  tagsZh: string[];
  tagsEn: string[];
  descZh: string;
  descEn: string;
  svgIcon: React.ReactNode;
  metaInfo: { key: string; val: string }[];
}

export const Works: React.FC = () => {
  const { theme, lang, style } = useApp();
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const isDark = theme === 'dark';

  // SVG 1: DCS
  const DcsEyeTrackingSvg = () => (
    <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (isDark ? '#0F0F0F' : '#F5F5F5')} />
      <g stroke={style === 'bladerunner' ? (isDark ? '#E05A10/20' : '#1D1107/15') : (isDark ? '#222' : '#E5E5E5')} strokeWidth="1">
        <line x1="0" y1="40" x2="400" y2="40" />
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="120" x2="400" y2="120" />
        <line x1="0" y1="160" x2="400" y2="160" />
        <line x1="0" y1="200" x2="400" y2="200" />
        <line x1="80" y1="0" x2="80" y2="240" />
        <line x1="160" y1="0" x2="160" y2="240" />
        <line x1="240" y1="0" x2="240" y2="240" />
        <line x1="320" y1="0" x2="320" y2="240" />
      </g>
      <rect x="20" y="55" width="120" height="110" rx="3" stroke={style === 'bladerunner' ? '#E05A10/40' : (theme === 'dark' ? '#444' : '#CCC')} fill="none" strokeWidth="1.5" />
      <rect x="160" y="55" width="220" height="50" rx="3" stroke={style === 'bladerunner' ? '#E05A10/40' : (theme === 'dark' ? '#444' : '#CCC')} fill="none" strokeWidth="1.5" />
      <rect x="160" y="115" width="100" height="50" rx="3" stroke={style === 'bladerunner' ? '#E05A10/40' : (theme === 'dark' ? '#444' : '#CCC')} fill="none" strokeWidth="1.5" />
      <rect x="280" y="115" width="100" height="50" rx="3" stroke={style === 'bladerunner' ? '#E05A10/40' : (theme === 'dark' ? '#444' : '#CCC')} fill="none" strokeWidth="1.5" />
      <defs>
        <radialGradient id="heat-1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="heat-2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9"/>
          <stop offset="40%" stopColor="#EC4899" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <path d="M80 110 L210 80 L210 140 L330 140" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="80" cy="110" r="45" fill="url(#heat-1)" />
      <circle cx="210" cy="80" r="30" fill="url(#heat-2)" />
      <circle cx="210" cy="140" r="20" fill="url(#heat-1)" />
      <circle cx="330" cy="140" r="35" fill="url(#heat-2)" />
      <circle cx="80" cy="110" r="8" fill={theme === 'dark' ? '#FFF' : '#171717'} />
      <text x="80" y="113" fill={theme === 'dark' ? '#000' : '#FFF'} fontSize="9" textAnchor="middle" fontWeight="bold">1</text>
      <circle cx="210" cy="80" r="8" fill={theme === 'dark' ? '#FFF' : '#171717'} />
      <text x="210" y="83" fill={theme === 'dark' ? '#000' : '#FFF'} fontSize="9" textAnchor="middle" fontWeight="bold">2</text>
      <circle cx="210" cy="140" r="8" fill={theme === 'dark' ? '#FFF' : '#171717'} />
      <text x="210" y="143" fill={theme === 'dark' ? '#000' : '#FFF'} fontSize="9" textAnchor="middle" fontWeight="bold">3</text>
      <circle cx="330" cy="140" r="8" fill={theme === 'dark' ? '#FFF' : '#171717'} />
      <text x="330" y="143" fill={theme === 'dark' ? '#000' : '#FFF'} fontSize="9" textAnchor="middle" fontWeight="bold">4</text>
    </svg>
  );

  // SVG 2: AI Virtual Fitting
  const AiFittingSvg = () => (
    <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (isDark ? '#0F0F0F' : '#F5F5F5')} />
      <path d="M 0 120 L 400 120 M 200 0 L 200 240" stroke={style === 'bladerunner' ? (isDark ? '#E05A10/20' : '#1D1107/15') : (theme === 'dark' ? '#222' : '#E5E5E5')} strokeWidth="1" />
      <circle cx="200" cy="120" r="80" stroke={style === 'bladerunner' ? (isDark ? '#E05A10/10' : '#1c1c1c/10') : (theme === 'dark' ? '#1c1c1c/10' : '#ECECEC')} strokeWidth="1.5" />
      <path 
        d="M200 45 C205 45 208 49 208 55 C208 61 204 65 200 65 C196 65 192 61 192 55 C192 49 195 45 200 45 Z 
           M198 65 L202 65 L204 75 L196 75 Z
           M180 75 C190 75 195 72 200 72 C205 72 210 75 220 75 C230 75 232 90 230 105 L225 155 L218 195 L200 195 L182 195 L175 155 L170 105 C168 90 170 75 180 75 Z" 
        fill="none" 
        stroke={style === 'bladerunner' ? '#E05A10/40' : (theme === 'dark' ? '#444' : '#CCCCCC')} 
        strokeWidth="1.5" 
      />
      <rect x="155" y="85" width="90" height="70" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="1" strokeDasharray="4 2" />
      <line x1="140" y1="120" x2="260" y2="120" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#F59E0B')} strokeWidth="1.5" />
      <circle cx="155" cy="120" r="3" fill={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#F59E0B')} />
      <circle cx="245" cy="120" r="3" fill={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#F59E0B')} />
      <g transform="translate(10, 0)" fontSize="8" fontFamily="monospace" fill={theme === 'dark' ? '#AAA' : '#666'}>
        <rect x="280" y="30" width="90" height="20" rx="2" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#151515' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#333' : '#DDD')} />
        <text x="325" y="42" textAnchor="middle" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : ''}>IMAGE_GEN.PY</text>
        <rect x="280" y="70" width="90" height="20" rx="2" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#151515' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#333' : '#DDD')} />
        <text x="325" y="82" textAnchor="middle" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : ''}>LATENT_REFINE</text>
        <rect x="280" y="110" width="90" height="20" rx="2" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#151515' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#333' : '#DDD')} />
        <text x="325" y="122" textAnchor="middle" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : ''}>PRD_METRICS</text>
        <path d="M325 50 L325 70 M325 90 L325 110" stroke={theme === 'dark' ? '#333' : '#CCC'} strokeWidth="1" />
      </g>
    </svg>
  );

  // SVG 3: UX Redundancy
  const UxRedundancySvg = () => (
    <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (isDark ? '#0F0F0F' : '#F5F5F5')} />
      <g stroke={style === 'bladerunner' ? (isDark ? '#E05A10/10' : '#1D1107/8') : (theme === 'dark' ? '#151515' : '#EBEBEB')} strokeWidth="0.5">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 10} x2="400" y2={i * 10} />
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="240" />
        ))}
      </g>
      <g transform="translate(10, 0)">
        <rect x="30" y="100" width="80" height="40" rx="3" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#1C1C1C' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#444' : '#CCC')} strokeWidth="1.5" />
        <text x="70" y="124" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : (theme === 'dark' ? '#FFF' : '#171717')} fontSize="9" fontFamily="monospace" textAnchor="middle">Node_A (Input)</text>
        <rect x="160" y="50" width="80" height="40" rx="3" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#1C1C1C' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#444' : '#CCC')} strokeWidth="1.5" />
        <text x="200" y="74" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : (theme === 'dark' ? '#FFF' : '#171717')} fontSize="9" fontFamily="monospace" textAnchor="middle">Node_B (Diff)</text>
        <rect x="160" y="150" width="80" height="40" rx="3" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#1C1C1C' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#444' : '#CCC')} strokeWidth="1.5" />
        <text x="200" y="174" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : (theme === 'dark' ? '#FFF' : '#171717')} fontSize="9" fontFamily="monospace" textAnchor="middle">Node_C (Weight)</text>
        <rect x="290" y="100" width="80" height="40" rx="3" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (theme === 'dark' ? '#1C1C1C' : '#FFF')} stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="1.5" />
        <text x="330" y="124" fill={style === 'bladerunner' ? (isDark ? '#F5EFEB' : '#1D1107') : (theme === 'dark' ? '#FFF' : '#171717')} fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Out_Redun</text>
        <path d="M110 120 C135 120 135 70 160 70" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#666')} strokeWidth="1.5" />
        <path d="M110 120 C135 120 135 170 160 170" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#666')} strokeWidth="1.5" />
        <path d="M240 70 C265 70 265 120 290 120" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#666')} strokeWidth="1.5" />
        <path d="M240 170 C265 170 265 120 290 120" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#666')} strokeWidth="1.5" />
      </g>
      <path 
        d="M20 210 L100 205 L180 220 L260 195 L340 215 L380 200" 
        stroke={style === 'bladerunner' ? 'rgba(224,90,16,0.3)' : (theme === 'dark' ? 'rgba(16,185,129,0.3)' : 'rgba(23,23,23,0.1)')} 
        strokeWidth="2" 
        fill="none" 
      />
      <path 
        d="M20 210 L100 205 L180 220 L260 195 L340 215 L380 200 L380 230 L20 230 Z" 
        fill={style === 'bladerunner' ? 'rgba(224,90,16,0.05)' : (theme === 'dark' ? 'rgba(16,185,129,0.05)' : 'rgba(23,23,23,0.02)')} 
      />
    </svg>
  );

  // SVG 4: 林业机械孪生
  const ForestryTwinSvg = () => (
    <svg className="w-full h-full" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill={style === 'bladerunner' ? (isDark ? '#03050C' : '#E6CEB8') : (isDark ? '#0F0F0F' : '#F5F5F5')} />
      <g stroke={style === 'bladerunner' ? (isDark ? '#E05A10/20' : '#1D1107/15') : (theme === 'dark' ? '#222' : '#E5E5E5')} strokeWidth="1">
        <line x1="0" y1="40" x2="400" y2="40" />
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="120" x2="400" y2="120" />
        <line x1="0" y1="160" x2="400" y2="160" />
        <line x1="0" y1="200" x2="400" y2="200" />
        <line x1="80" y1="0" x2="80" y2="240" />
        <line x1="160" y1="0" x2="160" y2="240" />
        <line x1="240" y1="0" x2="240" y2="240" />
        <line x1="320" y1="0" x2="320" y2="240" />
      </g>
      <path d="M 50 210 L 140 120 L 250 120 L 310 170" stroke={style === 'bladerunner' ? '#E05A10/30' : (theme === 'dark' ? '#444' : '#CCC')} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 50 210 L 140 120 L 250 120 L 310 170" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="140" cy="120" r="7" fill={theme === 'dark' ? '#FFF' : '#171717'} />
      <circle cx="140" cy="120" r="3" fill={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#FFF')} />
      <circle cx="250" cy="120" r="7" fill={theme === 'dark' ? '#FFF' : '#171717'} />
      <circle cx="250" cy="120" r="3" fill={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#FFF')} />
      <circle cx="310" cy="170" r="24" stroke={style === 'bladerunner' ? '#E05A10/40' : (theme === 'dark' ? '#333' : '#DDD')} strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="310" cy="170" r="16" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="1.5" />
      <circle cx="310" cy="170" r="38" fill="rgba(224, 90, 16, 0.15)" stroke="rgba(224, 90, 16, 0.35)" strokeWidth="1" />
      <path d="M 60 80 A 35 35 0 0 1 140 80" stroke={style === 'bladerunner' ? '#E05A10/20' : (theme === 'dark' ? '#333' : '#DDD')} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 60 80 A 35 35 0 0 1 115 60" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#F59E0B')} strokeWidth="3" strokeLinecap="round" fill="none" />
      <text x="100" y="93" fill={theme === 'dark' ? '#888' : '#666'} fontSize="8" fontFamily="monospace" textAnchor="middle">ENGINE_RPM</text>
      <line x1="250" y1="50" x2="290" y2="90" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="1" strokeDasharray="2 1" />
      <circle cx="270" cy="70" r="10" stroke={style === 'bladerunner' ? '#E05A10' : (theme === 'dark' ? '#10B981' : '#171717')} strokeWidth="1" />
    </svg>
  );

  const projects: Project[] = [
    {
      id: "dcs-eyetracking",
      num: "01",
      titleZh: "工业 DCS 界面眼动实验分析与布局优化",
      titleEn: "Industrial DCS Eyetracking Analysis & Layout Optimization",
      tagsZh: ["人机交互 (HCI)", "眼动测试", "DCS 可用性评估", "布局重绘"],
      tagsEn: ["HCI", "Eye Tracking", "DCS Usability", "Redesign"],
      descZh: "将眼动追踪分析方法引入复杂工业 DCS 界面，获取受试者在核电/化工仪表面板上的注视序列与认知分布。针对眼动注视点过度偏移引起的视觉疲劳和冗余交互，重构控制卡片布局，使核心操作视觉定位时间减少 24%，显著降低事故决策负荷。",
      descEn: "Applied eye-tracking methodology to complex industrial DCS control rooms, mapping gaze distributions and cognitive workload across panel interfaces. Redesigned high-risk operator screens based on fixation sequence data, shrinking critical target search time by 24% and reducing decision fatigue under pressure.",
      svgIcon: <DcsEyeTrackingSvg />,
      metaInfo: [
        { key: "METHOD", val: "Fixation Heatmap / AOI Mapping" },
        { key: "METRICS", val: "Fixation Duration -24% // Gaze Entropy" },
        { key: "CONTEXT", val: "Nanjing Forestry Univ / HCI Lab" }
      ]
    },
    {
      id: "ai-fitting",
      num: "02",
      titleZh: "模拟 AI 虚拟试衣应用",
      titleEn: "AI-Powered Virtual Fitting Application Mockup",
      tagsZh: ["PRD 原型构建", "AIGC 视觉资产", "SD/ComfyUI", "交互流程"],
      tagsEn: ["PRD Logic", "AIGC Visuals", "Stable Diffusion", "User Flows"],
      descZh: "融合商业化产品经理 (PRD) 原理与 AIGC 尖端视觉管线，设计的一款次世代虚拟试衣产品模型。利用 Stable Diffusion 与 ComfyUI 精确控制服装版型与模特人体形态，搭建从用户上传半身照到局部重绘试穿的顺畅 of 交互体验。",
      descEn: "Synthesized standard PRD business structures with automated AIGC visual pipelines to formulate a next-gen virtual fitting tool. Guided Stable Diffusion & ComfyUI nodes to produce high-fidelity clothing textures and model poses, resulting in a streamlined loop from user photo upload to in-paint rendering.",
      svgIcon: <AiFittingSvg />,
      metaInfo: [
        { key: "PIPELINE", val: "Stable Diffusion / ComfyUI API" },
        { key: "PRD_CORE", val: "Latent Inpainting / Mask Generation" },
        { key: "ASSETS", val: "4K Model Silhouette / UI Spec" }
      ]
    },
    {
      id: "ux-redundancy",
      num: "03",
      titleZh: "用户体验冗余度评估算法",
      titleEn: "Quantitative UX Redundancy Evaluation Algorithm",
      tagsZh: ["Python 节点", "冗余计算", "数据流分析", "自动化部署"],
      tagsEn: ["Python Script", "Redundancy Quant", "Dataflow Analysis", "DevOps"],
      descZh: "基于网络拓扑理论设计的交互路径计算工具。将用户的点击、滑动以及视觉检索路径转化成 Python 图结构中的连接权重。建立人机交互信息传输的冗余度量化模型，能够自动定位软件界面设计中的无用视觉干扰，并输出热重载分析报告。",
      descEn: "An interaction-path calculation tool developed on network topology. Converted user actions—clicks, swipes, and gaze jumps—into path-connection weights in Python. Created a quantitative mathematical model to detect cognitive noise and automatically output usability hot-fix suggestions.",
      svgIcon: <UxRedundancySvg />,
      metaInfo: [
        { key: "ALGORITHM", val: "Path Redundancy Entropy (PRE)" },
        { key: "STACK", val: "Python / NetworkX / Flask API" },
        { key: "DEPLOY", val: "Docker / Gunicorn / Hot-Reload" }
      ]
    },
    {
      id: "forestry-twin",
      num: "04",
      titleZh: "林业机械人机界面数字孪生监控系统",
      titleEn: "HCI Digital Twin System for Forestry Machinery",
      tagsZh: ["数字孪生", "三维渲染", "警觉度评估", "HUD 重载"],
      tagsEn: ["Digital Twin", "3D Render", "Operator Vigilance", "HUD Reload"],
      descZh: "将数字孪生技术引入林业采伐装备控制台界面。通过实时多模态数据流，渲染采伐头作业姿态，并融入基于注视轨迹预测的疲劳感知模块。当检测到操作员视觉反应迟缓时，HUD 自适应调整视区元素以确保人机共驾安全性。",
      descEn: "Engineered a real-time digital twin monitoring panel for advanced forestry loggers. Visualized complex mechanical arm kinematics via dynamic 3D-like matrices, incorporating an eye-gaze fatigue prediction algorithm that auto-modulates HUD density to prevent operator field-of-view blindness.",
      svgIcon: <ForestryTwinSvg />,
      metaInfo: [
        { key: "PLATFORM", val: "WebGL / React Three / WebSocket" },
        { key: "REDUNDANCY", val: "HUD Alert React +35% // Gaze Prediction" },
        { key: "CONTEXT", val: "Nanjing Forestry Univ / Smart Machinery" }
      ]
    }
  ];

  return (
    <>
      {style === 'magazine' || style === 'bladerunner' ? (
        /* ========================================================= */
        /* 1. 画廊杂志与银翼杀手 2049 风格：单页滚动吸附布局 */
        /* ========================================================= */
        <>
          {/* 大标题横幅 - 占满一页 */}
          <div className={`h-[calc(100vh-4rem)] snap-start flex items-center justify-center w-full px-6 md:px-12 max-w-7xl mx-auto border-t shrink-0 select-none transition-colors duration-500 ${
            style === 'bladerunner' 
              ? (isDark ? 'border-[#E05A10]/30' : 'border-[#E05A10]/20') 
              : 'border-neutral-200/30 dark:border-neutral-800/30'
          }`}>
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-4">
                <span className={`font-mono text-xs tracking-widest uppercase block font-bold ${
                  style === 'bladerunner' ? 'text-[#E05A10]' : 'text-neutral-400 dark:text-neutral-500'
                }`}>
                  // SECTION.03 // WORKS_DB
                </span>
                <DynamicHeading 
                  text={lang === 'zh' ? '核心项目集' : 'CORE PROJECTS'} 
                  as="h2" 
                  className={`text-4xl md:text-5xl font-black uppercase leading-none ${
                    style === 'bladerunner' 
                      ? (isDark ? 'text-[#F5EFEB]' : 'text-[#1D1107]') 
                      : 'text-neutral-900 dark:text-white'
                  }`} 
                />
              </div>
              <p className={`max-w-md text-xs md:text-sm font-light leading-relaxed transition-colors duration-500 ${
                style === 'bladerunner' 
                  ? (isDark ? 'text-[#F5EFEB]/75 font-mono' : 'text-[#1D1107]/80 font-mono') 
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}>
                {lang === 'zh'
                  ? '以下展示了跨越工业 DCS 交互、AIGC 视觉资产与用户体验冗余量化算法的四个核心数字产品级项目。纵向滚动以深度探索。'
                  : 'Displays four core projects across DCS usability, fashion AIGC systems, and quantitative interaction topology. Scroll vertically to explore.'
                }
              </p>
            </div>
          </div>

          {/* 4 个项目卡片 - 每一个项目分别占满一页，图文交替 */}
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.id}
                className={`h-[calc(100vh-4rem)] snap-start flex items-center justify-center w-full px-6 md:px-12 max-w-7xl mx-auto border-t shrink-0 transition-colors duration-500 ${
                  style === 'bladerunner' 
                    ? (isDark ? 'border-[#E05A10]/10' : 'border-[#E05A10]/15') 
                    : 'border-neutral-200/10 dark:border-neutral-800/10'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: appleEase }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
                >
                  {/* 图片插画区 (偶数项居左，奇数项居右) */}
                  <div className={`lg:col-span-7 w-full h-[280px] md:h-[360px] overflow-hidden border group rounded-sm transition-colors duration-500 ${
                    style === 'bladerunner' 
                      ? (isDark ? 'border-[#E05A10]/30 bg-[#03050C]' : 'border-[#E05A10]/20 bg-[#E6CEB8]') 
                      : 'border-neutral-200/60 dark:border-neutral-800'
                  } ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div className="w-full h-full transition-transform duration-700 ease-[var(--ease-apple)] group-hover:scale-[1.02] cursor-pointer">
                      {project.svgIcon}
                    </div>
                  </div>

                  {/* 文字说明与元数据区 */}
                  <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div className="space-y-4">
                      <div className={`flex justify-between items-baseline border-b pb-2 transition-colors duration-500 ${
                        style === 'bladerunner' 
                          ? (isDark ? 'border-[#E05A10]/20' : 'border-[#E05A10]/15') 
                          : 'border-neutral-200/40 dark:border-neutral-800'
                      }`}>
                        <span className={`font-mono text-4xl font-black select-none transition-colors duration-500 ${
                          style === 'bladerunner' 
                            ? (isDark ? 'text-[#E05A10]/30' : 'text-[#E05A10]/25') 
                            : 'text-neutral-350 dark:text-neutral-700'
                        }`}>
                          #{project.num}
                        </span>
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {(lang === 'zh' ? project.tagsZh : project.tagsEn).map((tag, i) => (
                            <span 
                              key={i} 
                              className={`font-mono text-[9px] tracking-wider px-2 py-0.5 border rounded-full uppercase font-bold transition-colors duration-500 ${
                                style === 'bladerunner' 
                                  ? (isDark ? 'border-[#E05A10]/30 text-[#E05A10]' : 'border-[#E05A10]/20 text-[#1D1107]') 
                                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <DynamicHeading 
                        text={lang === 'zh' ? project.titleZh : project.titleEn} 
                        as="h3" 
                        className={`text-2xl font-black tracking-tight leading-tight ${
                          style === 'bladerunner' 
                            ? (isDark ? 'text-[#F5EFEB]' : 'text-[#1D1107]') 
                            : 'text-neutral-900 dark:text-white'
                        }`} 
                      />

                      <p className={`text-sm font-light leading-relaxed transition-colors duration-500 ${
                        style === 'bladerunner' 
                          ? (isDark ? 'text-[#F5EFEB]/80 font-mono text-[13px]' : 'text-[#1D1107]/80 font-mono text-[13px]') 
                          : 'text-neutral-555 dark:text-neutral-400'
                      }`}>
                        {lang === 'zh' ? project.descZh : project.descEn}
                      </p>
                    </div>

                    {/* 元数据参数面板 */}
                    <div className={`grid grid-cols-3 gap-4 pt-4 border-t font-mono text-[9px] transition-colors duration-500 ${
                      style === 'bladerunner' 
                        ? (isDark ? 'border-[#E05A10]/20 text-[#F5EFEB]/60' : 'border-[#E05A10]/15 text-[#1D1107]/60') 
                        : 'border-neutral-200/40 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400'
                    }`}>
                      {project.metaInfo.map((meta, i) => (
                        <div key={i}>
                          <span className={`block font-bold transition-colors duration-500 ${
                            style === 'bladerunner' 
                              ? (isDark ? 'text-[#E05A10]' : 'text-[#1D1107] font-extrabold') 
                              : 'text-neutral-800 dark:text-neutral-200'
                          }`}>{meta.key}</span>
                          <span>{meta.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </>
      ) : (
        /* ========================================================= */
        /* 2. HERMES (极客) 终端风格 */
        /* ========================================================= */
        <>
          {/* 项目 01 与 02 合并为一页 */}
          <div className="h-[calc(100vh-4rem)] snap-start flex flex-col justify-center w-full px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-200/30 dark:border-neutral-800/30 shrink-0 font-mono space-y-8">
            <div className="flex justify-between items-center text-xs border-b border-neutral-300 dark:border-neutral-850 pb-2">
              <span className="text-neutral-500 font-bold">&gt; SHOW --CLASS=PROJECTS --LIST-ALL</span>
              <span className="text-neutral-400">TOTAL: 04 FILES FOUND</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="border p-5 relative rounded-sm text-xs transition-colors duration-300 border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-350"
                >
                  <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-[#030303] text-green-500' : 'bg-white text-neutral-900 border'
                  }`}>
                    + FILE: {project.id}.BIN +
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-855 pb-1">
                      #{project.num} // {lang === 'zh' ? project.titleZh : project.titleEn}
                    </h3>
                    <p className="leading-relaxed text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-3">
                      {lang === 'zh' ? project.descZh : project.descEn}
                    </p>
                    <div className="border border-neutral-200/60 dark:border-neutral-900 p-2 text-[9px] space-y-0.5 rounded-sm">
                      {project.metaInfo.slice(0, 2).map((meta, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-neutral-500">&gt; {meta.key}:</span>
                          <span className="text-neutral-800 dark:text-neutral-300">{meta.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 项目 03 与 04 合并为一页 */}
          <div className="h-[calc(100vh-4rem)] snap-start flex flex-col justify-center w-full px-6 md:px-12 max-w-7xl mx-auto shrink-0 font-mono space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(2, 4).map((project) => (
                <div
                  key={project.id}
                  className="border p-5 relative rounded-sm text-xs transition-colors duration-300 border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-350"
                >
                  <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-[#030303] text-green-500' : 'bg-white text-neutral-900 border'
                  }`}>
                    + FILE: {project.id}.BIN +
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-855 pb-1">
                      #{project.num} // {lang === 'zh' ? project.titleZh : project.titleEn}
                    </h3>
                    <p className="leading-relaxed text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-3">
                      {lang === 'zh' ? project.descZh : project.descEn}
                    </p>
                    <div className="border border-neutral-200/60 dark:border-neutral-900 p-2 text-[9px] space-y-0.5 rounded-sm">
                      {project.metaInfo.slice(0, 2).map((meta, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-neutral-500">&gt; {meta.key}:</span>
                          <span className="text-neutral-800 dark:text-neutral-300">{meta.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
