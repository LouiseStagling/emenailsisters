let slideIndex = 0;
let currentSlide = 0;

showSlides(currentSlide);

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  currentSlide = n;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].style.display = "block";
}

function plusSlides(n) {
  currentSlide += n;
  showSlides(currentSlide);
}

// Automatiskt bildbyte var 4 sekunder
setInterval(function () {
  plusSlides(1);
}, 4000);





