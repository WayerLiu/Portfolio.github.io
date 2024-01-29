/* document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var items = document.querySelectorAll('.carousel .carousel-item');
    var itemCount = items.length;

    function cycleItems() {
        var item = items[currentIndex];
        items.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = 0;
        });
        item.classList.add('active');
        item.style.opacity = 1;
    }

    var autoPlay = setInterval(function() {
        currentIndex = (currentIndex + 1) % itemCount;
        cycleItems();
    }, 3000); 

    function setCurrentIndex(newIndex) {
        if (newIndex < 0) {
            newIndex = itemCount - 1;
        } else if (newIndex >= itemCount) {
            newIndex = 0;
        }
        currentIndex = newIndex;
        cycleItems();
    }

    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        clearInterval(autoPlay);
        setCurrentIndex(currentIndex - 1);
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        clearInterval(autoPlay);
        setCurrentIndex(currentIndex + 1);
    });
});
 */

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var Swiper2 = new Swiper(".my-swiper-text", {
  effect: "fade",
});
var Swiper1 = new Swiper(".mySwiper", {
  controller: {
    control: Swiper2,
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});


var Swiper3 = new Swiper(".project1-swiper-text", {
  effect: "fade",
});
var Swiper4 = new Swiper(".project1_swiper", {
  controller: {
    control: Swiper3,
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
