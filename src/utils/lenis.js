import Lenis from "lenis";

let lenis;

export const getLenis = () => {
    if (!lenis) {
        lenis = new Lenis({
            duration: 1.2,
            smooth: true,
        });
    }
    return lenis;
};

export const startLenis = () => {
    const lenis = getLenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
};