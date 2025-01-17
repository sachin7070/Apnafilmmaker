document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("video");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        threshold: 0.25
    });

    videos.forEach(video => {
        observer.observe(video);
    });
});