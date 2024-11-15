// Track Data (Array of objects)
const tracks = [
  { src: "../media/crown.mp3", name: "crown him" },
  { src: "../media/Sing to Me of Heaven2.mp3", name: "Sing to Me of Heaven" },
  { src: "../media/184.mwese nimuvuz'impundu.mp3", name: "mwese nimuvuz'impundu" },
  { src: "../media/track4.mp3", name: "Song 4" }
];

// Initial Track Index
let currentTrackIndex = 0;

// Function to load the playlist dynamically
function loadPlaylist() {
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = ''; // Clear the playlist

  // Create the playlist items dynamically from the `tracks` array
  tracks.forEach((track, index) => {
      const li = document.createElement("li");
      li.textContent = track.name;
      li.dataset.index = index; // Store the index for each track
      playlist.appendChild(li);

      // Add click event for each song in the playlist
      li.addEventListener("click", () => {
          currentTrackIndex = index;
          loadTrack(currentTrackIndex);
          playAudio();
      });
  });
}

// Function to load and display the selected track
function loadTrack(index) {
  const audio = document.getElementById("audio");
  audio.src = tracks[index].src;
  document.getElementById("song-name").textContent = tracks[index].name;

  // Highlight the active track
  const playlistItems = document.querySelectorAll("#playlist li");
  playlistItems.forEach(item => item.classList.remove("active"));
  playlistItems[index].classList.add("active");
}

// Function to play the audio
function playAudio() {
  const audio = document.getElementById("audio");
  audio.play();
}

// Search Functionality
function filterMenuItems() {
  const searchInput = document.getElementById("menuSearch").value.toLowerCase();
  const playlistItems = document.querySelectorAll("#playlist li");

  playlistItems.forEach(item => {
      const trackName = item.textContent.toLowerCase();
      if (trackName.includes(searchInput)) {
          item.style.display = "block"; // Show item if it matches the search
      } else {
          item.style.display = "none"; // Hide item if it doesn't match the search
      }
  });
}

// Initialize Playlist and Audio Player
loadPlaylist();
loadTrack(currentTrackIndex);
playAudio();
