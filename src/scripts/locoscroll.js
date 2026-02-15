import LocomotiveScroll from "locomotive-scroll";

const initScroll = () => {
  if (window.__locomotiveScroll) {
    window.__locomotiveScroll.destroy();
  }

  const scroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    },
  });

  window.__locomotiveScroll = scroll;
  if (window.__locomotiveResizeHandler) {
    window.removeEventListener("resize", window.__locomotiveResizeHandler);
  }

  window.__locomotiveResizeHandler = () => scroll.update();
  window.addEventListener("resize", window.__locomotiveResizeHandler);
};

const start = () => {
  requestAnimationFrame(initScroll);
};

if (document.readyState === "complete") {
  start();
} else {
  window.addEventListener("load", start, { once: true });
}

document.addEventListener("astro:page-load", start);
