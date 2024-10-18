
const audioPlayer = document.getElementById('audioPlayer');
const prevBtn = document.getElementById('prevBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSongText = document.getElementById('currentSong');

const songs = [
    'Song/osu1.mp3',
    'Song/osu2.mp3',
    'Song/osu3.mp3',
    'Song/osu4.mp3',
    'Song/osu5.mp3',
    'Song/osu6.mp3',
    'Song/osu7.mp3',
    'Song/osu8.mp3',
    'Song/osu9.mp3',
    'Song/osu10.mp3'
];

let currentSongIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index];
    audioPlayer.play();
    currentSongText.textContent = `Lied ${index + 1}`;
}

loadSong(currentSongIndex);

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    loadSong(currentSongIndex);
});

pauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
});


//Gemaakt met de hulp van Blackboi.ai
