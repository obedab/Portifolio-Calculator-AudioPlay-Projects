// Retrieve the play queue from localStorage
function loadQueue() {
  const queue = JSON.parse(localStorage.getItem("playQueue")) || [];
  const queueList = document.getElementById("queueList");

  queueList.innerHTML = ""; // Clear the list

  if (queue.length === 0) {
      queueList.innerHTML = "<li>No songs in the queue!</li>";
      return;
  }

  queue.forEach((song, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <div class="song-info">
              <img src="${song.cover || '../media/default-cover.jpg'}" alt="${song.title}">
              <div class="details">
                  <p>${song.title}</p>
                  <p>${song.artist}</p>
              </div>
          </div>
          <div>
              <button onclick="moveUp(${index})">⬆️</button>
              <button onclick="moveDown(${index})">⬇️</button>
              <button onclick="removeFromQueue(${index})">❌</button>
          </div>
      `;
      listItem.addEventListener("click", () => playSong(song));
      queueList.appendChild(listItem);
  });
}

// Play selected song
function playSong(song) {
  const audioPlayer = document.getElementById("audioPlayer");
  const currentSong = document.getElementById("currentSong");

  audioPlayer.src = song.src;
  audioPlayer.play();
  currentSong.textContent = `Now Playing: ${song.title}`;
}

// Remove song from queue
function removeFromQueue(index) {
  let queue = JSON.parse(localStorage.getItem("playQueue")) || [];
  queue.splice(index, 1);
  localStorage.setItem("playQueue", JSON.stringify(queue));
  loadQueue();
}

// Move song up in the queue
function moveUp(index) {
  let queue = JSON.parse(localStorage.getItem("playQueue")) || [];
  if (index > 0) {
      [queue[index - 1], queue[index]] = [queue[index], queue[index - 1]];
      localStorage.setItem("playQueue", JSON.stringify(queue));
      loadQueue();
  }
}

// Move song down in the queue
function moveDown(index) {
  let queue = JSON.parse(localStorage.getItem("playQueue")) || [];
  if (index < queue.length - 1) {
      [queue[index], queue[index + 1]] = [queue[index + 1], queue[index]];
      localStorage.setItem("playQueue", JSON.stringify(queue));
      loadQueue();
  }
}

// Initialize queue on page load
document.addEventListener("DOMContentLoaded", loadQueue);
