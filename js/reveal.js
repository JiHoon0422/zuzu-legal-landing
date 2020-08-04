// ScrollReveal (https://github.com/jlmakes/scrollreveal)

(function scrollReveal() {
    window.sr = ScrollReveal();

    sr.reveal(".left", {
        duration: 1000,
        delay: 300,
        distance: "50px",
        easing: "ease-out",
        origin: "left",
        reset: false,
        scale: 1,
        viewFactor: 0,
    });

    sr.reveal(".right", {
        duration: 1000,
        delay: 300,
        distance: "50px",
        easing: "ease-out",
        origin: "right",
        reset: false,
        scale: 1,
        viewFactor: 0,
    });
    sr.reveal(".up", {
        duration: 1000,
        delay: 300,
        distance: "50px",
        easing: "ease-out",
        reset: false,
        scale: 1,
        viewFactor: 0,
    });
})();