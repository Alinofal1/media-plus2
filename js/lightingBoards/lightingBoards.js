// services section
const newsData = [
  {
    img: "/assets/images/ad-boards.png",
    title: "نقابة المعلمين توافق على زيادة الرواتب وتثبيت البدلات",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher4.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title:
      "محافظ رام الله يفتتح مركز تدريب حرفي للناشئين الجدد والمقبلين على المجال",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher3.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "وزارة الصحة تطلق حملة وطنية للتطعيم ضد الإنفلونزا والانتشار السريع",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher1.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "بلدية البيرة تبدأ مشروع الحرف المهنية لرواد الاعمال الصاعدين",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher2.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "نقابة المعلمين توافق على زيادة الرواتب وتثبيت البدلات",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher4.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title:
      "محافظ رام الله يفتتح مركز تدريب حرفي للناشئين الجدد والمقبلين على المجال",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher3.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "وزارة الصحة تطلق حملة وطنية للتطعيم ضد الإنفلونزا والانتشار السريع",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher1.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "بلدية البيرة تبدأ مشروع الحرف المهنية لرواد الاعمال الصاعدين",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher2.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "نقابة المعلمين توافق على زيادة الرواتب وتثبيت البدلات",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher4.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title:
      "محافظ رام الله يفتتح مركز تدريب حرفي للناشئين الجدد والمقبلين على المجال",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher3.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "وزارة الصحة تطلق حملة وطنية للتطعيم ضد الإنفلونزا والانتشار السريع",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher1.jpg",
  },
  {
    img: "/assets/images/ad-boards.png",
    title: "بلدية البيرة تبدأ مشروع الحرف المهنية لرواد الاعمال الصاعدين",
    text: `أعلنت وزارة الصحة عن انطلاق  وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/lighting-board-innerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher2.jpg",
  },
];

const newsCards = document.getElementById("lightingBoards-container");

newsData.forEach((item) => {
  const card = document.createElement("a");
  card.className = "border";
  card.setAttribute("href", item.href);
  card.innerHTML = `
             <img src="${item.img}" alt="photo" />
            <p>
              ${item.text}
            </p>
  `;

  newsCards.appendChild(card);
});
