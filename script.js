
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

  // Popup functionality
  const popupOverlay = document.getElementById('popupOverlay');
  const popupClose = document.getElementById('popupClose');
  const popupBtn = document.getElementById('popupBtn');

  // Show popup after 2 seconds
  setTimeout(() => {
    popupOverlay.classList.add('active');
  }, 2000);

  // Close popup on X button click
  popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
  });

  // Close popup on "Start Shopping" button click
  popupBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
  });

  // Close popup when clicking outside the popup box
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
    }
  });
