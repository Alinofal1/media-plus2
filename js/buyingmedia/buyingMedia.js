const imageData = [
  {
    src: "/assets/svg/tv.svg",
    text: "القنوات الإخبارية",
    link: "/pages/newschannels.html",
  },
  {
    src: "/assets/svg/bulletin-board.svg",
    text: "لوحات مضيئة",
    link: "/pages/lighting-boards.html",
  },
  {
    src: "/assets/svg/radio.svg",
    text: "راديو",
    link: "/pages/radios.html",
  },
  {
    src: "/assets/svg/billboard-marketing.svg",
    text: "قارمات",
    link: "/pages/billboards.html",
  },
];

const container = document.getElementById("image-container");

imageData.forEach((item) => {
  const wrapper = document.createElement("a");
  wrapper.className = "image-wrapper";
  wrapper.href = item.link;

  const imgDiv = document.createElement("div");
  imgDiv.className = "border";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "dynamic image";

  imgDiv.appendChild(img);

  const p = document.createElement("p");
  p.textContent = item.text;
  p.className = "buying-para";

  wrapper.appendChild(imgDiv);
  wrapper.appendChild(p);
  container.appendChild(wrapper);
});
