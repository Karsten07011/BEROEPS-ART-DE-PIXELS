const navbar = document.querySelector('.navbar');

let lastScrollY = window.scrollY; // Keeps track of the last scroll position
let isNavbarHidden = false; // Keeps track of the navbar visibility
const hideThreshold = 100; // The scroll threshold before hiding the navbar

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Check if we're scrolling down
    if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
        // If scrolling down and past the threshold, hide the navbar
        if (!isNavbarHidden) {
            navbar.style.top = "-100px"; // Hides navbar by moving it up
            isNavbarHidden = true;
        }
    }
    // Check if we're scrolling up
    else if (currentScrollY < lastScrollY) {
        // If scrolling up, show the navbar again
        if (isNavbarHidden) {
            navbar.style.top = "0"; // Shows navbar by resetting its position
            isNavbarHidden = false;
        }
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
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


document.querySelectorAll('.more-info-button').forEach(button => {
    button.addEventListener('click', (event) => {

        console.log("More Info button clicked:", event.target.href);
    });
});
