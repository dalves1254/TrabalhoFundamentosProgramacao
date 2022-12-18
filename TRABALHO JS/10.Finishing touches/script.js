const songs = [
  "Flying High (99 Radio Edit)",
  "Bass Is Kicking",
  "Russia Privjet (Chromeboy 2nd Remix)",
  "Vi sitter i Ventrilo och spelar DotA",
  "Spending My Time",
  "Cose della Vita (Can't Stop Thinking of You) [Live]"
];
const player = document.getElementById("player");

const createSongList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());
const links = document.querySelectorAll("li");
for (const link of links) {
  link.addEventListener("click", setSong);
}

function setSong(e) {
  document.querySelector("#nota_e_cd").classList.remove("pulse");

  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText + ".mp3";
  document.getElementById(
    "currentSong"
  ).innerText = `Tocando:  ${e.target.innerText}`;

  player.load();
  player.play();

  document.querySelector("#nota_e_cd").classList.add("pulse");
}

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
};

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}

const progressBar = document.getElementById("progress");

progressBar.onclick = function(e) {
  player.currentTime = ((e.offsetX/progressBar.offsetWidth)*player.duration);
}