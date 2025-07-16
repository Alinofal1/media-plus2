function renderBreadCrumb(titleText) {
  const headerHTML = `
    <div class="breadCrumb container">
      <div class="breadCrumbTitle">
        <h2>${titleText}</h2>
        <div>
          <p>الرئيسية <span>&gt;</span> <span class="active-title">${titleText}</span></p>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById("breadCrumbContainer");
  if (container) {
    container.insertAdjacentHTML("beforeend", headerHTML);
  }
}
