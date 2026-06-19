document.addEventListener('DOMContentLoaded', () => {

    // ====================================================================
    // 1. VERTICAL TEXT CAROUSEL
    // ====================================================================
    const track = document.querySelector('.text-carousel-track');
    
    // Safety Check: Only run this if the track exists on the current page
    if (track) {
        // Highlight the very first word in black immediately on page load
        track.children[0].classList.add('active');

        // Set up a repeating timer (runs every 2.5 seconds)
        setInterval(() => {
            // A. Slide the entire track up by exactly one line height (60.5px)
            track.style.transition = 'transform 0.6s ease-in-out';
            track.style.transform = 'translateY(-60.5px)';

            // B. Fade the colors
            track.children[0].classList.remove('active');
            track.children[1].classList.add('active');

            // C. Wait for the upward slide animation to completely finish
            setTimeout(() => {
                // Turn off the animation temporarily
                track.style.transition = 'none';
                
                // Snap the track back to its original Y coordinate
                track.style.transform = 'translateY(0)';
                
                // Move the top word to the bottom of the list
                track.appendChild(track.firstElementChild);
            }, 600); 

        }, 2500); 
    }


    // ====================================================================
    // 2. HORIZONTAL IMAGE CAROUSEL
    // ====================================================================
    const slides = document.querySelectorAll('.carousel-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicator = document.querySelector('.carousel-indicator');

    // Safety Check: Only run if there are slides on the current page
    if (slides.length > 0 && prevBtn && nextBtn && indicator) {
        let currentSlideIndex = 0;
        const totalSlides = slides.length;

        function updateCarousel() {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlideIndex].classList.add('active');
            indicator.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentSlideIndex === totalSlides - 1) {
                currentSlideIndex = 0;
            } else {
                currentSlideIndex++;
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentSlideIndex === 0) {
                currentSlideIndex = totalSlides - 1;
            } else {
                currentSlideIndex--;
            }
            updateCarousel();
        });
    }


    // ====================================================================
    // 3. TESTIMONIAL CAROUSEL
    // ====================================================================
    const testiCards = document.querySelectorAll('.testimonial-card');
    const testiPrevBtn = document.querySelector('.testi-prev');
    const testiNextBtn = document.querySelector('.testi-next');

    // Safety Check: Only run if testimonial cards exist on the current page
    if (testiCards.length > 0 && testiPrevBtn && testiNextBtn) {
        let currentTestiIndex = 0;

        function updateTestimonial() {
            testiCards.forEach(card => card.classList.remove('active-testi'));
            testiCards[currentTestiIndex].classList.add('active-testi');
        }

        testiNextBtn.addEventListener('click', () => {
            if (currentTestiIndex === testiCards.length - 1) {
                currentTestiIndex = 0;
            } else {
                currentTestiIndex++;
            }
            updateTestimonial();
        });

        testiPrevBtn.addEventListener('click', () => {
            if (currentTestiIndex === 0) {
                currentTestiIndex = testiCards.length - 1;
            } else {
                currentTestiIndex--;
            }
            updateTestimonial();
        });
    }

});