let currentSlide = 0;
let burguer_menu = document.getElementById("burguer-menu");
let phone_menu = document.getElementById("phone-menu")
const slides = document.querySelectorAll('.carousel-slide');

burguer_menu.addEventListener("click", (e) => {
      
      if (phone_menu.style.visibility === "visible") {
        phone_menu.style.visibility = "hidden";
      }
      else {
        phone_menu.style.visibility = "visible"
      }
})

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Mostrar o primeiro slide ao carregar
showSlide(currentSlide);