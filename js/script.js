document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var interval;
  
    function showSlide(n) {
      clearInterval(interval);
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
      startSlideshow();
    }
  
    function startSlideshow() {
      interval = setInterval(function() {
        // Hozzáadunk egy tranzíciót a kép váltáshoz
        slides[currentSlide].classList.add("transition");
        setTimeout(function() {
          slides[currentSlide].classList.remove("transition");
        }, 1000); // Az animáció ideje
  
        showSlide(currentSlide + 1);
      }, 7000);
    }
  
    prev.addEventListener("click", function(e) {
      e.preventDefault();
      showSlide(currentSlide - 1);
    });
  
    next.addEventListener("click", function(e) {
      e.preventDefault();
      showSlide(currentSlide + 1);
    });
  
    slides[currentSlide].classList.add("active"); // Az első kép aktiválása
    startSlideshow();
  });

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.fa-text-content', {delay: 200, origin: 'top'});
sr.reveal('.slideshow-container', {delay: 450, origin: 'top'});