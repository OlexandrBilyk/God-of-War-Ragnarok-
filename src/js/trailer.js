const playButton = document.querySelector('.trailer__video-info-btn');
const videoInfo = document.querySelector('.trailer__video-info');
const video = document.querySelector(".trailer__video-elem");
if (playButton && videoInfo && video) {
  playButton.addEventListener("click", function () {
    videoInfo.style.display = "none";
    video.play();
  });

  video.addEventListener("ended", function () {
    video.pause();
    video.currentTime = 0;
    video.load();
    videoInfo.style.display = "block";
  });
}
