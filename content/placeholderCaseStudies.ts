import type { PortfolioLanguage } from './portfolioCopy';

export type PlaceholderProjectId = '01' | '03' | '04' | '05';
export type PlaceholderProjectTheme = 'default' | 'green' | 'blue' | 'purple';

export interface PlaceholderProjectCopy {
  eyebrow: string;
  title: string;
  lead: string;
  meta: readonly { label: string; value: string }[];
  chapterTitles: readonly string[];
  /** Optional full-page artwork for each chapter. */
  chapterImages?: readonly string[];
  /** Optional per-chapter description. Falls back to `chapterText` when omitted. */
  chapterTexts?: readonly string[];
  chapterText: string;
  demoTitle: string;
  demoCopy: string;
}

export interface PlaceholderProjectConfig {
  id: PlaceholderProjectId;
  slug: string;
  theme: PlaceholderProjectTheme;
  hasDemo: boolean;
  copy: Record<PortfolioLanguage, PlaceholderProjectCopy>;
}

const chapterTitles = {
  zh: [
    '从问题开始，建立清晰的项目方向。',
    '把研究发现整理成可继续推进的线索。',
    '让信息结构回应真实的使用路径。',
    '把复杂操作拆成更容易理解的步骤。',
    '用一套稳定的视觉语言连接不同场景。',
    '让关键反馈在每一次操作中都被看见。',
    '把方案从概念推进到可验证的原型。',
    '让设计系统成为可以持续复用的基础。',
    '留下下一轮迭代仍然可以继续的问题。',
  ],
  en: [
    'Start with the problem, then define a clear direction.',
    'Turn research findings into signals the team can act on.',
    'Let information architecture follow real user paths.',
    'Break complex actions into steps that are easier to understand.',
    'Use one visual language across connected scenarios.',
    'Make important feedback visible at every interaction.',
    'Move the idea from concept to a testable prototype.',
    'Build a system that can keep supporting future work.',
    'Leave the next iteration with a useful question to pursue.',
  ],
} as const;

export const placeholderProjects: Record<PlaceholderProjectId, PlaceholderProjectConfig> = {
  '01': {
    id: '01', slug: 'readdy', theme: 'purple', hasDemo: false,
    copy: {
      zh: {
        eyebrow: '01 / READDY AI · PRODUCT DESIGN',
        title: '从模板开始，\n重新设计 AI 建站的生成路径',
        lead: 'Readdy 是一款面向海外用户的 AI 建站产品。我从模板生产与数据分析切入，通过真实用户行为与转化数据理解模板使用，并逐步探索模板推荐、生成等待与 AI 辅助修改等核心体验。',
        meta: [
          { label: 'ROLE', value: 'AI 产品设计 / 模板体验' },
          { label: 'RESEARCH', value: '用户行为与转化数据' },
          { label: 'DELIVERABLE', value: '模板系统 · 交互方案 · 数据分析' },
          { label: 'YEAR', value: '2026' },
        ],
        chapterTitles: ['网站模板与生成资产', 'AI 建站体验与交互探索'],
        chapterTexts: [
          '把一次次生成，沉淀成可以继续复用的建站方法。从真实行业需求出发制作并上线模板，记录页面结构、生成路径、转化思考，以及经过多轮验证后沉淀的 Prompt 与代码资产。',
          '不只优化生成结果，也重新思考 AI 应该在什么时候介入。从模板使用和真实生成过程里发现体验问题，围绕用户意图、模板推荐、生成等待、Sub-agent 与 Skill 推荐等方向持续探索更完整的 AI 建站体验。',
        ],
        chapterText: '内容正在整理中。',
        demoTitle: '', demoCopy: '',
      },
      en: {
        eyebrow: '01 / READDY AI · PRODUCT DESIGN',
        title: 'Starting from templates,\nredesigning the AI website-building path',
        lead: 'Readdy is an AI website-building product for overseas users. I started from template production and data analysis, understanding template usage through real user behavior and conversion data, and gradually explored template recommendation, generation waiting states, and AI-assisted refinement.',
        meta: [
          { label: 'ROLE', value: 'AI product design / Template experience' },
          { label: 'RESEARCH', value: 'User behavior and conversion data' },
          { label: 'DELIVERABLE', value: 'Template system · Interaction proposals · Data analysis' },
          { label: 'YEAR', value: '2026' },
        ],
        chapterTitles: ['Website templates and generation assets', 'AI website-building experience and interaction exploration'],
        chapterTexts: [
          'Turning repeated generations into a reusable website-building method. Starting from real industry needs, I produce and ship templates, documenting page structure, generation paths, conversion thinking, and the prompts and code assets refined over multiple validation rounds.',
          'Not only improving the generated result, but reconsidering when AI should step in. From template usage and real generation processes, I identify experience problems and explore user intent, template recommendation, generation waiting, sub-agents, and skill recommendation.',
        ],
        chapterText: 'Content is being organized.',
        demoTitle: '', demoCopy: '',
      },
    },
  },
  '03': {
    id: '03', slug: 'ui-trace', theme: 'green', hasDemo: true,
    copy: {
      zh: {
        eyebrow: '03 / UI TRACE · DESIGN SYSTEM',
        title: '把网页里的设计语言，整理成可复用的系统',
        lead: 'UI Trace 是一个用于提取界面结构、视觉规则与组件关系的设计工具占位项目。',
        meta: [
          { label: 'ROLE', value: '独立产品设计师' },
          { label: 'RESEARCH', value: '界面结构研究' },
          { label: 'DELIVERABLE', value: '设计系统工具 Demo' },
          { label: 'YEAR', value: '2026' },
        ],
        chapterTitles: chapterTitles.zh.slice(0, 7),
        chapterImages: [
          '/projects/ui-trace/1.png',
          '/projects/ui-trace/2.png',
          '/projects/ui-trace/3.png',
          '/projects/ui-trace/4.png',
          '/projects/ui-trace/5.png',
          '/projects/ui-trace/6.png',
          '/projects/ui-trace/7.png',
        ],
        chapterText: '这里将放置 UI Trace 的研究过程、设计决策与最终界面，内容正在整理中。',
        demoTitle: '查看 UI Trace 的使用流程。',
        demoCopy: '通过视频了解 UI Trace 如何从网页采集真实状态，并在 Figma 中生成可继续编辑的设计系统草稿。',
      },
      en: {
        eyebrow: '03 / UI TRACE · DESIGN SYSTEM',
        title: "Turn a webpage's visual language into a reusable system.",
        lead: 'UI Trace is a placeholder for a tool that maps interface structure, visual rules, and component relationships.',
        meta: [
          { label: 'ROLE', value: 'Independent product designer' },
          { label: 'RESEARCH', value: 'Interface structure study' },
          { label: 'DELIVERABLE', value: 'Design system tool demo' },
          { label: 'YEAR', value: '2026' },
        ],
        chapterTitles: chapterTitles.en.slice(0, 7),
        chapterImages: [
          '/projects/ui-trace/1.png',
          '/projects/ui-trace/2.png',
          '/projects/ui-trace/3.png',
          '/projects/ui-trace/4.png',
          '/projects/ui-trace/5.png',
          '/projects/ui-trace/6.png',
          '/projects/ui-trace/7.png',
        ],
        chapterText: 'Research, design decisions, and final screens for UI Trace will be placed here.',
        demoTitle: 'See the UI Trace workflow in action.',
        demoCopy: 'A short walkthrough of how UI Trace captures real web states and turns them into an editable design-system draft in Figma.',
      },
    },
  },
  '04': {
    id: '04', slug: 'chatgpt-redesign', theme: 'blue', hasDemo: true,
    copy: {
      zh: {
        eyebrow: '04 / CHATGPT REDESIGN · UX STRATEGY',
        title: '让分散在对话里的目标，重新回到可继续的路径上',
        lead: '面向 ChatGPT 的长期任务场景，我在原生体验中加入「进展板」：从分散的历史对话中恢复工作进度，提炼可执行的下一步与整理建议，并把用户带回原有对话继续推进。',
        meta: [
          { label: 'ROLE', value: '独立产品设计师' },
          { label: 'RESEARCH', value: '长期任务与对话整理' },
          { label: 'DELIVERABLE', value: 'Web 与移动端体验 Demo' },
          { label: 'YEAR', value: '2025' },
        ],
        chapterTitles: chapterTitles.zh.slice(0, 8),
        chapterImages: [
          '/projects/chatgpt-progress/1.png',
          '/projects/chatgpt-progress/2.png',
          '/projects/chatgpt-progress/3.png',
          '/projects/chatgpt-progress/4.png',
          '/projects/chatgpt-progress/5.png',
          '/projects/chatgpt-progress/6.png',
          '/projects/chatgpt-progress/7.png',
          '/projects/chatgpt-progress/8.png',
        ],
        chapterText: '围绕 ChatGPT 的长期任务场景，进展板把分散在历史对话里的目标、工作状态与整理建议重新组织起来，让用户知道正在推进什么、下一步做什么，并能回到原对话继续工作。',
        demoTitle: '让目标回到真实的操作里。',
        demoCopy: '支持全屏 Web 端与 iPhone 样机移动端两种体验入口。',
      },
      en: {
        eyebrow: '04 / CHATGPT REDESIGN · UX STRATEGY',
        title: 'Bring scattered goals back into a path that can continue.',
        lead: 'This placeholder page introduces a progress-board concept for connecting long-term goals, tasks, and suggestions.',
        meta: [
          { label: 'ROLE', value: 'Independent product designer' },
          { label: 'RESEARCH', value: 'Long-term task recovery' },
          { label: 'DELIVERABLE', value: 'Web and mobile experience demo' },
          { label: 'YEAR', value: '2025' },
        ],
        chapterTitles: chapterTitles.en.slice(0, 8),
        chapterImages: [
          '/projects/chatgpt-progress/1.png',
          '/projects/chatgpt-progress/2.png',
          '/projects/chatgpt-progress/3.png',
          '/projects/chatgpt-progress/4.png',
          '/projects/chatgpt-progress/5.png',
          '/projects/chatgpt-progress/6.png',
          '/projects/chatgpt-progress/7.png',
          '/projects/chatgpt-progress/8.png',
        ],
        chapterText: 'For long-running work in ChatGPT, the progress board reconnects goals, work states, and organization suggestions scattered across past conversations, so users can see what is moving forward, choose the next action, and return to the original chat.',
        demoTitle: 'Put the goal back into motion.',
        demoCopy: 'Choose between a full-screen Web experience and an iPhone-framed mobile experience.',
      },
    },
  },
  '05': {
    id: '05', slug: 'meituan', theme: 'default', hasDemo: false,
    copy: {
      zh: {
        eyebrow: '05 / MEITUAN · UX RESEARCH',
        title: '把移动体验里多余的路径，变成可以被理解的问题',
        lead: '这是一个美团校企合作项目。我们围绕美团移动端首页与频道页中容易误判的探索路径，结合用户行为数据识别误点、重访等冗余行为，并将其转化为可量化的动线指标，为页面阈值、判定规则与后续优化提供依据。',
        meta: [
          { label: 'ROLE', value: 'UX Researcher' },
          { label: 'RESEARCH', value: '移动界面动线研究' },
          { label: 'DELIVERABLE', value: '研究报告与设计建议' },
          { label: 'YEAR', value: '2025' },
        ],
        chapterTitles: chapterTitles.zh.slice(0, 5),
        chapterImages: [
          '/projects/meituan/page-01.png',
          '/projects/meituan/page-02.png',
          '/projects/meituan/page-03.png',
          '/projects/meituan/page-04.png',
          '/projects/meituan/page-05.png',
        ],
        chapterText: '通过用户 Session 路径与页面类型对比，定位探索型页面中的误点与重访行为，并将研究结论转化为可执行的页面优化建议。',
        demoTitle: '', demoCopy: '',
      },
      en: {
        eyebrow: '05 / MEITUAN · UX RESEARCH',
        title: 'Turn redundant paths in a mobile experience into useful questions.',
        lead: 'This university–enterprise collaboration project with Meituan examined easily misread paths across mobile home and channel pages. Our team combined user-behavior data with path analysis to identify mistaken taps and redundant revisits, turning them into measurable navigation signals for clearer thresholds, rules, and follow-up improvements.',
        meta: [
          { label: 'ROLE', value: 'UX researcher' },
          { label: 'RESEARCH', value: 'Mobile navigation study' },
          { label: 'DELIVERABLE', value: 'Research report and recommendations' },
          { label: 'YEAR', value: '2025' },
        ],
        chapterTitles: chapterTitles.en.slice(0, 5),
        chapterImages: [
          '/projects/meituan/page-01.png',
          '/projects/meituan/page-02.png',
          '/projects/meituan/page-03.png',
          '/projects/meituan/page-04.png',
          '/projects/meituan/page-05.png',
        ],
        chapterText: 'Session paths and page-type comparisons reveal redundant exploration behavior and translate the findings into actionable mobile experience recommendations.',
        demoTitle: '', demoCopy: '',
      },
    },
  },
};
