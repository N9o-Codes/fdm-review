const ROTATION_DELAY = 6000;

export function createCarousel(root) {
  const track = root.querySelector(".track");
  const slides = [...track.children];
  const dots = root.querySelector("#dots");
  const controls = root.querySelector(".ctl");
  const rotationButton = root.querySelector(".rotation");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const events = new AbortController();
  const options = { signal: events.signal };
  let index = 0;
  let timer;
  let active = false;
  let hovered = false;
  let rotationEnabled = !reducedMotion.matches;
  let pointerRotation;

  function updateRotationControl() {
    const running = rotationEnabled && !reducedMotion.matches;
    rotationButton.disabled = reducedMotion.matches;
    rotationButton.setAttribute(
      "aria-label",
      running ? "Pause slide rotation" : "Start slide rotation",
    );
    rotationButton.firstElementChild.textContent = running ? "Ⅱ" : "▶";
    track.setAttribute("aria-live", running ? "off" : "polite");
  }

  function pauseRotation() {
    rotationEnabled = false;
    stopRotation();
    updateRotationControl();
  }

  function markCurrentSlide() {
    [...dots.children].forEach((dot, position) => {
      dot.setAttribute("aria-current", String(position === index));
    });
    slides.forEach((slide, position) => {
      // Offscreen links must not pull keyboard users into another slide.
      slide.inert = position !== index;
      slide.setAttribute("aria-hidden", String(position !== index));
    });
  }

  function stopRotation() {
    clearTimeout(timer);
    timer = undefined;
  }

  function scheduleRotation() {
    stopRotation();
    if (
      !active ||
      hovered ||
      !rotationEnabled ||
      document.hidden ||
      reducedMotion.matches
    )
      return;
    timer = setTimeout(() => goTo(index + 1), ROTATION_DELAY);
  }

  function goTo(
    position,
    behavior = reducedMotion.matches ? "instant" : "smooth",
  ) {
    index = (position + slides.length) % slides.length;
    track.scrollTo({ left: index * track.clientWidth, behavior });
    markCurrentSlide();
    scheduleRotation();
  }

  slides.forEach((slide, position) => {
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${position + 1} of ${slides.length}`);
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", `Slide ${position + 1}`);
    dot.addEventListener("click", () => goTo(position), options);
    dots.append(dot);
  });

  root
    .querySelector("#prev")
    .addEventListener("click", () => goTo(index - 1), options);
  root
    .querySelector("#next")
    .addEventListener("click", () => goTo(index + 1), options);
  rotationButton.addEventListener(
    "pointerdown",
    () => {
      // Remember the requested action before pointer focus pauses rotation.
      pointerRotation = !rotationEnabled;
    },
    options,
  );
  rotationButton.addEventListener(
    "pointercancel",
    () => {
      pointerRotation = undefined;
    },
    options,
  );
  rotationButton.addEventListener(
    "click",
    (event) => {
      rotationEnabled =
        event.detail > 0 && pointerRotation !== undefined
          ? pointerRotation
          : !rotationEnabled;
      pointerRotation = undefined;
      updateRotationControl();
      scheduleRotation();
    },
    options,
  );
  track.addEventListener(
    "keydown",
    (event) => {
      if (event.target !== track) return;
      const destinations = {
        ArrowLeft: index - 1,
        ArrowRight: index + 1,
        Home: 0,
        End: slides.length - 1,
      };
      if (event.key in destinations) {
        event.preventDefault();
        goTo(destinations[event.key]);
      }
    },
    options,
  );

  // Scroll can result from a swipe or a smooth programmatic transition. Read the
  // final position rather than advancing the current marker through intermediate slides.
  let scrollTimer;
  track.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (!active || !track.clientWidth) return;
        index = Math.max(
          0,
          Math.min(
            slides.length - 1,
            Math.round(track.scrollLeft / track.clientWidth),
          ),
        );
        markCurrentSlide();
        scheduleRotation();
      }, 120);
    },
    options,
  );

  root.addEventListener(
    "pointerenter",
    (event) => {
      if (event.pointerType === "mouse") {
        hovered = true;
        stopRotation();
      }
    },
    options,
  );
  root.addEventListener(
    "pointerleave",
    () => {
      hovered = false;
      scheduleRotation();
    },
    options,
  );
  root.addEventListener("focusin", pauseRotation, options);
  document.addEventListener("visibilitychange", scheduleRotation, options);
  reducedMotion.addEventListener(
    "change",
    () => {
      pauseRotation();
      if (active) goTo(index, "instant");
    },
    options,
  );

  const resizeObserver = new ResizeObserver(() => {
    const height = `${controls.getBoundingClientRect().height}px`;
    if (root.style.getPropertyValue("--carousel-controls-height") !== height)
      root.style.setProperty("--carousel-controls-height", height);
    if (active && track.clientWidth) goTo(index, "instant");
  });
  resizeObserver.observe(track);
  resizeObserver.observe(controls);
  markCurrentSlide();
  updateRotationControl();

  return {
    activate() {
      active = true;
      goTo(index, "instant");
    },
    deactivate() {
      active = false;
      stopRotation();
      clearTimeout(scrollTimer);
      // A hidden page may never receive pointerleave.
      hovered = false;
    },
    destroy() {
      stopRotation();
      clearTimeout(scrollTimer);
      resizeObserver.disconnect();
      events.abort();
      dots.replaceChildren();
    },
  };
}
