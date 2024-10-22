const gtaImages = [
    './Karsten/Images/gta_car_1.jpg',
    './Karsten/Images/gta_6_BG.png',
    './Karsten/Images/gtaonline img.png',
    './Karsten/Images/gta_car_2.jpg',
    './Karsten/Images/gtavBG.png',
    './Karsten/Images/gta_car_3.jpg',
    './Karsten/Images/los_santos-BG.jpg',
    './Karsten/Images/gta_stroy.jpg',
    './Karsten/Images/gta_story_3.jpg',
    './Karsten/Images/GTABG2.jpg',
];

const osuImages = [
    './Ruchiel/Photos/osu_icon.png',
    './Ruchiel/Photos/osu_logo.png',
    './Ruchiel/Photos/osu_gameplay.webp',
];

let gtaIndex = 0;
let osuIndex = 0;
let gtaInterval;
let osuInterval;
let isHoveringGTA = false;
let isHoveringOSU = false;

function switchImage(frameId, images, index) {
    const imageElement = document.getElementById(frameId);
    const nextIndex = (index + 1) % (images.length - 1); 
    const nextImage = new Image();
    nextImage.src = images[nextIndex];

    imageElement.style.animation = 'slideOut 0.5s forwards';
    setTimeout(() => {
        imageElement.src = nextImage.src;
        imageElement.style.animation = 'slideIn 0.5s forwards';
    }, 500);

    return nextIndex; 
}

function startImageRotation(frameId, images, index) {
    const imageElement = document.getElementById(frameId);
    imageElement.src = images[index];
    imageElement.style.opacity = 0.2; 

    return setInterval(() => {
        index = switchImage(frameId, images, index);
    }, 5000);
}

function setOpacityForAllImages(opacity) {
    document.getElementById('gta-image').style.opacity = opacity; 
    document.getElementById('osu-image').style.opacity = opacity; 
}

// GTA Frame Mouse Enter
document.getElementById('gta').addEventListener('mouseenter', () => {
    if (!isHoveringGTA) {
        isHoveringGTA = true;
        if (!gtaInterval) {
            gtaInterval = startImageRotation('gta-image', gtaImages, gtaIndex);
            gtaIndex = (gtaIndex + 1) % (gtaImages.length - 1);
            document.getElementById('gta-image').style.opacity = 1;
            document.getElementById('gta-background').style.visibility = 'visible';
        }
    }
});

// OSU Frame Mouse Enter
document.getElementById('osu').addEventListener('mouseenter', () => {
    if (!isHoveringOSU) {
        isHoveringOSU = true;
        if (!osuInterval) {
            osuInterval = startImageRotation('osu-image', osuImages, osuIndex);
            osuIndex = (osuIndex + 1) % osuImages.length; 
            document.getElementById('osu-image').style.opacity = 1;
        }
    }
});

function resetImagesOpacity() {
    setOpacityForAllImages(0.2);
    document.getElementById('gta-background').style.visibility = 'hidden';
}

// GTA Frame Mouse Leave
document.getElementById('gta').addEventListener('mouseleave', () => {
    clearInterval(gtaInterval);
    gtaInterval = null;
    isHoveringGTA = false;
    resetImagesOpacity();
});

// OSU Frame Mouse Leave
document.getElementById('osu').addEventListener('mouseleave', () => {
    clearInterval(osuInterval);
    osuInterval = null;
    isHoveringOSU = false; 
    resetImagesOpacity();
});

// Set the initial visibility for the background images
document.getElementById('gta-background').style.visibility = 'hidden';
resetImagesOpacity();
