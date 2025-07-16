const sliderTrack = document.getElementById("slider-track");
const heroSlider = document.getElementById("hero-slider");

const imagesSrc = [
  "assets/images/heroImage.png",
  "assets/images/heroImage.png",
  "assets/images/heroImage.png",
  "assets/images/heroImage.png",
];

const totalSlides = imagesSrc.length;
let currentIndex = 0;
let autoSlideInterval;

for (let i = 0; i < totalSlides; i++) {
  const img = document.createElement("img");
  img.src = imagesSrc[i];
  img.alt = "hero";
  sliderTrack.appendChild(img);

  const dot = document.createElement("div");
  dot.className = i === 0 ? "active-dot" : "slider-active";
  dot.dataset.index = i;
  heroSlider.appendChild(dot);
}

const dots = document.querySelectorAll("#hero-slider div");

function goToSlide(index) {
  sliderTrack.style.transform = `translateX(${index * 100}%)`;
  dots.forEach((d, i) => {
    d.className = i === index ? "active-dot" : "slider-active";
  });
  currentIndex = index;
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    goToSlide(parseInt(dot.dataset.index));
    startAutoSlide();
  });
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }, 3000);
}

startAutoSlide();
