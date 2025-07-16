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

const imagesContainer = document.getElementById("images-container");

imagePaths.forEach((path) => {
  const card = document.createElement("div");
  card.className = "clinets-cards border";

  const img = document.createElement("img");
  img.src = path;
  img.alt = "card";

  card.appendChild(img);
  imagesContainer.appendChild(card);
});
