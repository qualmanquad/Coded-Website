// Select elements
const reelButtons = document.querySelectorAll('.reel-button');
const videoOverlay = document.getElementById('video-overlay');
const closeButton = document.getElementById('close-video');
const vimeoPlayer = document.getElementById('vimeo-player');

// Show video overlay and load Vimeo video dynamically
reelButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Use event.currentTarget to ensure we always target the button itself
        const videoID = event.currentTarget.getAttribute('data-video-id'); // Get video ID from the button
        console.log('Clicked video ID:', videoID);

        if (videoID && !isNaN(videoID)) {
            videoOverlay.style.display = 'flex'; // Display overlay
            vimeoPlayer.src = `https://player.vimeo.com/video/${videoID}?autoplay=1&title=0&byline=0&portrait=0`; // Set iframe source dynamically
        } else {
            console.error('Invalid video ID');
        }
    });
});

// Close video overlay
closeButton.addEventListener('click', () => {
    videoOverlay.style.display = 'none'; // Hide overlay
    vimeoPlayer.src = ''; // Stop the video
});

window.onload = () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 50);
};
