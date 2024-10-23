const gtaImages = [
    './Images/Gta/gta_car_1.jpg',
    './Images/Gta/gta_2.png',
    './Images/Gta/gta_3.jpg',
    './Images/Gta/gta_4.jpg',
    './Images/Gta/gta_5.jpg',
    './Images/Gta/gta_6.jpg',
    './Images/Gta/gta_7.png',
    './Images/Gta/gta_8.jpg',
    './Images/Gta/gta_9.jpg',
];

const osuImages = [
    './Images/Osu/osu_logo.png',
    './Images/Osu/osu_main.png',
    './Images/Osu/osu_standard.jpg',
    './Images/Osu/osu_mania.png',
    './Images/Osu/osu_taiko.png',
    './Images/Osu/osu_catch.png',
];

let gtaIndex = 0;
let osuIndex = 0;
let gtaInterval;
let osuInterval;

function switchImage(frameId, images, index) {
    const imageElement = document.getElementById(frameId);
    const nextIndex = (index + 1) % images.length; 
    const nextImage = new Image();
    nextImage.src = images[nextIndex];

    imageElement.classList.add('slide-out');

    setTimeout(() => {
        imageElement.src = nextImage.src;
        imageElement.classList.remove('slide-out');
        imageElement.classList.add('slide-in');
    }, 500);

    setTimeout(() => {
        imageElement.classList.remove('slide-in');
    }, 1000);

    return nextIndex; 
}

function startImageRotation() {
    gtaInterval = setInterval(() => {
        gtaIndex = switchImage('gta-image', gtaImages, gtaIndex);
    }, 5000);

    osuInterval = setInterval(() => {
        osuIndex = switchImage('osu-image', osuImages, osuIndex);
    }, 5000);
}

window.addEventListener('load', function() {
    startImageRotation();
});

function goToSite(url) {
    const frame = event.currentTarget;
    
    frame.style.animation = 'clickEffect 0.2s forwards'; 

    setTimeout(() => {
        const overlay = document.getElementById('blackOverlay');
        overlay.classList.add('active');

        setTimeout(() => {
            location.href = url;
        }, 500);
    }, 200);
}


