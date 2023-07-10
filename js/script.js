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

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

window.addEventListener("resize", function() {
  var screenWith = this.window.innerWidth;
  if(screenWith > 1000) {
    sr.reveal('.fa-text-content', {delay: 200, origin: 'top'});
    sr.reveal('.slideshow-container', {delay: 450, origin: 'top'});
  }
  if(screenWith > 600) {
    this.location.reload(); 
  }
})

// window.alert(window.innerWidth);
// window.alert(window.innerHeight);