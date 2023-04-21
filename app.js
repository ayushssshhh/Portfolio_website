const {innerHeight} = window;

gsap.to(".swipe", {
    scale: 10, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});