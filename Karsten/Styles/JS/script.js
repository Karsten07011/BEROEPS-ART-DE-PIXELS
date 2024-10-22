const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-background img');

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

    // Show the trailer section and play the video when the button is clicked
    trailerButton.addEventListener('click', function(event) {
        event.preventDefault();
        trailerSection.classList.remove('hidden');
        
        // Play the video when the section is opened
        trailerVideo.play();
    });

    // Hide the trailer section and pause the video when the close button is clicked
    closeTrailerButton.addEventListener('click', function(event) {
        event.preventDefault();
        trailerSection.classList.add('hidden');
        
        // Pause the video when the section is closed
        trailerVideo.pause();
    });
});

