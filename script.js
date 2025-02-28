document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let slideIndex = 0;
  const slideWidth = 100;

  function updateCarousel() {
    track.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
  }

  nextButton.addEventListener("click", () => {
    if (slideIndex < 3) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = 3;
    }
    updateCarousel();
  });
});
