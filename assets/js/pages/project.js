// Select elements
const backgroundImages = document.querySelectorAll('.background-image');
const videoOverlay = document.getElementById('vimeo-container');
const closeButton = document.getElementById('close-video');
const vimeoPlayer = document.getElementById('vimeo-video');
const projectPage = document.querySelector('.project-page');

// Helper function to check if a video exists on Vimeo
async function isValidVimeoID(videoID) {
    const url = `https://vimeo.com/api/v2/video/${videoID}.json`;
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error) {
        console.error('Error validating Vimeo ID:', error);
        return false;
    }
}

// Function to load the video with fallback
async function loadVideo(videoID) {
    if (await isValidVimeoID(videoID)) {
        console.log('Valid Vimeo ID detected:', videoID);
        vimeoPlayer.src = `https://player.vimeo.com/video/${videoID}?autoplay=1&title=0&byline=0&portrait=0`;
    } else {
        console.warn('Falling back to YouTube ID:', videoID);
        vimeoPlayer.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0&showinfo=0`;
    }

    // Display overlay and dim header
    videoOverlay.style.display = 'flex';
    projectPage.classList.add('dim-header');
}

// Show video overlay and load the appropriate video when a background image is clicked
backgroundImages.forEach(image => {
    image.addEventListener('click', async (event) => {
        const videoID = event.currentTarget.getAttribute('data-video-id'); // Get video ID from the clicked image
        console.log('Clicked video ID:', videoID);

        if (videoID) {
            await loadVideo(videoID);
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
    element.addEventListener('click', async (event) => {
        const videoID = event.currentTarget.getAttribute('data-video-id'); // Get video ID from the clicked element
        console.log('Clicked video ID:', videoID);

        if (videoID) {
            await loadVideo(videoID);
        } else {
            console.error('Invalid video ID');
        }
    });
});
