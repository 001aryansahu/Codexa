// =====================================
// AOS INIT
// =====================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// =====================================
// GSAP HERO ANIMATIONS
// =====================================

gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from("h1", {
    opacity: 0,
    y: 80,
    duration: 1.2,
    delay: 0.3,
    ease: "power4.out"
});

gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.7
});

gsap.from(".hero-buttons", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 1
});

// =====================================
// PARALLAX EFFECT
// =====================================

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    document.querySelectorAll(".parallax").forEach(element => {

        element.style.transform =
            `translateY(${scrolled * 0.2}px)`;

    });

});

// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add(
            "shadow-2xl",
            "backdrop-blur-xl"
        );

        navbar.style.background =
            "rgba(5,8,22,0.95)";

    } else {

        navbar.classList.remove(
            "shadow-2xl",
            "backdrop-blur-xl"
        );

        navbar.style.background =
            "rgba(5,8,22,0.85)";
    }

});

// =====================================
// SMOOTH SCROLL
// =====================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// =====================================
// COUNTER ANIMATION
// =====================================

const counters =
document.querySelectorAll(".counter");

const speed = 200;

const animateCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / speed;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(
                animateCounter,
                15
            );

        } else {

            counter.innerText =
            target;

        }

    });

};

const counterSection =
document.querySelector("#stats");

if(counterSection){

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                animateCounter();

            }

        });

    });

    observer.observe(counterSection);

}

// =====================================
// TESTIMONIAL SLIDER
// =====================================

let currentSlide = 0;

const slides =
document.querySelectorAll(".testimonial");

function showSlide(index){

    slides.forEach(slide => {

        slide.style.display = "none";

    });

    if(slides[index]){

        slides[index].style.display =
        "block";

    }

}

if(slides.length > 0){

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}

// =====================================
// PROJECT CARD HOVER
// =====================================

document
.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            gsap.to(card, {

                scale: 1.03,
                duration: 0.3

            });

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            gsap.to(card, {

                scale: 1,
                duration: 0.3

            });

        }
    );

});

// =====================================
// MOUSE GLOW EFFECT
// =====================================

const glow =
document.createElement("div");

glow.className =
"fixed pointer-events-none rounded-full";

glow.style.width = "250px";
glow.style.height = "250px";

glow.style.background =
"radial-gradient(circle, rgba(59,130,246,.15), transparent 70%)";

glow.style.zIndex = "0";

document.body.appendChild(glow);

document.addEventListener(
    "mousemove",
    (e) => {

        glow.style.left =
        e.clientX - 125 + "px";

        glow.style.top =
        e.clientY - 125 + "px";

    }
);

// =====================================
// MOBILE MENU
// =====================================

const menuBtn =
document.getElementById("menu-btn");

const mobileMenu =
document.getElementById("mobile-menu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "hidden"
            );

        }
    );

}

// =====================================
// REVEAL ANIMATION
// =====================================

gsap.utils
.toArray(".reveal")
.forEach(section => {

    gsap.from(section, {

        opacity: 0,
        y: 80,
        duration: 1,

        scrollTrigger: {

            trigger: section,
            start: "top 85%"

        }

    });

});

// =====================================
// BUTTON RIPPLE EFFECT
// =====================================

document
.querySelectorAll(".ripple-btn")
.forEach(button => {

    button.addEventListener(
        "click",
        function(e){

            const circle =
            document.createElement("span");

            const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );

            const radius =
            diameter / 2;

            circle.style.width =
            circle.style.height =
            `${diameter}px`;

            circle.style.left =
            `${e.clientX -
            this.offsetLeft -
            radius}px`;

            circle.style.top =
            `${e.clientY -
            this.offsetTop -
            radius}px`;

            circle.classList.add(
                "ripple"
            );

            const ripple =
            this.getElementsByClassName(
                "ripple"
            )[0];

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        }
    );

});

// =====================================
// LOADING SCREEN
// =====================================

window.addEventListener(
    "load",
    () => {

        const loader =
        document.getElementById(
            "loader"
        );

        if(loader){

            gsap.to(loader, {

                opacity: 0,

                duration: 0.8,

                onComplete: () => {

                    loader.style.display =
                    "none";

                }

            });

        }

    }
);

// =====================================
// CURRENT YEAR
// =====================================

const year =
document.getElementById("year");

if(year){

    year.innerText =
    new Date().getFullYear();

}

// =====================================
// ACTIVE NAV LINK
// =====================================

const currentPage =
window.location.pathname
.split("/")
.pop();

document
.querySelectorAll("nav a")
.forEach(link => {

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.classList.add(
            "text-purple-400"
        );

    }

});

// =====================================
// CONSOLE BRANDING
// =====================================

console.log(
"%c CODEXA WEB SOLUTIONS ",
"background:#3b82f6;color:white;padding:10px;font-size:16px;font-weight:bold;border-radius:8px;"
);

console.log(
"%c Code. Design. Grow.",
"color:#a855f7;font-size:14px;"
);
