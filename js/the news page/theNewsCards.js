// services section
const newsData = [
  {
    img: "/assets/images/money.png",
    title: "نقابة المعلمين توافق على زيادة الرواتب وتثبيت البدلات",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher4.jpg",
  },
  {
    img: "/assets/images/ramallah.png",
    title:
      "محافظ رام الله يفتتح مركز تدريب حرفي للناشئين الجدد والمقبلين على المجال",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher3.jpg",
  },
  {
    img: "/assets/images/ministryofhealth.png",
    title: "وزارة الصحة تطلق حملة وطنية للتطعيم ضد الإنفلونزا والانتشار السريع",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher1.jpg",
  },
  {
    img: "/assets/images/clay.png",
    title: "بلدية البيرة تبدأ مشروع الحرف المهنية لرواد الاعمال الصاعدين",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher2.jpg",
  },
  {
    img: "/assets/images/money.png",
    title: "نقابة المعلمين توافق على زيادة الرواتب وتثبيت البدلات",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher4.jpg",
  },
  {
    img: "/assets/images/ramallah.png",
    title:
      "محافظ رام الله يفتتح مركز تدريب حرفي للناشئين الجدد والمقبلين على المجال",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher3.jpg",
  },
  {
    img: "/assets/images/ministryofhealth.png",
    title: "وزارة الصحة تطلق حملة وطنية للتطعيم ضد الإنفلونزا والانتشار السريع",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher1.jpg",
  },
  {
    img: "/assets/images/clay.png",
    title: "بلدية البيرة تبدأ مشروع الحرف المهنية لرواد الاعمال الصاعدين",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher2.jpg",
  },
  {
    img: "/assets/images/money.png",
    title: "نقابة المعلمين توافق على زيادة الرواتب وتثبيت البدلات",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher4.jpg",
  },
  {
    img: "/assets/images/ramallah.png",
    title:
      "محافظ رام الله يفتتح مركز تدريب حرفي للناشئين الجدد والمقبلين على المجال",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher3.jpg",
  },
  {
    img: "/assets/images/ministryofhealth.png",
    title: "وزارة الصحة تطلق حملة وطنية للتطعيم ضد الإنفلونزا والانتشار السريع",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher1.jpg",
  },
  {
    img: "/assets/images/clay.png",
    title: "بلدية البيرة تبدأ مشروع الحرف المهنية لرواد الاعمال الصاعدين",
    text: `أعلنت وزارة الصحة عن انطلاق حملة تطعيم شاملة ضد فيروس الإنفلونزا
              في جميع محافظات الوطن، تستهدف الفئات العمرية فوق 6 أشهر، وذلك`,
    date: "مايو 22, 2017",
    href: "/pages/thenewsInnerPage.html",
    puplisher: "Oliver Smith",
    puplisherImage: "/assets/images/puplisher2.jpg",
  },
];

const newsCards = document.getElementById("cards-parent2");

newsData.forEach((item) => {
  const card = document.createElement("a");
  card.className = "border";
  card.setAttribute("href", item.href);
  card.innerHTML = `
             <img src="${item.img}" alt="photo" />
            <h2>${item.title}</h2>
            <p id="date">${item.date}</p>
            <p>
              ${item.text}
            </p>
  `;

  newsCards.appendChild(card);
});
