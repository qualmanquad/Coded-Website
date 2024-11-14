// Select elements
const backgroundImage = document.querySelector('.background-image');
const videoOverlay = document.getElementById('vimeo-container');
const closeButton = document.getElementById('close-video');
const vimeoPlayer = document.getElementById('vimeo-video');
const projectPage = document.querySelector('.project-page');

// Vimeo video ID (replace with your actual video ID)
const vimeoVideoID = '1025976906'; // Replace with the actual video ID

// Show video overlay and load Vimeo video when background image is clicked
backgroundImage.addEventListener('click', () => {
    videoOverlay.style.display = 'flex'; // Display overlay
    vimeoPlayer.src = `https://player.vimeo.com/video/${vimeoVideoID}?autoplay=1&title=0&byline=0&portrait=0`; // Set iframe source
    projectPage.classList.add('dim-header'); // Dim the header when video is active
});

// Close video overlay when clicking on the X button
closeButton.addEventListener('click', () => {
    videoOverlay.style.display = 'none'; // Hide overlay
    vimeoPlayer.src = ''; // Stop the video
    projectPage.classList.remove('dim-header'); // Restore header visibility
});

