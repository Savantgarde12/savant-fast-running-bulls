gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
    const heroTl = gsap.timeline();

    heroTl.to(".hero .overlay", {
        scale: 1,
        duration: 2.2,
        ease: "power3.out"
    })
        .to(".hero-content", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out"
        }, "-=1.4");
    const videosTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#videos",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    videosTl.to("#videos .scroll-trigger-element", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    const projectsTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    projectsTl.to("#projects .scroll-trigger-element", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    })
        .to("#projects .project-card", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out"
        }, "-=0.4");
    gsap.to("#about .scroll-trigger-element", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
    });
};