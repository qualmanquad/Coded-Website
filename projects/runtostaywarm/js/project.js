// Select elements
const backgroundImages = document.querySelectorAll('.background-image');
const videoOverlay = document.getElementById('vimeo-container');
const closeButton = document.getElementById('close-video');
const vimeoPlayer = document.getElementById('vimeo-video');
const projectPage = document.querySelector('.project-page');

// Show video overlay and load Vimeo video when background image is clicked
backgroundImages.forEach(image => {
    image.addEventListener('click', (event) => {
        const videoID = event.currentTarget.getAttribute('data-video-id'); // Get video ID from the clicked image
        console.log('Clicked video ID:', videoID);

        if (videoID && !isNaN(videoID)) {
            videoOverlay.style.display = 'flex'; // Display overlay
            vimeoPlayer.src = `https://player.vimeo.com/video/${videoID}?autoplay=1&title=0&byline=0&portrait=0`; // Set iframe source dynamically
            projectPage.classList.add('dim-header'); // Dim the header when video is active
        } else {
            console.error('Invalid video ID');
        }
    });
});

// Close video overlay when clicking on the X button
closeButton.addEventListener('click', () => {
    videoOverlay.style.display = 'none'; // Hide overlay
    vimeoPlayer.src = ''; // Stop the video
    projectPage.classList.remove('dim-header'); // Restore header visibility
});

// Select all clickable elements, including the background image and thumbnails
const clickableElements = document.querySelectorAll('.background-image, .thumbnail');

clickableElements.forEach(element => {
    element.addEventListener('click', (event) => {
        const videoID = event.currentTarget.getAttribute('data-video-id'); // Get video ID from the clicked element
        console.log('Clicked video ID:', videoID);

        if (videoID && !isNaN(videoID)) {
            videoOverlay.style.display = 'flex'; // Display overlay
            vimeoPlayer.src = `https://player.vimeo.com/video/${videoID}?autoplay=1&title=0&byline=0&portrait=0`; // Set iframe source dynamically
            projectPage.classList.add('dim-header'); // Dim the header when video is active
        } else {
            console.error('Invalid video ID');
        }
    });
});

