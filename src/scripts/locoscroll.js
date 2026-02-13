import LocomotiveScroll from "locomotive-scroll";

const initScroll = () => {
  const container = document.querySelector("[data-scroll-container]");
  if (!container) return;

  if (window.__locomotiveScroll) {
    window.__locomotiveScroll.destroy();
  }

  const scroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    smoothMobile: true,
    multiplier: 1,
    lerp: 0.1,
  });

  window.__locomotiveScroll = scroll;
  window.addEventListener("resize", () => scroll.update());
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
