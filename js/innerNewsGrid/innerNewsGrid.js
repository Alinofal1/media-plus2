const newsItems = [
  { src: "/assets/images/ramallah.png", alt: "مبنى محافظة رام الله" },
  { src: "/assets/images/money.png", alt: "أموال وتمويل" },
  { src: "/assets/images/gaza-municipality.png", alt: "بلدية غزة" },
  { src: "/assets/images/ministryofhealth.png", alt: "وزارة الصحة" },
];

const newsGrid = document.getElementById("news-grid");

newsItems.forEach((item, i) => {
  const mediaContainer = document.createElement("div");
  mediaContainer.className = "media-wrapper";

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt;
  image.className = "media-img";

  mediaContainer.appendChild(image);

  if (i === 1) {
    const playIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    playIcon.setAttribute("class", "svg-overlay");
    playIcon.setAttribute("viewBox", "0 0 24 24");

    const playPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    playPath.setAttribute("d", "M8 5v14l11-7z");
    playIcon.appendChild(playPath);

    mediaContainer.appendChild(playIcon);
  } else {
    const imageIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    imageIcon.setAttribute("class", "svg-overlay");
    imageIcon.setAttribute("viewBox", "0 0 24 24");

    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    iconPath.setAttribute(
      "d",
      "M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
    );
    imageIcon.appendChild(iconPath);

    mediaContainer.appendChild(imageIcon);
  }

  newsGrid.appendChild(mediaContainer);
});
