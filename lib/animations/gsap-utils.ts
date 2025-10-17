import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const fadeInUp = (element: HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out",
    }
  );
};

export const createScrollTrigger = (
  trigger: HTMLElement,
  animation: gsap.core.Animation
) => {
  return ScrollTrigger.create({
    trigger,
    start: "top 80%",
    animation,
    once: true,
  });
};
