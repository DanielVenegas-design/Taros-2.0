/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("main section, body > section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


/* ==========================
   SMOOTH SCROLL OFFSET
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const headerHeight = header.offsetHeight;

        const targetPosition =
            target.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* ==========================
   FUTURE FEATURES READY
========================== */

/*
Aquí añadiremos más adelante:

- Menú hamburguesa.
- Animaciones al hacer scroll.
- Filtros del portafolio.
- Lightbox para ilustraciones.
- Formulario de contacto.
*/

/* ==========================
   TARO INTERACTIVE EFFECT
========================== */

const character = document.querySelector(".hero-character");
const floatingElements = document.querySelectorAll(".floating");

if (character) {

    character.addEventListener("mousemove", (e) => {

        const rect = character.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 8;
        const rotateX = ((y - centerY) / centerY) * -8;

        character.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            translateY(-10px)
        `;

        floatingElements.forEach((element, index) => {

            const offset = (index + 1) * 2;

            element.style.transform = `
                translateY(-${offset * 2}px)
                translateX(${rotateY}px)
            `;
        });

    });


    character.addEventListener("mouseleave", () => {

        character.style.transform = "";

        floatingElements.forEach(element => {
            element.style.transform = "";
        });

    });

};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    
    navLinks.classList.toggle("active");

    menuToggle.textContent = navLinks.classList.contains("active")
        ? "x"
        : "="

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.textContent = "=";
    }
});
