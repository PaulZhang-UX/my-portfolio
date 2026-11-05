(function () {
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const state = {
    hasRendered: false,
    activeTransition: false,
    frame: 0
  };

  const staggerSelectors = [
    ".workspace",
    ".page-heading",
    ".toolbar-row",
    ".batch-toolbar",
    ".library-view .grid > article",
    ".studio-library-grid > .studio-library-card",
    ".studio-add-menu",
    ".prompt-attachment",
    ".history-item",
    ".stat-card",
    ".template-tile",
    ".choice-pill",
    ".poster-config",
    ".poster-result-feed",
    ".model-menu",
    ".detail-panel",
    ".upload-modal",
    ".annotation-note",
    ".studio-edit-panel"
  ];

  const preloadCache = new Map();

  function isReduced() {
    return reduceMotionQuery.matches;
  }

  function mediaHostFor(image) {
    return image.closest(
      ".asset-media, .look-media, .poster-media, .drawer-preview, .studio-card-media, .upload-preview-media, .generated-frame, .model-stage, .poster-result-frame, .calendar-look, .calendar-picker-look, .film-thumb, .related-thumb, .history-item, .thumb, .prompt-attachment, .studio-edit-attachment, .model-option-avatar"
    );
  }

  function bindImageSkeletons(scope, options = {}) {
    scope.querySelectorAll("img").forEach((image) => {
      const host = mediaHostFor(image);
      if (!host || host.dataset.motionBound === "true") return;
      host.dataset.motionBound = "true";
      host.classList.add("motion-media-shell");
      if (options.skeleton === false) {
        host.classList.add("is-loaded");
        return;
      }
      image.decoding = "async";
      const markLoaded = () => host.classList.add("is-loaded");
      const markFailed = () => host.classList.add("is-loaded", "is-failed");
      image.addEventListener("load", markLoaded, { once: true });
      image.addEventListener("error", markFailed, { once: true });
      if (image.complete) {
        if (image.naturalWidth > 0) markLoaded();
        else markFailed();
      }
    });
  }

  function preloadImages(sources = []) {
    [...new Set(sources.filter(Boolean))].forEach((source) => {
      if (preloadCache.has(source)) return;
      const image = new Image();
      image.decoding = "async";
      image.loading = "eager";
      image.src = source;
      preloadCache.set(source, image);
      const decoded = image.decode?.();
      decoded?.catch(() => {});
    });
  }

  function prepareStaggeredContent(scope, selectors = staggerSelectors) {
    const seen = new Set();
    selectors.forEach((selector) => {
      scope.querySelectorAll(selector).forEach((element, index) => {
        if (seen.has(element)) return;
        seen.add(element);
        element.classList.add("motion-stagger-item");
        element.style.setProperty("--motion-index", String(Math.min(index, 8)));
      });
    });
  }

  function afterRender(scope = document, options = {}) {
    const root = scope.querySelector?.(".app-root") || document.querySelector(".app-root") || scope;
    root.classList.toggle("motion-reduced", isReduced());
    const imageScope = options.imageScope
      ? scope.querySelector(options.imageScope) || scope
      : scope;
    bindImageSkeletons(imageScope, { skeleton: options.images === true && !isReduced() });
    if (!isReduced()) {
      if (options.animate === true) prepareStaggeredContent(scope);
      if (Array.isArray(options.animateSelectors) && options.animateSelectors.length) {
        prepareStaggeredContent(scope, options.animateSelectors);
      }
    }
    state.hasRendered = true;
    window.cancelAnimationFrame(state.frame);
    state.frame = window.requestAnimationFrame(() => {
      root.classList.add("motion-ready");
    });
  }

  function transition(update) {
    if (
      !state.hasRendered
      || state.activeTransition
      || isReduced()
      || typeof document.startViewTransition !== "function"
    ) {
      update();
      return null;
    }
    state.activeTransition = true;
    let viewTransition;
    try {
      viewTransition = document.startViewTransition(update);
    } catch (error) {
      state.activeTransition = false;
      update();
      return null;
    }
    viewTransition.finished.catch(() => {}).finally(() => {
      state.activeTransition = false;
    });
    return viewTransition;
  }

  reduceMotionQuery.addEventListener?.("change", () => {
    const root = document.querySelector(".app-root");
    if (root) root.classList.toggle("motion-reduced", isReduced());
  });

  window.MirrorMotion = {
    afterRender,
    isReduced,
    transition,
    preloadImages
  };
})();
