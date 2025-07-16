// services section
const servicesData = [
  {
    img: "/assets/svg/speaker.svg",
    href: "/pages/servicesInnerPages.html",
    text: "التصميم و الهوية البصرية",
  },
  {
    img: "/assets/svg/podcast.svg",
    text: "التصميم و الهوية البصرية",
    href: "/pages/servicesInnerPages.html",
  },
  {
    img: "/assets/svg/casting.svg",
    href: "/pages/servicesInnerPages.html",
    text: "التصميم و الهوية البصرية",
  },
  {
    img: "/assets/svg/online-design.svg",
    text: "التصميم و الهوية البصرية",
    href: "/pages/servicesInnerPages.html",
  },
  {
    img: "/assets/svg/chess.svg",
    href: "/pages/servicesInnerPages.html",
    text: "التصميم و الهوية البصرية",
  },
  {
    img: "/assets/svg/cards.svg",
    text: "التصميم و الهوية البصرية",
    href: "/pages/servicesInnerPages.html",
  },
  {
    img: "/assets/svg/trophy.svg",
    href: "/pages/servicesInnerPages.html",
    text: "التصميم و الهوية البصرية",
  },
  {
    img: "/assets/svg/billboard-marketing.svg",
    text: "التصميم و الهوية البصرية",
    href: "/pages/servicesInnerPages.html",
  },
];

const servicesCards = document.getElementById("services-cards");

servicesData.forEach((item) => {
  const card = document.createElement("a");
  card.className = "card border";
  card.setAttribute("href", item.href);
  card.innerHTML = `
            <img src="${item.img}" alt="svg" />
            <p>${item.text}</p>
  `;

  servicesCards.appendChild(card);
});
