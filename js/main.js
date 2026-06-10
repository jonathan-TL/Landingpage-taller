// =====================================
// MENU HAMBURGUESA
// =====================================

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// =====================================
// CERRAR MENU MOVIL AL DAR CLICK
// =====================================

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    } else {
        header.style.boxShadow = "none";
    }
});

// =====================================
// REVEAL ANIMATIONS
// =====================================

const reveals = document.querySelectorAll(
    ".section-header, .service-card, .gallery-item, .benefit-card, .contact-item, .experience-card"
);

const revealOnScroll = () => {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =====================================
// SCROLL SUAVE EXTRA
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =====================================
// CONTADOR ANIMADO 30+
// =====================================

const counter = document.querySelector(".experience-card span");

if (counter) {
    let started = false;
    const startCounter = () => {
        const top = counter.getBoundingClientRect().top;
        if (top < window.innerHeight && !started) {
            started = true;
            let count = 0;
            const interval = setInterval(() => {
                count++;
                counter.textContent = count + "+";
                if (count >= 30) {
                    clearInterval(interval);
                }
            }, 50);
        }
    };
    window.addEventListener("scroll", startCounter);
    startCounter();
}