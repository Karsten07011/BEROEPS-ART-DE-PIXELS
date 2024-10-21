const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-background img');

let lastScrollY = window.scrollY;
let isNavbarHidden = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.style.top = "-100px";
        } else {
            navbar.style.top = "0"; 
        }
    });
}, {
    threshold: 0.3
});

observer.observe(heroImage);



const faders = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once element is visible
        }
    });
}, {
    threshold: 0.25
});

faders.forEach(fader => {
    fadeObserver.observe(fader);
});
