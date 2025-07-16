// footer section
document.addEventListener("DOMContentLoaded", function () {
  // Header HTML
  document.getElementById("footer-placeholder").innerHTML = `
<footer>
      <div class="footer-container">
        <img src="/assets/svg/logo.svg" alt="logo" id="footer-logo"/>
        <div id="footer-lists"></div>
        <div class="contact-footer">
          <div id="phone-num">
            <img src="/assets/svg/phone.svg" alt="phone" />
            <p>014 01445 00014</p>
          </div>
          <div id="footer-email">
  <img src="/assets/svg/Vector.svg" alt="email" />
  <a href="mailto:example@outlook.com">
    <p>example@outlook.com</p>
  </a>
</div>

        </div>
      </div>
      <div class="footer-bottom-container">
        <div>
          <p>تطوير وبرمجة</p>
          <a href="https://blue.me/">
          <img src="/assets/svg/blueLogo.svg" alt="blue Logo" />
          </a>
        </div>
        <div class="social-icons">
  <!-- Facebook -->
<a href="https://facebook.com" target="_blank">
  <div class="icon-circle">
    <svg class="icon facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
      <path d="M13.5 8.5H15V6h-2c-1.66 0-3 1.34-3 3v2H8v3h2v7h3v-7h2.1l.4-3H13.5V9c0-.28.22-.5.5-.5z"/>
    </svg>
  </div>
</a>




  <!-- Instagram -->
  <a href="https://instagram.com" target="_blank">
  <div class="icon-circle">
    <svg viewBox="0 0 24 24" class="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  </div>
</a>


  <!-- Twitter -->
  <a href="https://twitter.com" target="_blank">
    <div class="icon-circle">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M23.954 4.569a10.04 10.04 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.15a4.822 4.822 0 001.523 6.573 4.903 4.903 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.085c.626 1.956 2.444 3.377 4.6 3.419A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.058 0 14.01-7.496 13.995-14.197 0-.22-.006-.439-.016-.657A10.025 10.025 0 0024 4.59z"/>
      </svg>
    </div>
  </a>

  <!-- YouTube -->
  <a href="https://youtube.com" target="_blank">
    <div class="icon-circle">
      <svg viewBox="0 0 24 24" class="icon">
        <path d="M23.498 6.186a2.993 2.993 0 00-2.108-2.115C19.591 3.5 12 3.5 12 3.5s-7.591 0-9.39.571a2.993 2.993 0 00-2.108 2.115C.5 7.988.5 12 .5 12s0 4.012.502 5.814a2.993 2.993 0 002.108 2.115c1.799.571 9.39.571 9.39.571s7.591 0 9.39-.571a2.993 2.993 0 002.108-2.115C23.5 16.012 23.5 12 23.5 12s0-4.012-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/>
      </svg>
    </div>
  </a>
</div>

        <p dir="ltr">© 2025 MEDIAPLUS All Rights Reserved.</p>
      </div>
    </footer>
  `;

  const footerData = [
    {
      title: "التواصل والدعم",
      links: [
        { text: "اتصل بنا", href: "/pages/contactUs.html" },
        { text: "الشكاوي", href: "#" },
        { text: "الأسئلة الشائعة", href: "#" },
      ],
    },
    {
      title: "المركز الاعلامي",
      links: [
        { text: "الاخبار", href: "/pages/theNews.html" },
        { text: "الفعاليات", href: "#" },
        { text: "الوثائق والملفات", href: "#" },
      ],
    },
    {
      title: "الخدمات الخاصة",
      links: [
        { text: "الحج والعمرة", href: "#" },
        { text: "الاحتياجات الخاصة", href: "#" },
      ],
    },
    {
      title: "الزبائن",
      links: [
        { text: "شراء وسائل الاعلان", href: "/pages/buyingMedia.html" },
        { text: "الاحصائيات", href: "#" },
        { text: "التقارير", href: "#" },
      ],
    },
  ];

  const footerLists = document.getElementById("footer-lists");

  footerData.forEach((item) => {
    const list = document.createElement("div");

    const linksHTML = item.links
      .map((link) => `<li><a href="${link.href}">${link.text}</a></li>`)
      .join("");

    list.innerHTML = `
    <h2>${item.title}</h2>
    <ul>
      ${linksHTML}
    </ul>
  `;

    footerLists.appendChild(list);
  });
});
