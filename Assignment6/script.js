const tracks = [
  {
    title: "Track 1",
    artist: "Artist 1",
    url: "music/song1.mp3",
    cover: "music/cover1.jpg",
  },
  {
    title: "Track 2",
    artist: "Artist 2",
    url: "music/song2.mp3",
    cover: "music/cover2.jpg",
  },
  {
    title: "Track 3",
    artist: "Artist 3",
    url: "music/song3.mp3",
    cover: "music/cover3.jpg",
  },
	{
    title: "Track 4",
    artist: "Artist 4",
    url: "music/song4.mp3",
    cover: "music/cover4.jpg",
  },
  {
    title: "Track 5",
    artist: "Artist 5",
    url: "music/song5.mp3",
    cover: "music/cover5.jpg",
  },
];

const coverImg = document.getElementById("cover");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const trackList = document.getElementById("track-list");

let audio = new Audio(tracks[0].url);
let currentTrack = 0;
let isPlaying = false;

function loadTrack(index) {
	console.log(index)
  const track = tracks[index];
  coverImg.src = track.cover;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  audio.src = track.url;
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
}

function playNextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = "⏸️";
  isPlaying = true;
}

audio.addEventListener("timeupdate", () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

tracks.forEach((track, index) => {
  const li = document.createElement("li");
  li.textContent = track.title;
  li.addEventListener("click", () => {
    currentTrack = index;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "⏸️";
    isPlaying = true;
  });
  trackList.appendChild(li);
});

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", playNextTrack);

loadTrack(currentTrack);
