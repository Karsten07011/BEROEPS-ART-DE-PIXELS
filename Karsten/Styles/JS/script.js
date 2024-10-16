const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-background img');

let lastScrollY = window.scrollY;
let isNavbarHidden = false;

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.style.top = "-100px"; // Hide the navbar when the image is off screen
        } else {
            navbar.style.top = "0"; // Show the navbar when the image is in view
        }
    });
}, {
    threshold: 0.3 // Trigger when at least 10% of the image is visible
});

// Observe the hero image
observer.observe(heroImage);



// Fade-in logic
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
