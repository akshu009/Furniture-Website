document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully");

  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  // Bind click events to arrows and dots (optional fallback)
  document.querySelectorAll('.arrow')[0]?.addEventListener('click', prevSlide);
  document.querySelectorAll('.arrow')[1]?.addEventListener('click', nextSlide);
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  // Initialize the first slide
  showSlide(currentSlide);
});
