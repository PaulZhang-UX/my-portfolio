'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/ThemeLanguageContext';
import { DynamicHeading } from './DynamicHeading';

interface Skill {
  nameZh: string;
  nameEn: string;
  level: number;
}

const skills: Skill[] = [
  { nameZh: "DCS 人机交互与眼动可用性评估", nameEn: "DCS Interaction & Eye Tracking", level: 90 },
  { nameZh: "AIGC 视觉资产生成与 PRD 原型重构", nameEn: "AIGC Visual Assets & PRD Mockups", level: 85 },
  { nameZh: "UX 冗余度评估算法 (Python/数据流分析)", nameEn: "UX Redundancy Algorithms (Python)", level: 80 },
  { nameZh: "前端工程化与组件开发 (Next.js/React)", nameEn: "Frontend Dev (Next.js/React)", level: 88 },
];

export const About: React.FC = () => {
  const { theme, lang, style } = useApp();

  const appleEase = [0.16, 1, 0.3, 1] as const;

  const content = {
    zh: {
      title: "学术背景与研究方向",
      eduTitle: "教育经历",
      eduSub: "南京林业大学 // 本科 (跨学科交叉研究)",
      bioTitle: "个人陈述",
      bioText: "我热衷于探索人机交互 (HCI) 与先进 algorithms 的交叉地带。在南京林业大学的学习研究中，我将眼动实验分析方法应用于工业 DCS 复杂的界面优化，同时融合 AI 虚拟试衣的商业化逻辑与用户体验的冗余度量化评估模型。不仅停留在高保真视觉原型，更通过 Python 算法与自动化部署验证其可用性。致力于以跨界思维赋能 product 体验，打造精细、严谨 of 数字产品级个人作品集。",
      skillsTitle: "核心研究与技能集",
    },
    en: {
      title: "ACADEMIC & RESEARCH",
      eduTitle: "EDUCATION",
      eduSub: "Nanjing Forestry University // Bachelor",
      bioTitle: "BIOGRAPHY",
      bioText: "I am passionate about exploring the intersection of Human-Computer Interaction (HCI) and advanced algorithms. During my time at Nanjing Forestry University, I applied eye-tracking analytics to optimize complex industrial DCS interfaces. I also combined commercial PRD logic for AI virtual fitting applications with quantitative UX redundancy algorithms. By translating interactive designs into Python-based node structures and automated deploys, I ensure both high-fidelity visuals and empirical validation. I am dedicated to crafting rigorous digital products with multidisciplinary aesthetics.",
      skillsTitle: "RESEARCH & SKILLSET",
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } }
  };

  const isDark = theme === 'dark';

  return (
    <section className="snap-start h-[calc(100vh-4rem)] shrink-0 flex items-center justify-center py-0 px-6 md:px-12 w-full max-w-7xl mx-auto relative bg-transparent border-t border-neutral-200/30 dark:border-neutral-800/30 bladerunner:border-[#E05A10]/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* 左侧大标题排版 */}
        <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className={`font-mono text-xs tracking-widest block uppercase font-bold ${
              style === 'bladerunner' ? 'text-[#E05A10]' : 'text-neutral-400 dark:text-neutral-500'
            }`}>
              // SECTION.02 // ABOUT_ME
            </span>
            <DynamicHeading 
              text={content[lang].title} 
              as="h2" 
              className={`text-4xl md:text-5xl font-black tracking-tight leading-none ${
                style === 'bladerunner' 
                  ? (isDark ? 'text-[#F5EFEB]' : 'text-[#1D1107]') 
                  : 'text-neutral-900 dark:text-white'
              }`} 
            />
          </div>
          <div className={`hidden lg:block font-mono text-[9px] mt-12 leading-relaxed ${
            style === 'bladerunner' ? 'text-[#E05A10]/50' : 'text-neutral-500 dark:text-neutral-455'
          }`}>
            <span>COORD // 32.0802 N, 118.8077 E</span>
            <br />
            <span>LOC // NANJING // CHINA</span>
          </div>
        </motion.div>

        {/* 右侧卡片区 */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-10">
          
          {/* 学术履历卡片 */}
          <div className="relative">
            {style === 'magazine' ? (
              <div className="border-l-2 border-neutral-900 dark:border-neutral-800 pl-6 py-2">
                <h3 className="font-black text-xl mb-1 text-neutral-900 dark:text-white">
                  {content[lang].eduTitle}
                </h3>
                <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-4 font-medium">
                  {content[lang].eduSub}
                </p>
                <h3 className="font-black text-xl mb-1 text-neutral-900 dark:text-white">
                  {content[lang].bioTitle}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-200 font-light leading-relaxed">
                  {content[lang].bioText}
                </p>
              </div>
            ) : style === 'bladerunner' ? (
              /* 银翼杀手 2049 专属：支持双色（黄沙 Light 与 幽蓝 Dark）卡片 */
              <div className={`font-mono border border-dashed border-[#E05A10]/40 p-6 relative rounded-sm text-xs backdrop-blur-sm transition-colors duration-500 ${
                isDark 
                  ? 'bg-[#03050C]/60 text-[#F5EFEB]/90' 
                  : 'bg-[#E6CEB8]/70 text-[#1D1107]'
              }`}>
                <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider border border-dashed border-[#E05A10]/40 transition-colors duration-500 ${
                  isDark ? 'bg-[#03050C] text-[#E05A10]' : 'bg-[#E6CEB8] text-[#1D1107]'
                }`}>
                  + {content[lang].eduTitle} & DETAILS +
                </div>
                <div className="space-y-4">
                  <div>
                    <span className={`font-bold transition-colors duration-500 ${
                      isDark ? 'text-[#E05A10]/85' : 'text-[#1D1107]/80'
                    }`}>&gt; ACAD_COORD:</span> {content[lang].eduSub}
                  </div>
                  <div className={`border-t pt-4 transition-colors duration-500 ${
                    isDark ? 'border-[#E05A10]/20' : 'border-[#1D1107]/20'
                  }`}>
                    <span className={`block mb-2 font-bold transition-colors duration-500 ${
                      isDark ? 'text-[#E05A10]/85' : 'text-[#1D1107]/80'
                    }`}>&gt; PERSONAL_STATEMENT.BAT:</span>
                    <p className="leading-relaxed font-light">{content[lang].bioText}</p>
                  </div>
                </div>
              </div>
            ) : (
              /* HERMES (极客) 终端风格 */
              <div className={`font-mono border p-6 relative rounded-sm text-xs ${
                isDark 
                  ? 'border-neutral-800 bg-neutral-950 text-neutral-200 font-bold' 
                  : 'border-neutral-200 bg-neutral-50 text-neutral-700'
              }`}>
                <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider ${
                  isDark ? 'bg-[#030303] text-green-500' : 'bg-white text-neutral-800'
                }`}>
                  + {content[lang].eduTitle} & INFO +
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-neutral-500">&gt; INSTITUTION:</span> {content[lang].eduSub}
                  </div>
                  <div className="border-t border-neutral-200/50 dark:border-neutral-800 pt-4">
                    <span className="text-neutral-500 block mb-2">&gt; BIOGRAPHY_LOADER.SH:</span>
                    <p className="leading-relaxed">{content[lang].bioText}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 技能进度条卡片 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                {style === 'magazine' ? '■' : '>'}
              </span>
              <DynamicHeading 
                text={content[lang].skillsTitle} 
                as="h3" 
                className={`text-xl font-black tracking-tight ${
                  style === 'bladerunner' 
                    ? (isDark ? 'text-[#F5EFEB]' : 'text-[#1D1107]') 
                    : 'text-neutral-900 dark:text-white'
                }`} 
              />
            </div>

            {style === 'magazine' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between font-mono text-xs tracking-wider">
                      <span className="font-black text-neutral-800 dark:text-neutral-200">
                        {lang === 'zh' ? skill.nameZh : skill.nameEn}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-300 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: appleEase, delay: index * 0.08 }}
                        className="absolute inset-0 bg-neutral-900 dark:bg-white origin-left"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : style === 'bladerunner' ? (
              /* 银翼杀手 2049 专属：高光荧光橙进度条，支持明暗双色 */
              <div className={`font-mono border border-dashed border-[#E05A10]/40 p-6 relative rounded-sm text-xs backdrop-blur-sm transition-colors duration-500 ${
                isDark 
                  ? 'bg-[#03050C]/60 text-[#F5EFEB]/90' 
                  : 'bg-[#E6CEB8]/70 text-[#1D1107]'
              }`}>
                <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider border border-dashed border-[#E05A10]/40 transition-colors duration-500 ${
                  isDark ? 'bg-[#03050C] text-[#E05A10]' : 'bg-[#E6CEB8] text-[#1D1107]'
                }`}>
                  + REPLICANT_BIOLOGICAL_MATRIX +
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`flex justify-between text-[11px] font-bold transition-colors duration-500 ${
                        isDark ? 'text-[#F5EFEB]/80' : 'text-[#1D1107]/80'
                      }`}>
                        <span>{lang === 'zh' ? skill.nameZh : skill.nameEn}</span>
                        <span className="text-[#E05A10]">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-1 overflow-hidden relative transition-colors duration-500 ${
                        isDark ? 'bg-[#E05A10]/15' : 'bg-[#1D1107]/12'
                      }`}>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: appleEase, delay: index * 0.08 }}
                          className={`absolute inset-0 bg-[#E05A10] origin-left ${
                            isDark ? 'shadow-[0_0_8px_#E05A10]' : ''
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* HERMES (极客) 终端风格 */
              <div className={`font-mono border p-6 relative rounded-sm text-xs ${
                isDark 
                  ? 'border-neutral-800 bg-neutral-950 text-neutral-200 font-bold' 
                  : 'border-neutral-200 bg-neutral-50 text-neutral-700'
              }`}>
                <div className={`absolute -top-3 left-4 px-2 font-bold uppercase tracking-wider ${
                  isDark ? 'bg-[#030303] text-green-500' : 'bg-white text-neutral-800'
                }`}>
                  + CORE_SKILLS_REPORT +
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    const totalBlocks = 16;
                    const filledBlocks = Math.round((skill.level / 100) * totalBlocks);
                    const emptyBlocks = totalBlocks - filledBlocks;
                    const bar = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);
                    return (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-[11px] text-neutral-500">
                          <span>{lang === 'zh' ? skill.nameZh : skill.nameEn}</span>
                          <span className="text-green-500">{skill.level}%</span>
                        </div>
                        <div className="text-[11px] tracking-tight text-neutral-400 dark:text-neutral-500">
                          <span className="text-neutral-500">[</span>
                          <span>{bar}</span>
                          <span className="text-neutral-500">]</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
