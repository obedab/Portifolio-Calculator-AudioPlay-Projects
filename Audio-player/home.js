// Songs List
const songs = [
  { title: "Song 1", artist: "Artist 1", src: "../media/song1.mp3", cover: "../media/cover1.jpg" },
  { title: "Song 2", artist: "Artist 2", src: "../media/song2.mp3", cover: "../media/cover2.jpg" },
  { title: "Song 3", artist: "Artist 3", src: "../media/song3.mp3", cover: "../media/cover3.jpg" },
  { title: "Song 4", artist: "Artist 4", src: "../media/song4.mp3", cover: "../media/cover4.jpg" },
  { title: "Song 5", artist: "Artist 5", src: "../media/song5.mp3", cover: "../media/cover5.jpg" }
];

// Populate Recent Songs
function loadRecentSongs() {
  const songList = document.querySelector(".song-list");
  songList.innerHTML = ""; // Clear previous songs

  songs.forEach(song => {
      const songElement = document.createElement("div");
      songElement.classList.add("song");
      songElement.innerHTML = `
          <img src="${song.cover}" alt="${song.title}">
          <p>${song.title}</p>
      `;
      songElement.addEventListener("click", () => playSong(song));
      songList.appendChild(songElement);
  });
}

// Play Featured Song
function playFeatured() {
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");

  const featuredSong = songs[0]; // First song as featured
  audioPlayer.src = featuredSong.src;
  audioPlayer.play();
  currentSong.textContent = `Now Playing: ${featuredSong.title}`;
}

// Play Selected Song
function playSong(song) {
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");

  audioPlayer.src = song.src;
  audioPlayer.play();
  currentSong.textContent = `Now Playing: ${song.title}`;
}

// Initial Load
loadRecentSongs();

// Retrieve played songs from localStorage
function loadPlayedSongs() {
  const playedSongs = JSON.parse(localStorage.getItem("playedSongs")) || [];
  const playedSongsList = document.getElementById("playedSongsList");

  playedSongsList.innerHTML = ""; // Clear the list

  if (playedSongs.length === 0) {
      playedSongsList.innerHTML = "<p>No songs played yet!</p>";
      return;
  }

  playedSongs.forEach(song => {
      const songElement = document.createElement("div");
      songElement.classList.add("song");
      songElement.innerHTML = `
          <img src="${song.cover || '../media/default-cover.jpg'}" alt="${song.title}">
          <p>${song.title}</p>
          <p>${song.artist}</p>
      `;
      songElement.addEventListener("click", () => playSong(song));
      playedSongsList.appendChild(songElement);
  });
}

// Play Selected Song
function playSong(song) {
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");

  audioPlayer.src = song.src;
  audioPlayer.play();
  currentSong.textContent = `Now Playing: ${song.title}`;
}

// Load played songs on page load
loadPlayedSongs();
