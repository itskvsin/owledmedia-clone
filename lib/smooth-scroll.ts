import Lenis from "lenis";

export const intiSmoothScroll = () => {
    const lenis = new Lenis();

    function raf(time: number){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
}