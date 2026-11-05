const IMAGES = {
  looks: [
    "assets/微信图片_20260422144211_612_79.webp",
    "assets/0e752d3358406b2e0e2031f757a9b775.webp",
    "assets/4e07dbe8f523b10ef83a7dde08ede44c.webp",
    "assets/01740bcd81c2b9e1e54a8d4faae513f6.webp",
    "assets/ae8894eed8ce9c357e37cfcbb433caa6.webp",
    "assets/2b4ebfb7fd7f923456d957a0dfc32b43.webp",
    "assets/82f8b5c32df0a46aa27863cb4eb8a148.webp",
    "assets/6ab4a7785ceb0d5580df702e8f2eb54e.webp",
    "assets/e23dbfaa2eef8ea09ad93430eedbeb00.webp"
  ],
  model: "assets/2b4ebfb7fd7f923456d957a0dfc32b43.webp",
  modelSmall: "assets/figma_center_model_520w.webp",
  studioCanvas: "assets/figma-studio/canvas-outfit.webp",
  studioFilmMain: "assets/figma-studio/film-main.webp",
  studioFilmA: "assets/figma-studio/film-1.webp",
  studioFilmB: "assets/figma-studio/film-2.webp",
  studioFilmC: "assets/figma-studio/film-3.webp",
  studioWide: {
    outfit1: "assets/figma-studio/canvas-outfit.webp",
    outfit2: "assets/figma-studio/Gemini_Generated_Image_95y0l495y0l495y0 1.webp",
    outfit3: "assets/figma-studio/Gemini_Generated_Image_4wiz1k4wiz1k4wiz 1.webp",
    outfit4: "assets/figma-studio/Gemini_Generated_Image_shwzcvshwzcvshwz 1.webp",
    outfit6: "assets/figma-studio/Gemini_Generated_Image_u368jzu368jzu368 1.webp",
    outfit7: "assets/figma-studio/Gemini_Generated_Image_fg9533fg9533fg95 1.webp",
    outfit8: "assets/figma-studio/Gemini_Generated_Image_n0857jn0857jn085 1.webp",
    outfit9: "assets/figma-studio/Gemini_Generated_Image_jzzmeajzzmeajzzm 1.webp",
    male: "assets/figma-studio/Gemini_Generated_Image_imoie4imoie4imoi 2.webp"
  },
  outfitA: "assets/figma-outfits/thumbs/outfit-1.jpg",
  outfitDetailA: "assets/figma-outfits/detail-outfit-1.webp",
  outfitB: "assets/figma-outfits/thumbs/outfit-2.jpg",
  outfitC: "assets/figma-outfits/thumbs/outfit-3.jpg",
  outfitD: "assets/figma-outfits/thumbs/outfit-4.jpg",
  outfitE: "assets/figma-outfits/thumbs/outfit-5.jpg",
  outfitF: "assets/figma-outfits/thumbs/outfit-6.jpg",
  outfitG: "assets/figma-outfits/thumbs/outfit-7.jpg",
  outfitH: "assets/figma-outfits/thumbs/outfit-8.jpg",
  outfitI: "assets/figma-outfits/thumbs/outfit-9.jpg",
  profileAvatar: "assets/figma-profile/avatar.webp",
  profileLooks: [
    "assets/figma-profile/look-1.webp",
    "assets/figma-profile/look-2.webp",
    "assets/figma-profile/look-3.webp",
    "assets/figma-profile/look-4.webp",
    "assets/figma-profile/look-5.webp"
  ],
  profileCalendar8: "assets/figma-profile/calendar-8.webp",
  profileCalendar16: "assets/figma-profile/calendar-16.webp",
  profileCalendar20: "assets/figma-profile/calendar-20.webp",
  bringToStudioIcon: "assets/figma-icons/bring-to-studio.svg",
  inspiration: [
    "assets/figma-inspiration/inspiration-1.webp",
    "assets/figma-inspiration/inspiration-2.webp",
    "assets/figma-inspiration/inspiration-3.webp",
    "assets/figma-inspiration/inspiration-4.webp",
    "assets/figma-inspiration/inspiration-5.webp",
    "assets/figma-inspiration/inspiration-6.webp",
    "assets/figma-inspiration/inspiration-7.webp",
    "assets/figma-inspiration/inspiration-8.webp",
    "assets/figma-inspiration/inspiration-9.webp",
    "assets/figma-inspiration/inspiration-10.webp"
  ],
  uploadSource: "assets/figma-upload/source.webp",
  outfitFullA: "assets/figma-outfits/outfit-1.webp",
  outfitFullB: "assets/figma-outfits/outfit-2.webp",
  outfitFullC: "assets/figma-outfits/outfit-3.webp",
  outfitFullD: "assets/figma-outfits/outfit-4.webp",
  outfitFullE: "assets/figma-outfits/outfit-5.webp",
  outfitFullF: "assets/figma-outfits/outfit-6.webp",
  outfitFullG: "assets/figma-outfits/outfit-7.webp",
  outfitFullH: "assets/figma-outfits/outfit-8.webp",
  outfitFullI: "assets/figma-outfits/outfit-9.webp",
  generated: "assets/工作室输出参考1.webp",
  posterGenerated: "assets/studio-generated-poster.webp",
  poster1: "assets/figma-posters/poster-1.webp",
  poster2: "assets/figma-posters/poster-2.webp",
  poster3: "assets/figma-posters/poster-3.webp",
  poster4: "assets/figma-posters/poster-4.webp",
  poster5: "assets/figma-posters/poster-5.webp",
  poster6: "assets/figma-posters/poster-6.webp",
  poster7: "assets/figma-posters/poster-7.webp",
  poster8: "assets/figma-posters/poster-8.webp",
  itemSkirt: "assets/去除背景最终模特图/Object.webp",
  itemBoots: "assets/去除背景最终模特图/Object2.webp",
  itemLayerTop: "assets/去除背景最终模特图/Object3.webp",
  itemBag: "assets/去除背景最终模特图/Background.webp",
  itemJacket: "assets/去除背景最终模特图/Background1.webp",
  itemEarring: "assets/去除背景最终模特图/Background2.webp",
  itemTie: "assets/去除背景最终模特图/Background3.webp",
  itemVest: "assets/去除背景最终模特图/Background4.webp",
  itemTote: "assets/去除背景最终模特图/2.webp",
  itemSlippers: "assets/去除背景最终模特图/3.webp",
  itemPants: "assets/去除背景最终模特图/4.webp",
  itemGreyVest: "assets/去除背景最终模特图/Gemini_Generated_Image_gyn5mfgyn5mfgyn5 1.webp",
  modelAvatar: "assets/模特库/Gemini_Generated_Image_riykabriykabriyk.webp",
  maleItems: {
    greenJacket: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_05_50 (1).webp",
    whiteTee: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_05_50 (2).webp",
    khakiPants: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_05_50 (3).webp",
    slingBag: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_05_50 (4).webp",
    sneakers: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_05_50 (5).webp",
    brownJacket: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_08_45 (1).webp",
    greyTee: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_08_46 (2).webp",
    jeans: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_08_46 (3).webp",
    leatherShoes: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_08_47 (4).webp",
    helmet: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_08_47 (5).webp",
    gloves: "assets/男性穿搭单品/ChatGPT Image 2026年7月5日 15_08_48 (6).webp",
    relatedWhiteTee: "assets/男性穿搭单品/Figma_白色圆领T恤.webp",
    relatedKhakiPants: "assets/男性穿搭单品/Figma_卡其宽松直筒长裤.webp",
    relatedWhiteSneakers: "assets/男性穿搭单品/Figma_白色板鞋.webp"
  },
  maleOutfits: [
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_48_47.webp",
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_48_50.webp",
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_48_53.webp",
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_48_55.webp",
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_48_59.webp",
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_49_02.webp",
    "assets/男性穿搭整体/ChatGPT Image 2026年7月3日 18_49_05.webp"
  ]
};

const isMacDevice = /Mac|Macintosh/i.test(navigator.userAgent || navigator.platform || "");

let sidebarMotionClass = "";
let lastSidebarCollapsed = null;

const state = {
  screen: "splash",
  route: "studio",
  splashFocus: 3,
  splashRotating: false,
  sidebarCollapsed: false,
  mobileNavOpen: false,
  activeModel: "female",
  modelMenuOpen: false,
  workspaceMode: "outfit",
  workspacePicker: false,
  workspaceMenu: "",
  workspaceTab: "穿搭",
  mobileStudioView: "chat",
  studioPrompt: "",
  lastStudioPrompt: "",
  lastPosterPrompt: "",
  filters: {
    inspiration: "全部",
    wardrobe: "全部",
    outfits: "全部",
    posters: "全部"
  },
  sortReversed: {
    inspiration: false,
    wardrobe: false,
    outfits: false,
    posters: false
  },
  searchOpen: {
    inspiration: false,
    wardrobe: false,
    outfits: false,
    posters: false
  },
  searchQuery: {
    inspiration: "",
    wardrobe: "",
    outfits: "",
    posters: ""
  },
  studioLibrary: {
    asset: {
      filter: "全部",
      query: "",
      sortReversed: false,
      selectedIds: ["cloth-7", "cloth-8"]
    },
    look: {
      filter: "全部",
      query: "",
      sortReversed: false,
      selectedIds: []
    }
  },
  posterOptions: {
    size: "",
    style: "",
    template: ""
  },
  posterTemplatePage: 0,
  selected: {
    inspiration: "",
    wardrobe: "",
    wardrobeIds: [],
    outfits: "",
    posters: ""
  },
  detailOpen: {
    inspiration: false,
    wardrobe: false,
    outfits: false,
    posters: false
  },
  detailClosed: {
    inspiration: false,
    wardrobe: false,
    outfits: false,
    posters: false
  },
  recordIndex: 0,
  studioResultIndex: 0,
  viewIndex: 1,
  favoriteByView: {},
  likedCards: {},
  cardMenu: {
    route: "",
    id: ""
  },
  relatedExpanded: {
    inspiration: false,
    outfits: false,
    posters: false
  },
  relatedSelected: {
    inspiration: "",
    outfits: "",
    posters: ""
  },
  studioAttachments: {
    scene: false,
    model: false,
    uploadedItems: []
  },
  calendarEntry: null,
  calendarRemovedDays: [],
  calendarModal: {
    open: false,
    outfitId: "",
    selectedDay: 8
  },
  annotation: {
    rect: null,
    note: "",
    editorOpen: false
  },
  studioEdit: {
    open: false,
    prompt: "",
    attachments: []
  },
  profileHistoryIndex: 0,
  uploadModal: {
    open: false,
    step: "drop",
    kind: "clothing",
    origin: "studio",
    saveMenuOpen: false
  },
  feedback: "",
  loadingScope: ""
};

const splashLabels = [
  "2022年的衣橱，喜欢棕色和蓝色",
  "初春的衣橱，开始偏爱灰色长外套",
  "2021年的你，在尝试复古风格",
  "春日的针织叠穿，开始尝试更轻盈的层次",
  "8月份的风格，是轻松和舒适",
  "10月的搭配，你更喜欢尝试长裙",
  "最近的蓝色学院风，保留在衣橱里"
];

let splashAutoTimer = 0;
let splashSequenceTimer = 0;
let splashResumeTimer = 0;
let splashRotationReleaseTimer = 0;
let splashHovering = false;
let feedbackTimer = 0;
let loadingTimer = 0;
let loadingToken = 0;
let historyTransitionTimer = 0;
let annotationDrag = null;
let searchFocusRoute = "";
let studioSearchFocusType = "";
let composingInput = false;
let renderedHash = window.location.hash;
const viewLabels = ["左视图", "正视图", "右视图"];

function replaceHashWithoutRender(hash) {
  window.history.replaceState(null, "", `#${hash}`);
  renderedHash = window.location.hash;
}

function escapeAttr(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function syncDensityScale() {
  const dpr = window.devicePixelRatio || 1;
  const desktop = window.matchMedia?.("(min-width: 901px)").matches ?? true;
  const scale = desktop && dpr > 1.05 && dpr <= 1.5 ? 1 / dpr : 1;
  document.documentElement.style.setProperty("--density-scale", scale.toFixed(4));
  document.documentElement.style.setProperty("--density-inverse", (1 / scale).toFixed(4));
}

function isMobileLayout() {
  return window.matchMedia?.("(max-width: 900px)").matches ?? false;
}

function studioFavoriteKey() {
  return `${state.workspaceTab}:${state.recordIndex}:${state.viewIndex}`;
}

function currentStudioFavorite() {
  return Boolean(state.favoriteByView[studioFavoriteKey()]);
}

function showFeedback(message) {
  state.feedback = message;
  window.clearTimeout(feedbackTimer);
  feedbackTimer = window.setTimeout(() => {
    state.feedback = "";
    const toast = document.querySelector(".demo-toast");
    if (!toast) return;
    toast.classList.add("is-leaving");
    window.setTimeout(() => toast.remove(), 180);
  }, 2600);
}

function beginDemoLoading(scope, duration = 420) {
  state.loadingScope = scope;
  const token = ++loadingToken;
  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => {
    if (token !== loadingToken) return;
    state.loadingScope = "";
    if (scope === "studio-generation" && document.querySelector(".canvas-panel")) {
      renderStudioFeedOnly({ updateCanvas: true });
    } else if (scope.startsWith("studio-") && document.querySelector(".canvas-panel")) {
      renderStudioCanvasPanelOnly();
    } else {
      render({ preserveScroll: true });
    }
  }, duration);
}

function cancelDemoLoading() {
  loadingToken += 1;
  window.clearTimeout(loadingTimer);
  loadingTimer = 0;
  state.loadingScope = "";
}

function scrollElementSignature(element) {
  const className = typeof element.className === "string"
    ? element.className
      .trim()
      .split(/\s+/)
      .filter(token => !["with-detail", "poster-detail-layout"].includes(token))
      .join(".")
    : "";
  return [
    element.tagName.toLowerCase(),
    element.id,
    className,
    element.dataset.section || "",
    element.dataset.route || ""
  ].join("|");
}

function collectScrollableElements() {
  return [...document.querySelectorAll("*")].filter((element) => {
    const style = window.getComputedStyle(element);
    const vertical = /(auto|scroll|overlay)/.test(style.overflowY);
    const horizontal = /(auto|scroll|overlay)/.test(style.overflowX);
    return (vertical && element.scrollHeight > element.clientHeight + 1)
      || (horizontal && element.scrollWidth > element.clientWidth + 1);
  });
}

function captureScrollSnapshot() {
  const counts = new Map();
  const elements = collectScrollableElements().map((element) => {
    const signature = scrollElementSignature(element);
    const index = counts.get(signature) || 0;
    counts.set(signature, index + 1);
    return {
      signature,
      index,
      top: element.scrollTop,
      left: element.scrollLeft
    };
  });
  const priority = [".page-content", ".profile-content", ".assistant-scroll-shell"]
    .map(selector => {
      const element = document.querySelector(selector);
      return element ? { selector, top: element.scrollTop, left: element.scrollLeft } : null;
    })
    .filter(Boolean);
  return {
    windowTop: window.scrollY,
    windowLeft: window.scrollX,
    elements,
    priority
  };
}

function restoreScrollSnapshot(snapshot) {
  if (!snapshot) return;
  window.requestAnimationFrame(() => {
    const restore = () => {
      window.scrollTo(snapshot.windowLeft, snapshot.windowTop);
      snapshot.priority?.forEach(({ selector, left, top }) => {
        const element = document.querySelector(selector);
        if (!element) return;
        const maxTop = Math.max(0, element.scrollHeight - element.clientHeight);
        element.scrollTo(left, Math.min(top, maxTop));
      });
      const candidates = collectScrollableElements();
      snapshot.elements.forEach((entry) => {
        const matches = candidates.filter((element) => scrollElementSignature(element) === entry.signature);
        const element = matches[entry.index];
        if (element) element.scrollTo(entry.left, entry.top);
      });
    };
    restore();
    window.requestAnimationFrame(restore);
  });
}

function hashRouteKey(rawHash = "") {
  return String(rawHash).replace(/^#/, "").split("-")[0] || "";
}

function shouldPreserveScrollForHashTransition(previousHash, nextHash = window.location.hash) {
  return previousHash === nextHash
    || (hashRouteKey(previousHash) && hashRouteKey(previousHash) === hashRouteKey(nextHash));
}

function motionOptionsForHashTransition(previousHash, nextHash = window.location.hash) {
  const previous = String(previousHash || "").replace(/^#/, "");
  const next = String(nextHash || "").replace(/^#/, "");
  const previousRoute = hashRouteKey(previous);
  const nextRoute = hashRouteKey(next);
  if (previousRoute !== nextRoute) {
    return { animateSelectors: [".main-area"], imageScope: ".main-area", images: true };
  }
  if (next.endsWith("-detail") && !previous.endsWith("-detail")) {
    return { animateSelectors: [".detail-panel"], imageScope: ".detail-panel", images: false };
  }
  if (nextRoute === "studio" && previous !== next) {
    return { animateSelectors: [".canvas-panel"], imageScope: ".canvas-panel", images: false };
  }
  return { images: false };
}

function renderUnlessHashChanged(previousHash, options = {}) {
  render({
    preserveScroll: shouldPreserveScrollForHashTransition(previousHash),
    ...motionOptionsForHashTransition(previousHash),
    ...options
  });
}

function downloadCurrentContent() {
  let item = null;
  if (state.route === "wardrobe" || state.route === "outfits" || state.route === "posters") {
    item = collectionForRoute(state.route)?.find(entry => entry.id === state.selected[state.route]) || null;
  }
  const source = item?.fullImage || item?.image || (state.route === "studio"
    ? state.workspaceTab === "海报"
      ? IMAGES.posterGenerated
      : IMAGES.studioCanvas
    : IMAGES.posterGenerated);
  if (!source) return "";
  const baseName = (item?.title || (state.workspaceTab === "海报" ? "Mirror海报" : "Mirror穿搭"))
    .replace(/[\\/:*?"<>|]/g, "-");
  const extension = source.split(".").pop()?.split(/[?#]/)[0] || "png";
  const link = document.createElement("a");
  link.href = source;
  link.download = `${baseName}.${extension}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  return link.download;
}

const productRoutes = ["studio", "inspiration", "wardrobe", "outfits", "posters", "profile"];

function applyHashState(rawHash = window.location.hash.replace("#", "")) {
  const hash = rawHash.replace(/^#/, "");
  const route = hash.split("-")[0];
  const isProductRoute = productRoutes.includes(route);
  const previousSelected = { ...state.selected };

  state.screen = isProductRoute ? "product" : "splash";
  state.route = isProductRoute ? route : "studio";
  state.sidebarCollapsed = false;
  state.mobileNavOpen = false;
  state.workspaceMode = "outfit";
  state.workspacePicker = false;
  state.workspaceMenu = "";
  state.workspaceTab = "穿搭";
  state.mobileStudioView = "chat";
  state.cardMenu = { route: "", id: "" };
  state.relatedExpanded.inspiration = false;
  state.relatedExpanded.outfits = false;
  state.relatedExpanded.posters = false;
  state.relatedSelected.inspiration = "";
  state.relatedSelected.outfits = "";
  state.relatedSelected.posters = "";
  state.selected.inspiration = "";
  state.selected.wardrobe = "";
  state.selected.wardrobeIds = [];
  state.selected.outfits = "";
  state.selected.posters = "";
  state.detailOpen.inspiration = false;
  state.detailOpen.wardrobe = false;
  state.detailOpen.outfits = false;
  state.detailOpen.posters = false;
  state.detailClosed.inspiration = false;
  state.detailClosed.wardrobe = false;
  state.detailClosed.outfits = false;
  state.detailClosed.posters = false;

  if (!isProductRoute) return;
  if (hash.includes("-male")) state.activeModel = "male";
  if (hash === "studio-empty") state.workspaceMode = "empty";
  if (hash === "studio-generated") {
    state.workspaceTab = "海报";
    state.workspaceMode = "generated";
    state.mobileStudioView = "result";
    if (!state.posterOptions.size && !state.posterOptions.style && !state.posterOptions.template) {
      state.posterOptions = { size: "竖版 3:4", style: "深色质感", template: "Lookbook排版" };
    }
  }
  if (hash === "studio-annotation") {
    state.workspaceTab = "海报";
    state.workspaceMode = "annotation";
    state.mobileStudioView = "result";
  }
  if (hash === "studio-annotation-outfit") {
    state.workspaceTab = "穿搭";
    state.workspaceMode = "annotation";
    state.mobileStudioView = "result";
  }
  if (hash === "studio-more") state.workspaceMenu = "outfit";
  if (hash === "studio-more-selected") state.workspaceMenu = "outfit-selected";
  if (hash === "studio-picker") {
    state.workspaceMode = "picker";
    state.workspaceMenu = "";
    state.mobileStudioView = "result";
  }
  if (hash === "studio-picker-poster") {
    state.workspaceTab = "海报";
    state.workspaceMode = "picker";
    state.workspaceMenu = "";
    state.mobileStudioView = "result";
  }
  if (hash === "studio-canvas") {
    state.workspaceTab = "海报";
    state.workspaceMode = "canvas";
  }
  if (hash === "studio-canvas-more") {
    state.workspaceTab = "海报";
    state.workspaceMode = "canvas";
    state.workspaceMenu = "poster";
  }
  if (hash === "studio-canvas-outfit-picker") {
    state.workspaceTab = "海报";
    state.workspaceMode = "canvas-more";
    state.workspaceMenu = "";
    state.mobileStudioView = "result";
  }
  if (hash === "wardrobe-selected") {
    const previousWardrobeIds = Array.isArray(previousSelected.wardrobeIds)
      ? previousSelected.wardrobeIds
      : previousSelected.wardrobe ? [previousSelected.wardrobe] : [];
    const validIds = previousWardrobeIds.filter(id => currentWardrobeItems().some(item => item.id === id));
    state.selected.wardrobeIds = validIds.length
      ? validIds
      : [currentWardrobeItems().find(item => item.id === "cloth-4")?.id || currentWardrobeItems()[0]?.id].filter(Boolean);
    state.selected.wardrobe = state.selected.wardrobeIds[0] || "";
    state.detailClosed.wardrobe = true;
  }
  if (hash === "wardrobe-detail" || hash === "wardrobe-male-detail") {
    const previousWardrobeId = previousSelected.wardrobe
      || (Array.isArray(previousSelected.wardrobeIds) ? previousSelected.wardrobeIds[0] : "");
    const selectedItem = currentWardrobeItems().some(item => item.id === previousWardrobeId)
      ? previousWardrobeId
      : currentWardrobeItems()[0]?.id || "";
    state.selected.wardrobe = selectedItem;
    state.selected.wardrobeIds = selectedItem ? [selectedItem] : [];
    state.detailOpen.wardrobe = Boolean(selectedItem);
    state.detailClosed.wardrobe = false;
  }
  if (hash === "inspiration-detail") {
    state.selected.inspiration = inspirations.some(item => item.id === previousSelected.inspiration)
      ? previousSelected.inspiration
      : inspirations[0]?.id || "";
    state.detailOpen.inspiration = true;
    state.detailClosed.inspiration = false;
  }
  if (hash === "inspiration-selected") {
    state.selected.inspiration = inspirations.some(item => item.id === previousSelected.inspiration)
      ? previousSelected.inspiration
      : inspirations[0]?.id || "";
    state.detailClosed.inspiration = true;
  }
  if (hash === "outfits-selected") {
    state.selected.outfits = currentOutfits().some(item => item.id === previousSelected.outfits)
      ? previousSelected.outfits
      : currentOutfits()[0]?.id || "";
    state.detailClosed.outfits = true;
  }
  if (hash === "posters-selected") {
    state.selected.posters = posters.some(item => item.id === previousSelected.posters)
      ? previousSelected.posters
      : posters[0]?.id || "";
    state.detailClosed.posters = true;
  }
  if (hash === "outfits-detail" || hash === "outfits-male-detail") {
    state.selected.outfits = currentOutfits().some(item => item.id === previousSelected.outfits)
      ? previousSelected.outfits
      : currentOutfits()[0]?.id || "";
    state.detailOpen.outfits = true;
  }
  if (hash === "posters-detail") {
    state.selected.posters = posters.some(item => item.id === previousSelected.posters)
      ? previousSelected.posters
      : posters[0]?.id || "";
    state.detailOpen.posters = true;
  }
  if (hash.endsWith("collapsed")) state.sidebarCollapsed = true;
  if (isMacDevice && /-detail/.test(hash)) state.sidebarCollapsed = true;
}

const navItems = [
  { id: "studio", label: "工作室", icon: "assets/logo/figma-nav-studio.svg" },
  { id: "inspiration", label: "灵感", icon: "assets/logo/figma-nav-inspiration.svg" },
  { id: "wardrobe", label: "我的衣柜", icon: "assets/logo/figma-nav-wardrobe.svg" },
  { id: "outfits", label: "我的穿搭", icon: "assets/logo/figma-nav-outfits.svg" },
  { id: "posters", label: "我的海报", icon: "assets/logo/figma-nav-posters.svg" },
  { id: "profile", label: "我的资料", icon: "assets/logo/figma-nav-profile.svg" }
];

const records = [
  {
    name: "复古学院",
    dots: ["#8f979e", "#1d334a", "#6c5b4e"],
    prompt: "想用这几件搭一套复古学院感的穿搭。想要有层次，但不要太暗，也不要显得太厚重。",
    thumbs: [IMAGES.modelAvatar, IMAGES.itemSkirt, IMAGES.itemLayerTop, IMAGES.itemBoots],
    answerImage: IMAGES.outfitFullA,
    canvasImage: IMAGES.studioWide.outfit1,
    answerCopy: "外松内简，是这套复古学院感穿搭的基础公式。\n\n米色内搭是这套造型里最重要的透气点。深棕外套有一定厚度，如果里面继续使用深色，整体会显得沉闷。米色刚好把视觉中心往上提，让层次更清楚。\n\n黑色半裙负责压住整体轮廓。裙摆有蓬度，但颜色足够收敛，所以不会显得夸张。它和上半身的复古单品形成对比，让造型既有学院感，也不会太乖。\n\n棕色长靴和外套形成呼应。靴子的皮质感强化了复古气质，也让下半身更有重量。相比短靴，长靴能更好地接住半裙的长度，让整体比例更完整。",
    resultImages: [IMAGES.studioWide.outfit1, IMAGES.studioWide.outfit2, IMAGES.studioWide.outfit3, IMAGES.studioWide.outfit4]
  },
  {
    name: "清爽夏日通勤",
    dots: ["#e5e5e5", "#3f4654"],
    prompt: "帮我把这套搭配调整得更适合夏日通勤，保持轻盈，也要有一点利落感。",
    thumbs: [IMAGES.modelAvatar, IMAGES.itemGreyVest, IMAGES.itemBag, IMAGES.itemEarring],
    answerImage: IMAGES.outfitFullB,
    canvasImage: IMAGES.studioWide.outfit2,
    answerCopy: "用浅色上装和利落的下装减轻视觉重量，保留小面积深色配饰，让通勤造型清爽但不单薄。",
    resultImages: [IMAGES.studioWide.outfit2, IMAGES.studioWide.outfit8, IMAGES.studioWide.outfit6, IMAGES.studioWide.outfit7]
  },
  {
    name: "低饱和叠穿",
    dots: ["#e9e2d4", "#6d7f80"],
    prompt: "我想尝试低饱和叠穿，颜色安静一点，但不要显得没有精神。",
    thumbs: [IMAGES.modelAvatar, IMAGES.itemVest, IMAGES.itemPants, IMAGES.itemTote],
    answerImage: IMAGES.studioWide.outfit3,
    canvasImage: IMAGES.studioWide.outfit3,
    answerCopy: "用灰、米、棕三组低饱和颜色做比例分配，内外层保持明度差，配饰作为小面积的暖色支点。",
    resultImages: [IMAGES.studioWide.outfit3, IMAGES.studioWide.outfit6, IMAGES.studioWide.outfit8, IMAGES.studioWide.outfit9]
  },
  {
    name: "秋日约会",
    dots: ["#15253d", "#5a3b32"],
    prompt: "准备去秋日约会，想要温柔一点，但仍然保持复古风格和清晰的身材比例。",
    thumbs: [IMAGES.modelAvatar, IMAGES.itemJacket, IMAGES.itemSkirt, IMAGES.itemBoots],
    answerImage: IMAGES.studioWide.outfit4,
    canvasImage: IMAGES.studioWide.outfit4,
    answerCopy: "让柔和的针织和有结构的外套形成对比，裙装负责轻盈感，棕色皮具把秋日氛围收束起来。",
    resultImages: [IMAGES.studioWide.outfit4, IMAGES.studioWide.outfit7, IMAGES.studioWide.outfit8, IMAGES.studioWide.outfit9]
  }
];

const posterRecords = [
  {
    name: "复古学院Lookbook",
    dots: [],
    image: IMAGES.posterGenerated,
    model: IMAGES.model,
    modelName: "知遥",
    thumbs: [IMAGES.modelAvatar, IMAGES.itemJacket, IMAGES.itemSkirt, IMAGES.itemBoots],
    ratio: "733 / 900",
    size: "竖版 3:4",
    style: "深色质感",
    template: "Lookbook排版",
    prompt: "以选取的模特为视觉中心。复古衬线字体标题 FOREST PREPLOOK，并配有细小的副标题。整体风格为柔和的杂志布局，文字排版极简。"
  },
  {
    name: "清爽夏日通勤拼贴",
    dots: [],
    image: IMAGES.poster4,
    model: IMAGES.modelAvatar,
    modelName: "知遥",
    thumbs: [IMAGES.profileLooks[3], IMAGES.itemGreyVest, IMAGES.itemBag, IMAGES.itemEarring],
    ratio: "1122 / 1402",
    size: "横版 4:3",
    style: "复古牛皮纸",
    template: "随机拼贴排版",
    prompt: "以清爽夏日通勤为主题，使用暖棕牛皮纸、撕纸边缘和单品拼贴，画面明亮自然，突出轻松的日常层次。"
  },
  {
    name: "低饱和叠穿卡片",
    dots: [],
    image: IMAGES.poster5,
    model: IMAGES.profileLooks[1],
    modelName: "知遥",
    thumbs: [IMAGES.profileLooks[1], IMAGES.itemVest, IMAGES.itemPants, IMAGES.itemTote],
    ratio: "1024 / 1536",
    size: "方形 1:1",
    style: "柔和杂志",
    template: "卡片搭配排版",
    prompt: "用低饱和卡片分栏展示叠穿关系，突出人物轮廓和配饰细节，保留轻杂志感与清晰的搭配层次。"
  },
  {
    name: "秋日约会Lookbook",
    dots: [],
    image: IMAGES.poster8,
    model: IMAGES.profileLooks[2],
    modelName: "知遥",
    thumbs: [IMAGES.profileLooks[2], IMAGES.itemJacket, IMAGES.itemSkirt, IMAGES.itemBoots],
    ratio: "1086 / 1448",
    size: "竖版 9:16",
    style: "干净白底",
    template: "手写批注",
    prompt: "以秋日约会为主题加入手写批注和生活化贴纸，人物完整居中，画面轻松但保持穿搭重点。"
  }
];

function currentStudioRecords() {
  return state.workspaceTab === "海报" ? posterRecords : records;
}

const wardrobeItems = [
  { id: "cloth-1", title: "棕色复古手提包", type: "包", time: "今天10:32", image: IMAGES.itemBag, mediaFit: "contain" },
  { id: "cloth-2", title: "深棕工装夹克", type: "上衣", time: "今天10:29", image: IMAGES.itemJacket, mediaFit: "contain" },
  { id: "cloth-3", title: "银色圆环耳环", type: "饰品", time: "昨天14:22", image: IMAGES.itemEarring, mediaFit: "contain" },
  { id: "cloth-4", title: "棕色搭扣长靴", type: "鞋子", time: "昨天11:17", image: IMAGES.itemBoots, mediaFit: "contain" },
  { id: "cloth-5", title: "黑色褶皱半身裙", type: "下装", time: "昨天10:40", image: IMAGES.itemSkirt, mediaFit: "contain" },
  { id: "cloth-6", title: "鹿纹针织背心衬衫", type: "上衣", time: "6月5日", image: IMAGES.itemLayerTop, mediaFit: "contain" },
  { id: "cloth-7", title: "深灰软皮托特包", type: "包", time: "6月3日", image: IMAGES.itemTote, mediaFit: "contain" },
  { id: "cloth-8", title: "棕色毛绒拖鞋", type: "鞋子", time: "6月3日", image: IMAGES.itemSlippers, mediaFit: "contain" },
  { id: "cloth-9", title: "酒红条纹领带", type: "饰品", time: "6月2日", image: IMAGES.itemTie, mediaFit: "contain" },
  { id: "cloth-10", title: "灰色针织阔腿裤", type: "下装", time: "6月1日", image: IMAGES.itemPants, mediaFit: "contain" },
  { id: "cloth-11", title: "灰色格纹领马甲", type: "上衣", time: "6月1日", image: IMAGES.itemGreyVest, mediaFit: "contain" }
];

const maleWardrobeItems = [
  { id: "male-cloth-1", title: "棕色皮质手套", type: "其他", time: "今天10:32", image: IMAGES.maleItems.gloves },
  { id: "male-cloth-2", title: "浅灰圆领T恤", type: "上衣", time: "今天10:29", image: IMAGES.maleItems.greyTee },
  { id: "male-cloth-3", title: "黑色复古摩托车头盔", type: "其他", time: "昨天14:22", image: IMAGES.maleItems.helmet },
  { id: "male-cloth-4", title: "棕色工装皮鞋", type: "鞋子", time: "昨天11:17", image: IMAGES.maleItems.leatherShoes },
  { id: "male-cloth-5", title: "蓝黑色直筒牛仔裤", type: "下装", time: "昨天10:40", image: IMAGES.maleItems.jeans },
  { id: "male-cloth-6", title: "棕色工装夹克", type: "上衣", time: "6月5日", image: IMAGES.maleItems.brownJacket },
  { id: "male-cloth-7", title: "低帮帆布鞋", type: "鞋子", time: "6月3日", image: IMAGES.maleItems.sneakers },
  { id: "male-cloth-8", title: "黑色帆布斜挎包", type: "包", time: "6月3日", image: IMAGES.maleItems.slingBag },
  { id: "male-cloth-9", title: "卡其宽松直筒长裤", type: "下装", time: "6月2日", image: IMAGES.maleItems.khakiPants },
  { id: "male-cloth-10", title: "白色圆领T恤", type: "上衣", time: "6月1日", image: IMAGES.maleItems.whiteTee },
  { id: "male-cloth-11", title: "军绿色工装外套", type: "上衣", time: "5月29日", image: IMAGES.maleItems.greenJacket }
];

const outfits = [
  { id: "outfit-1", title: "复古学院", time: "今天10:32", tags: ["秋季", "森系"], detailTags: ["秋季", "旅行"], relatedIds: ["cloth-2", "cloth-6", "cloth-5", "cloth-4"], image: IMAGES.outfitA, studioImage: IMAGES.studioWide.outfit1, detailImage: IMAGES.outfitDetailA, fullImage: IMAGES.outfitFullA, calendarImage: IMAGES.profileLooks[0], detailCopy: "以深棕外套和鹿纹针织为核心，搭配轻盈的黑色半裙，让复古学院感保持清晰又不过分厚重。" },
  { id: "outfit-2", title: "法式田园", time: "昨天8:10", tags: ["田园", "旅行"], relatedIds: ["cloth-1", "cloth-4", "cloth-10"], image: IMAGES.outfitB, studioImage: IMAGES.studioWide.outfit2, detailImage: IMAGES.outfitFullB, fullImage: IMAGES.outfitFullB, calendarImage: IMAGES.profileLooks[1], detailCopy: "牛仔外套和格纹长裙形成轻松的法式比例，适合旅行、散步和天气温和的周末。" },
  { id: "outfit-3", title: "灰调轻户外", time: "6月5日", tags: ["通勤", "灰调"], relatedIds: ["cloth-11", "cloth-10", "cloth-7"], image: IMAGES.outfitC, studioImage: IMAGES.studioWide.outfit3, detailImage: IMAGES.outfitFullC, fullImage: IMAGES.outfitFullC, calendarImage: IMAGES.profileLooks[2], detailCopy: "用灰色短外套和同色系下装建立干净轮廓，保留轻户外的舒适度，也适合日常通勤。" },
  { id: "outfit-4", title: "蓝调文艺通勤", time: "6月3日", tags: ["文艺", "通勤"], relatedIds: ["cloth-3", "cloth-6", "cloth-1"], image: IMAGES.outfitD, studioImage: IMAGES.studioWide.outfit4, detailImage: IMAGES.outfitFullD, fullImage: IMAGES.outfitFullD, detailCopy: "蓝色层次和简洁剪裁让整体更清爽，适合需要移动和长时间穿着的工作日。" },
  { id: "outfit-5", title: "工装复古街头", time: "6月1日", tags: ["工装", "街头"], relatedIds: ["cloth-2", "cloth-10", "cloth-4"], mediaFit: "contain", image: IMAGES.outfitE, studioImage: IMAGES.studioWide.male, detailImage: IMAGES.outfitFullE, fullImage: IMAGES.outfitFullE, detailCopy: "工装夹克、宽松下装和皮质配件形成利落的街头层次，强调材质对比而不是复杂叠加。" },
  { id: "outfit-6", title: "秋日牧场休闲", time: "5月29日", tags: ["休闲"], relatedIds: ["cloth-7", "cloth-8", "cloth-3"], image: IMAGES.outfitF, studioImage: IMAGES.studioWide.outfit6, detailImage: IMAGES.outfitFullF, fullImage: IMAGES.outfitFullF, detailCopy: "温暖的棕色和柔软面料适合秋日户外，整体保留自然松弛的比例。" },
  { id: "outfit-7", title: "学院休闲", time: "5月25日", tags: ["校园", "休闲"], relatedIds: ["cloth-6", "cloth-9", "cloth-8"], mediaFit: "contain", image: IMAGES.outfitG, studioImage: IMAGES.studioWide.outfit7, detailImage: IMAGES.outfitFullG, fullImage: IMAGES.outfitFullG, detailCopy: "针织、衬衫和轻便鞋履构成轻学院风格，适合校园与日常出行。" },
  { id: "outfit-8", title: "咖啡日常", time: "5月23日", tags: ["日常", "咖色"], relatedIds: ["cloth-1", "cloth-2", "cloth-3"], mediaFit: "contain", image: IMAGES.outfitH, studioImage: IMAGES.studioWide.outfit8, detailImage: IMAGES.outfitFullH, fullImage: IMAGES.outfitFullH, detailCopy: "以咖色为主调，加入低饱和的配件，让日常造型更有质感但仍然容易穿着。" },
  { id: "outfit-9", title: "甜美约会", time: "5月5日", tags: ["约会", "甜美"], relatedIds: ["cloth-3", "cloth-5", "cloth-1"], image: IMAGES.outfitI, studioImage: IMAGES.studioWide.outfit9, detailImage: IMAGES.outfitFullI, fullImage: IMAGES.outfitFullI, detailCopy: "轻柔色彩和适度收腰带来更轻盈的约会氛围，配件保持小面积点缀。" }
];

const maleOutfits = [
  { id: "male-outfit-1", title: "日常松弛", time: "今天10:32", tags: ["日系", "休闲"], palette: ["#ede5e1", "#cfb9a2"], image: IMAGES.maleOutfits[6], fullImage: IMAGES.maleOutfits[6] },
  { id: "male-outfit-2", title: "日系出行", time: "昨天8:10", tags: ["文艺", "旅行"], palette: ["#f5f4f8", "#ced7ed", "#38372c"], image: IMAGES.maleOutfits[5], fullImage: IMAGES.maleOutfits[5] },
  { id: "male-outfit-3", title: "深色商务", time: "6月5日", tags: ["通勤", "清爽"], palette: ["#e1dbdf", "#c4a991", "#0e0e12"], image: IMAGES.maleOutfits[2], fullImage: IMAGES.maleOutfits[2] },
  { id: "male-outfit-4", title: "职场通勤", time: "6月3日", tags: ["职场", "干练"], palette: ["#d2d7e7", "#3c3c40"], image: IMAGES.maleOutfits[3], fullImage: IMAGES.maleOutfits[3] },
  { id: "male-outfit-5", title: "工装街头", time: "6月1日", tags: ["工装", "街头"], palette: ["#9a8263", "#544f3c", "#2f2a23"], image: IMAGES.maleOutfits[0], fullImage: IMAGES.maleOutfits[0] },
  { id: "male-outfit-6", title: "机车工装", time: "5月29日", tags: ["复古", "机车"], palette: ["#8d8884", "#6b4932", "#1d2025"], image: IMAGES.maleOutfits[1], fullImage: IMAGES.maleOutfits[1] },
  { id: "male-outfit-7", title: "周末休闲", time: "5月25日", tags: ["日常", "休闲"], palette: ["#d6dbe3", "#2e3440"], image: IMAGES.maleOutfits[4], fullImage: IMAGES.maleOutfits[4] }
];

function currentWardrobeItems() {
  return state.activeModel === "male" ? maleWardrobeItems : wardrobeItems;
}

function currentOutfits() {
  return state.activeModel === "male" ? maleOutfits : outfits;
}

const profileCalendarDays = [
  { day: 28, muted: true },
  { day: 29, muted: true },
  { day: 30, muted: true },
  ...Array.from({ length: 31 }, (_, index) => ({ day: index + 1, muted: false })),
  { day: 1, muted: true }
];

const profileCalendarOutfitIndexes = { 8: 0, 16: 1, 20: 2 };

function calendarOutfitForDay(day) {
  if (state.calendarRemovedDays.includes(day)) return null;
  if (state.calendarEntry?.day === day) {
    const userOutfit = currentOutfits().find(item => item.id === state.calendarEntry.outfitId);
    return {
      outfitId: state.calendarEntry.outfitId,
      title: state.calendarEntry.title,
      image: state.calendarEntry.image,
      isUserAdded: true,
      outfit: userOutfit
    };
  }
  const outfitIndex = profileCalendarOutfitIndexes[day];
  if (outfitIndex === undefined) return null;
  const outfit = currentOutfits()[outfitIndex];
  if (!outfit) return null;
  return {
    outfitId: outfit.id,
    title: outfit.title,
    image: outfit.calendarImage || outfit.fullImage || outfit.image,
    isUserAdded: false,
    outfit
  };
}

function renderHistoryItems() {
  const profileLooks = IMAGES.profileLooks;
  const orderedProfileLooks = [
    ...profileLooks.slice(state.profileHistoryIndex),
    ...profileLooks.slice(0, state.profileHistoryIndex)
  ];
  return `<div class="history-items">${orderedProfileLooks.map(src => `<div class="history-item"><img src="${src}" alt=""></div>`).join("")}</div>`;
}

function syncToastOnly() {
  const shell = document.querySelector(".product-shell");
  if (!shell) return;
  const currentToast = shell.querySelector(".demo-toast");
  if (!state.feedback) {
    currentToast?.remove();
    return;
  }
  if (currentToast) {
    currentToast.textContent = state.feedback;
    currentToast.classList.remove("is-leaving");
    return;
  }
  shell.insertAdjacentHTML("beforeend", renderToast());
}

function shiftProfileHistory(step) {
  const historyItems = document.querySelector(".history-items");
  if (!historyItems || historyItems.classList.contains("is-shifting-next") || historyItems.classList.contains("is-shifting-prev")) return;
  const direction = step > 0 ? "next" : "prev";
  historyItems.classList.add(`is-shifting-${direction}`);
  showFeedback(step > 0 ? "已查看下一组穿搭" : "已查看上一组穿搭");
  syncToastOnly();
  window.clearTimeout(historyTransitionTimer);
  historyTransitionTimer = window.setTimeout(() => {
    state.profileHistoryIndex = (state.profileHistoryIndex + step + IMAGES.profileLooks.length) % IMAGES.profileLooks.length;
    const currentItems = document.querySelector(".history-items");
    if (!currentItems) return;
    currentItems.outerHTML = renderHistoryItems();
    const nextItems = document.querySelector(".history-items");
    if (!nextItems) return;
    window.MirrorMotion?.afterRender(nextItems, {
      imageScope: ".history-items",
      images: true
    });
    nextItems.classList.add(`is-entering-${direction}`);
    requestAnimationFrame(() => nextItems.classList.add("is-settled"));
    window.setTimeout(() => nextItems.classList.remove(`is-entering-${direction}`, "is-settled"), 420);
  }, 180);
}

function resetAnnotationState() {
  state.annotation = { rect: null, note: "", editorOpen: false };
  annotationDrag = null;
}

function annotationOverlayMarkup() {
  const rect = state.annotation.rect;
  if (!rect) {
    return `<div class="annotation-hint">拖动框选需要修改的区域</div>`;
  }
  const left = Math.max(1, Math.min(85, rect.left));
  const top = Math.max(1, Math.min(85, rect.top));
  const width = Math.max(4, Math.min(94 - left, rect.width));
  const height = Math.max(4, Math.min(94 - top, rect.height));
  const editorLeft = Math.max(2, Math.min(72, left + width - 8));
  const editorTop = Math.max(2, top - 8);
  return `
    <div class="annotation-selection" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%;">
      <span class="annotation-marker">1</span>
    </div>
    ${state.annotation.note ? `<div class="annotation-label" style="left:${editorLeft}%;top:${Math.min(92, top + height + 2)}%;">${escapeAttr(state.annotation.note)}</div>` : ""}
    ${state.annotation.editorOpen ? `
      <div class="annotation-editor" data-annotation-editor style="left:${editorLeft}%;top:${editorTop}%">
        <input data-annotation-input type="text" value="${escapeAttr(state.annotation.note)}" placeholder="描述需要进行的改动" aria-label="批注内容">
        <button type="button" data-action="save-annotation" aria-label="保存批注">${icon("check")}</button>
      </div>
    ` : ""}
  `;
}

function updateAnnotationSurface(surface = document.querySelector("[data-annotation-surface]")) {
  const ui = surface?.querySelector("[data-annotation-ui]");
  if (ui) ui.innerHTML = annotationOverlayMarkup();
}

function updateCalendarPickerSelection(day) {
  const grid = document.querySelector(".calendar-picker-grid");
  const selectedOutfit = currentOutfits().find(item => item.id === state.calendarModal.outfitId);
  if (!grid || !selectedOutfit) return;
  const previewImage = selectedOutfit.calendarImage || selectedOutfit.fullImage || selectedOutfit.image;
  grid.querySelectorAll(".calendar-picker-cell").forEach(cell => {
    const isSelected = Number(cell.dataset.calendarDay) === day;
    cell.classList.toggle("is-selected", isSelected);
    const previousPreview = cell.querySelector(".calendar-picker-look");
    previousPreview?.remove();
    if (isSelected) {
      cell.insertAdjacentHTML("beforeend", `<span class="calendar-picker-look"><img src="${previewImage}" alt="${escapeAttr(selectedOutfit.title)}"></span>`);
    }
  });
}

function collectionForRoute(route) {
  if (route === "wardrobe") return currentWardrobeItems();
  if (route === "outfits") return currentOutfits();
  if (route === "posters") return posters;
  if (route === "inspiration") return inspirations;
  return null;
}

function clearLibrarySelectionState() {
  state.selected.inspiration = "";
  state.selected.wardrobe = "";
  state.selected.wardrobeIds = [];
  state.selected.outfits = "";
  state.selected.posters = "";
  state.detailOpen.inspiration = false;
  state.detailOpen.wardrobe = false;
  state.detailOpen.outfits = false;
  state.detailOpen.posters = false;
  state.detailClosed.inspiration = false;
  state.detailClosed.wardrobe = false;
  state.detailClosed.outfits = false;
  state.detailClosed.posters = false;
  state.cardMenu = { route: "", id: "" };
  state.relatedExpanded.inspiration = false;
  state.relatedExpanded.outfits = false;
  state.relatedExpanded.posters = false;
  state.relatedSelected.inspiration = "";
  state.relatedSelected.outfits = "";
  state.relatedSelected.posters = "";
  state.calendarModal.open = false;
}

function deleteSelectedContent(route) {
  const collection = collectionForRoute(route);
  if (route === "wardrobe") {
    const selectedIds = new Set(state.selected.wardrobeIds);
    if (!selectedIds.size && state.selected.wardrobe) selectedIds.add(state.selected.wardrobe);
    const deleted = collection?.filter(item => selectedIds.has(item.id)) || [];
    if (!deleted.length) return "";
    for (let index = collection.length - 1; index >= 0; index -= 1) {
      if (selectedIds.has(collection[index].id)) collection.splice(index, 1);
    }
    state.selected.wardrobeIds = [];
    state.selected.wardrobe = "";
    state.detailOpen.wardrobe = false;
    state.detailClosed.wardrobe = false;
    return deleted.length === 1 ? deleted[0].title : `${deleted.length}件单品`;
  }
  const selectedId = collection ? state.selected[route] : "";
  const index = collection?.findIndex(item => item.id === selectedId) ?? -1;
  if (index < 0) return "";
  const [deleted] = collection.splice(index, 1);
  state.selected[route] = "";
  if (state.detailOpen[route] !== undefined) state.detailOpen[route] = false;
  return deleted.title;
}

function deleteCardContent(route, id) {
  const collection = collectionForRoute(route);
  const index = collection?.findIndex(item => item.id === id) ?? -1;
  if (index < 0) return "";
  const [deleted] = collection.splice(index, 1);
  if (state.selected[route] === id) {
    state.selected[route] = "";
    if (state.detailOpen[route] !== undefined) state.detailOpen[route] = false;
  }
  if (route === "wardrobe") {
    state.selected.wardrobeIds = state.selected.wardrobeIds.filter(selectedId => selectedId !== id);
    state.selected.wardrobe = state.selected.wardrobeIds[0] || "";
    if (!state.selected.wardrobeIds.length) {
      state.detailOpen.wardrobe = false;
      state.detailClosed.wardrobe = false;
    }
  }
  return deleted.title;
}

function duplicateCardContent(route, id) {
  const collection = collectionForRoute(route);
  const index = collection?.findIndex(item => item.id === id) ?? -1;
  if (index < 0) return null;
  const source = collection[index];
  const copy = {
    ...source,
    id: `${source.id}-copy-${Date.now()}`,
    title: `${source.title} 副本`,
    tags: source.tags ? [...source.tags] : undefined,
    time: "刚刚"
  };
  collection.splice(index + 1, 0, copy);
  if (cardPalettes[source.id]) cardPalettes[copy.id] = [...cardPalettes[source.id]];
  return copy;
}

function extractedUploadSources() {
  const collection = currentWardrobeItems();
  return [collection[2], collection[3], collection[7]].filter(Boolean);
}

function saveExtractedWardrobeItems() {
  const sources = extractedUploadSources();
  const timestamp = Date.now();
  const additions = sources.map((source, index) => ({
    ...source,
    id: `upload-${state.activeModel}-${timestamp}-${index}`,
    time: "刚刚"
  }));
  collection.unshift(...additions);
  return additions.length;
}

function attachExtractedItemsToStudio() {
  const timestamp = Date.now();
  state.studioAttachments.uploadedItems = extractedUploadSources().map((source, index) => ({
    ...source,
    id: `uploaded-${timestamp}-${index}`
  }));
}

function currentModelProfile() {
  return state.activeModel === "male"
    ? { id: "male", name: "阿亮", detail: "默认模特", avatar: IMAGES.maleOutfits[6] }
    : { id: "female", name: "知遥", detail: "默认模特", avatar: IMAGES.modelSmall };
}

const inspirations = [
  { id: "inspiration-1", title: "复古学院", type: "海报", time: "今天10:32", tags: ["随机拼贴", "森系"], image: IMAGES.inspiration[0], relatedIds: ["outfit-1", "outfit-7", "outfit-6"], detailImage: IMAGES.poster1, mediaFit: "contain", detailCopy: "以复古学院为主题的拼贴海报，保留深色层次，用纸张边缘和手写元素增加编辑感。" },
  { id: "inspiration-2", title: "法式田园", type: "穿搭", time: "昨天8:10", tags: ["田园", "旅行"], image: IMAGES.inspiration[1], relatedIds: ["outfit-2", "outfit-4", "outfit-8"], detailImage: IMAGES.outfitFullB, detailCopy: "牛仔与格纹的轻松组合，适合旅行和周末散步，重点是自然的比例和低压力的配色。" },
  { id: "inspiration-3", title: "灰调轻户外", type: "海报", time: "6月5日", tags: ["随机拼贴", "森系"], image: IMAGES.inspiration[2], relatedIds: ["outfit-3", "outfit-5", "outfit-6"], detailImage: IMAGES.poster2, mediaFit: "contain", detailCopy: "灰调户外主题海报，利用干净留白和材质对比突出穿搭主体。" },
  { id: "inspiration-4", title: "蓝调文艺通勤", type: "穿搭", time: "6月3日", tags: ["文艺", "通勤"], image: IMAGES.inspiration[3], relatedIds: ["outfit-4", "outfit-2", "outfit-8"], detailImage: IMAGES.outfitFullD, detailCopy: "蓝色层次让通勤造型保持清爽，简单配件负责补充文艺气质。" },
  { id: "inspiration-5", title: "工装复古街头", type: "穿搭", time: "6月1日", tags: ["工装", "街头"], image: IMAGES.inspiration[4], relatedIds: ["outfit-5", "outfit-3", "outfit-6"], detailImage: IMAGES.outfitFullE, detailCopy: "以工装面料和复古配件建立轮廓，适合需要存在感但不想过度装饰的造型。" },
  { id: "inspiration-6", title: "秋日牧场休闲", type: "海报", time: "5月29日", tags: ["Lookbook", "森系"], image: IMAGES.inspiration[5], relatedIds: ["outfit-6", "outfit-8", "outfit-1"], detailImage: IMAGES.poster4, mediaFit: "contain", detailCopy: "秋日牧场主题海报，采用暖棕色和自然材质，画面更偏向生活方式记录。" },
  { id: "inspiration-7", title: "学院休闲", type: "穿搭", time: "5月25日", tags: ["校园", "休闲"], image: IMAGES.inspiration[6], relatedIds: ["outfit-7", "outfit-1", "outfit-2"], detailImage: IMAGES.outfitFullG, detailCopy: "针织和衬衫的轻学院组合，适合校园与周末出行。" },
  { id: "inspiration-8", title: "咖啡日常", type: "穿搭", time: "5月23日", tags: ["日常", "咖色"], image: IMAGES.inspiration[7], relatedIds: ["outfit-8", "outfit-6", "outfit-4"], detailImage: IMAGES.outfitFullH, detailCopy: "低饱和咖色调让造型更耐看，适合日常工作和短途出门。" },
  { id: "inspiration-9", title: "甜美约会", type: "海报", time: "5月5日", tags: ["Lookbook", "森系"], image: IMAGES.inspiration[8], relatedIds: ["outfit-9", "outfit-1", "outfit-7"], detailImage: IMAGES.poster6, mediaFit: "contain", detailCopy: "甜美约会主题海报，使用更轻的色彩和装饰元素，突出人物与氛围。" },
  { id: "inspiration-10", title: "甜美约会", type: "穿搭", time: "5月5日", tags: ["约会", "甜美"], image: IMAGES.inspiration[9], relatedIds: ["outfit-9", "outfit-2", "outfit-8"], detailImage: IMAGES.outfitFullI, detailCopy: "轻柔配色搭配小面积装饰，适合约会和需要柔和氛围的场景。" }
];

const posters = [
  { id: "poster-1", title: "日系极简", time: "今天10:32", tags: ["随机拼贴", "森系"], relatedIds: ["outfit-1", "outfit-7"], mediaFit: "contain", image: IMAGES.poster1, detailCopy: "大面积留白和克制的拼贴元素让人物成为主视觉，适合日系 Lookbook 记录。" },
  { id: "poster-2", title: "黑棚标注", time: "昨天11:03", tags: ["手写批注", "影棚"], relatedIds: ["outfit-3", "outfit-5"], mediaFit: "contain", image: IMAGES.poster2, detailCopy: "用深色影棚背景衬托服装轮廓，并通过手写箭头补充造型细节。" },
  { id: "poster-3", title: "潮玩头像", time: "6月5日", tags: ["3D头像", "甜酷配饰"], relatedIds: ["outfit-9", "outfit-4"], mediaFit: "contain", image: IMAGES.poster3, detailCopy: "将人物转化为更轻松的潮玩头像，保留配饰作为识别点。" },
  { id: "poster-4", title: "暖棕拼贴", time: "6月1日", tags: ["随机拼贴", "日常层搭"], relatedIds: ["outfit-6", "outfit-8"], mediaFit: "contain", image: IMAGES.poster4, detailCopy: "暖棕色拼贴把服装、人物和配件放在同一张生活化画面中。" },
  { id: "poster-5", title: "动漫甜酷", time: "5月25日", tags: ["漫画", "甜酷"], relatedIds: ["outfit-9", "outfit-2"], mediaFit: "contain", image: IMAGES.poster5, detailCopy: "用漫画化轮廓和更明确的色块强化甜酷风格。" },
  { id: "poster-6", title: "糟糕涂鸦", time: "5月22日", tags: ["涂鸦", "反精致"], relatedIds: ["outfit-5", "outfit-8"], mediaFit: "contain", image: IMAGES.poster6, detailCopy: "保留涂鸦线条和不规则标记，让海报更像一张被持续编辑的灵感板。" },
  { id: "poster-7", title: "甜美标注", time: "5月20日", tags: ["手写批注", "甜美"], relatedIds: ["outfit-9", "outfit-1"], mediaFit: "contain", image: IMAGES.poster7, detailCopy: "柔和的色彩搭配手写批注，用小面积信息强化人物和穿搭重点。" },
  { id: "poster-8", title: "美系拼贴", time: "5月10日", tags: ["随机拼贴", "复古贴纸"], relatedIds: ["outfit-2", "outfit-5"], mediaFit: "contain", image: IMAGES.poster8, detailCopy: "复古贴纸和美式图形构成更有节奏的拼贴海报。" }
];

const libraryConfig = {
  inspiration: {
    title: "灵感",
    subtitle: "浏览其他用户生成的穿搭与海报，把喜欢的风格带回自己的工作室。",
    search: "搜索穿搭、海报风格或标签",
    filters: ["全部", "穿搭", "海报"],
    data: inspirations,
    card: "look",
    detailTitle: "灵感详情"
  },
  wardrobe: {
    title: "我的衣柜",
    subtitle: "保存过、上传过的单品，会在这里形成你的个人衣柜。",
    search: "搜索衣服",
    filters: ["全部", "上衣", "下装", "鞋子", "围巾", "帽子", "包", "饰品", "袜子", "其他"],
    data: wardrobeItems,
    card: "asset",
    detailTitle: "单品详情"
  },
  outfits: {
    title: "我的穿搭",
    subtitle: "保存过、收藏过的搭配，会在这里沉淀成你的个人穿搭。",
    search: "搜索穿搭",
    filters: ["全部", "春季", "夏季", "秋季", "冬季", "通勤", "约会", "旅行"],
    data: outfits,
    card: "look",
    detailTitle: "搭配详情"
  },
  posters: {
    title: "我的海报",
    subtitle: "生成过、收藏过的搭配，会在这里沉淀成你的个人海报。",
    search: "搜索海报",
    filters: ["全部", "Lookbook", "随机拼贴", "手写批注", "漫画", "涂鸦", "3D头像"],
    data: posters,
    card: "poster",
    detailTitle: "海报详情"
  }
};

let imagePreloadTimer = 0;

function queueDemoImagePreloads(route = state.route) {
  const sources = [];
  const add = (source) => {
    if (source) sources.push(source);
  };
  const addMany = (items = []) => items.forEach(add);

  if (route === "studio") {
    if (state.workspaceTab === "海报") {
      const posterRecord = posterRecords[0] || {};
      add(posterRecord.image);
      add(posterRecord.model);
      addMany(posterRecord.thumbs);
    } else {
      const studioRecord = records[0] || {};
      add(IMAGES.studioWide.outfit1);
      add(IMAGES.studioFilmMain);
      addMany([IMAGES.studioFilmA, IMAGES.studioFilmB, IMAGES.studioFilmC]);
      add(studioRecord.answerImage);
      addMany(studioRecord.thumbs);
    }
  } else if (route === "profile") {
    addMany(IMAGES.profileLooks);
    addMany([IMAGES.profileCalendar8, IMAGES.profileCalendar16, IMAGES.profileCalendar20]);
  } else if (route === "wardrobe") {
    addMany(wardrobeItems.slice(0, 6).map(item => item.image));
  } else if (route === "outfits") {
    addMany(outfits.slice(0, 6).map(item => item.image));
  } else if (route === "posters") {
    addMany(posters.slice(0, 4).map(item => item.image));
  } else if (route === "inspiration") {
    addMany(inspirations.slice(0, 6).flatMap(item => [item.image, item.detailImage]));
  }

  window.clearTimeout(imagePreloadTimer);
  const start = () => window.MirrorMotion?.preloadImages?.(sources);
  if (window.requestIdleCallback) {
    window.requestIdleCallback(start, { timeout: 2200 });
  } else {
    imagePreloadTimer = window.setTimeout(start, 900);
  }
}

const cardPalettes = {
  "outfit-1": ["#252329", "#563631", "#e9e4d7"],
  "outfit-2": ["#344357", "#452317", "#c79e7a"],
  "outfit-3": ["#6f7070", "#252329"],
  "outfit-4": ["#1e3f62", "#e9e4d7"],
  "outfit-5": ["#252329", "#8b7b63", "#6f7070"],
  "outfit-6": ["#6d5a48", "#d6c8ae", "#2f2f33"],
  "outfit-7": ["#252329", "#6f7070"],
  "outfit-8": ["#252329", "#563631", "#e9e4d7"],
  "outfit-9": ["#402522", "#dccbb7"],
  "poster-1": ["#252329", "#dccbb7"],
  "poster-2": ["#1f1f1f", "#f1f1f1"],
  "poster-3": ["#d87093", "#2e2e38"],
  "poster-4": ["#563631", "#d6c8ae", "#252329"],
  "poster-5": ["#252329", "#e9e4d7"],
  "poster-6": ["#8b0c0c", "#252329"],
  "poster-7": ["#402522", "#dccbb7"],
  "poster-8": ["#1e3f62", "#b24534", "#e9e4d7"]
};

function paletteFor(item) {
  if (item.palette) return item.palette;
  if (cardPalettes[item.id]) return cardPalettes[item.id];
  if (item.id.startsWith("inspiration")) {
    const related = item.type === "海报" ? posters[0] : outfits.find((outfit) => outfit.title === item.title);
    return cardPalettes[related?.id] || cardPalettes["outfit-1"];
  }
  return cardPalettes["outfit-1"];
}

function renderPaletteDots(item) {
  return `<span class="palette-dots">${paletteFor(item).map((color) => `<i style="--dot:${color}"></i>`).join("")}</span>`;
}

function icon(name) {
  const viewBoxes = {
    heart: "0 0 22.0001 19.0158",
    pencil: "0 0 18 18"
  };
  const strokeWidths = {
    heart: 2,
    pencil: 2
  };
  const paths = {
    wand: '<path d="m15 4 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/><path d="M6 13l5 5"/><path d="m4 20 8-8"/>',
    sparkle: '<path d="m12 2 2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
    hanger: '<path d="M12 7a2 2 0 1 0-2-2"/><path d="M12 7v2l8 5v4H4v-4l8-5"/>',
    image: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="m4 15 4-4 4 4 2-2 6 6"/><circle cx="15" cy="9" r="1.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.6-4 14.4-4 16 0"/>',
    menu: '<path d="M5 7h14M5 12h14M5 17h14"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
    sort: '<path d="M8 6h12M8 12h9M8 18h6"/><path d="M4 6v12"/>',
    upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 20h14"/>',
    imageUp: '<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.3"/><path d="m16 19 3-3 3 3M19 22v-6"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    download: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    messagePlus: '<path d="M20 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M12 7v6M9 10h6"/>',
    pencil: '<path d="M11.25 3.75 14.25 6.75M15.8805 5.109A2.115 2.115 0 0 0 12.891 2.11875L2.8815 12.1305c-.17414.1736-.30291.3874-.375.6225l-.99075 3.264a.375.375 0 0 0 .46725.4665l3.26475-.99c.24488-.0714.45863-.1994.6225-.3728L15.8805 5.109Z"/>',
    heart: '<path d="M1 6.51615c.00002-1.11279.33759-2.19941.96813-3.11633C2.59867 2.4829 3.49252 1.77881 4.53161 1.38055c1.03909-.39826 2.17455-.47195 3.2564-.21135 1.08186.2606 2.05921.84323 2.80299 1.67095.0524.05602.1157.10067.1861.1312.0703.03053.1462.04629.2229.04629.0767 0 .1526-.01576.2229-.04629.0704-.03053.1337-.07518.1861-.1312.7414-.8331 1.719-1.42063 2.8026-1.68439 1.0836-.26377 2.2219-.19126 3.2633.20788 1.0414.39913 1.9365 1.10597 2.5662 2.02642.6297.92044.9642 2.01085.9589 3.12609 0 2.29-1.5 4-3 5.5l-5.492 5.313a2.014 2.014 0 0 1-1.496.6866 2.014 2.014 0 0 1-1.504-.6676L4 12.0162c-1.5-1.5-3-3.2-3-5.50005Z"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v6h-6"/>',
    more: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>'
  };
  return `<span class="icon" aria-hidden="true"><svg viewBox="${viewBoxes[name] || "0 0 24 24"}" fill="none" stroke-width="${strokeWidths[name] || 1.8}" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.sparkle}</svg></span>`;
}

function render(options = {}) {
  const anyDetailOpen = state.detailOpen.inspiration || state.detailOpen.wardrobe || state.detailOpen.outfits || state.detailOpen.posters;
  if (isMacDevice && (anyDetailOpen || state.workspaceMode === "picker")) {
    state.sidebarCollapsed = true;
  }
  if (lastSidebarCollapsed !== null && state.sidebarCollapsed !== lastSidebarCollapsed) {
    sidebarMotionClass = state.sidebarCollapsed ? "is-collapsing" : "is-expanding";
  } else {
    sidebarMotionClass = "";
  }
  lastSidebarCollapsed = state.sidebarCollapsed;
  const preserveScroll = options.preserveScroll ?? (window.location.hash === renderedHash);
  const hashIsStable = window.location.hash === renderedHash;
  if (!options.skipMotion && options.viewTransition === true && hashIsStable && window.MirrorMotion?.transition) {
    const scrollSnapshot = preserveScroll ? captureScrollSnapshot() : null;
    const viewTransition = window.MirrorMotion.transition(() => render({ ...options, skipMotion: true }));
    if (viewTransition && scrollSnapshot) {
      viewTransition.finished.finally(() => restoreScrollSnapshot(scrollSnapshot));
    }
    return viewTransition;
  }
  const scrollSnapshot = preserveScroll ? captureScrollSnapshot() : null;
  syncDensityScale();
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = state.screen === "splash" ? renderSplash() : renderProduct();
  renderedHash = window.location.hash;
  syncRouteScroll();
  syncSplashLifecycle();
  restoreSearchFocus();
  restoreScrollSnapshot(scrollSnapshot);
  window.MirrorMotion?.afterRender(app, {
    animate: options.animate === true,
    animateSelectors: options.animateSelectors,
    imageScope: options.imageScope,
    images: options.images === true
  });
}

function restoreSearchFocus() {
  if (searchFocusRoute) {
    const route = searchFocusRoute;
    searchFocusRoute = "";
    window.requestAnimationFrame(() => {
      const input = document.querySelector(`[data-search-route="${route}"]`);
      if (!input) return;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }
  if (studioSearchFocusType) {
    const type = studioSearchFocusType;
    studioSearchFocusType = "";
    window.requestAnimationFrame(() => {
      const input = document.querySelector(`[data-studio-search="${type}"]`);
      if (!input) return;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }
}

function renderMainArea() {
  const main = document.querySelector(".main-area");
  if (!main) {
    render();
    return;
  }
  const scrollSnapshot = captureScrollSnapshot();
  main.innerHTML = renderRoute();
  restoreSearchFocus();
  restoreScrollSnapshot(scrollSnapshot);
  window.MirrorMotion?.afterRender(main, { animate: false, images: true });
}

function syncRouteScroll() {
  if (window.location.hash !== "#profile-bottom") return;
  requestAnimationFrame(() => {
    const page = document.querySelector(".profile-content");
    const calendar = document.querySelector('[data-section="profile-calendar"]');
    if (page && calendar) page.scrollTop = Math.max(calendar.offsetTop - 42, 0);
  });
}

function renderSplash() {
  return `
    <main class="splash ${state.splashRotating ? "is-rotating" : ""}">
      <section class="splash-copy">
        <h1>${greeting()}，知遥。今天想穿什么？</h1>
        <p>外面阳光不错，穿轻薄一点出门刚好。</p>
      </section>
      <section class="splash-stage" aria-label="历史穿搭形象">
        ${IMAGES.looks.map((src, index) => `
          <article class="splash-look ${index === state.splashFocus ? "is-center" : ""}" data-index="${index}" data-slot="${splashSlotFor(index)}" role="button" tabindex="0" aria-label="切换到第 ${index + 1} 套历史穿搭">
            ${splashLabels[index] ? `<div class="splash-look-label">${splashLabels[index]}</div>` : ""}
            <img src="${src}" alt="">
          </article>
        `).join("")}
      </section>
      <section class="splash-actions">
        <button class="btn btn-primary" data-action="enter-studio">去试衣服</button>
        <button class="btn btn-secondary" data-action="enter-wardrobe">上传衣服</button>
      </section>
    </main>
  `;
}

function normalizeSplashIndex(index) {
  const total = IMAGES.looks.length;
  return ((index % total) + total) % total;
}

function splashSlotFor(index) {
  const total = IMAGES.looks.length;
  let offset = index - state.splashFocus;
  const half = Math.floor(total / 2);
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

function splashDirectionTo(targetIndex) {
  const total = IMAGES.looks.length;
  const target = normalizeSplashIndex(targetIndex);
  const forward = (target - state.splashFocus + total) % total;
  const backward = (state.splashFocus - target + total) % total;
  return forward <= backward ? 1 : -1;
}

function reducedMotionEnabled() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

function syncSplashLifecycle() {
  if (state.screen !== "splash") {
    stopSplashTimers();
    return;
  }
  scheduleSplashAuto();
}

function scheduleSplashAuto(delay = 4200) {
  if (state.screen !== "splash" || reducedMotionEnabled() || splashHovering || splashSequenceTimer || splashAutoTimer) return;
  splashAutoTimer = window.setTimeout(() => {
    splashAutoTimer = 0;
    if (state.screen === "splash" && !splashHovering && !splashSequenceTimer) rotateSplashStep(1);
  }, delay);
}

function pauseSplashAuto() {
  splashHovering = true;
  window.clearTimeout(splashAutoTimer);
  window.clearTimeout(splashResumeTimer);
  splashAutoTimer = 0;
  splashResumeTimer = 0;
}

function resumeSplashAuto(delay = 900) {
  splashHovering = false;
  window.clearTimeout(splashResumeTimer);
  splashResumeTimer = window.setTimeout(() => {
    splashResumeTimer = 0;
    scheduleSplashAuto(500);
  }, delay);
}

function stopSplashTimers() {
  window.clearTimeout(splashAutoTimer);
  window.clearTimeout(splashSequenceTimer);
  window.clearTimeout(splashResumeTimer);
  window.clearTimeout(splashRotationReleaseTimer);
  splashAutoTimer = 0;
  splashSequenceTimer = 0;
  splashResumeTimer = 0;
  splashRotationReleaseTimer = 0;
  splashHovering = false;
  state.splashRotating = false;
}

function markSplashRotating(duration = 760) {
  state.splashRotating = true;
  syncSplashDom();
  window.clearTimeout(splashRotationReleaseTimer);
  splashRotationReleaseTimer = window.setTimeout(() => {
    splashRotationReleaseTimer = 0;
    state.splashRotating = false;
    if (state.screen === "splash") syncSplashDom();
  }, duration);
}

function syncSplashDom() {
  const splash = document.querySelector(".splash");
  if (!splash) return;
  splash.classList.toggle("is-rotating", state.splashRotating);
  splash.querySelectorAll(".splash-look").forEach((look) => {
    const index = Number(look.dataset.index);
    look.dataset.slot = String(splashSlotFor(index));
    look.classList.toggle("is-center", index === state.splashFocus);
  });
}

function rotateSplashStep(direction) {
  state.splashFocus = normalizeSplashIndex(state.splashFocus + direction);
  markSplashRotating();
  if (!splashSequenceTimer) scheduleSplashAuto();
}

function spinSplashTo(targetIndex) {
  const target = normalizeSplashIndex(targetIndex);
  if (target === state.splashFocus) return;
  window.clearTimeout(splashAutoTimer);
  window.clearTimeout(splashSequenceTimer);
  splashAutoTimer = 0;
  splashSequenceTimer = 0;

  if (reducedMotionEnabled()) {
    state.splashFocus = target;
    syncSplashDom();
    return;
  }

  const direction = splashDirectionTo(target);
  const step = () => {
    if (state.screen !== "splash") {
      stopSplashTimers();
      return;
    }
    rotateSplashStep(direction);
    if (state.splashFocus !== target) {
      splashSequenceTimer = window.setTimeout(step, 460);
    } else {
      splashSequenceTimer = 0;
      scheduleSplashAuto(1200);
    }
  };
  splashSequenceTimer = window.setTimeout(step, 40);
}

function greeting() {
  const hour = new Date().getHours();
  if (hour < 11 && hour >= 5) return "早上好";
  if (hour < 18) return "下午好";
  return "晚上好";
}

function renderProduct() {
  return `
    <div class="product-shell">
      ${renderSidebar()}
      <main class="main-area">
        ${renderRoute()}
      </main>
      ${renderUploadModal()}
      ${renderCalendarPicker()}
      ${renderToast()}
    </div>
  `;
}

function renderToast() {
  return state.feedback ? `<div class="demo-toast" role="status">${state.feedback}</div>` : "";
}

function renderUploadPreview(item, className, time = item.time) {
  return `
    <article class="upload-preview-card ${className}">
      <span class="upload-preview-heart">${icon("heart")}</span>
      <div class="upload-preview-media"><img src="${item.image}" alt="${escapeAttr(item.title)}"></div>
      <div class="upload-preview-title">${item.title}</div>
      <div class="upload-preview-meta"><span>${item.type}</span><time>${time}</time></div>
    </article>
  `;
}

function renderUploadModal() {
  if (!state.uploadModal.open) return "";
  const isBackground = state.uploadModal.kind === "background";
  const activeWardrobe = currentWardrobeItems();
  const hasResult = state.uploadModal.step === "result";
  const hasStackedResult = state.uploadModal.step === "stacked";
  const hasExtractedResult = hasResult || hasStackedResult;
  const hasUpload = state.uploadModal.step === "uploaded";
  return `
    <div class="upload-overlay" role="presentation">
      <section class="upload-modal is-${state.uploadModal.step}" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <header class="upload-modal-header">
          <div>
            <h2 id="upload-title">${isBackground ? "上传背景" : "上传衣服"}</h2>
            <p>${isBackground ? "上传你想要使用的模特背景图片。" : "上传你的服装单品或你的照片，会自动提取单品并去除背景。"}</p>
          </div>
        </header>
        <div class="upload-dropzone ${hasExtractedResult ? "has-result" : hasUpload ? "has-upload" : ""}">
          ${hasResult ? `
            <div class="upload-result-stack is-stacked is-locked" aria-label="已拆解出3件单品">
              ${renderUploadPreview(activeWardrobe[2], "is-earring", "今天10:20")}
              ${renderUploadPreview(activeWardrobe[3], "is-boots", "今天10:20")}
              ${renderUploadPreview(activeWardrobe[7], "is-slippers", "今天10:20")}
            </div>
          ` : hasStackedResult ? `
            <div class="upload-stacked-action" data-action="expand-upload-result" role="button" tabindex="0" aria-label="展开3件拆解单品">
              <div class="upload-result-stack is-stacked">
                ${renderUploadPreview(activeWardrobe[2], "is-earring", "今天10:20")}
                ${renderUploadPreview(activeWardrobe[3], "is-boots", "今天10:20")}
                ${renderUploadPreview(activeWardrobe[7], "is-slippers", "今天10:20")}
              </div>
            </div>
          ` : hasUpload ? `
            <div class="upload-source-preview"><img src="${IMAGES.uploadSource}" alt="待识别的全身穿搭照片"></div>
          ` : `
            <button class="upload-drop-action" data-action="simulate-upload">
              <span class="upload-drop-icon">${icon("imageUp")}</span>
            </button>
          `}
        </div>
        <footer class="upload-actions">
          <button class="btn upload-cancel" data-action="close-upload-modal">取消</button>
          ${isBackground
            ? `<button class="btn upload-save" data-action="save-background-upload" ${hasUpload ? "" : "disabled"}>识别</button>`
            : hasResult
              ? `<button class="btn upload-save" data-action="close-upload-modal">保存</button>`
              : `<button class="btn upload-save" data-action="recognize-upload" ${hasUpload ? "" : "disabled"}>识别</button>`}
        </footer>
      </section>
    </div>
  `;
}

function renderUploadModalOnly() {
  const overlay = document.querySelector(".upload-overlay");
  if (!overlay) {
    render({ preserveScroll: true, images: false });
    return;
  }
  const template = document.createElement("template");
  template.innerHTML = renderUploadModal().trim();
  const nextOverlay = template.content.firstElementChild;
  const nextModal = nextOverlay?.querySelector(".upload-modal");
  const currentModal = overlay.querySelector(".upload-modal");
  if (!nextModal) {
    overlay.remove();
    return;
  }
  nextModal.classList.add("is-local-update");
  currentModal?.replaceWith(nextModal);
}

function updateUploadModalParts({ updateActions = true } = {}) {
  const overlay = document.querySelector(".upload-overlay");
  const currentModal = overlay?.querySelector(".upload-modal");
  if (!overlay || !currentModal) {
    renderUploadModalOnly();
    return;
  }

  const template = document.createElement("template");
  template.innerHTML = renderUploadModal().trim();
  const nextModal = template.content.firstElementChild?.querySelector(".upload-modal");
  const nextDropzone = nextModal?.querySelector(".upload-dropzone");
  const nextActions = nextModal?.querySelector(".upload-actions");
  const currentDropzone = currentModal.querySelector(".upload-dropzone");
  const currentActions = currentModal.querySelector(".upload-actions");
  if (!nextDropzone || !currentDropzone || (updateActions && (!nextActions || !currentActions))) {
    renderUploadModalOnly();
    return;
  }

  currentModal.classList.remove("is-drop", "is-uploaded", "is-stacked", "is-result", "is-local-update");
  currentModal.classList.add(`is-${state.uploadModal.step}`, "is-local-update");
  currentDropzone.replaceWith(nextDropzone);
  if (updateActions) currentActions.replaceWith(nextActions);
  window.MirrorMotion?.afterRender(currentModal, {
    imageScope: ".upload-modal",
    images: true
  });
  return currentModal;
}

function updateUploadModalActionsOnly() {
  const overlay = document.querySelector(".upload-overlay");
  const currentModal = overlay?.querySelector(".upload-modal");
  if (!overlay || !currentModal) return;
  const template = document.createElement("template");
  template.innerHTML = renderUploadModal().trim();
  const nextActions = template.content.firstElementChild?.querySelector(".upload-actions");
  const currentActions = currentModal.querySelector(".upload-actions");
  if (nextActions && currentActions) currentActions.replaceWith(nextActions);
}

function commitUploadSpread() {
  state.uploadModal.step = "result";
  updateUploadModalParts({ updateActions: true });
}

function renderCalendarPicker() {
  if (!state.calendarModal.open) return "";
  const selectedOutfit = currentOutfits().find(item => item.id === state.calendarModal.outfitId);
  if (!selectedOutfit) return "";
  const previewImage = selectedOutfit.calendarImage || selectedOutfit.fullImage || selectedOutfit.image;
  return `
    <div class="calendar-overlay" role="presentation">
      <section class="calendar-modal" role="dialog" aria-modal="true" aria-labelledby="calendar-modal-title">
        <header class="calendar-modal-header">
          <h2 id="calendar-modal-title">添加到日历</h2>
          <p>将你的穿搭添加到日历中，</p>
        </header>
        <div class="calendar-picker-frame">
          <div class="calendar-picker-weekdays">
            ${["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map(day => `<div>${day}</div>`).join("")}
          </div>
          <div class="calendar-picker-grid">
            ${profileCalendarDays.map(({ day, muted }) => {
              const selected = !muted && day === state.calendarModal.selectedDay;
              return `
                <button type="button" class="calendar-picker-cell ${muted ? "is-muted" : ""} ${selected ? "is-selected" : ""}" data-action="select-calendar-day" data-calendar-day="${day}" ${muted ? "disabled" : ""}>
                  <span class="calendar-day">${day}</span>
                  ${selected ? `<span class="calendar-picker-look"><img src="${previewImage}" alt="${escapeAttr(selectedOutfit.title)}"></span>` : ""}
                </button>
              `;
            }).join("")}
          </div>
        </div>
        <footer class="calendar-modal-actions">
          <button type="button" class="btn btn-secondary" data-action="close-calendar-picker">取消</button>
          <button type="button" class="btn btn-primary" data-action="save-calendar-picker">保存</button>
        </footer>
      </section>
    </div>
  `;
}

function renderModelMenu() {
  if (!state.modelMenuOpen) return "";
  const models = [
    { id: "female", name: "知遥", detail: "默认模特", avatar: IMAGES.modelSmall },
    { id: "male", name: "阿亮", detail: "默认模特", avatar: IMAGES.maleOutfits[6] }
  ];
  return `
    <div class="model-menu" role="menu" aria-label="切换模特">
      <div class="model-menu-title">使用模特</div>
      ${models.map(model => `
        <button class="model-option ${state.activeModel === model.id ? "is-active" : ""}" data-model-id="${model.id}" role="menuitem">
          <span class="model-option-avatar"><img src="${model.avatar}" alt=""></span>
          <span class="model-option-copy"><strong>${model.name}</strong><small>${model.detail}</small></span>
          <span class="model-option-check">${state.activeModel === model.id ? "✓" : ""}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderSidebar() {
  const accountProfile = { name: "知遥", avatar: IMAGES.modelSmall };
  const isPosterStudio = state.route === "studio" && state.workspaceTab === "海报";
  const showRecordSection = state.route === "studio";
  const sidebarRecords = isPosterStudio ? posterRecords : records;
  const brandAction = state.sidebarCollapsed ? "toggle-sidebar" : "go-splash";
  return `
    <aside class="sidebar ${state.sidebarCollapsed ? "is-collapsed" : ""} ${sidebarMotionClass} ${state.mobileNavOpen ? "is-mobile-open" : ""}">
      <div class="sidebar-top">
        <div class="brand-row">
          <button class="brand-lockup" data-action="${brandAction}" aria-label="${state.sidebarCollapsed ? "展开侧边栏" : "返回开屏页"}" aria-expanded="${state.mobileNavOpen || !state.sidebarCollapsed}">
            <span class="brand-mark-wrap"><img class="brand-mark" src="assets/logo/figma-logo.svg" alt=""></span>
            <div class="brand-title">Mirror</div>
          </button>
          <button class="sidebar-toggle" data-action="toggle-sidebar" aria-label="收起或展开侧边栏" aria-expanded="${state.mobileNavOpen || !state.sidebarCollapsed}"><img src="assets/logo/figma-sidebar-toggle.svg" alt=""></button>
        </div>
        <section class="sidebar-section">
          <nav class="nav-list" aria-label="主导航">
            ${navItems.map(item => `
              <button class="nav-item ${state.route === item.id ? "is-active" : ""}" data-route="${item.id}">
                <img class="nav-icon" src="${item.icon}" alt="">
                <span class="nav-label">${item.label}</span>
              </button>
            `).join("")}
          </nav>
        </section>
        ${showRecordSection ? `<section class="sidebar-section record-section">
          <div class="sidebar-section-title">${isPosterStudio ? "海报记录" : "穿搭记录"}</div>
          <div class="record-list">
            ${sidebarRecords.map((record, index) => `
              <button class="record-item ${index === state.recordIndex ? "is-active" : ""}" data-action="record" data-index="${index}">
                ${record.dots.length ? `<span class="record-dots">${record.dots.map(dot => `<span class="dot" style="--dot:${dot}"></span>`).join("")}</span>` : ""}
                <span class="record-name">${record.name}</span>
              </button>
            `).join("")}
          </div>
        </section>` : ""}
      </div>
      <div class="user-area">
        ${renderModelMenu()}
        <button class="user-row ${state.modelMenuOpen ? "is-open" : ""}" data-action="toggle-model-menu" aria-haspopup="menu" aria-expanded="${state.modelMenuOpen}">
          <span class="avatar"><img src="${accountProfile.avatar}" alt=""></span>
          <span class="user-name">${accountProfile.name}</span>
          <span class="user-chevron">${icon("chevronRight")}</span>
        </button>
      </div>
    </aside>
  `;
}

function renderRoute() {
  if (state.route === "studio") return renderStudio();
  if (state.route === "profile") return renderProfile();
  return renderLibrary(state.route);
}

function renderStudio() {
  const isPosterStudio = state.workspaceTab === "海报";
  const mobileResultView = isMobileLayout() && state.mobileStudioView === "result";
  const activeRecord = currentStudioRecords()[state.recordIndex] || currentStudioRecords()[0];
  const panelTitle = isPosterStudio ? activeRecord.name.replace(/Lookbook$/, "") : activeRecord.name;
  const generationBlocked = state.workspaceMode === "picker"
    ? state.studioLibrary.asset.selectedIds.length === 0
    : state.workspaceMode === "canvas-more" && state.studioLibrary.look.selectedIds.length === 0;
  return `
    <section class="workspace ${mobileResultView ? "is-mobile-result-view" : "is-mobile-chat-view"}">
      <div class="assistant-panel">
        <div class="assistant-scroll-shell">
          <div class="panel-header">
            <h1 class="panel-title">${panelTitle}</h1>
            <div class="segmented">
              ${["穿搭", "海报"].map(tab => `<button class="${state.workspaceTab === tab ? "is-active" : ""}" data-workspace-tab="${tab}">${tab}</button>`).join("")}
            </div>
          </div>
          <div class="assistant-feed">
            ${isPosterStudio
              ? renderPosterStudioFeed()
              : state.workspaceMode === "empty"
                ? renderStudioEmptyFeed()
                : renderStudioFeed()}
          </div>
        </div>
        <div class="prompt-wrap">
          ${renderStudioMenu()}
          ${renderPromptAttachments()}
          <div class="prompt-input">
            <button class="prompt-plus" data-action="toggle-studio-add-menu" aria-label="添加内容" aria-expanded="${Boolean(state.workspaceMenu)}">${icon("plus")}</button>
            <input class="studio-prompt-input" data-studio-prompt value="${escapeAttr(state.studioPrompt)}" placeholder="${isPosterStudio ? "选取预设提示词，或输入你的提示词" : "说说你在穿搭上的要求是什么"}" aria-label="${isPosterStudio ? "海报生成提示词" : "穿搭生成提示词"}">
            <button class="btn btn-primary" data-workspace-mode="generated" ${generationBlocked ? "disabled aria-disabled=\"true\"" : ""}>${isPosterStudio ? "生成海报" : "生成穿搭"}</button>
          </div>
          ${isMobileLayout() && !mobileResultView && state.workspaceMode !== "empty" ? renderMobileResultEntry(isPosterStudio) : ""}
        </div>
      </div>
      ${renderStudioCanvasPanel()}
    </section>
  `;
}

function renderStudioEmptyFeed() {
  return `<div class="studio-empty-feed" aria-label="空白穿搭工作区"></div>`;
}

function renderStudioCanvasPanel() {
  const isPosterStudio = state.workspaceTab === "海报";
  const mobileResultView = isMobileLayout() && state.mobileStudioView === "result";
  const hideFilmstrip = ["empty", "picker", "canvas", "canvas-more"].includes(state.workspaceMode)
    || isPosterStudio && ["generated", "annotation"].includes(state.workspaceMode);
  return `
    <div class="canvas-panel">
      ${mobileResultView && !["picker", "canvas-more"].includes(state.workspaceMode) ? renderMobileResultHeader() : ""}
      ${renderCanvas()}
      ${hideFilmstrip ? "" : renderFilmstrip()}
      ${isPosterStudio && ["canvas", "generated", "annotation"].includes(state.workspaceMode) ? renderPosterCanvasActions() : ""}
    </div>
  `;
}

function renderStudioCanvasPanelOnly() {
  const panel = document.querySelector(".canvas-panel");
  if (!panel) {
    render({ preserveScroll: true, images: false });
    return;
  }
  panel.outerHTML = renderStudioCanvasPanel();
  const nextPanel = document.querySelector(".canvas-panel");
  if (nextPanel) {
    window.MirrorMotion?.afterRender(nextPanel, {
      animateSelectors: [".studio-outfit-stage", ".model-stage", ".poster-result-stage", ".filmstrip"],
      imageScope: ".canvas-panel",
      images: true
    });
  }
}

function syncOutfitAnnotationAction(panel, active) {
  const button = panel?.querySelector(".filmstrip [data-workspace-mode]");
  if (!button) return;
  button.classList.toggle("is-active", active);
  button.dataset.workspaceMode = active ? "outfit" : "annotation";
  button.setAttribute("aria-label", active ? "退出批注" : "添加批注");
}

function enterStudioOutfitAnnotationInline() {
  const panel = document.querySelector(".canvas-panel");
  const stage = panel?.querySelector(":scope > .studio-outfit-stage");
  if (!panel || !stage) return false;

  const surface = document.createElement("div");
  surface.className = "annotation-surface annotation-surface-outfit";
  surface.dataset.annotationSurface = "";
  surface.dataset.annotationKind = "outfit";
  surface.setAttribute("aria-label", "拖动框选穿搭区域");
  panel.insertBefore(surface, stage);
  surface.appendChild(stage);

  const annotationUi = document.createElement("div");
  annotationUi.className = "annotation-ui";
  annotationUi.dataset.annotationUi = "";
  annotationUi.innerHTML = annotationOverlayMarkup();
  surface.appendChild(annotationUi);
  syncOutfitAnnotationAction(panel, true);
  return true;
}

function exitStudioOutfitAnnotationInline() {
  const panel = document.querySelector(".canvas-panel");
  const surface = panel?.querySelector(":scope > .annotation-surface-outfit");
  const stage = surface?.querySelector(":scope > .studio-outfit-stage");
  if (!panel || !surface || !stage) return false;

  panel.insertBefore(stage, surface);
  surface.remove();
  syncOutfitAnnotationAction(panel, false);
  return true;
}

function renderStudioFeedOnly({ updateCanvas = false } = {}) {
  const feed = document.querySelector(".assistant-feed");
  if (!feed) {
    render({ preserveScroll: true, images: false });
    return;
  }
  const scrollTop = feed.scrollTop;
  const content = state.workspaceTab === "海报"
    ? renderPosterStudioFeed()
    : state.workspaceMode === "empty"
      ? renderStudioEmptyFeed()
      : renderStudioFeed();
  feed.innerHTML = content;
  feed.scrollTop = scrollTop;
  if (updateCanvas) {
    const panel = document.querySelector(".canvas-panel");
    if (panel) panel.outerHTML = renderStudioCanvasPanel();
  }
  const promptInput = document.querySelector("[data-studio-prompt]");
  if (promptInput) promptInput.value = state.studioPrompt;
  window.MirrorMotion?.afterRender(feed, {
    animateSelectors: state.studioEdit.open ? [".studio-edit-panel"] : updateCanvas ? [".studio-user-message"] : [],
    imageScope: ".assistant-feed",
    images: true
  });
  if (updateCanvas) {
    const nextPanel = document.querySelector(".canvas-panel");
    if (nextPanel) {
      window.MirrorMotion?.afterRender(nextPanel, {
        animateSelectors: [".studio-outfit-stage", ".model-stage", ".poster-result-stage", ".filmstrip"],
        imageScope: ".canvas-panel",
        images: true
      });
    }
  }
}

function renderMobileResultEntry(isPosterStudio) {
  return `
    <button class="mobile-result-entry" data-action="open-mobile-result">
      <span>${isPosterStudio ? "查看海报结果" : "查看穿搭结果"}</span>
      ${icon("chevronRight")}
    </button>
  `;
}

function renderMobileResultHeader() {
  return `
    <div class="mobile-result-header">
      <strong>生成结果</strong>
      <button data-action="close-mobile-result">返回聊天</button>
    </div>
  `;
}

function renderStudioFeed() {
  const activeRecord = records[state.recordIndex] || records[0];
  const thumbs = activeRecord.thumbs || [];
  const isEditing = state.studioEdit.open;
  const prompt = isEditing ? state.studioEdit.prompt : state.lastStudioPrompt || activeRecord.prompt;
  const copy = activeRecord.answerCopy || "这套搭配已经根据你的要求完成了层次和比例调整。";
  const answerImage = activeRecord.answerImage || IMAGES.outfitA;
  const isWideAnswer = answerImage === activeRecord.canvasImage;
  const editAttachments = isEditing
    ? state.studioEdit.attachments
    : thumbs.map((image, index) => ({ id: `record-thumb-${state.recordIndex}-${index}`, image }));
  return `
    <div class="studio-conversation">
      <div class="studio-user-message ${isEditing ? "is-editing" : ""}">
        ${isEditing ? `
          <div class="studio-edit-panel" data-studio-edit>
            <div class="studio-edit-attachments">
              ${editAttachments.length ? editAttachments.map(item => `
                <button class="studio-edit-attachment" data-action="remove-studio-edit-attachment" data-edit-attachment="${escapeAttr(item.id)}" aria-label="移除参考内容">
                  <img src="${item.image}" alt="">
                  <span>${icon("close")}</span>
                </button>
              `).join("") : `<span class="studio-edit-empty">未选择参考内容</span>`}
              <button class="studio-edit-add" data-action="open-studio-edit-picker" aria-label="添加单品" title="添加单品">${icon("plus")}</button>
            </div>
            <textarea class="studio-edit-input" data-studio-edit-input aria-label="修改已发送内容">${escapeAttr(prompt)}</textarea>
            <div class="studio-edit-actions">
              <button class="studio-edit-cancel" data-action="cancel-studio-edit">取消</button>
              <button class="studio-edit-send" data-action="save-studio-edit">发送</button>
            </div>
          </div>
        ` : `
          <div class="thumb-row">${editAttachments.map((item, index) => `<div class="thumb ${index === 0 ? "is-model-thumb" : ""}"><img src="${item.image}" alt=""></div>`).join("")}</div>
          <div class="studio-message-bubble-wrap">
            <div class="prompt-bubble">
              <strong>${escapeAttr(prompt)}</strong>
            </div>
            <button class="studio-message-edit" data-action="edit-studio-message" aria-label="修改这条消息" title="修改">${icon("pencil")}</button>
          </div>
        `}
      </div>
      <div class="studio-answer-message">
        <div class="answer-block ${isWideAnswer ? "is-wide-result" : ""}"><img src="${answerImage}" alt="${escapeAttr(activeRecord.name)}生成结果"></div>
        <div class="studio-answer-copy">
          <div class="assistant-copy">${copy}</div>
          <button class="regenerate" data-workspace-mode="generated">${icon("refresh")}重新生成</button>
        </div>
      </div>
    </div>
  `;
}

function openStudioMessageEditor() {
  const activeRecord = records[state.recordIndex] || records[0];
  state.studioLibrary.asset.selectedIds = [];
  state.studioLibrary.look.selectedIds = [];
  state.studioEdit = {
    open: true,
    prompt: state.lastStudioPrompt || activeRecord.prompt || "",
    attachments: (activeRecord.thumbs || []).map((image, index) => ({
      id: `record-thumb-${state.recordIndex}-${index}`,
      image
    }))
  };
}

function closeStudioMessageEditor() {
  state.studioLibrary.asset.selectedIds = [];
  state.studioLibrary.look.selectedIds = [];
  state.studioEdit = { open: false, prompt: "", attachments: [] };
}

function renderPosterStudioFeed() {
  const sizeOptions = ["方形 1:1", "竖版 3:4", "竖版 9:16", "横板 4:3", "横版 16:9"];
  const styleOptions = ["干净白底", "柔和杂志", "深色质感", "复古牛皮纸", "黑白纯色"];
  const templateOptions = ["Lookbook排版", "随机拼贴排版", "卡片搭配排版", "手写批注", "3D头像", "漫画", "涂鸦"];
  const activeRecord = posterRecords[state.recordIndex] || posterRecords[0];
  const selectedSize = state.posterOptions.size;
  const selectedStyle = state.posterOptions.style;
  const selectedTemplate = state.posterOptions.template;
  const templatePageSize = 3;
  const templatePageCount = Math.ceil(templateOptions.length / templatePageSize);
  const templatePage = Math.max(0, Math.min(state.posterTemplatePage, templatePageCount - 1));
  const visibleTemplates = templateOptions.slice(templatePage * templatePageSize, (templatePage + 1) * templatePageSize);
  const showResult = ["generated", "annotation"].includes(state.workspaceMode);
  return `
    <div class="poster-config">
      <section>
        <h2>尺寸</h2>
        <div class="choice-row">${sizeOptions.map(label => `<button class="choice-pill ${selectedSize === label ? "is-active" : ""}" data-poster-option="size" data-value="${escapeAttr(label)}">${label}</button>`).join("")}</div>
      </section>
      <section>
        <h2>版面风格</h2>
        <div class="choice-row">${styleOptions.map(label => `<button class="choice-pill ${selectedStyle === label ? "is-active" : ""}" data-poster-option="style" data-value="${escapeAttr(label)}">${label}</button>`).join("")}</div>
      </section>
      <section>
        <div class="template-section-heading">
          <h2>模板</h2>
          <div class="template-page-controls" aria-label="切换模板">
            <button class="template-page-button" data-action="poster-template-prev" ${templatePage === 0 ? "disabled" : ""} aria-label="上一组模板">${icon("chevronLeft")}</button>
            <span>${templatePage + 1}/${templatePageCount}</span>
            <button class="template-page-button" data-action="poster-template-next" ${templatePage >= templatePageCount - 1 ? "disabled" : ""} aria-label="下一组模板">${icon("chevronRight")}</button>
          </div>
        </div>
        <div class="template-card-row">
          ${visibleTemplates.map((label, index) => {
            const templateIndex = templatePage * templatePageSize + index;
            return `
              <button class="poster-template ${selectedTemplate === label ? "is-active" : ""}" data-poster-option="template" data-value="${escapeAttr(label)}">
                <span class="poster-template-grid template-${templateIndex + 1}"></span>
                <strong>${label}</strong>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    </div>
    ${showResult ? renderPosterResultFeed() : ""}
  `;
}

function renderPosterResultFeed() {
  const activeRecord = posterRecords[state.recordIndex] || posterRecords[0];
  const posterImage = activeRecord.image || IMAGES.posterGenerated;
  const modelImage = activeRecord.model || IMAGES.model;
  const prompt = state.lastPosterPrompt || activeRecord.prompt || "以选取的模特为视觉中心，保持清晰的搭配层次与完整的画面构图。";
  return `
    <div class="poster-result-feed">
      <div class="poster-selected-model"><img src="${modelImage}" alt="${escapeAttr(activeRecord.name)}模特"></div>
      <div class="prompt-bubble">
        ${escapeAttr(prompt)}
      </div>
      <div class="poster-result-thumb"><img src="${posterImage}" alt="${escapeAttr(activeRecord.name)}"></div>
      <button class="regenerate" data-workspace-mode="generated">${icon("refresh")}重新生成</button>
    </div>
  `;
}

function renderStudioMenu() {
  if (!state.workspaceMenu) return "";
  const isPosterStudio = state.workspaceTab === "海报";
  const items = isPosterStudio
    ? [
        { label: "添加穿搭", iconName: "sparkle", action: "open-studio-outfit-picker" },
        { label: "添加单品", iconName: "hanger", action: "open-studio-picker" }
      ]
    : [
        { label: "添加模特", iconName: "target", action: "open-model-picker", active: state.studioAttachments.model },
        { label: "添加单品", iconName: "hanger", action: "open-studio-picker" },
        { label: "上传衣服", iconName: "image", action: "upload-entry" }
      ];
  return `
    <div class="studio-add-menu" role="menu" aria-label="添加内容">
      ${items.map(item => `
        <button class="${item.active ? "is-active" : ""}" data-action="${item.action}" role="menuitem">
          ${icon(item.iconName)}
          <span>${item.label}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderPromptAttachments() {
  const selectedAssets = state.workspaceMode === "picker"
    ? state.studioLibrary.asset.selectedIds
      .map(id => currentWardrobeItems().find(item => item.id === id))
      .filter(Boolean)
    : [];
  const selectedLooks = state.workspaceMode === "canvas-more"
    ? state.studioLibrary.look.selectedIds
      .map(id => currentOutfits().find(item => item.id === id))
      .filter(Boolean)
    : [];
  const references = [
    state.studioAttachments.scene ? { id: "scene", image: IMAGES.poster4, label: "复古学院场景" } : null,
    state.studioAttachments.model ? { id: "model", image: currentModelProfile().avatar, label: `${currentModelProfile().name}模特` } : null
  ].filter(Boolean);
  const uploadedItems = state.studioAttachments.uploadedItems || [];
  if (selectedAssets.length === 0 && selectedLooks.length === 0 && uploadedItems.length === 0 && references.length === 0) return "";
  return `
    <div class="prompt-attachments">
      ${selectedAssets.map(item => `
        <button class="prompt-attachment is-removable" data-remove-studio-asset="${item.id}" aria-label="移除${escapeAttr(item.title)}" title="${escapeAttr(item.title)}">
          <img src="${item.image}" alt="">
          <span class="prompt-attachment-remove">${icon("close")}</span>
        </button>
      `).join("")}
      ${selectedLooks.map(item => `
        <button class="prompt-attachment is-removable is-look-reference" data-remove-studio-look="${item.id}" aria-label="移除${escapeAttr(item.title)}" title="${escapeAttr(item.title)}">
          <img src="${item.studioImage || item.fullImage || item.image}" alt="">
          <span class="prompt-attachment-remove">${icon("close")}</span>
        </button>
      `).join("")}
      ${uploadedItems.map(item => `
        <button class="prompt-attachment is-removable is-uploaded" data-remove-uploaded-item="${item.id}" aria-label="移除${escapeAttr(item.title)}" title="${escapeAttr(item.title)}">
          <img src="${item.image}" alt="">
          <span class="prompt-attachment-remove">${icon("close")}</span>
        </button>
      `).join("")}
      ${references.map(reference => `
        <button class="prompt-attachment is-removable is-reference" data-action="remove-studio-reference" data-reference="${reference.id}" aria-label="移除${escapeAttr(reference.label)}" title="${escapeAttr(reference.label)}">
          <img src="${reference.image}" alt="">
          <span class="prompt-attachment-remove">${icon("close")}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderGenerationSkeleton() {
  return `
    <div class="generation-loading-stage" role="status" aria-label="loading">
      <div class="generation-loading-surface"></div>
      <div class="generation-loading-progress" aria-hidden="true">
        <span class="is-wide"></span>
        <span></span>
      </div>
    </div>
  `;
}

function renderCanvas() {
  if (state.loadingScope === "studio-generation") {
    return renderGenerationSkeleton();
  }
  const isPosterStudio = state.workspaceTab === "海报";
  if (isPosterStudio && (state.workspaceMode === "generated" || state.workspaceMode === "annotation")) {
    if (state.workspaceMode === "generated" && state.loadingScope === "studio-generation") {
      return renderGenerationSkeleton();
    }
    return renderPosterGeneratedCanvas();
  }
  if (state.workspaceMode === "picker") return renderStudioWardrobeCanvas();
  if (state.workspaceMode === "canvas") return renderPosterBlankCanvas();
  if (state.workspaceMode === "canvas-more") return renderStudioOutfitCanvas();
  if (state.workspaceMode === "empty") {
    return `<div class="poster-blank-canvas outfit-empty-canvas"></div>`;
  }
  if (state.workspaceMode === "generated") {
    if (state.workspaceMode === "generated" && state.loadingScope === "studio-generation") {
      return renderGenerationSkeleton();
    }
    return `
      <div class="model-stage generated-stage">
        <div class="generated-frame"><img src="${IMAGES.generated}" alt=""></div>
      </div>
      ${renderViewSwitch()}
    `;
  }
  if (state.workspaceMode === "annotation") return renderStudioOutfitAnnotationCanvas();
  const activeRecord = records[state.recordIndex] || records[0];
  const resultImages = activeRecord.resultImages || [activeRecord.canvasImage || IMAGES.studioCanvas];
  const resultIndex = Math.max(0, Math.min(state.studioResultIndex, resultImages.length - 1));
  const recordCanvas = resultImages[resultIndex] || activeRecord.canvasImage || IMAGES.studioCanvas;
  return `
    <div class="studio-outfit-stage ${state.recordIndex === 0 ? "" : "is-alternate"}" style="--record-canvas:url('${recordCanvas}')" aria-label="${escapeAttr((records[state.recordIndex] || records[0]).name)}穿搭画布"></div>
    ${renderViewSwitch()}
  `;
}

function renderStudioOutfitAnnotationCanvas() {
  const activeRecord = records[state.recordIndex] || records[0];
  const resultImages = activeRecord.resultImages || [activeRecord.canvasImage || IMAGES.studioCanvas];
  const resultIndex = Math.max(0, Math.min(state.studioResultIndex, resultImages.length - 1));
  const recordCanvas = resultImages[resultIndex] || activeRecord.canvasImage || IMAGES.studioCanvas;
  return `
    <div class="annotation-surface annotation-surface-outfit" data-annotation-surface data-annotation-kind="outfit" aria-label="拖动框选穿搭区域">
      <div class="studio-outfit-stage ${state.recordIndex === 0 ? "" : "is-alternate"}" style="--record-canvas:url('${recordCanvas}')" aria-label="穿搭画布"></div>
      <div class="annotation-ui" data-annotation-ui>${annotationOverlayMarkup()}</div>
    </div>
    ${renderViewSwitch()}
  `;
}

function renderPosterGeneratedCanvas() {
  const activeRecord = posterRecords[state.recordIndex] || posterRecords[0];
  const posterImage = activeRecord.image || IMAGES.posterGenerated;
  return `
    <div class="poster-blank-canvas"></div>
    <div class="poster-result-stage">
      <div class="poster-result-frame ${state.workspaceMode === "annotation" ? "is-annotated" : ""}" style="--poster-ratio: ${activeRecord.ratio || "733 / 900"}" ${state.workspaceMode === "annotation" ? 'data-annotation-surface data-annotation-kind="poster"' : ""}>
        <img src="${posterImage}" alt="${escapeAttr(activeRecord.name)}海报生成结果">
        ${state.workspaceMode === "annotation" ? `<div class="annotation-ui" data-annotation-ui>${annotationOverlayMarkup()}</div>` : ""}
      </div>
    </div>
  `;
}

function renderPosterBlankCanvas() {
  return `<div class="poster-blank-canvas"></div>`;
}

function renderStudioWardrobeCanvas() {
  return renderStudioLibraryCanvas({
    title: "我的衣柜",
    subtitle: "保存过、上传过的单品，会在这里形成你的个人衣柜。",
    filters: ["全部", "上衣", "下装", "鞋子", "围巾", "帽子", "包", "饰品", "袜子", "其他"],
    actionLabel: "上传衣服",
    searchLabel: "搜索衣服",
    data: currentWardrobeItems(),
    type: "asset",
    selectedIds: state.studioLibrary.asset.selectedIds
  });
}

function renderStudioOutfitCanvas() {
  return renderStudioLibraryCanvas({
    title: "我的穿搭",
    subtitle: "保存过、收藏过的搭配，会在这里沉淀成你的个人穿搭。",
    filters: ["全部", "春季", "夏季", "秋季", "冬季", "通勤", "约会", "旅行"],
    actionLabel: "新建搭配",
    searchLabel: "搜索穿搭",
    data: currentOutfits().slice(0, 8),
    type: "look",
    selectedIds: state.studioLibrary.look.selectedIds
  });
}

function renderStudioLibrarySkeleton(type) {
  const count = type === "asset" ? 6 : 6;
  return Array.from({ length: count }, () => `
    <div class="studio-skeleton-card ${type === "asset" ? "is-asset" : "is-look"}" aria-hidden="true">
      <div class="studio-skeleton-media motion-skeleton"></div>
      <div class="studio-skeleton-copy">
        <span class="studio-skeleton-line is-title motion-skeleton"></span>
        <span class="studio-skeleton-line is-short motion-skeleton"></span>
        <span class="studio-skeleton-line is-time motion-skeleton"></span>
      </div>
    </div>
  `).join("");
}

function renderStudioLibraryCanvas({ title, subtitle, filters, actionLabel, searchLabel, data, type, selectedIds }) {
  const libraryState = state.studioLibrary[type];
  const activeFilter = libraryState.filter || "全部";
  const query = (libraryState.query || "").trim().toLowerCase();
  const filteredBase = data.filter(item => {
    if (activeFilter === "全部") return true;
    return item.type === activeFilter || item.tags?.includes(activeFilter) || item.type?.includes(activeFilter);
  }).filter(item => {
    if (!query) return true;
    return [item.title, item.type, item.time, ...(item.tags || [])].join(" ").toLowerCase().includes(query);
  });
  const filtered = libraryState.sortReversed ? [...filteredBase].reverse() : filteredBase;
  const isFiltered = activeFilter !== "全部" || Boolean(query);
  const gridAlignment = isFiltered ? "is-filtered is-left-aligned" : "";
  const canClose = ["picker", "canvas-more"].includes(state.workspaceMode);
  const loadingScope = type === "asset" ? "studio-asset-picker" : "studio-look-picker";
  const isLoading = state.loadingScope === loadingScope;
  return `
    <div class="studio-library-canvas">
      <header class="studio-library-heading">
        <div class="studio-library-heading-main">
          <div>
            <h2>${title}</h2>
            <p>${subtitle}</p>
          </div>
          ${canClose ? `<button class="studio-library-close" data-action="close-picker" aria-label="返回画布">${icon("close")}</button>` : ""}
        </div>
      </header>
      <div class="studio-library-filters">
        ${filters.map(filter => `<button class="${activeFilter === filter ? "is-active" : ""}" data-studio-filter="${type}" data-filter="${filter}">${filter}</button>`).join("")}
      </div>
      <div class="studio-library-actions">
        <button data-action="studio-sort" data-studio-type="${type}">${icon("sort")}按上传时间排序</button>
        <label>${icon("search")}<input data-studio-search="${type}" value="${escapeAttr(libraryState.query)}" placeholder="${escapeAttr(searchLabel)}"></label>
        <button data-action="${type === "asset" ? "upload-entry" : "new-entry"}">${icon("plus")}${actionLabel}</button>
      </div>
      <div class="studio-library-grid ${type === "asset" ? "is-assets" : "is-looks"} ${gridAlignment} ${isLoading ? "is-loading" : ""}">
        ${isLoading ? renderStudioLibrarySkeleton(type) : filtered.map(item => `
          ${type === "asset" ? `
            <article class="asset-card studio-library-card ${selectedIds.includes(item.id) ? "is-selected" : ""}" data-studio-select="${type}" data-id="${item.id}" role="button" tabindex="0">
              <span class="card-check" aria-hidden="true"></span>
              <span class="asset-like card-like" aria-hidden="true">${icon("heart")}</span>
              <div class="asset-media is-contain"><img src="${item.image}" alt=""></div>
              <div class="card-info">
                <div class="card-title">${item.title}</div>
                <div class="tag-row"><span class="tag">${item.type || "其他"}</span></div>
                <div class="card-time">${item.time}</div>
              </div>
            </article>
          ` : `
            <article class="look-card studio-library-card ${selectedIds.includes(item.id) ? "is-selected" : ""}" data-studio-select="${type}" data-id="${item.id}" role="button" tabindex="0">
              <span class="card-check" aria-hidden="true"></span>
              <span class="more-dot" aria-hidden="true">${icon("more")}</span>
              <div class="look-media ${item.mediaFit === "contain" ? "is-contain" : ""}"><img src="${item.image}" alt=""></div>
              <div class="look-footer">
                <div class="card-meta">
                  <div class="card-title-row"><span class="card-title">${item.title}</span><span class="card-time">${item.time}</span></div>
                  <div class="card-tag-line"><div class="tag-row">${(item.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>${renderPaletteDots(item)}</div>
                </div>
                <div class="card-action-row"><span class="continue-link">${icon("pencil")}继续编辑</span><span class="card-like" aria-hidden="true">${icon("heart")}</span></div>
              </div>
            </article>
          `}
        `).join("")}
      </div>
      ${isLoading || filtered.length ? "" : `<div class="empty-state">没有找到匹配内容</div>`}
    </div>
  `;
}

function renderPosterCanvasActions() {
  const plusTarget = state.workspaceMode === "canvas" ? "canvas-more" : state.workspaceMode === "annotation" ? "generated" : "annotation";
  return `
    <div class="floating-actions poster-actions">
      <button class="round-action ${state.workspaceMode === "annotation" ? "is-active" : ""}" data-workspace-mode="${plusTarget}" aria-label="添加批注">${icon("messagePlus")}</button>
      <button class="round-action ${currentStudioFavorite() ? "is-active" : ""}" data-action="toggle-favorite" aria-label="${currentStudioFavorite() ? "取消收藏" : "收藏"}" aria-pressed="${currentStudioFavorite()}">${icon("heart")}</button>
      <button class="round-action" data-action="download-demo" aria-label="下载">${icon("download")}</button>
    </div>
  `;
}

function renderViewSwitch() {
  return `
    <div class="view-switch">
      <button data-action="prev-view" aria-label="上一视图">${icon("chevronLeft")}</button>
      <span>${viewLabels[state.viewIndex]}</span>
      <button data-action="next-view" aria-label="下一视图">${icon("chevronRight")}</button>
    </div>
  `;
}

function renderFilmstrip() {
  const activeRecord = records[state.recordIndex] || records[0];
  const resultImages = activeRecord.resultImages || [IMAGES.studioFilmMain, IMAGES.studioFilmA, IMAGES.studioFilmB, IMAGES.studioFilmC];
  const activeFilmIndex = Math.max(0, Math.min(state.studioResultIndex, resultImages.length - 1));
  const filmItems = resultImages.map((src, index) => ({ src, index }));
  const orderedFilms = [filmItems[activeFilmIndex], ...filmItems.filter(item => item.index !== activeFilmIndex)];
  return `
    <div class="filmstrip">
      <div class="filmstrip-list filmstrip-thumbnails">
        ${orderedFilms.map(item => `<div class="film-thumb-slot"><button class="film-thumb ${item.index === activeFilmIndex ? "is-active" : ""}" data-action="select-studio-result" data-index="${item.index}" aria-label="查看${escapeAttr(activeRecord.name)}第${item.index + 1}套结果"><img src="${item.src}" alt=""></button></div>`).join("")}
      </div>
      <div class="filmstrip-list filmstrip-actions">
        <button class="round-action ${state.workspaceMode === "annotation" ? "is-active" : ""}" data-workspace-mode="${state.workspaceMode === "annotation" ? "outfit" : "annotation"}" aria-label="${state.workspaceMode === "annotation" ? "退出批注" : "添加批注"}">${icon("messagePlus")}</button>
        <button class="round-action ${currentStudioFavorite() ? "is-active" : ""}" data-action="toggle-favorite" aria-label="${currentStudioFavorite() ? "取消收藏" : "收藏"}" aria-pressed="${currentStudioFavorite()}">${icon("heart")}</button>
        <button class="round-action" data-action="download-demo" aria-label="下载">${icon("download")}</button>
      </div>
    </div>
  `;
}

function renderWorkspacePicker() {
  const pickItems = outfits.slice(0, 6);
  return `
    <div class="workspace-picker">
      <div></div>
      <aside class="picker-side">
        <div class="drawer-header">
          <h2 class="drawer-title">我的穿搭</h2>
          <button data-action="close-picker" aria-label="关闭">${icon("close")}</button>
        </div>
        <div class="picker-grid">
          ${pickItems.map(item => `
            <button class="picker-card" data-workspace-mode="outfit">
              <img src="${item.image}" alt="">
              <strong>${item.title}</strong>
              <span>${item.tags.join(" · ")}</span>
            </button>
          `).join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderLibrary(route) {
  const config = libraryConfig[route];
  const activeFilter = state.filters[route] || "全部";
  const selectedId = state.selected[route];
  const searchQuery = (state.searchQuery[route] || "").trim().toLowerCase();
  const routeData = route === "wardrobe" ? currentWardrobeItems() : route === "outfits" ? currentOutfits() : config.data;
  const data = routeData;
  const filteredBase = data.filter(item => {
    if (activeFilter === "全部") return true;
    return item.type === activeFilter || item.tags?.includes(activeFilter) || item.type?.includes(activeFilter);
  }).filter(item => {
    if (!searchQuery) return true;
    return [item.title, item.type, item.time, ...(item.tags || [])].join(" ").toLowerCase().includes(searchQuery);
  });
  const filtered = state.sortReversed[route] ? [...filteredBase].reverse() : filteredBase;
  const isFiltered = activeFilter !== "全部" || Boolean(searchQuery);
  const gridAlignment = isFiltered ? "is-filtered is-left-aligned" : "";
  const selectedItem = data.find(item => item.id === selectedId);
  const selectedIds = route === "wardrobe"
    ? state.selected.wardrobeIds
    : selectedId ? [selectedId] : [];
  const showDetail = selectedItem && (
    route === "wardrobe" ? state.detailOpen.wardrobe : state.detailOpen[route]
  );
  const showBatchToolbar = route === "wardrobe"
    ? selectedIds.length > 0
    : route === "outfits" && Boolean(selectedId);
  const posterDetailLayout = route === "posters" && showDetail;
  return `
    <section class="library-view">
      <div class="page-content ${showDetail ? "with-detail" : ""} ${posterDetailLayout ? "poster-detail-layout" : ""}">
        <header class="page-heading">
          <div>
            <h1>${config.title}</h1>
            <p>${config.subtitle}</p>
          </div>
          ${route === "inspiration"
            ? state.searchOpen.inspiration
              ? renderSearchPanel(route, config, "is-heading")
              : `<button class="search-pill" data-action="search-list">${icon("search")}<span>${config.search}</span></button>`
            : state.searchOpen[route]
              ? renderSearchPanel(route, config, "is-heading")
              : ""}
        </header>
        ${showBatchToolbar ? renderBatchToolbar(route, config) : renderToolbar(route, config)}
        <div class="grid ${config.card === "asset" ? "wardrobe-grid" : config.card === "poster" ? "poster-grid" : "look-grid"} ${gridAlignment}">
          ${filtered.map(item => renderCard(item, route, config.card, selectedIds.includes(item.id))).join("")}
        </div>
        ${filtered.length ? "" : `<div class="empty-state">当前筛选下暂无内容</div>`}
      </div>
      ${showDetail
        ? route === "wardrobe"
          ? renderWardrobeDetailPanel(selectedItem)
          : renderDetailPanel(selectedItem, route, detailTitleFor(route, selectedItem, config))
        : ""}
    </section>
  `;
}

function detailTitleFor(route, item, config) {
  if (route === "inspiration") return "灵感详情";
  return config.detailTitle;
}

function wardrobeDetailTags(item) {
  const color = item.title.match(/深棕|浅灰|灰色|棕色|银色|黑色|酒红|鹿纹/)?.[0] || "";
  return [item.type, color && color !== item.type ? color : ""].filter(Boolean);
}

function renderWardrobeDetailPanel(item) {
  const history = currentOutfits()
    .filter(outfit => (outfit.relatedIds || []).includes(item.id))
    .slice(0, 2);
  const tags = wardrobeDetailTags(item);
  return `
    <aside class="detail-panel is-wardrobe-detail">
      <div class="drawer-header">
        <h2 class="drawer-title">单品详情</h2>
        <button data-action="close-detail" aria-label="关闭">${icon("close")}</button>
      </div>
      <div class="drawer-preview"><img src="${item.image}" alt="${escapeAttr(item.title)}"></div>
      <div class="drawer-body">
        <div class="drawer-meta">
          <strong>${item.title}</strong>
          <div class="tag-row">${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="detail-list">
            <div class="detail-row"><span>保存时间</span><strong>${item.time}</strong></div>
          </div>
        </div>
        <div class="drawer-related wardrobe-history">
          <strong>包含它的历史穿搭</strong>
          <div class="wardrobe-history-list">
            ${history.length ? history.map(outfit => `
              <button class="wardrobe-history-item" data-action="open-wardrobe-related-outfit" data-outfit-id="${escapeAttr(outfit.id)}">
                <span class="wardrobe-history-thumb"><img src="${outfit.image}" alt="${escapeAttr(outfit.title)}"></span>
                <span class="wardrobe-history-copy">
                  <span class="wardrobe-history-title-row"><strong>${outfit.title}</strong><time>${outfit.time}</time></span>
                  <span class="tag-row">${(outfit.detailTags || outfit.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}</span>
                </span>
              </button>
            `).join("") : `<div class="empty-state">暂无包含此单品的历史穿搭</div>`}
          </div>
        </div>
        <div class="drawer-actions">
          <button class="btn btn-primary" data-action="bring-to-studio">带入工作室</button>
          <button class="btn btn-secondary" data-action="delete-detail">删除</button>
        </div>
      </div>
    </aside>
  `;
}

function renderToolbar(route, config) {
  const showActions = route !== "inspiration";
  return `
    <div class="toolbar-row">
      <div class="filter-tabs">
        ${config.filters.map(filter => `<button class="${state.filters[route] === filter ? "is-active" : ""}" data-filter-route="${route}" data-filter="${filter}">${filter}</button>`).join("")}
      </div>
      ${showActions ? `<div class="action-group">
        <button class="action-link" data-action="sort-list">${icon("sort")}按上传时间排序</button>
        <button class="action-link" data-action="search-list">${icon("search")}${config.search}</button>
        <button class="action-link" data-action="${route === "wardrobe" ? "upload-entry" : "new-entry"}" ${route === "wardrobe" ? "" : `data-create-kind="${route === "posters" ? "poster" : "outfit"}"`}>${icon("plus")}${route === "wardrobe" ? "上传衣服" : route === "posters" ? "新建海报" : "新建搭配"}</button>
      </div>` : ""}
    </div>
  `;
}

function renderSearchPanel(route, config, className = "") {
  return `
    <div class="library-search-panel ${className}">
      ${icon("search")}
      <input class="library-search-input" data-search-route="${route}" value="${escapeAttr(state.searchQuery[route])}" placeholder="${escapeAttr(config.search)}">
      ${state.searchQuery[route] ? `<button data-action="clear-search" aria-label="清除搜索">${icon("close")}</button>` : ""}
    </div>
  `;
}

function renderBatchToolbar(route = "wardrobe", config = libraryConfig.wardrobe) {
  const primaryLabel = route === "outfits" ? "回到工作室" : route === "wardrobe" ? "带入工作室" : "导入工作室";
  const searchLabel = config.search;
  const uploadLabel = route === "wardrobe" ? "上传衣服" : route === "posters" ? "新建海报" : "新建搭配";
  const showCreateAction = !(route === "outfits" && state.detailOpen.outfits);
  return `
    <div class="batch-toolbar ${route === "outfits" && state.detailOpen.outfits ? "is-detail-state" : ""}">
      <button class="btn btn-primary" data-action="bring-to-studio"><img class="bring-to-studio-icon" src="${IMAGES.bringToStudioIcon}" alt="">${primaryLabel}</button>
      ${route === "outfits" ? `<button class="batch-link is-wide" data-action="add-calendar">添加到日历</button>` : ""}
      <button class="batch-link" data-action="download-demo">下载</button>
      <button class="batch-link is-danger" data-action="delete-selected">删除</button>
      <div class="action-group" style="margin-left:auto">
        <button class="action-link" data-action="sort-list">${icon("sort")}按上传时间排序</button>
        <button class="action-link" data-action="search-list">${icon("search")}${searchLabel}</button>
        ${showCreateAction ? `<button class="action-link" data-action="${route === "wardrobe" ? "upload-entry" : "new-entry"}" ${route === "wardrobe" ? "" : `data-create-kind="${route === "posters" ? "poster" : "outfit"}"`}>${icon("plus")}${uploadLabel}</button>` : ""}
      </div>
    </div>
  `;
}

function renderCardContextMenu(item, route) {
  if (state.cardMenu.route !== route || state.cardMenu.id !== item.id) return "";
  const primaryLabel = route === "wardrobe" ? "带入工作室" : "查看详情";
  return `
    <span class="card-context-menu" data-card-menu role="menu" aria-label="${escapeAttr(item.title)}更多操作">
      <button type="button" role="menuitem" data-card-menu-action="open" data-card-route="${route}" data-id="${item.id}">${icon("pencil")}${primaryLabel}</button>
      <button type="button" role="menuitem" data-card-menu-action="duplicate" data-card-route="${route}" data-id="${item.id}">${icon("copy")}复制</button>
      <button type="button" class="is-danger" role="menuitem" data-card-menu-action="delete" data-card-route="${route}" data-id="${item.id}">${icon("trash")}${route === "inspiration" ? "不感兴趣" : "删除"}</button>
    </span>
  `;
}

function renderCard(item, route, cardType, selected) {
  if (cardType === "asset") {
    return `
      <article class="asset-card ${selected ? "is-selected" : ""}" data-select-route="${route}" data-id="${item.id}" role="button" tabindex="0">
        ${selected ? `<span class="card-check"></span>` : ""}
        <button type="button" class="asset-like card-like ${state.likedCards[item.id] ? "is-active" : ""}" data-card-like="${item.id}" aria-label="${state.likedCards[item.id] ? "取消收藏" : "收藏"}${escapeAttr(item.title)}">${icon("heart")}</button>
        <div class="asset-media ${route === "wardrobe" ? "is-contain" : ""}"><img src="${item.image}" alt=""></div>
        <div class="card-info">
          <div class="card-title">${item.title}</div>
          <div class="tag-row"><span class="tag">${item.type}</span></div>
          <div class="card-time">${item.time}</div>
        </div>
      </article>
    `;
  }
  if (cardType === "poster") {
    return `
      <article class="poster-card ${selected ? "is-selected" : ""}" data-select-route="${route}" data-id="${item.id}" role="button" tabindex="0">
        <span class="card-check"></span>
        <button type="button" class="more-dot ${state.cardMenu.id === item.id ? "is-active" : ""}" data-card-more="${item.id}" aria-label="${escapeAttr(item.title)}更多操作" aria-expanded="${state.cardMenu.id === item.id}">${icon("more")}</button>
        ${renderCardContextMenu(item, route)}
        <div class="poster-media ${item.mediaFit === "contain" ? "is-contain" : ""}"><img src="${item.image}" alt=""></div>
        <div class="poster-footer">
          <div class="card-meta">
            <div class="card-title-row"><span class="card-title">${item.title}</span><span class="card-time">${item.time}</span></div>
            <div class="card-tag-line"><div class="tag-row">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div></div>
          </div>
          <div class="card-action-row"><button type="button" class="continue-link" data-card-edit="${item.id}" data-card-kind="海报">${icon("pencil")}带回工作室</button><button type="button" class="card-like ${state.likedCards[item.id] ? "is-active" : ""}" data-card-like="${item.id}" aria-label="${state.likedCards[item.id] ? "取消收藏" : "收藏"}${escapeAttr(item.title)}" aria-pressed="${Boolean(state.likedCards[item.id])}">${icon("heart")}</button></div>
        </div>
      </article>
    `;
  }
  const media = `<div class="look-media ${item.mediaFit === "contain" ? "is-contain" : ""}"><img src="${item.image}" alt=""></div>`;
  return `
    <article class="look-card ${selected ? "is-selected" : ""}" data-select-route="${route}" data-id="${item.id}" role="button" tabindex="0">
      <span class="card-check"></span>
      <button type="button" class="more-dot ${state.cardMenu.id === item.id ? "is-active" : ""}" data-card-more="${item.id}" aria-label="${escapeAttr(item.title)}更多操作" aria-expanded="${state.cardMenu.id === item.id}">${icon("more")}</button>
      ${renderCardContextMenu(item, route)}
      ${media}
      <div class="look-footer">
        <div class="card-meta">
          <div class="card-title-row"><span class="card-title">${item.title}</span><span class="card-time">${item.time}</span></div>
          <div class="card-tag-line"><div class="tag-row">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>${renderPaletteDots(item)}</div>
        </div>
        <div class="card-action-row"><button type="button" class="continue-link" data-card-edit="${item.id}" data-card-kind="${escapeAttr(item.type || "穿搭")}">${icon("pencil")}${route === "inspiration" ? "带回工作室" : "继续编辑"}</button><button type="button" class="card-like ${state.likedCards[item.id] ? "is-active" : ""}" data-card-like="${item.id}" aria-label="${state.likedCards[item.id] ? "取消收藏" : "收藏"}${escapeAttr(item.title)}" aria-pressed="${Boolean(state.likedCards[item.id])}">${icon("heart")}</button></div>
      </div>
    </article>
  `;
}

function renderDetailPanel(item, route, title) {
  const isPoster = route === "posters" || item.type === "海报";
  const isOutfitDetail = route === "outfits";
  const secondaryLabel = route === "inspiration" ? "忽略" : "删除";
  const secondaryAction = route === "inspiration" ? "dismiss-detail" : "delete-detail";
  const primaryLabel = route === "outfits" ? "回到工作室" : "导入工作室";
  const detailName = isOutfitDetail ? `${item.title}搭配` : item.title;
  const previewImage = route === "inspiration"
    ? item.image
    : item.detailImage || item.fullImage || item.image;
  const detailTags = item.detailTags || item.tags;
  const activeWardrobe = currentWardrobeItems();
  const activeOutfits = currentOutfits();
  const relatedSource = isOutfitDetail ? activeWardrobe : activeOutfits;
  const fallbackRelatedIds = state.activeModel === "male"
    ? (isOutfitDetail ? ["male-cloth-10", "male-cloth-9", "male-cloth-7"] : ["male-outfit-1", "male-outfit-2", "male-outfit-3"])
    : (isOutfitDetail ? ["cloth-2", "cloth-6", "cloth-5"] : ["outfit-1", "outfit-2", "outfit-3"]);
  const relatedIds = item.relatedIds || fallbackRelatedIds;
  const relatedById = new Map(relatedSource.map(related => [related.id, related]));
  const primaryRelatedItems = relatedIds
    .map(id => relatedById.get(id))
    .filter(Boolean);
  const relatedItemIds = new Set(primaryRelatedItems.map(related => related.id));
  const relatedExtras = relatedSource
    .filter(related => !relatedItemIds.has(related.id))
    .slice(0, 3);
  const allRelatedItems = [...primaryRelatedItems, ...relatedExtras];
  const relatedItems = route === "inspiration"
    ? primaryRelatedItems
    : state.relatedExpanded[route] ? allRelatedItems : primaryRelatedItems;
  return `
    <aside class="detail-panel ${isOutfitDetail ? "is-outfit-detail" : ""} ${route === "inspiration" ? "is-inspiration-detail" : ""} ${route === "posters" ? "is-poster-detail" : ""}">
      <div class="drawer-header">
        <h2 class="drawer-title">${title}</h2>
        <button data-action="close-detail" aria-label="关闭">${icon("close")}</button>
      </div>
      <div class="drawer-preview ${isPoster ? "is-poster-preview" : ""}"><img src="${previewImage}" alt=""></div>
      <div class="drawer-body">
        <div class="drawer-meta">
          <strong>${detailName}</strong>
          <div class="tag-row">${detailTags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          ${isOutfitDetail ? `
            <div class="detail-list">
              <div class="detail-row"><span>保存时间</span><strong>${item.time}</strong></div>
              <div class="detail-row"><span>来源</span><strong>工作室</strong></div>
              <div class="detail-row"><span>包含单品</span><strong>${state.activeModel === "male" ? "3件" : "6件"}</strong></div>
              <div class="detail-row"><span>使用模特</span><strong>${state.activeModel === "male" ? "阿亮（默认模特）" : "小遥（默认模特）"}</strong></div>
            </div>
          ` : `
            <div class="prompt-text">
              ${item.detailCopy || (isPoster ? "这张海报以人物穿搭为主视觉，结合拼贴、留白和辅助标注，形成适合收藏的编辑化版面。" : "这套搭配以外松内简为基础，保留清晰的层次感，同时用低饱和内搭降低沉闷感，适合日常通勤和约会场景。")}
            </div>
          `}
        </div>
        <div class="drawer-related">
          <strong>${isOutfitDetail ? "相关单品" : "相关穿搭"}</strong>
          <div class="related-row ${state.relatedExpanded[route] ? "is-expanded" : ""}">
            ${relatedItems.map(related => `<button class="related-thumb ${state.relatedSelected[route] === related.id ? "is-selected" : ""}" data-related-item="${related.id}" aria-label="${escapeAttr(related.title)}"><img src="${related.studioImage || related.image}" alt=""></button>`).join("")}
            ${route === "inspiration" || state.relatedExpanded[route] || relatedExtras.length === 0 ? "" : `<button class="related-more" data-related-item="more">+${relatedExtras.length}</button>`}
          </div>
        </div>
        <div class="drawer-actions">
          <button class="btn btn-primary" data-action="bring-to-studio">${primaryLabel}</button>
          ${isOutfitDetail ? `<button class="btn btn-secondary calendar-detail-action" data-action="add-calendar">添加到日历</button>` : ""}
          <button class="btn btn-secondary" data-action="${secondaryAction}">${secondaryLabel}</button>
        </div>
      </div>
    </aside>
  `;
}

function renderProfile() {
  return `
    <section class="profile-content">
      <header class="profile-header">
        <div class="profile-avatar"><img src="${IMAGES.profileAvatar}" alt=""></div>
        <div class="profile-name">知遥</div>
        <div class="profile-id"><span>@zhiyao</span><em>Pro</em></div>
      </header>
      <div class="stats-row">
        ${[
          ["衣物单品数", "56件"],
          ["穿搭数", "7套"],
          ["模特数", "3个"],
          ["海报数", "3个"],
          ["使用天数", "21天"]
        ].map(([label, value]) => `<div class="stat-card"><strong>${label}</strong><span>${value}</span></div>`).join("")}
        <div class="stat-card usage-card">
          <strong>衣橱使用情况</strong>
          <div class="usage-track"><span></span></div>
          <div class="usage-labels"><span>0%</span><span>60%</span><span>100%</span></div>
        </div>
      </div>
      <section class="profile-section">
        <h2>最近穿搭</h2>
        <div class="history-strip">
          <button class="history-arrow" data-action="prev-history" aria-label="上一组">${icon("chevronLeft")}</button>
          ${renderHistoryItems()}
          <button class="history-arrow" data-action="next-history" aria-label="下一组">${icon("chevronRight")}</button>
        </div>
      </section>
      <section class="profile-section" data-section="profile-calendar">
        <h2>穿搭日历</h2>
        <div class="calendar-frame">
          <div class="calendar-weekdays">
            ${["周一", "周二", "周三", "周四", "周五", "周六", "周日"].map(day => `<div>${day}</div>`).join("")}
          </div>
          <div class="calendar">
            ${profileCalendarDays.map(({ day, muted }) => {
              const calendarOutfit = muted ? null : calendarOutfitForDay(day);
              const Cell = calendarOutfit ? "button" : "div";
              return `
                <${Cell}${calendarOutfit ? " type=\"button\"" : ""} class="calendar-cell ${muted ? "is-muted" : ""} ${calendarOutfit ? "has-look" : ""} ${calendarOutfit?.isUserAdded ? "is-user-added" : ""}" data-calendar-day="${day}" ${calendarOutfit ? `data-action="open-calendar-outfit" data-calendar-outfit-id="${escapeAttr(calendarOutfit.outfitId)}" title="${escapeAttr(calendarOutfit.title)}" aria-label="打开${escapeAttr(calendarOutfit.title)}详情"` : ""}>
                  <span class="calendar-day">${day}</span>
                  ${calendarOutfit ? `<div class="calendar-look"><img src="${calendarOutfit.image}" alt="${escapeAttr(calendarOutfit.title)}"></div>` : ""}
                  ${calendarOutfit ? `<span class="calendar-remove" data-action="remove-calendar-entry" data-calendar-day="${day}" role="button" tabindex="0" title="从日历移除" aria-label="从日历移除">${icon("close")}</span>` : ""}
                </${Cell}>
              `;
            }).join("")}
          </div>
        </div>
      </section>
    </section>
  `;
}

function syncSearchInput(input, shouldRender = true) {
  if (!input) return;
  const route = input.dataset.searchRoute;
  if (route) {
    state.searchQuery[route] = input.value;
    searchFocusRoute = route;
    if (shouldRender) renderMainArea();
    return;
  }
  const type = input.dataset.studioSearch;
  if (type) {
    state.studioLibrary[type].query = input.value;
    studioSearchFocusType = type;
    if (shouldRender) renderMainArea();
  }
}

document.addEventListener("compositionstart", (event) => {
  if (event.target.closest?.("[data-search-route], [data-studio-search]")) composingInput = true;
});

document.addEventListener("compositionend", (event) => {
  const input = event.target.closest?.("[data-search-route], [data-studio-search]");
  if (!input) return;
  composingInput = false;
  syncSearchInput(input);
});

document.addEventListener("input", (event) => {
  const promptInput = event.target.closest("[data-studio-prompt]");
  if (promptInput) {
    state.studioPrompt = promptInput.value;
    return;
  }
  const editInput = event.target.closest("[data-studio-edit-input]");
  if (editInput) {
    state.studioEdit.prompt = editInput.value;
    return;
  }
  const input = event.target.closest("[data-search-route], [data-studio-search]");
  if (input) {
    syncSearchInput(input, !(event.isComposing || composingInput));
  }
});

function annotationPoint(event, bounds) {
  return {
    x: Math.max(0, Math.min(bounds.width, event.clientX - bounds.left)),
    y: Math.max(0, Math.min(bounds.height, event.clientY - bounds.top))
  };
}

function updateAnnotationDrag(surface, point) {
  if (!annotationDrag) return;
  const start = annotationDrag.start;
  const left = Math.min(start.x, point.x);
  const top = Math.min(start.y, point.y);
  const width = Math.abs(point.x - start.x);
  const height = Math.abs(point.y - start.y);
  const bounds = annotationDrag.bounds;
  state.annotation.rect = {
    left: (left / bounds.width) * 100,
    top: (top / bounds.height) * 100,
    width: (width / bounds.width) * 100,
    height: (height / bounds.height) * 100
  };
  updateAnnotationSurface(surface);
}

document.addEventListener("pointerdown", (event) => {
  if (state.workspaceMode !== "annotation" || event.button !== 0) return;
  const surface = event.target.closest("[data-annotation-surface]");
  if (!surface || event.target.closest("button, input, [data-annotation-ui]")) return;
  const bounds = surface.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  annotationDrag = {
    surface,
    pointerId: event.pointerId,
    bounds,
    start: annotationPoint(event, bounds)
  };
  state.annotation = { rect: null, note: "", editorOpen: false };
  surface.classList.add("is-dragging");
  surface.setPointerCapture?.(event.pointerId);
  event.preventDefault();
});

document.addEventListener("pointermove", (event) => {
  if (!annotationDrag || annotationDrag.pointerId !== event.pointerId) return;
  updateAnnotationDrag(annotationDrag.surface, annotationPoint(event, annotationDrag.bounds));
  event.preventDefault();
});

document.addEventListener("pointerup", (event) => {
  if (!annotationDrag || annotationDrag.pointerId !== event.pointerId) return;
  const { surface, bounds } = annotationDrag;
  updateAnnotationDrag(surface, annotationPoint(event, bounds));
  surface.classList.remove("is-dragging");
  const rect = state.annotation.rect;
  annotationDrag = null;
  if (!rect || rect.width < 2 || rect.height < 2) {
    resetAnnotationState();
    updateAnnotationSurface(surface);
    return;
  }
  state.annotation.editorOpen = true;
  updateAnnotationSurface(surface);
  window.requestAnimationFrame(() => surface.querySelector("[data-annotation-input]")?.focus());
  event.preventDefault();
});

document.addEventListener("pointercancel", () => {
  if (!annotationDrag) return;
  const surface = annotationDrag.surface;
  surface.classList.remove("is-dragging");
  resetAnnotationState();
  updateAnnotationSurface(surface);
});

document.addEventListener("click", (event) => {
  const hashAtStart = window.location.hash;
  let transientMenuClosed = false;
  if (state.mobileNavOpen && !event.target.closest(".sidebar")) {
    state.mobileNavOpen = false;
    transientMenuClosed = true;
  }
  if (state.modelMenuOpen && !event.target.closest(".user-area")) {
    state.modelMenuOpen = false;
    transientMenuClosed = true;
  }
  if (state.cardMenu.id && !event.target.closest("[data-card-more], [data-card-menu]")) {
    state.cardMenu = { route: "", id: "" };
    transientMenuClosed = true;
  }

  if (state.uploadModal.open && event.target.matches(".upload-overlay")) {
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    showFeedback("已取消上传");
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  if (state.calendarModal.open && event.target.matches(".calendar-overlay")) {
    state.calendarModal.open = false;
    showFeedback("已取消添加到日历");
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  if (state.workspaceMode === "annotation" && event.target.closest("[data-annotation-surface]") && !event.target.closest("[data-action]")) {
    return;
  }

  const splashLook = event.target.closest(".splash-look");
  if (splashLook && state.screen === "splash") {
    spinSplashTo(Number(splashLook.dataset.index));
    return;
  }

  const cardMenuAction = event.target.closest("[data-card-menu-action]");
  if (cardMenuAction) {
    const action = cardMenuAction.dataset.cardMenuAction;
    const route = cardMenuAction.dataset.cardRoute;
    const id = cardMenuAction.dataset.id;
    const item = collectionForRoute(route)?.find(entry => entry.id === id);
    state.cardMenu = { route: "", id: "" };
    if (!item) {
      showFeedback("内容不存在或已删除");
      render();
      return;
    }
    if (action === "duplicate") {
      const copy = duplicateCardContent(route, id);
      showFeedback(copy ? `已复制${item.title}` : "复制失败");
    } else if (action === "delete") {
      const deletedTitle = deleteCardContent(route, id);
      window.location.hash = route;
      showFeedback(deletedTitle ? `${route === "inspiration" ? "已减少推荐：" : "已删除"}${deletedTitle}` : "删除失败");
    } else if (route === "wardrobe") {
      state.selected.wardrobe = id;
      state.screen = "product";
      state.route = "studio";
      state.workspaceTab = "穿搭";
      state.workspaceMode = "outfit";
      state.workspaceMenu = "";
      window.location.hash = "studio";
      showFeedback(`已将${item.title}带入工作室`);
    } else {
      state.selected[route] = id;
      state.detailOpen[route] = true;
      window.location.hash = `${route}-detail`;
      showFeedback(route === "posters" ? "已打开海报详情" : route === "outfits" ? "已打开搭配详情" : "已打开灵感详情");
    }
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  const cardLike = event.target.closest("[data-card-like]");
  if (cardLike) {
    const id = cardLike.dataset.cardLike;
    state.likedCards[id] = !state.likedCards[id];
    showFeedback(state.likedCards[id] ? "已收藏此内容" : "已取消收藏");
    render();
    return;
  }

  const cardMore = event.target.closest("[data-card-more]");
  if (cardMore) {
    const card = cardMore.closest("[data-select-route]");
    const route = card?.dataset.selectRoute || state.route;
    const id = cardMore.dataset.cardMore;
    const willOpen = state.cardMenu.route !== route || state.cardMenu.id !== id;
    state.cardMenu = willOpen ? { route, id } : { route: "", id: "" };
    showFeedback(willOpen ? "更多操作已打开" : "更多操作已关闭");
    render();
    return;
  }

  const cardEdit = event.target.closest("[data-card-edit]");
  if (cardEdit) {
    const isPoster = cardEdit.dataset.cardKind === "海报";
    state.screen = "product";
    state.route = "studio";
    state.workspaceTab = isPoster ? "海报" : "穿搭";
    state.workspaceMode = isPoster ? "generated" : "outfit";
    state.workspacePicker = false;
    state.workspaceMenu = "";
    window.location.hash = isPoster ? "studio-generated" : "studio";
    showFeedback(isPoster ? "已带回海报工作室" : "已带回穿搭工作室");
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  const target = event.target.closest("button, [data-select-route], [data-studio-select], [data-action]");
  if (!target) {
    if (transientMenuClosed) render();
    return;
  }

  const modelId = target.dataset.modelId;
  if (modelId) {
    state.activeModel = modelId;
    state.modelMenuOpen = false;
    if (isMobileLayout()) state.mobileNavOpen = false;
    state.selected.wardrobe = "";
    state.selected.wardrobeIds = [];
    state.selected.outfits = "";
    state.selected.posters = "";
    state.selected.inspiration = "";
    state.detailOpen.outfits = false;
    state.detailOpen.posters = false;
    state.detailOpen.inspiration = false;
    state.detailOpen.wardrobe = false;
    state.detailClosed.wardrobe = false;
    state.filters.wardrobe = "全部";
    state.filters.outfits = "全部";
    state.searchQuery.wardrobe = "";
    state.searchQuery.outfits = "";
    if (state.route === "studio") state.studioAttachments.model = true;
    if (["wardrobe", "outfits"].includes(state.route)) {
      state.studioLibrary.asset.selectedIds = [];
      state.studioLibrary.look.selectedIds = [];
      window.location.hash = state.sidebarCollapsed ? `${state.route}-collapsed` : state.route;
    }
    showFeedback(state.route === "studio"
      ? "已添加" + currentModelProfile().name + "模特"
      : modelId === "male" ? "已切换为阿亮的衣橱" : "已切换为知遥的衣橱");
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  const posterOption = target.dataset.posterOption;
  if (posterOption) {
    const nextValue = target.dataset.value || "";
    const isDeselecting = state.posterOptions[posterOption] === nextValue;
    state.posterOptions[posterOption] = isDeselecting ? "" : nextValue;
    const activePosterRecord = posterRecords[state.recordIndex] || posterRecords[0];
    const selectedPosterOptions = [
      state.posterOptions.size,
      state.posterOptions.style,
      state.posterOptions.template
    ].filter(Boolean);
    state.studioPrompt = activePosterRecord.prompt + (selectedPosterOptions.length
      ? ` 当前预设：${selectedPosterOptions.join("、")}。`
      : "");
    state.lastPosterPrompt = state.studioPrompt;
    if (posterOption === "template" && !isDeselecting) {
      const templateIndex = ["Lookbook排版", "随机拼贴排版", "卡片搭配排版", "手写批注", "3D头像", "漫画", "涂鸦"].indexOf(nextValue);
      if (templateIndex >= 0) state.posterTemplatePage = Math.floor(templateIndex / 3);
    }
    const labelMap = { size: "尺寸", style: "版面风格", template: "模板" };
    showFeedback(isDeselecting
      ? `已取消${labelMap[posterOption] || "选项"}`
      : `已选择${labelMap[posterOption] || "选项"}：${state.posterOptions[posterOption]}`);
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  const studioFilter = target.dataset.studioFilter;
  if (studioFilter) {
    state.studioLibrary[studioFilter].filter = target.dataset.filter || "全部";
    showFeedback(`已筛选${state.studioLibrary[studioFilter].filter}`);
    render({
      animateSelectors: [".studio-library-grid > .studio-library-card"],
      images: false
    });
    return;
  }

  const studioSelect = target.dataset.studioSelect;
  if (studioSelect) {
    const id = target.dataset.id;
    const selectedIds = state.studioLibrary[studioSelect].selectedIds;
    const index = selectedIds.indexOf(id);
    if (index >= 0) selectedIds.splice(index, 1);
    else selectedIds.push(id);
    if (state.studioEdit.open) {
      const item = studioSelect === "asset"
        ? currentWardrobeItems().find(entry => entry.id === id)
        : currentOutfits().find(entry => entry.id === id);
      const editId = `${studioSelect}-${id}`;
      if (item && index < 0) {
        state.studioEdit.attachments.push({
          id: editId,
          image: studioSelect === "look" ? item.studioImage || item.fullImage || item.image : item.image
        });
      } else if (index >= 0) {
        state.studioEdit.attachments = state.studioEdit.attachments.filter(entry => entry.id !== editId);
      }
    }
    showFeedback(index >= 0 ? "已取消选择" : "已选择内容");
    if (state.studioEdit.open) renderMainArea();
    else render();
    return;
  }

  const removeStudioAsset = target.dataset.removeStudioAsset;
  if (removeStudioAsset) {
    const selectedIds = state.studioLibrary.asset.selectedIds;
    const index = selectedIds.indexOf(removeStudioAsset);
    if (index >= 0) selectedIds.splice(index, 1);
    showFeedback("已从生成内容中移除单品");
    render();
    return;
  }

  const removeUploadedItem = target.dataset.removeUploadedItem;
  if (removeUploadedItem) {
    state.studioAttachments.uploadedItems = (state.studioAttachments.uploadedItems || [])
      .filter(item => item.id !== removeUploadedItem);
    render();
    return;
  }

  const removeStudioLook = target.dataset.removeStudioLook;
  if (removeStudioLook) {
    const selectedIds = state.studioLibrary.look.selectedIds;
    const index = selectedIds.indexOf(removeStudioLook);
    if (index >= 0) selectedIds.splice(index, 1);
    showFeedback("已从生成内容中移除穿搭");
    render();
    return;
  }

  const relatedItem = target.dataset.relatedItem;
  if (relatedItem) {
    if (relatedItem === "more") {
      state.relatedExpanded[state.route] = true;
      showFeedback(state.route === "outfits" ? "已展开更多相关单品" : "已展开更多相关穿搭");
    } else {
      state.relatedSelected[state.route] = relatedItem;
      const related = currentWardrobeItems().find(item => item.id === relatedItem) || currentOutfits().find(item => item.id === relatedItem);
      showFeedback(related ? `已选中${related.title}` : "已选中相关内容");
    }
    render();
    return;
  }

  const route = target.dataset.route;
  if (route) {
    cancelDemoLoading();
    if (state.route !== route) clearLibrarySelectionState();
    state.modelMenuOpen = false;
    state.mobileNavOpen = false;
    if (!isMobileLayout() && !isMacDevice) state.sidebarCollapsed = false;
    state.screen = "product";
    state.route = route;
    if (route === "studio") {
      state.workspaceTab = "穿搭";
      state.workspaceMode = "outfit";
      state.mobileStudioView = "chat";
      state.workspaceMenu = "";
      state.workspacePicker = false;
    }
    queueDemoImagePreloads(route);
    window.location.hash = state.sidebarCollapsed ? `${route}-collapsed` : route;
    renderUnlessHashChanged(hashAtStart);
    return;
  }

  const action = target.dataset.action;
  if (action === "edit-studio-message") {
    openStudioMessageEditor();
    renderStudioFeedOnly();
    window.requestAnimationFrame(() => document.querySelector("[data-studio-edit-input]")?.focus());
    return;
  } else if (action === "cancel-studio-edit") {
    closeStudioMessageEditor();
    renderStudioFeedOnly();
    return;
  } else if (action === "remove-studio-edit-attachment") {
    const attachmentId = target.dataset.editAttachment;
    state.studioEdit.attachments = state.studioEdit.attachments.filter(item => item.id !== attachmentId);
    renderStudioFeedOnly();
    return;
  } else if (action === "open-studio-edit-picker") {
    state.workspaceMenu = "";
    state.studioLibrary.asset.selectedIds = [];
    state.workspaceMode = "picker";
    state.mobileStudioView = "result";
    beginDemoLoading("studio-asset-picker");
    replaceHashWithoutRender("studio-picker");
    renderMainArea();
    return;
  } else if (action === "save-studio-edit") {
    const activeRecord = records[state.recordIndex] || records[0];
    const nextPrompt = state.studioEdit.prompt.trim();
    activeRecord.prompt = nextPrompt;
    activeRecord.thumbs = state.studioEdit.attachments.map(item => item.image);
    state.studioPrompt = activeRecord.prompt;
    state.lastStudioPrompt = activeRecord.prompt;
    closeStudioMessageEditor();
    showFeedback("已更新这条消息，正在重新生成");
    beginDemoLoading("studio-generation", 720);
    renderStudioFeedOnly({ updateCanvas: true });
    return;
  } else if (action === "remove-calendar-entry") {
    const day = Number(target.dataset.calendarDay || 0);
    if (day) {
      state.calendarRemovedDays = [...new Set([...state.calendarRemovedDays, day])];
    }
    if (state.calendarEntry?.day === day) {
      state.calendarEntry = null;
    }
    showFeedback("已从日历移除穿搭");
    renderMainArea();
    return;
  } else if (action === "open-calendar-outfit") {
    const outfitId = target.dataset.calendarOutfitId;
    const outfit = currentOutfits().find(item => item.id === outfitId);
    if (!outfit) {
      showFeedback("穿搭不存在或已删除");
      renderUnlessHashChanged(hashAtStart);
      return;
    }
    state.screen = "product";
    state.route = "outfits";
    state.selected.outfits = outfit.id;
    state.detailOpen.outfits = true;
    state.detailClosed.outfits = false;
    state.calendarModal.open = false;
    window.location.hash = "outfits-detail";
    showFeedback(`已打开${outfit.title}搭配详情`);
  } else if (action === "open-wardrobe-related-outfit") {
    const outfitId = target.dataset.outfitId;
    const outfit = currentOutfits().find(item => item.id === outfitId);
    if (!outfit) {
      showFeedback("穿搭不存在或已删除");
      renderUnlessHashChanged(hashAtStart);
      return;
    }
    state.screen = "product";
    state.route = "outfits";
    state.selected.outfits = outfit.id;
    state.detailOpen.outfits = true;
    state.detailClosed.outfits = false;
    state.detailOpen.wardrobe = false;
    state.calendarModal.open = false;
    window.location.hash = "outfits-detail";
    showFeedback(`已打开${outfit.title}搭配详情`);
  } else if (action === "select-calendar-day") {
    if (!target.disabled) {
      state.calendarModal.selectedDay = Number(target.dataset.calendarDay || 8);
      updateCalendarPickerSelection(state.calendarModal.selectedDay);
    }
    return;
  } else if (action === "close-calendar-picker") {
    state.calendarModal.open = false;
    showFeedback("已取消添加到日历");
  } else if (action === "save-calendar-picker") {
    const selectedOutfit = currentOutfits().find(item => item.id === state.calendarModal.outfitId);
    if (selectedOutfit) {
      state.calendarEntry = {
        outfitId: selectedOutfit.id,
        title: selectedOutfit.title,
        image: selectedOutfit.calendarImage || selectedOutfit.fullImage || selectedOutfit.image,
        day: state.calendarModal.selectedDay
      };
      state.calendarRemovedDays = state.calendarRemovedDays.filter(day => day !== state.calendarModal.selectedDay);
      state.calendarModal.open = false;
      showFeedback(`已添加到${state.calendarModal.selectedDay}日日历`);
    }
  } else if (action === "enter-studio") {
    state.screen = "product";
    state.route = "studio";
    state.workspaceMode = "outfit";
    state.workspaceTab = "穿搭";
    state.mobileStudioView = "chat";
    state.workspaceMenu = "";
    window.location.hash = "studio";
  } else if (action === "enter-wardrobe") {
    state.screen = "product";
    state.route = "wardrobe";
    window.location.hash = "wardrobe";
  } else if (action === "go-splash") {
    cancelDemoLoading();
    state.screen = "splash";
    state.route = "studio";
    state.sidebarCollapsed = false;
    state.mobileNavOpen = false;
    state.modelMenuOpen = false;
    replaceHashWithoutRender("");
    showFeedback("");
  } else if (action === "toggle-sidebar") {
    state.modelMenuOpen = false;
    if (isMobileLayout()) {
      state.mobileNavOpen = !state.mobileNavOpen;
      showFeedback(state.mobileNavOpen ? "导航已展开" : "导航已收起");
    } else {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      if (isMacDevice && !state.sidebarCollapsed) {
        state.detailOpen.inspiration = false;
        state.detailOpen.wardrobe = false;
        state.detailOpen.outfits = false;
        state.detailOpen.posters = false;
      }
      window.location.hash = state.sidebarCollapsed ? `${state.route}-collapsed` : state.route;
      showFeedback(state.sidebarCollapsed ? "已收起侧栏" : "已展开侧栏");
    }
  } else if (action === "open-mobile-result") {
    state.mobileStudioView = "result";
    state.workspaceMenu = "";
    showFeedback("已打开生成结果");
  } else if (action === "close-mobile-result") {
    state.mobileStudioView = "chat";
    state.workspaceMenu = "";
    showFeedback("已返回聊天");
  } else if (action === "toggle-model-menu") {
    state.modelMenuOpen = !state.modelMenuOpen;
  } else if (action === "close-picker") {
    cancelDemoLoading();
    state.workspacePicker = false;
    state.workspaceMode = state.workspaceTab === "海报" ? "canvas" : "outfit";
    state.mobileStudioView = "chat";
    state.workspaceMenu = "";
    window.location.hash = state.workspaceTab === "海报" ? "studio-canvas" : "studio";
  } else if (action === "close-detail") {
    if (state.route === "wardrobe") {
      state.detailOpen.wardrobe = false;
      state.detailClosed.wardrobe = true;
      window.location.hash = "wardrobe-selected";
      showFeedback("已关闭详情");
    } else if (["inspiration", "outfits", "posters"].includes(state.route)) {
      state.detailOpen[state.route] = false;
      state.detailClosed[state.route] = true;
      window.location.hash = `${state.route}-selected`;
      showFeedback("已关闭详情");
    } else if (state.route !== "wardrobe") {
      state.detailOpen[state.route] = false;
      state.selected[state.route] = "";
      window.location.hash = state.route;
    }
  } else if (action === "dismiss-detail") {
    state.detailOpen.inspiration = false;
    state.selected.inspiration = "";
    window.location.hash = "inspiration";
    showFeedback("已忽略此灵感");
  } else if (action === "delete-detail" || action === "delete-selected") {
    const deletedTitle = deleteSelectedContent(state.route);
    window.location.hash = state.route;
    showFeedback(deletedTitle ? `已删除${deletedTitle}` : "请先选择内容");
  } else if (action === "clear-wardrobe-selection") {
    state.selected.wardrobe = "";
    state.selected.wardrobeIds = [];
    state.detailOpen.wardrobe = false;
    state.detailClosed.wardrobe = false;
    window.location.hash = "wardrobe";
    showFeedback("已清除选择");
  } else if (action === "bring-to-studio") {
    const wardrobeItemId = state.route === "wardrobe" ? state.selected.wardrobe : "";
    state.screen = "product";
    state.route = "studio";
    state.workspaceMode = "outfit";
    state.mobileStudioView = "chat";
    state.workspacePicker = false;
    state.workspaceTab = "穿搭";
    state.workspaceMenu = "";
    if (wardrobeItemId) state.studioLibrary.asset.selectedIds = [wardrobeItemId];
    window.location.hash = "studio";
    showFeedback("已带回工作室");
  } else if (action === "toggle-studio-add-menu") {
    const menuKey = state.workspaceTab === "海报" ? "poster" : "outfit";
    state.workspaceMenu = state.workspaceMenu === menuKey ? "" : menuKey;
  } else if (action === "open-studio-picker") {
    state.workspaceMenu = "";
    if (state.workspaceTab === "海报") {
      state.studioLibrary.look.selectedIds = [];
      state.studioLibrary.asset.selectedIds = [];
    }
    state.workspaceMode = "picker";
    state.mobileStudioView = "result";
    beginDemoLoading("studio-asset-picker");
    window.location.hash = state.workspaceTab === "海报" ? "studio-picker-poster" : "studio-picker";
  } else if (action === "open-studio-outfit-picker") {
    state.workspaceMenu = "";
    if (state.workspaceTab === "海报") {
      state.studioLibrary.asset.selectedIds = [];
      state.studioLibrary.look.selectedIds = [];
    }
    state.workspaceMode = "canvas-more";
    state.mobileStudioView = "result";
    beginDemoLoading("studio-look-picker");
    window.location.hash = "studio-canvas-outfit-picker";
  } else if (action === "choose-studio-asset") {
    state.workspaceMenu = "";
    state.workspaceMode = state.workspaceTab === "海报" ? "canvas" : "outfit";
    state.mobileStudioView = "chat";
    window.location.hash = state.workspaceTab === "海报" ? "studio-canvas" : "studio";
  } else if (action === "open-background-upload") {
    state.workspaceMenu = "";
    state.uploadModal.open = true;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "background";
    state.uploadModal.origin = "studio";
    state.uploadModal.saveMenuOpen = false;
    showFeedback("");
  } else if (action === "open-model-picker") {
    state.workspaceMenu = "";
    state.modelMenuOpen = true;
    if (isMobileLayout()) state.mobileNavOpen = true;
  } else if (action === "poster-template-prev" || action === "poster-template-next") {
    const pageCount = Math.ceil(7 / 3);
    const step = action === "poster-template-next" ? 1 : -1;
    state.posterTemplatePage = Math.max(0, Math.min(state.posterTemplatePage + step, pageCount - 1));
    renderUnlessHashChanged(hashAtStart);
    return;
  } else if (action === "record") {
    state.recordIndex = Number(target.dataset.index || 0);
    state.studioResultIndex = 0;
    closeStudioMessageEditor();
    resetAnnotationState();
    state.studioPrompt = "";
    state.lastStudioPrompt = "";
    state.lastPosterPrompt = "";
    if (state.workspaceTab === "海报") {
      cancelDemoLoading();
      state.workspaceMode = "generated";
      state.mobileStudioView = "result";
      state.workspaceMenu = "";
      state.mobileNavOpen = false;
      replaceHashWithoutRender("studio-generated");
    }
    const activeRecord = currentStudioRecords()[state.recordIndex] || currentStudioRecords()[0];
    queueDemoImagePreloads("studio");
    if (state.workspaceTab === "海报") {
      state.posterOptions = {
        size: activeRecord.size || "",
        style: activeRecord.style || "",
        template: activeRecord.template || ""
      };
      state.posterTemplatePage = Math.max(0, Math.floor(["Lookbook排版", "随机拼贴排版", "卡片搭配排版", "手写批注", "3D头像", "漫画", "涂鸦"].indexOf(activeRecord.template) / 3));
    }
    showFeedback(`已切换到${activeRecord.name}`);
  } else if (action === "select-studio-result") {
    const activeRecord = records[state.recordIndex] || records[0];
    const resultImages = activeRecord.resultImages || [];
    state.studioResultIndex = Math.max(0, Math.min(Number(target.dataset.index || 0), Math.max(resultImages.length - 1, 0)));
    renderStudioCanvasPanelOnly();
    showFeedback(`已查看${activeRecord.name}第${state.studioResultIndex + 1}套结果`);
    syncToastOnly();
    return;
  } else if (action === "add-scene") {
    state.studioAttachments.scene = !state.studioAttachments.scene;
    state.workspaceMenu = "";
    window.location.hash = "studio";
    showFeedback(state.studioAttachments.scene ? "已添加场景" : "已移除场景");
  } else if (action === "add-model") {
    state.studioAttachments.model = !state.studioAttachments.model;
    state.workspaceMenu = "";
    window.location.hash = "studio";
    showFeedback(state.studioAttachments.model ? `已添加${currentModelProfile().name}模特` : "已移除模特");
  } else if (action === "remove-studio-reference") {
    const reference = target.dataset.reference;
    if (reference && reference in state.studioAttachments) state.studioAttachments[reference] = false;
    showFeedback(reference === "model" ? "已移除模特" : "已移除场景");
  } else if (action === "toggle-favorite") {
    const favoriteKey = studioFavoriteKey();
    state.favoriteByView[favoriteKey] = !state.favoriteByView[favoriteKey];
    showFeedback(state.favoriteByView[favoriteKey] ? "已收藏" : "已取消收藏");
  } else if (action === "download-demo") {
    downloadCurrentContent();
    showFeedback("已准备下载");
  } else if (action === "studio-sort") {
    const type = target.dataset.studioType || "asset";
    state.studioLibrary[type].sortReversed = !state.studioLibrary[type].sortReversed;
    showFeedback(state.studioLibrary[type].sortReversed ? "工作室列表已切换为较早在前" : "工作室列表已切换为最新在前");
  } else if (action === "sort-list") {
    state.sortReversed[state.route] = !state.sortReversed[state.route];
    showFeedback(state.sortReversed[state.route] ? "已切换为较早在前" : "已切换为最新在前");
  } else if (action === "search-list") {
    state.searchOpen[state.route] = !state.searchOpen[state.route];
    if (!state.searchOpen[state.route]) state.searchQuery[state.route] = "";
    if (state.searchOpen[state.route]) searchFocusRoute = state.route;
    showFeedback(state.searchOpen[state.route] ? "搜索入口已展开" : "搜索已关闭");
  } else if (action === "clear-search") {
    state.searchQuery[state.route] = "";
    searchFocusRoute = state.route;
    showFeedback("已清除搜索");
  } else if (action === "upload-entry") {
    state.workspaceMenu = "";
    state.uploadModal.open = true;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.origin = state.route === "wardrobe" ? "wardrobe" : "studio";
    state.uploadModal.saveMenuOpen = false;
    showFeedback("");
  } else if (action === "simulate-upload") {
    state.uploadModal.step = "uploaded";
    updateUploadModalParts();
    return;
  } else if (action === "recognize-upload") {
    if (state.uploadModal.step !== "uploaded") return;
    state.uploadModal.step = "stacked";
    updateUploadModalParts();
    return;
  } else if (action === "expand-upload-result") {
    commitUploadSpread();
    return;
  } else if (action === "toggle-upload-save-menu") {
    if (state.uploadModal.step !== "result") return;
    state.uploadModal.saveMenuOpen = !state.uploadModal.saveMenuOpen;
    updateUploadModalActionsOnly();
    return;
  } else if (action === "save-upload-to-wardrobe") {
    if (state.uploadModal.step !== "result") return;
    const addedCount = saveExtractedWardrobeItems();
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    state.route = "wardrobe";
    state.filters.wardrobe = "全部";
    window.location.hash = "wardrobe";
    showFeedback(`已保存拆解单品，衣柜新增${addedCount}件`);
  } else if (action === "attach-upload-to-chat") {
    if (state.uploadModal.step !== "result") return;
    const wasStudioRoute = state.route === "studio";
    attachExtractedItemsToStudio();
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    state.screen = "product";
    state.route = "studio";
    state.workspaceTab = "穿搭";
    state.workspaceMode = "outfit";
    state.mobileStudioView = "chat";
    state.workspaceMenu = "";
    document.querySelector(".upload-overlay")?.remove();
    if (wasStudioRoute) {
      replaceHashWithoutRender("studio");
      renderMainArea();
    } else {
      window.location.hash = "studio";
      render();
    }
    return;
  } else if (action === "close-upload-modal") {
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    showFeedback("已取消上传");
  } else if (action === "save-background-upload") {
    if (state.uploadModal.step !== "uploaded") return;
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    state.studioAttachments.scene = true;
    showFeedback("背景已添加到当前创作");
  } else if (action === "save-upload-modal") {
    if (!["stacked", "result"].includes(state.uploadModal.step)) return;
    const addedCount = saveExtractedWardrobeItems();
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    state.route = "wardrobe";
    state.filters.wardrobe = "全部";
    window.location.hash = "wardrobe";
    showFeedback(`已保存拆解单品，衣柜新增${addedCount}件`);
  } else if (action === "new-entry") {
    const createKind = target.dataset.createKind || "outfit";
    state.screen = "product";
    state.route = "studio";
    state.workspaceTab = createKind === "poster" ? "海报" : "穿搭";
    state.workspaceMode = createKind === "poster" ? "canvas" : "empty";
    state.mobileStudioView = "chat";
    if (createKind === "poster") {
      state.posterOptions = { size: "", style: "", template: "" };
      state.posterTemplatePage = 0;
    }
    state.workspaceMenu = "";
    window.location.hash = createKind === "poster" ? "studio-canvas" : "studio-empty";
    showFeedback(createKind === "poster" ? "已进入新建海报" : "已进入新建搭配");
  } else if (action === "add-calendar") {
    const selectedOutfit = currentOutfits().find(item => item.id === state.selected.outfits);
    if (selectedOutfit) {
      state.calendarModal.open = true;
      state.calendarModal.outfitId = selectedOutfit.id;
      state.calendarModal.selectedDay = state.calendarEntry?.outfitId === selectedOutfit.id
        ? state.calendarEntry.day
        : 8;
      showFeedback("");
    } else {
      showFeedback("请先选择穿搭");
    }
  } else if (action === "save-annotation") {
    const input = target.closest("[data-annotation-editor]")?.querySelector("[data-annotation-input]");
    state.annotation.note = input?.value.trim() || "请调整选中区域";
    state.annotation.editorOpen = false;
    updateAnnotationSurface();
    showFeedback("批注已添加");
    syncToastOnly();
    return;
  } else if (action === "prev-view" || action === "next-view") {
    const step = action === "next-view" ? 1 : -1;
    state.viewIndex = (state.viewIndex + step + viewLabels.length) % viewLabels.length;
    showFeedback(`已切换到${viewLabels[state.viewIndex]}`);
  } else if (action === "prev-history" || action === "next-history") {
    shiftProfileHistory(action === "next-history" ? 1 : -1);
    return;
  } else if (action === "noop") {
    showFeedback("操作已响应");
  }

  const workspaceMode = target.dataset.workspaceMode;
  if (workspaceMode) {
    if (workspaceMode === "picker") {
      state.workspacePicker = false;
      state.workspaceMenu = "";
      state.workspaceTab = "穿搭";
      state.workspaceMode = "picker";
      window.location.hash = "studio-picker";
    } else if (workspaceMode === "canvas" || workspaceMode === "canvas-more") {
      state.workspacePicker = false;
      state.workspaceTab = "海报";
      state.workspaceMode = workspaceMode;
      state.workspaceMenu = workspaceMode === "canvas-more" ? "canvas" : "";
      window.location.hash = workspaceMode === "canvas-more" ? "studio-canvas-more" : "studio-canvas";
    } else if (workspaceMode === "generated" || workspaceMode === "annotation") {
      const selectionRequired = workspaceMode === "generated" && (
        state.workspaceMode === "picker" || state.workspaceMode === "canvas-more"
      );
      const hasSelection = state.workspaceMode === "picker"
        ? state.studioLibrary.asset.selectedIds.length > 0
        : state.workspaceMode === "canvas-more"
          ? state.studioLibrary.look.selectedIds.length > 0
          : true;
      if (selectionRequired && !hasSelection) {
        showFeedback("请先选择内容");
        render();
        return;
      }
      if (workspaceMode === "generated") {
        state.lastStudioPrompt = state.studioPrompt.trim();
        if (state.workspaceTab === "海报") state.lastPosterPrompt = state.lastStudioPrompt;
      }
      state.workspacePicker = false;
      state.workspaceMenu = "";
      state.mobileStudioView = "result";
      if (workspaceMode === "annotation") {
        state.workspaceMode = "annotation";
        state.annotation = { rect: null, note: "", editorOpen: false };
        replaceHashWithoutRender(state.workspaceTab === "海报" ? "studio-annotation" : "studio-annotation-outfit");
        const enteredInline = state.workspaceTab !== "海报" && enterStudioOutfitAnnotationInline();
        if (!enteredInline) renderStudioCanvasPanelOnly();
        showFeedback("已进入批注修改");
        syncToastOnly();
        return;
      } else if (state.workspaceTab === "海报") {
        if (!state.posterOptions.size) state.posterOptions.size = "竖版 3:4";
        if (!state.posterOptions.style) state.posterOptions.style = "深色质感";
        if (!state.posterOptions.template) state.posterOptions.template = "Lookbook排版";
        state.workspaceMode = "generated";
        window.location.hash = "studio-generated";
        if (workspaceMode === "generated") beginDemoLoading("studio-generation", 860);
      } else {
        state.workspaceMode = "outfit";
        window.location.hash = "studio";
        if (workspaceMode === "generated") beginDemoLoading("studio-generation", 720);
      }
      showFeedback(workspaceMode === "annotation" ? "已进入批注修改" : state.workspaceTab === "海报" ? "海报已生成" : "穿搭已生成");
    } else if (workspaceMode === "outfit" && state.workspaceTab !== "海报") {
      state.workspaceMode = "outfit";
      resetAnnotationState();
      state.mobileStudioView = "result";
      replaceHashWithoutRender("studio");
      const exitedInline = exitStudioOutfitAnnotationInline();
      if (!exitedInline) renderStudioCanvasPanelOnly();
      showFeedback("已退出批注");
      syncToastOnly();
      return;
    } else {
      state.workspacePicker = false;
      state.workspaceMenu = "";
      state.workspaceMode = workspaceMode;
      showFeedback("已切换工作区");
    }
  }

  const workspaceTab = target.dataset.workspaceTab;
  if (workspaceTab) {
    cancelDemoLoading();
    closeStudioMessageEditor();
    resetAnnotationState();
    const enteringPoster = workspaceTab === "海报" && state.workspaceTab !== "海报";
    state.workspaceTab = workspaceTab;
    state.recordIndex = 0;
    state.studioResultIndex = 0;
    state.workspaceMenu = "";
    state.workspaceMode = workspaceTab === "海报" ? "canvas" : "outfit";
    state.mobileStudioView = "chat";
    if (enteringPoster) {
      state.posterOptions = { size: "", style: "", template: "" };
      state.posterTemplatePage = 0;
    }
    window.location.hash = workspaceTab === "海报" ? "studio-canvas" : "studio";
  }

  const filterRoute = target.dataset.filterRoute;
  if (filterRoute) {
    state.filters[filterRoute] = target.dataset.filter || "全部";
    showFeedback(`已筛选${state.filters[filterRoute]}`);
    renderUnlessHashChanged(hashAtStart, {
      animateSelectors: [".library-view .grid > article"],
      images: false
    });
    return;
  }

  const selectRoute = target.dataset.selectRoute;
  if (selectRoute) {
    const id = target.dataset.id;
    if (selectRoute === "wardrobe") {
      const selectedIds = state.selected.wardrobeIds;
      const index = selectedIds.indexOf(id);
      const wasSelected = index >= 0;
      if (wasSelected) selectedIds.splice(index, 1);
      else selectedIds.push(id);
      state.selected.wardrobe = selectedIds[0] || "";
      if (!selectedIds.length) {
        state.detailOpen.wardrobe = false;
        state.detailClosed.wardrobe = false;
        replaceHashWithoutRender("wardrobe");
        showFeedback("已取消选择");
      } else if (!wasSelected && selectedIds.length === 1 && !state.detailClosed.wardrobe) {
        state.detailOpen.wardrobe = true;
        state.detailClosed.wardrobe = false;
        replaceHashWithoutRender(state.activeModel === "male" ? "wardrobe-male-detail" : "wardrobe-detail");
        showFeedback("已打开单品详情");
      } else if (selectedIds.length > 1) {
        state.detailOpen.wardrobe = false;
        state.detailClosed.wardrobe = false;
        replaceHashWithoutRender("wardrobe-selected");
        showFeedback(`已选择${selectedIds.length}件单品`);
      } else {
        state.detailOpen.wardrobe = false;
        replaceHashWithoutRender("wardrobe-selected");
        showFeedback("已关闭详情");
      }
    } else if (["inspiration", "outfits", "posters"].includes(selectRoute)) {
      const detailLabel = selectRoute === "outfits" ? "搭配" : selectRoute === "posters" ? "海报" : "灵感";
      const alreadySelected = state.selected[selectRoute] === id;
      const detailIsOpen = state.detailOpen[selectRoute];
      if (!alreadySelected) {
        state.selected[selectRoute] = id;
        state.detailOpen[selectRoute] = detailIsOpen;
        state.detailClosed[selectRoute] = false;
        window.location.hash = detailIsOpen
          ? `${selectRoute}-detail`
          : `${selectRoute}-selected`;
        showFeedback(detailIsOpen
          ? `已切换${detailLabel}详情`
          : `已选择${detailLabel}`);
      } else if (detailIsOpen) {
        state.detailOpen[selectRoute] = false;
        state.detailClosed[selectRoute] = true;
        window.location.hash = `${selectRoute}-selected`;
        showFeedback("已关闭详情");
      } else if (state.detailClosed[selectRoute]) {
        state.selected[selectRoute] = "";
        state.detailClosed[selectRoute] = false;
        window.location.hash = selectRoute;
        showFeedback("已取消选择");
      } else {
        state.detailOpen[selectRoute] = true;
        state.detailClosed[selectRoute] = false;
        window.location.hash = `${selectRoute}-detail`;
        showFeedback(`已打开${detailLabel}详情`);
      }
    } else {
      state.selected[selectRoute] = id;
      state.detailOpen[selectRoute] = true;
      window.location.hash = `${selectRoute}-detail`;
      showFeedback(selectRoute === "posters" ? "已打开海报详情" : "已打开灵感详情");
    }
  }

  renderUnlessHashChanged(hashAtStart);
});

document.addEventListener("keydown", (event) => {
  const promptInput = event.target.closest("[data-studio-prompt]");
  if (!promptInput || event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  document.querySelector(".prompt-input [data-workspace-mode='generated']:not(:disabled)")?.click();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (state.uploadModal.open) {
    state.uploadModal.open = false;
    state.uploadModal.step = "drop";
    state.uploadModal.kind = "clothing";
    state.uploadModal.saveMenuOpen = false;
    showFeedback("已取消上传");
  } else if (state.calendarModal.open) {
    state.calendarModal.open = false;
    showFeedback("已取消添加到日历");
  } else if (state.cardMenu.id || state.modelMenuOpen) {
    state.cardMenu = { route: "", id: "" };
    state.modelMenuOpen = false;
  } else if (state.workspaceMode === "annotation") {
    state.workspaceMode = state.workspaceTab === "海报" ? "generated" : "outfit";
    resetAnnotationState();
    replaceHashWithoutRender(state.workspaceTab === "海报" ? "studio-generated" : "studio");
    const exitedInline = state.workspaceTab !== "海报" && exitStudioOutfitAnnotationInline();
    if (!exitedInline) renderStudioCanvasPanelOnly();
    showFeedback("已退出批注");
    syncToastOnly();
  } else if (["picker", "canvas-more"].includes(state.workspaceMode)) {
    cancelDemoLoading();
    state.workspacePicker = false;
    state.workspaceMenu = "";
    state.workspaceMode = state.workspaceTab === "海报" ? "canvas" : "outfit";
    window.location.hash = state.workspaceTab === "海报" ? "studio-canvas" : "studio";
  } else if (state.workspaceMenu) {
    const isCanvasMenu = state.workspaceMenu === "canvas";
    state.workspaceMenu = "";
    state.workspaceMode = isCanvasMenu ? "canvas" : "outfit";
    window.location.hash = isCanvasMenu ? "studio-canvas" : "studio";
  } else if (state.detailOpen[state.route]) {
    state.detailOpen[state.route] = false;
    if (["inspiration", "outfits", "posters"].includes(state.route)) {
      state.detailClosed[state.route] = true;
      window.location.hash = `${state.route}-selected`;
    } else {
      state.selected[state.route] = "";
      window.location.hash = state.route;
    }
  } else if (state.searchOpen[state.route]) {
    state.searchOpen[state.route] = false;
    state.searchQuery[state.route] = "";
  } else {
    return;
  }

  event.preventDefault();
  render();
});

document.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key) || !event.target.matches("[data-select-route], [data-studio-select], [data-action=\"remove-calendar-entry\"], [data-action=\"expand-upload-result\"]")) return;
  event.preventDefault();
  event.target.click();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !state.uploadModal.open) return;
  state.uploadModal.open = false;
  state.uploadModal.step = "drop";
  state.uploadModal.kind = "clothing";
  state.uploadModal.saveMenuOpen = false;
  showFeedback("已取消上传");
  render();
});

document.addEventListener("keydown", (event) => {
  if (state.screen !== "splash" || !["Enter", " "].includes(event.key)) return;
  const splashLook = event.target.closest(".splash-look");
  if (!splashLook) return;
  event.preventDefault();
  spinSplashTo(Number(splashLook.dataset.index));
});

document.addEventListener("pointerover", (event) => {
  if (state.screen === "splash" && event.target.closest(".splash-stage")) pauseSplashAuto();
});

document.addEventListener("pointerout", (event) => {
  if (state.screen !== "splash") return;
  const stage = event.target.closest(".splash-stage");
  if (stage && !stage.contains(event.relatedTarget)) resumeSplashAuto();
});

window.addEventListener("hashchange", () => {
  if (renderedHash === window.location.hash) return;
  const previousHash = renderedHash;
  applyHashState();
  render({
    preserveScroll: shouldPreserveScrollForHashTransition(previousHash),
    ...motionOptionsForHashTransition(previousHash)
  });
});

window.addEventListener("resize", syncDensityScale);
window.visualViewport?.addEventListener("resize", syncDensityScale);

applyHashState();
render({ animate: true, images: true });
queueDemoImagePreloads(state.route);
