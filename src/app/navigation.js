const HOME_ANCHORS = new Set([
  "top",
  "about-fdm",
  "events",
  "essentials",
  "timeline",
  "contact",
  "privacy",
  "privacy-policy",
  "terms",
]);
const LEARN_MORE_ANCHORS = new Set([
  "learn-more",
  "goals-sub",
  "history-sub",
  "faq-sub",
]);

function resolveRoute(hash) {
  let anchor;
  try {
    anchor = decodeURIComponent(hash.replace(/^#/, "")) || "top";
  } catch {
    anchor = "top";
  }
  if (anchor === "register" || anchor === "registration")
    return { page: "register", anchor: "register" };
  if (anchor === "sign-in" || anchor === "signin")
    return { page: "sign-in", anchor: "sign-in" };
  if (anchor === "teams") return { page: "teams", anchor };
  if (LEARN_MORE_ANCHORS.has(anchor)) return { page: "learn-more", anchor };
  return { page: "home", anchor: HOME_ANCHORS.has(anchor) ? anchor : "top" };
}

/** Application-level composition; pages never import the router or one another. */
export function createNavigation(pages) {
  const header = document.querySelector("header");
  const burger = header.querySelector("#burger");
  const nav = header.querySelector("#nav");
  const narrowScreen = matchMedia("(max-width: 1020px)");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const events = new AbortController();
  const options = { signal: events.signal };
  const headerSize = new ResizeObserver(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      `${header.getBoundingClientRect().height}px`,
    );
  });
  headerSize.observe(header);
  let currentPage;
  let lastUrl;
  let frame;

  function closeMenu(restoreFocus = false) {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    if (restoreFocus && narrowScreen.matches) burger.focus();
  }

  function render({ initial = false } = {}) {
    const route = resolveRoute(location.hash);
    closeMenu();
    if (currentPage !== route.page) {
      pages[currentPage]?.deactivate?.();
      for (const [name, page] of Object.entries(pages)) {
        page.element.hidden = name !== route.page;
        page.element.inert = name !== route.page;
      }
      currentPage = route.page;
      pages[currentPage].activate?.();
    }
    const page = pages[currentPage];
    document.title = page.title;
    lastUrl = location.href;
    for (const link of document.querySelectorAll(".nav-link, .nav-btn, #signinBtn")) {
      if (link.hash === `#${route.anchor}`)
        link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }

    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const target =
        route.anchor === "learn-more"
          ? page.element.querySelector("main")
          : document.getElementById(route.anchor);
      const visibleTarget =
        target && page.element.contains(target)
          ? target
          : page.element.querySelector("main");
      if (!initial || location.hash) {
        const focusTarget = visibleTarget.matches("section")
          ? visibleTarget.querySelector("h1, h2") || visibleTarget
          : visibleTarget;
        focusTarget.setAttribute("tabindex", "-1");
        focusTarget.focus({ preventScroll: true });
        visibleTarget.scrollIntoView({
          behavior: reducedMotion.matches || initial ? "instant" : "smooth",
          block: "start",
        });
      }
    });
  }

  function navigate(hash) {
    const url = new URL(location.href);
    url.hash = hash;
    if (url.href !== location.href) history.pushState(null, "", url);
    render();
  }

  burger.addEventListener(
    "click",
    () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    },
    options,
  );

  document.addEventListener(
    "click",
    (event) => {
      if (!header.contains(event.target)) closeMenu();
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link = event.target.closest("a[href^='#']");
      const back = event.target.closest(".backToHomeBtn");
      if (back) {
        navigate("#top");
      } else if (
        link &&
        !link.hasAttribute("download") &&
        (!link.target || link.target === "_self")
      ) {
        event.preventDefault();
        if (link.classList.contains("skip-link")) {
          const main = pages[currentPage].element.querySelector("main");
          main.setAttribute("tabindex", "-1");
          main.focus({ preventScroll: true });
          main.scrollIntoView({ behavior: "instant", block: "start" });
        } else {
          navigate(link.hash || "#top");
        }
      }
    },
    options,
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        event.preventDefault();
        closeMenu(true);
      }
    },
    options,
  );
  document.addEventListener(
    "focusin",
    (event) => {
      if (!header.contains(event.target)) closeMenu();
    },
    options,
  );
  narrowScreen.addEventListener("change", () => closeMenu(), options);

  function handleLocationChange() {
    // Back/Forward can dispatch both popstate and hashchange for one traversal.
    if (lastUrl !== location.href) render();
  }
  window.addEventListener("popstate", handleLocationChange, options);
  window.addEventListener("hashchange", handleLocationChange, options);
  render({ initial: true });

  return {
    closeMenu,
    destroy() {
      headerSize.disconnect();
      cancelAnimationFrame(frame);
      events.abort();
      pages[currentPage]?.deactivate?.();
    },
  };
}
