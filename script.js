
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.arrow.left');
  const next = document.querySelector('.arrow.right');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  // Optional Auto Slide
  setInterval(nextSlide, 5000);
