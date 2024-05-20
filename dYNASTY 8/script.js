document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.review-nav.prev');
    const nextButton = document.querySelector('.review-nav.next');
    const testimonials = document.querySelectorAll('.review-testimonial');
    const dots = document.querySelectorAll('.review-dot');

    if (!prevButton || !nextButton || !testimonials.length || !dots.length) {
        console.error("Slider elements not found!");
        return;
    }

    let currentSlide = 0;

    function showSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= testimonials.length) {
            return;
        }

        testimonials.forEach(testimonial => testimonial.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[slideIndex].style.display = 'block';
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', prevSlide);

    nextButton.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);
});
