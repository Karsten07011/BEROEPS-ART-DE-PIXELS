const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-background img');

let lastScrollTop = 0; 
const navbarHeight = 60; 
const hideThreshold = 300; 

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > hideThreshold) {
        if (currentScrollTop > lastScrollTop) {
            navbar.style.top = `-${navbarHeight}px`;
        } else {
            navbar.style.top = '0'; 
        }
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting && window.scrollY > hideThreshold) {
            navbar.style.top = `-${navbarHeight}px`; 
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
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4
});

faders.forEach(fader => {
    fadeObserver.observe(fader);
});

document.addEventListener('DOMContentLoaded', function() {
    const trailerButton = document.getElementById('watch-trailer-button');
    const trailerSection = document.getElementById('trailer-section');
    const closeTrailerButton = document.getElementById('close-trailer');
    const trailerVideo = document.getElementById('trailer-video');

    trailerButton.addEventListener('click', function(event) {
        event.preventDefault();
        trailerSection.classList.remove('hidden');
        
        trailerVideo.play();
    });

    closeTrailerButton.addEventListener('click', function(event) {
        event.preventDefault();
        trailerSection.classList.add('hidden');
        
        trailerVideo.pause();
    });
});

