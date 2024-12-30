
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

    document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const reviews = document.getElementById('reviewContainer');
    const totalReviews = reviews.children.length;
    const indicators = document.querySelectorAll('.indicator');

    function updateReview() {
        reviews.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function prevReview() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalReviews - 1;
        updateReview();
    }

    function nextReview() {
        currentIndex = (currentIndex < totalReviews - 1) ? currentIndex + 1 : 0;
        updateReview();
    }

    document.querySelector('.left-arrow').addEventListener('click', prevReview);
    document.querySelector('.right-arrow').addEventListener('click', nextReview);
});
