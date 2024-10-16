function playSound() {
    var audio = document.getElementById('openingSound');
    audio.play().catch(function(error) {
        console.log('Playback prevented:', error);
    });
}

document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    const header = document.querySelector('header');
    const videoSection = document.querySelector('.video-section');
    const videoSectionHeight = videoSection.offsetHeight; 

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('visible');
        } else {
            reveal.classList.remove('visible');
        }
    });

    if (window.scrollY > videoSectionHeight) {
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
    }
});
