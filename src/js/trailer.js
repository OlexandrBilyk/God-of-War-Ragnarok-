const playButton = document.querySelector('.trailer__video-info-btn');
const videoInfo = document.querySelector('.trailer__video-info');

if (playButton && videoInfo) {
  playButton.addEventListener('click', function() {
    videoInfo.style.display = 'none';
  });
  
}
