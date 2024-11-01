const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const tracks = [
    { src: "crown.mp3", name: "song1" }
];
let currentTrackIndex = 0;

playButton.addEventListener('click', () => {
    audio.play();
    updatePlayButton();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    updatePlayButton();
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updatePlayButton() {
    if (audio.paused) {
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    } else {
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    }
}

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});
