se// DOM Elements
const themeSelector = document.getElementById("theme");
const playbackSpeedSlider = document.getElementById("playback-speed");
const playbackSpeedValue = document.getElementById("playback-speed-value");
const clearDataButton = document.getElementById("clear-data");

// Load Settings on Page Load
document.addEventListener("DOMContentLoaded", () => {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.className = savedTheme;
    themeSelector.value = savedTheme;

    // Load playback speed
    const savedPlaybackSpeed = localStorage.getItem("playbackSpeed") || "1";
    playbackSpeedSlider.value = savedPlaybackSpeed;
    playbackSpeedValue.textContent = `${savedPlaybackSpeed}x`;
});

// Change Theme
themeSelector.addEventListener("change", () => {
    const selectedTheme = themeSelector.value;
    document.body.className = selectedTheme;
    localStorage.setItem("theme", selectedTheme);
});

// Update Playback Speed
playbackSpeedSlider.addEventListener("input", () => {
    const speed = playbackSpeedSlider.value;
    playbackSpeedValue.textContent = `${speed}x`;
    localStorage.setItem("playbackSpeed", speed);
});

// Clear App Data
clearDataButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all app data?")) {
        localStorage.clear();
        alert("App data cleared!");
    }
});
