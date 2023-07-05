// document.addEventListener("DOMContentLoaded", function() {
//     var slides = document.querySelectorAll(".slide");
//     var currentSlide = 0;
//     var prev = document.querySelector(".prev");
//     var next = document.querySelector(".next");
//     var interval;
  
//     function showSlide(n) {
//       clearInterval(interval);
//       slides[currentSlide].classList.remove("active");
//       currentSlide = (n + slides.length) % slides.length;
//       slides[currentSlide].classList.add("active");
//       startSlideshow();
//     }
  
//     function startSlideshow() {
//       interval = setInterval(function() {
//         // Hozzáadunk egy tranzíciót a kép váltáshoz
//         slides[currentSlide].classList.add("transition");
//         setTimeout(function() {
//           slides[currentSlide].classList.remove("transition");
//         }, 1000); // Az animáció ideje
  
//         showSlide(currentSlide + 1);
//       }, 7000);
//     }
  
//     prev.addEventListener("click", function(e) {
//       e.preventDefault();
//       showSlide(currentSlide - 1);
//     });
  
//     next.addEventListener("click", function(e) {
//       e.preventDefault();
//       showSlide(currentSlide + 1);
//     });
  
//     slides[currentSlide].classList.add("active"); // Az első kép aktiválása
//     startSlideshow();
//   });

document.addEventListener("DOMContentLoaded", function() {
  var slideshow1 = {
    slides: document.querySelectorAll(".content-1 .slide"),
    currentSlide: 0,
    prev: document.querySelector(".content-1 .prev"),
    next: document.querySelector(".content-1 .next"),
    interval: null
  };

  var slideshow2 = {
    slides: document.querySelectorAll(".content-2 .slide"),
    currentSlide: 0,
    prev: document.querySelector(".content-2 .prev"),
    next: document.querySelector(".content-2 .next"),
    interval: null
  };

  function showSlide(slideshow) {
    clearInterval(slideshow.interval);
    slideshow.slides[slideshow.currentSlide].classList.remove("active");
    slideshow.currentSlide = (slideshow.currentSlide + 1) % slideshow.slides.length;
    slideshow.slides[slideshow.currentSlide].classList.add("active");
    startSlideshow(slideshow);
  }

  function startSlideshow(slideshow) {
    slideshow.interval = setInterval(function() {
      showSlide(slideshow);
    }, 7000);
  }

  slideshow1.prev.addEventListener("click", function(e) {
    e.preventDefault();
    showSlide(slideshow1);
  });

  slideshow1.next.addEventListener("click", function(e) {
    e.preventDefault();
    showSlide(slideshow1);
  });

  slideshow2.prev.addEventListener("click", function(e) {
    e.preventDefault();
    showSlide(slideshow2);
  });

  slideshow2.next.addEventListener("click", function(e) {
    e.preventDefault();
    showSlide(slideshow2);
  });

  slideshow1.slides[slideshow1.currentSlide].classList.add("active");
  slideshow2.slides[slideshow2.currentSlide].classList.add("active");

  startSlideshow(slideshow1);
  startSlideshow(slideshow2);
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