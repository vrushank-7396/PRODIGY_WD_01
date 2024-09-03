// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const video = document.getElementById('bg-video');
    const videoContainer = document.getElementById('video-container');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight the active link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar ul li a');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -50 && rect.top <= 150) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });

    // Pause the video when it scrolls out of view
    const rect = videoContainer.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
        video.pause();
    } else {
        video.play();
    }
});
