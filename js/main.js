document.addEventListener('DOMContentLoaded', (event) => {

    console.log("loaded");

    gsap.to(".rocket", { delay: 1, duration: 20, left: -300, bottom: 600, }); //rocket up
    gsap.to(".satellite", { delay: 1, duration: 20, left: 800, top: 10 }); //ufo Up
    gsap.to(".blue-asteroid", { delay: 2, duration: 20, right: 800, top: 500 }); //asteroid down
    
    gsap.to(".yellow-star", { //yellow-star beat
        duration: 2,
        motionPath: {
            path: [
                { scale: 1.7 },
                { scale: 1.2 }
            ]

        },
        yoyo: true,
        repeat: -1,
    });

    gsap.to(".ufo", { duration: 2, scale: 1, left: 140, bottom: 590, }); //ufo Up
    gsap.to(".ufo", { //ufo stay
        duration: 2,
        motionPath: {
            path: [
                { left: 140, bottom: 570, rotation: 5 },
                { left: 140, bottom: 570, rotation: -5 }
            ]

        },
        yoyo: true,
        repeat: 5,
        delay: 2
    });

    gsap.to(".astronaut", { //astronaut down
        duration: 2,
        motionPath: {
            path: [
                { left: 185, bottom: 400, rotation: 10, opacity: 1 },
                { left: 185, bottom: 350, rotation: -10, opacity: 1 }
            ]
        },
        yoyo: true,
        repeat: 0,
        delay: 2
    });

    gsap.to(".astronaut", { //astronaut hang
        duration: 2,
        motionPath: {
            path: [
                { left: 185, rotation: 10 },
                { left: 200, rotation: -10 }
            ]
        },
        yoyo: true,
        repeat: 5,
        delay: 2
    });

    gsap.to(".astronaut", { duration: 1, left: 185, bottom: 510, opacity: 1, delay: 12 }); //astronaut up
    gsap.to(".astronaut", { duration: 1, left: 185, bottom: 510, opacity: 0, delay: 13 }); //astronaut up
    gsap.to(".ufo", { duration: 2, scale: .5, left: 550, bottom: 50, delay: 14 }); //ufo leave
});