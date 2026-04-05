import gsap from "./gsap";

export const heroAnimation = (container: HTMLElement | null) => {
  const tl = gsap.timeline();

  tl.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  }).from(
    "hero-sub",
    {
      y: 40,
      opacity: 0,
      duration: 1,
    },
    "-=0.6",
  );
};
