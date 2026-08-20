/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.getElementById("navMenu");


if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("active");

        }
    );

}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   STATISTICS COUNTER
===================================================== */

const counters =
    document.querySelectorAll(
        ".counter"
    );


const counterObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    const duration =
                        1600;


                    const startTime =
                        performance.now();


                    function updateCounter(
                        currentTime
                    ) {

                        const elapsed =
                            currentTime -
                            startTime;


                        const progress =
                            Math.min(
                                elapsed /
                                duration,
                                1
                            );


                        /*
                         * Ease-out effect.
                         * The number starts quickly and
                         * gradually slows down.
                         */

                        const easedProgress =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        const currentValue =
                            Math.floor(
                                easedProgress *
                                target
                            );


                        counter.textContent =
                            currentValue.toLocaleString();


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target.toLocaleString();

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );


                    observer.unobserve(
                        counter
                    );

                }
            );

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(
    (counter) => {

        counterObserver.observe(
            counter
        );

    }
);