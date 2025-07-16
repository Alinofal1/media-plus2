const imagePaths = [
  "/assets/images/sliderImage5.png",
  "/assets/images/sliderImage4.png",
  "/assets/images/sliderImage1.png",
  "/assets/images/sliderImage2.png",
  "/assets/images/sliderImage3.png",
  "/assets/images/sliderImage6.png",
  "/assets/images/sliderImage7.png",
  "/assets/images/sliderImage8.png",
  "/assets/images/sliderImage9.png",
  "/assets/images/sliderImage10.png",
  "/assets/images/sliderImage11.png",
  "/assets/images/sliderImage12.png",
  "/assets/images/sliderImage13.png",
  "/assets/images/sliderImage14.png",
  "/assets/images/sliderImage15.png",
  "/assets/images/sliderImage16.png",
  "/assets/images/sliderImage17.png",
];

function infiniteSlider(selector, speed) {
  const container = document.querySelector(selector);
  const parent = container.parentElement;
  const containerWidth = parent.offsetWidth;

  imagePaths.forEach((src) => {
    const wrapper = document.createElement("div");
    wrapper.className = "customers-img-wrapper";

    const img = document.createElement("img");
    img.src = src;
    img.className = "customers-border";

    wrapper.appendChild(img);
    container.appendChild(wrapper);
  });

  function getContentWidth() {
    return Array.from(container.children).reduce((total, wrapper) => {
      const style = getComputedStyle(wrapper);
      const marginRight = parseFloat(style.marginRight) || 0;
      return total + wrapper.offsetWidth + marginRight;
    }, 0);
  }

  while (getContentWidth() < containerWidth * 2) {
    container.innerHTML += container.innerHTML;
  }

  let position = 0;
  const totalWidth = getContentWidth() / 2;
  let isPaused = false;

  container.addEventListener("mouseover", () => {
    isPaused = true;
  });

  container.addEventListener("mouseout", () => {
    isPaused = false;
  });

  function animate() {
    if (!isPaused) {
      position += speed;
      if (position >= totalWidth) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
}

window.addEventListener("load", () => {
  infiniteSlider("#customers-slider", 0.5);
});
