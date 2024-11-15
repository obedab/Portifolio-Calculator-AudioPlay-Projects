// Songs List
const songs = [
  { title: "crown", category: "unkown", src: "../media/crown.mp3", cover: "../media/play.png" },
  { title: "joy to the world", category: "unknown", src: "../media/184.mwese nimuvuz'impundu.mp3", cover: "../media/play.png" },
  { title: "Song 3", category: "jazz", src: "../media/Sing to Me of Heaven2.mp3", cover: "../media/play.png" },
  { title: "Song 4", category: "unknown", src: "../media/song4.mp3", cover: "../media/play.png" },
  { title: "Song 5", category: "unknown", src: "../media/song5.mp3", cover: "../media/play.png" }
];

// Populate Library
function loadLibrary(filter = 'all') {
  const library = document.getElementById("library");
  library.innerHTML = ""; // Clear previous songs

  // Filter and display songs
  const filteredSongs = filter === 'all' ? songs : songs.filter(song => song.category === filter);
  filteredSongs.forEach(song => {
      const songElement = document.createElement("div");
      songElement.classList.add("song");
      songElement.innerHTML = `
          <img src="${song.cover}" alt="${song.title}">
          <p>${song.title}</p>
      `;
      songElement.addEventListener("click", () => playSong(song));
      library.appendChild(songElement);
  });
}

// Play Song
function playSong(song) {
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");

  audioPlayer.src = song.src;
  audioPlayer.play();
  currentSong.textContent = `Now Playing: ${song.title}`;
}

// Search Songs
function searchLibrary() {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const library = document.getElementById("library");
  library.innerHTML = ""; // Clear previous songs

  const searchedSongs = songs.filter(song => song.title.toLowerCase().includes(searchInput));
  searchedSongs.forEach(song => {
      const songElement = document.createElement("div");
      songElement.classList.add("song");
      songElement.innerHTML = `
          <img src="${song.cover}" alt="${song.title}">
          <p>${song.title}</p>
      `;
      songElement.addEventListener("click", () => playSong(song));
      library.appendChild(songElement);
  });
}

// Filter Songs by Category
function filterByCategory(category) {
  loadLibrary(category);
}

// Initial Load
loadLibrary();
