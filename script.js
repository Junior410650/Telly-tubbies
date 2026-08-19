/* =====================================================
 MOBILE NAVIGATION
===================================================== */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   NUMBER COUNTERS
===================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;

            const target = Number(
                counter.getAttribute("data-target")
            );

            let current = 0;

            const duration = 1500;

            const increment = target / (duration / 16);

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        target.toLocaleString();

                    return;

                }

                counter.textContent =
                    Math.floor(current).toLocaleString();

                requestAnimationFrame(updateCounter);

            }

            updateCounter();

            observer.unobserve(counter);

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach((counter) => {

    counterObserver.observe(counter);

});