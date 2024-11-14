// Select elements
const reelButton = document.querySelector('.reel-button');
const videoOverlay = document.getElementById('video-overlay');
const closeButton = document.getElementById('close-video');
const vimeoPlayer = document.getElementById('vimeo-player');

// Vimeo video ID (replace with your actual video ID)
const vimeoVideoID = '1025976906'; // Replace with the actual video ID

// Show video overlay and load Vimeo video
reelButton.addEventListener('click', () => {
    videoOverlay.style.display = 'flex'; // Display overlay
    vimeoPlayer.src = `https://player.vimeo.com/video/${vimeoVideoID}?autoplay=1&title=0&byline=0&portrait=0`; // Set iframe source
});

// Close video overlay
closeButton.addEventListener('click', () => {
    videoOverlay.style.display = 'none'; // Hide overlay
    vimeoPlayer.src = ''; // Stop the video
});