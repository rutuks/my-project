document.addEventListener('DOMContentLoaded', function () {
        
    const smoothScroll = function (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; 
        let startTime = null;

        const animation = function (currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }
            const timeElapsed = currentTime - startTime;
            const ease = function (t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            };
            window.scrollTo(0, ease(timeElapsed / duration) * distance + startPosition);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            smoothScroll(targetSection);
        });
    });
});