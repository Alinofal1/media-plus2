document.addEventListener("DOMContentLoaded", function () {
  // Header HTML
  document.getElementById("header-placeholder").innerHTML = `
 <nav class="page-header">
      <!-- logo -->
      <h1>
      <a href="/">
      <img src="/assets/svg/logo.svg" alt="logo" class="logo" id="logo"/>
      </a>
      </h1>
      <!-- list -->
      <ul>
        <li><a href="/">الرئيسية</a></li>
        <li><a href="/pages/services.html">الخدمات</a></li>
        <li><a href="/pages/whoWeAre.html">من نحن</a></li>
        <li><a href="/pages/customers.html">الزبائن</a></li>
        <li><a href="/pages/team.html">الفريق</a></li>
        <li><a href="/pages/profile.html">البروفايل</a></li>
        <li><a href="/pages/contactUs.html">تواصل معنا</a></li>
      </ul>
      <!-- search bar -->
      <div class="left-side-header">
      <div>
      <a href="/pages/searchPage.html">
        <button class="search-button">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="search-icon"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>
  </a>
      </div>
      <div id="language">
      <p>En</p>
      </div>
      </div>
    </nav>
  `;

  // add shadow and make header smaller on scroll
  let headerPlaceholder = document.getElementById("header-placeholder");
  let logo = document.getElementById("logo");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      headerPlaceholder.classList.remove("headerPlaceholder");
      headerPlaceholder.classList.add("navContainerScroll");
      logo.style.width = "70px";
      logo.style.height = "40px";
    } else {
      headerPlaceholder.classList.add("headerPlaceholder");
      headerPlaceholder.classList.remove("navContainerScroll");
      logo.style.width = "90px";
      logo.style.height = "55px";
    }
  });
});
