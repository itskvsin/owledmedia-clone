import gsap from '../gsap';

export const reveal = (el: HTMLElement | null) => {
    gsap.from(el, {
        y:100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
        }
    })
}