// Get the HTML elements
const videoPlayer = document.getElementById("video-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const volumeControl = document.getElementById("volume-control");
const timeElapsed = document.getElementById("time-elapsed");

// Play the video
playButton.addEventListener("click", () => {
    videoPlayer.play();
});

// Pause the video
pauseButton.addEventListener("click", () => {
    videoPlayer.pause();
});

// Stop the video
stopButton.addEventListener("click", () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});

// Adjust the volume
volumeControl.addEventListener("input", () => {
    videoPlayer.volume = volumeControl.value;
});

// Update time elapsed
videoPlayer.addEventListener("timeupdate", () => {
    const currentTime = videoPlayer.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    timeElapsed.textContent = `Time Elapsed: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});
