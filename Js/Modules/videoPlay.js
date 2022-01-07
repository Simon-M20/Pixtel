export default function playVideo() {
    const play = "Img/boton-de-play.png";
    const pause = "Img/pausa.png";
    
    // console.log(play, pause);
    const sound = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>`;
    const mute = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>`;

    const playButton = document.querySelector('.play-button img');
    const video = document.getElementById('video');
    const timeline = document.querySelector('.timeline');
    const soundButton = document.querySelector('.sound-button');
    const fullscreenButton = document.querySelector('.fullscreen-button');
    const videoContainer = document.querySelector('.video-player');
    let isFullScreen = false;

    // console.log(playButton.src);

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            videoContainer.classList.add('playing');
            playButton.src = pause;
        } else {
            video.pause();
            videoContainer.classList.remove('playing');
            playButton.src = play;
        }
    });

    video.onended = function () {
        playButton.innerHTML = play;
    }

    video.ontimeupdate = function () {
        const percentagePosition = (100*video.currentTime) / video.duration;
        timeline.style.backgroundSize = `${percentagePosition}% 100%`;
        timeline.value = percentagePosition;
    };

    timeline.addEventListener('change', function () {
        const time = (timeline.value * video.duration) / 100;
        video.currentTime = time;
    });

    soundButton.addEventListener('click', function () {
        video.muted = !video.muted;
        soundButton.innerHTML = video.muted ? mute : sound;
    });

    fullscreenButton.addEventListener('click', function () {
        if (!isFullScreen) {
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { /* Safari */
              video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { /* IE11 */
              video.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
              document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
              document.msExitFullscreen();
            }
        }
    });
}