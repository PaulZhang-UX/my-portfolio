import type { PortfolioLanguage } from './portfolioCopy';

export interface MirrorChapter {
  id: string;
  label: string;
  title: string;
  paragraphs: readonly string[];
  image: string;
  imageAlt: string;
}

interface MirrorCaseStudyCopy {
  back: string;
  switchLanguage: string;
  eyebrow: string;
  title: string;
  lead: string;
  meta: readonly { label: string; value: string }[];
  chaptersLabel: string;
  chapters: readonly MirrorChapter[];
  closingLabel: string;
  closing: string;
  next: string;
}

export const mirrorCaseStudy: Record<PortfolioLanguage, MirrorCaseStudyCopy> = {
  zh: {
    back: '返回作品集',
    switchLanguage: 'Switch to English',
    eyebrow: '02 / MIRROR · PRODUCT DESIGN',
    title: '把一次生成，\n变成可以继续修改的穿搭方案',
    lead: 'Mirror 是一款桌面端 AI 穿搭概念应用。它把灵感、电子衣柜、AI 生成与方案管理放进同一条可以继续修改的创作流程。',
    meta: [
      { label: 'ROLE', value: '独立产品设计师' },
      { label: 'RESEARCH', value: '4 位目标用户访谈' },
      { label: 'DELIVERABLE', value: '25 张核心界面与交互 Demo' },
      { label: 'YEAR', value: '2026' },
    ],
    chaptersLabel: 'CASE STUDY / 01—09',
    chapters: [
      {
        id: '01',
        label: '项目概述',
        title: '从一次性结果，走向可持续修改的方案。',
        paragraphs: [
          '用户在为旅行、演出或重要活动准备穿搭时，常常需要在多个应用之间寻找参考，再回想自己已经拥有的衣服。这个过程耗时，曾经成功的搭配也很难继续使用。',
          'Mirror 让用户从灵感、已有单品或过去保存的方案开始，只修改真正想改变的部分，而不必每次重新生成。',
        ],
        image: '/projects/mirror/01.png',
        imageAlt: 'Mirror 项目概述与产品开屏界面',
      },
      {
        id: '02',
        label: '方向选择',
        title: '保存的不是一张图片，而是一套可复用的穿搭。',
        paragraphs: [
          '只保存最终图片会切断模特、单品、提示词与生成结果之间的关系。用户一旦想替换其中一件衣服，往往只能重新输入并再次生成。',
          '因此，Mirror 把保存对象从“图片”改为“穿搭方案”：保留单品组合、模特、生成结果以及可以继续修改的记录。',
        ],
        image: '/projects/mirror/02.png',
        imageAlt: '从结果图片到可继续编辑的穿搭方案结构',
      },
      {
        id: '03',
        label: '关键发现',
        title: '用户更需要修改、找回与复用。',
        paragraphs: [
          '对 4 位目标用户的访谈显示，用户很少按照日期回忆一套穿搭，更常通过某件单品、颜色或具体场景找回记忆。',
          '当生成结果出现偏差时，他们希望保留已经满意的方案，只修正有问题的部分。可找回、可局部修改和可复用，成为产品的三个关键方向。',
        ],
        image: "/projects/mirror/03.png",
        imageAlt: 'Mirror 用户访谈发现与局部替换需求',
      },
      {
        id: '04',
        label: '设计取舍',
        title: '自由不一定易上手，所以放弃无限画布。',
        paragraphs: [
          '早期方案接近一块数字情绪板，允许用户自由摆放模特、单品与参考图。但整理画布本身与穿搭判断无关，额外的操作反而分散了注意力。',
          '新的工作室仍然允许组合素材、比较结果和替换单品，但取消了主动管理画布的负担，让注意力回到衣服与生成结果。',
        ],
        image: '/projects/mirror/04.png',
        imageAlt: 'Mirror 从无限画布调整为引导式工作室的设计取舍',
      },
      {
        id: '05',
        label: '信息架构',
        title: '从不同起点开始，都会汇入工作室。',
        paragraphs: [
          '用户可以从完整灵感、某件单品或一个旧方案出发。Mirror 保留从三种起点带入的不同内容，再把它们汇入统一的生成与修改流程。',
          '工作室由导航区、输入区与结果区组成，并把生成、比较、修改与保存串成一条连续路径。',
        ],
        image: '/projects/mirror/05.png',
        imageAlt: 'Mirror 三种起点与三栏工作室信息架构',
      },
      {
        id: '06',
        label: '交互设计',
        title: '把“换一件衣服”和“修正生成图片”分成两种操作。',
        paragraphs: [
          '替换单品意味着用户改变了穿搭选择；框选修改则保留当前搭配，只修正 AI 没有生成正确的局部。',
          '把两种操作分开后，用户能够在执行前预判结果会变化多少，也避免只想修复一个细节却让整张图片重新生成。',
        ],
        image: '/projects/mirror/06.png',
        imageAlt: 'Mirror 替换单品与框选局部修改两种交互',
      },
      {
        id: '07',
        label: '交互设计',
        title: '从一件单品，找回它出现过的历史穿搭。',
        paragraphs: [
          '衣柜中的每件单品都会关联它曾出现过的历史方案。用户不必记住日期，也不用逐张检查保存的图片。',
          '找到旧方案后，可以复制出一个新版本，并在保留模特、单品与搭配关系的基础上继续修改。',
        ],
        image: '/projects/mirror/07.png',
        imageAlt: 'Mirror 通过单品找回历史穿搭并复制旧方案',
      },
      {
        id: '08',
        label: '视觉设计',
        title: '让界面保持安静，把注意力留给穿搭本身。',
        paragraphs: [
          '视觉系统以中性色为主，通过清晰层级和稳定结构降低界面存在感；深红色只承担关键行动与选中状态。',
          '克制的色彩、统一的圆角与间距，让用户在输入、结果和调整之间自然流动。',
        ],
        image: '/projects/mirror/08.png',
        imageAlt: 'Mirror 视觉基础、设计令牌与核心组件',
      },
      {
        id: '09',
        label: '项目思考',
        title: '关于 AI 创意工具的四个判断。',
        paragraphs: [
          '生成结果需要能够持续使用；整体方案调整与局部错误修正需要分级反馈；原始输入需要持续可见；最终审美与场景决策仍应由用户完成。',
          '这些判断共同指向同一件事：在不确定中建立可控的创作流程，让 AI 成为可靠的创意伙伴。',
        ],
        image: '/projects/mirror/09.png',
        imageAlt: 'Mirror 项目反思与 AI 创意工具设计判断',
      },
    ],
    closingLabel: 'CONCLUSION',
    closing: '在不确定中建立可控的创作流程，让 AI 成为可靠的创意伙伴。',
    next: '回到作品列表',
  },
  en: {
    back: 'Back to portfolio',
    switchLanguage: '切换为中文',
    eyebrow: '02 / MIRROR · PRODUCT DESIGN',
    title: 'Turn a one-off generation\ninto an outfit you can keep refining.',
    lead: 'Mirror is a desktop AI styling concept that brings inspiration, a digital wardrobe, generation, and outfit management into one continuous creative workflow.',
    meta: [
      { label: 'ROLE', value: 'Independent Product Designer' },
      { label: 'RESEARCH', value: '4 target-user interviews' },
      { label: 'DELIVERABLE', value: '25 core screens & interactive demo' },
      { label: 'YEAR', value: '2026' },
    ],
    chaptersLabel: 'CASE STUDY / 01—09',
    chapters: [
      {
        id: '01',
        label: 'Overview',
        title: 'From one-off output to an outfit that remains editable.',
        paragraphs: [
          'Preparing an outfit for a trip, performance, or special event often means moving between several apps for references while trying to remember what is already in the wardrobe.',
          'Mirror lets people begin with inspiration, an existing item, or a saved outfit and change only what needs changing instead of generating everything again.',
        ],
        image: '/projects/mirror/01.png',
        imageAlt: 'Mirror project overview and product landing screen',
      },
      {
        id: '02',
        label: 'Direction',
        title: 'Save an editable outfit, not a flattened image.',
        paragraphs: [
          'A final image loses the relationships between the model, garments, prompt, and generated result. Replacing one item then means starting over.',
          'Mirror changes the saved object from an image into an outfit plan containing the garment set, model, result, and reusable editing history.',
        ],
        image: '/projects/mirror/02.png',
        imageAlt: 'Structure of an editable outfit plan',
      },
      {
        id: '03',
        label: 'Key findings',
        title: 'People need to revise, retrieve, and reuse.',
        paragraphs: [
          'Interviews with four target users showed that people rarely remember outfits by date. They recall an item, a color, or the occasion instead.',
          'When a result is partly wrong, they want to keep what already works and correct only the problem. Retrieval, local revision, and reuse became the three central directions.',
        ],
        image: "/projects/mirror/03.png",
        imageAlt: 'User-research findings and local replacement needs',
      },
      {
        id: '04',
        label: 'Design trade-off',
        title: 'Freedom is not always easy, so I removed the infinite canvas.',
        paragraphs: [
          'The early concept behaved like a digital mood board. It offered freedom, but arranging the canvas added work unrelated to judging an outfit.',
          'The revised studio retains composition, comparison, and item replacement while removing manual canvas management so attention stays on the clothes and results.',
        ],
        image: '/projects/mirror/04.png',
        imageAlt: 'Trade-off from an infinite canvas to a guided studio',
      },
      {
        id: '05',
        label: 'Information architecture',
        title: 'Different starting points converge in one studio.',
        paragraphs: [
          'A user can begin with complete inspiration, one garment, or an earlier outfit. Mirror carries the relevant context from each entry point into a shared generation and editing flow.',
          'The studio is divided into navigation, input, and result areas, connecting generation, comparison, revision, and saving in one path.',
        ],
        image: '/projects/mirror/05.png',
        imageAlt: 'Three entry points and the three-column studio architecture',
      },
      {
        id: '06',
        label: 'Interaction design',
        title: 'Separate changing a garment from correcting the generated image.',
        paragraphs: [
          'Replacing an item changes the styling decision. Masked editing keeps the outfit and only fixes a part the AI generated incorrectly.',
          'Separating the two actions makes the expected scope of change clear and prevents a small correction from regenerating the entire image.',
        ],
        image: '/projects/mirror/06.png',
        imageAlt: 'Garment replacement and masked local correction interactions',
      },
      {
        id: '07',
        label: 'Interaction design',
        title: 'Use one garment to retrieve every outfit it appeared in.',
        paragraphs: [
          'Every wardrobe item links to the historical outfits that contain it. Users no longer need to remember a date or inspect saved images one by one.',
          'An older outfit can be duplicated into a new version while preserving its model, garments, and styling relationships.',
        ],
        image: '/projects/mirror/07.png',
        imageAlt: 'Retrieving historical outfits through a garment',
      },
      {
        id: '08',
        label: 'Visual design',
        title: 'Keep the interface quiet and the focus on the outfit.',
        paragraphs: [
          'A neutral palette and stable hierarchy reduce the presence of the interface. Deep red is reserved for primary actions and selected states.',
          'Restrained color, consistent radii, and measured spacing help users move naturally between input, result, and revision.',
        ],
        image: '/projects/mirror/08.png',
        imageAlt: 'Mirror visual foundations, design tokens, and components',
      },
      {
        id: '09',
        label: 'Reflection',
        title: 'Four principles for AI creative tools.',
        paragraphs: [
          'Generated results should remain reusable. Whole-outfit changes and local errors need different feedback. Inputs should remain visible. Final aesthetic and contextual decisions should stay with the user.',
          'Together, these principles create a controllable process within uncertainty and make AI a more dependable creative partner.',
        ],
        image: '/projects/mirror/09.png',
        imageAlt: 'Project reflection and principles for AI creative tools',
      },
    ],
    closingLabel: 'CONCLUSION',
    closing: 'Build a controllable process within uncertainty, so AI can become a dependable creative partner.',
    next: 'Back to selected work',
  },
};
