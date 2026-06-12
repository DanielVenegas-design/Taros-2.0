/* ==================================
   SCROLL REVEAL
================================== */

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

            revealObserver.unobserve(entry.target);
        }

    });

},{
    threshold: 0.12
});

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==================================
   NAVBAR SCROLL
================================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 40){

        header.classList.add('scrolled');

    }else{

        header.classList.remove('scrolled');

    }

});


/* ==================================
   SCROLL PROGRESS BAR
================================== */

const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;

});


/* ==================================
   MENÚ HAMBURGUESA
================================== */

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('open');

    menuToggle.classList.toggle('active');

});


/* ==================================
   CERRAR MENÚ AL HACER CLICK
================================== */

document.querySelectorAll('.nav-links a')
.forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('open');

        menuToggle.classList.remove('active');

    });

});


/* ==================================
   NAV LINK ACTIVO
================================== */

const sections = document.querySelectorAll('section');

const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 140;

        const sectionHeight =
            section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            currentSection = section.id;

        }

    });

    links.forEach(link => {

        link.classList.remove('active');

        const href = link.getAttribute('href');

        if(href === `#${currentSection}`){

            link.classList.add('active');

        }

    });

});


/* ==================================
   HOVER PARALLAX HERO
================================== */

const hero = document.querySelector('.hero');

const orbs = document.querySelectorAll('.hero-orb');

if(hero){

    hero.addEventListener('mousemove', (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {

            const speed = (index + 1) * 18;

            orb.style.transform = `
                translate(
                    ${x * speed}px,
                    ${y * speed}px
                )
            `;

        });

    });

}


/* ==================================
   HERO CARD FLOAT
================================== */

const heroCard = document.querySelector('.hero-card');

if(heroCard){

    window.addEventListener('mousemove', (e) => {

        const x =
            (e.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (e.clientY / window.innerHeight - 0.5) * 8;

        heroCard.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* ==================================
   BOTÓN VOLVER ARRIBA
================================== */

document.querySelectorAll('a[href="#inicio"]')
.forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });

});


/* ==================================
   PREVENIR ERRORES SI NO HAY LINKS
================================== */

if(!progressBar){

    console.warn(
        'No se encontró .scroll-progress'
    );

}


/* ==================================
   INICIALIZACIÓN
================================== */

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});