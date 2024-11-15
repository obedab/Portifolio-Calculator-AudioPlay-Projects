const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const progressBar = document.getElementById('progress-bar');
const volumeControl = document.getElementById('volume-slider');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const muteButton = document.getElementById('mute');
const loopButton = document.getElementById('loop');
const shuffleButton = document.getElementById('shuffle');
const remainingTimeDisplay = document.getElementById('remaining-time');
let isMuted = false;
let isLooping = false;
let isShuffling = false;

// Track data
const tracks = [
    { src: "../media/crown.mp3", name: "Song 1" },
    { src: "../media/Sing to Me of Heaven2.mp3", name: "Song 2" },
    { src: "../media/184.mwese nimuvuz'impundu.mp3", name: "Song 3" },
];
let currentTrackIndex = 0;



// Play and pause functions
pauseButton.style.display = 'none';
playButton.style.display = 'inline-block';

// Load the first track
audio.src = tracks[currentTrackIndex].src;
document.getElementById('song').textContent = tracks[currentTrackIndex].name;


playButton.addEventListener('click', () => {
    audio.play();
    updatePlayButton();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    updatePlayButton();
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

play
function updatePlayButton() {
    if (audio.paused) {
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
    } else {
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    }
}

// Time update event listener
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        // Calculate the progress as a percentage
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;  // Set the progress bar's value to the calculated percentage
        currentTimeDisplay.textContent = formatTime(audio.currentTime);  // Update the current time display
        remainingTimeDisplay.textContent = `-${formatTime(audio.duration - audio.currentTime)}`;  // Update remaining time

        // Update the background of the progress bar to reflect the current progress with an orangered color
        progressBar.style.background = `linear-gradient(to right, orangered ${progress}%, #333 ${progress}%)`;
    }
});
audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

progressBar.addEventListener('mousemove', (event) => {
    const hoverTime = (event.offsetX / progressBar.offsetWidth) * audio.duration;
    progressBar.title = formatTime(hoverTime);
});

// Loop and shuffle buttons
loopButton.addEventListener('click', () => {
    isLooping = !isLooping;
    loopButton.style.color = isLooping ? 'orange' : 'white';
});

shuffleButton.addEventListener('click', () => {
    isShuffling = !isShuffling;
    shuffleButton.style.color = isShuffling ? 'orange' : 'white';
});

// Track end handling
audio.addEventListener('ended', () => {
    if (isLooping) {
        audio.currentTime = 0;
        audio.play();
    } else if (isShuffling) {
        currentTrackIndex = Math.floor(Math.random() * tracks.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    audio.src = tracks[currentTrackIndex].src;
    document.getElementById('song').textContent = tracks[currentTrackIndex].name;
    audio.play();
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Mute button
muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteButton.textContent = isMuted ? '🔇' : '🔊';
});

function toggleMenu() {
    const menuDropdown = document.getElementById('menuDropdown');
    // Toggle the 'display' style between 'block' and 'none'
    if (menuDropdown.style.display === 'block') {
        menuDropdown.style.display = 'none';
    } else {
        menuDropdown.style.display = 'block';
    }
}

// Optional: Close the menu if the user clicks outside of it
window.addEventListener('click', (event) => {
    const menuDropdown = document.getElementById('menuDropdown');
    const menuButton = document.querySelector('.menu');
    if (!menuDropdown.contains(event.target) && !menuButton.contains(event.target)) {
        menuDropdown.style.display = 'none';
    }
});
// const volumeSlider = document.querySelector('input[type="range"]');

// volumeSlider.addEventListener('input', () => {
//     const value = (volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min) * 100;
//     volumeSlider.style.setProperty('--progress-percent', `${value}%`);
// });

// Add this function to store the played song
function savePlayedSong(song) {
    let playedSongs = JSON.parse(localStorage.getItem("playedSongs")) || [];
    
    // Check if the song already exists
    const exists = playedSongs.some(playedSong => playedSong.src === song.src);

    if (!exists) {
        playedSongs.push(song);
        localStorage.setItem("playedSongs", JSON.stringify(playedSongs));
    }
}

// Update playSong function to call savePlayedSong
function playSong(song) {
    const audioPlayer = document.getElementById("audioPlayer");
    const currentSong = document.getElementById("currentSong");

    audioPlayer.src = song.src;
    audioPlayer.play();
    currentSong.textContent = `Now Playing: ${song.title}`;

    // Save the played song
    savePlayedSong(song);
}



