let score = 0;
let timeLeft = 10;
let gameActive = false;
let timerStarted = false;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const backgroundMusic = document.getElementById('backgroundMusic');

clickButton.style.display = 'none';

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', () => {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = `Aantal klikken: ${score}`;
    }
});

function startGame() {
    score = 0;
    timeLeft = 10;
    gameActive = true;
    timerStarted = true;
    scoreDisplay.textContent = `Aantal klikken: ${score}`;
    timerDisplay.textContent = `Tijd: ${timeLeft} seconden`;
    clickButton.style.display = 'block'; 
    backgroundMusic.play(); 

    const timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tijd: ${timeLeft} seconden`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameActive = false;
            clickButton.style.display = 'none'; 
            backgroundMusic.pause(); 
            alert(`Tijd is om! Je score is: ${score}`);
        }
    }, 1000);
}
