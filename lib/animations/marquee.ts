import gsap from "../gsap";

const marqueeAnimation = ((container: HTMLElement | null) => {
    
    if (!container) {
        return;
    }

    const track = container.querySelector(".marquee-track")

     const width = parseInt( window.getComputedStyle(container).getPropertyValue("width"),10
    );

    gsap.fromTo(track, {x: 0},{
        x: -1*width,
        ease: "none",
        duration: 10,
        repeat: -1,
    })
})

export default marqueeAnimation;