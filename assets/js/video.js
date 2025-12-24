const videos = document.querySelectorAll('.portfolio-video');

videos.forEach(video => {
  // Ensure autoplay muted on load
  video.muted = true;
  video.loop = true;

  // Hover START
  video.addEventListener('mouseenter', () => {
    if (window.innerWidth <= 768) return;

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.loop = false;
    video.play();
  });

  // Hover END
  video.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 768) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;
    video.loop = true;
    video.play();
  });
});
