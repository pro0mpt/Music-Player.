const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const loopButton = document.getElementById('loop');
const nowPlayingText = document.getElementById('now-playing-text');
const fileInput = document.getElementById('file-input');
const playlistContainer = document.getElementById('playlist');
const progressBar = document.getElementById('progress');
const soundGif = document.getElementById('sound-img');

let audio = new Audio();
let playlist = [];
let currentTrackIndex = 0;
let isLooping = false;

playButton.addEventListener('click', playMusic);
pauseButton.addEventListener('click', pauseMusic);
prevButton.addEventListener('click', playPrevTrack);
nextButton.addEventListener('click', playNextTrack);
loopButton.addEventListener('click', toggleLoop);
fileInput.addEventListener('change', addTracksToPlaylist);
progressBar.addEventListener('input', seekMusic);

audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', handleTrackEnd);

function playMusic() {
    if (playlist.length > 0) {
        audio.src = playlist[currentTrackIndex];
        audio.play();
        updateNowPlaying();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
        soundGif.style.display = 'inline'; // Show GIF when music plays
    }
}

function pauseMusic() {
    audio.pause();
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
    soundGif.style.display = 'none'; // Hide GIF when music pauses
}

function playPrevTrack() {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        playMusic();
    }
}

function playNextTrack() {
    if (currentTrackIndex < playlist.length - 1) {
        currentTrackIndex++;
        playMusic();
    } else if (isLooping) {
        currentTrackIndex = 0;
        playMusic();
    }
}

function toggleLoop() {
    isLooping = !isLooping;
    loopButton.style.color = isLooping ? '#00FF00' : 'white'; // Green when looping is on
}

function updateNowPlaying() {
    nowPlayingText.textContent = `Playing: ${playlist[currentTrackIndex].split('/').pop()}`;
}

function addTracksToPlaylist(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const track = URL.createObjectURL(files[i]);
        playlist.push(track);

        const trackElement = document.createElement('p');
        trackElement.textContent = files[i].name;
        trackElement.addEventListener('click', () => {
            currentTrackIndex = i;
            playMusic();
        });
        playlistContainer.appendChild(trackElement);
    }
}

function updateProgressBar() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
}

function seekMusic() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}

function handleTrackEnd() {
    if (isLooping) {
        playMusic();
    } else {
        playNextTrack();
    }
}
