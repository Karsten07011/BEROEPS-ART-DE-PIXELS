const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-background img');

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            if (window.scrollY < lastScrollY) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-100px";
            }
        } else {
            navbar.style.top = "0"; 
        }
    });
    lastScrollY = window.scrollY;
}, {
    threshold: 0.3 
});

if (heroImage) {
    observer.observe(heroImage);
}


const faders = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.25
});

faders.forEach(fader => {
    fadeObserver.observe(fader);
});
