const menu = () => {
  const header = document.querySelector(".header");
  const headerBtn = header.querySelector(".header__btn");

  headerBtn.addEventListener("click", () => {
    if (headerBtn.classList.contains("header__btn--active")) {
      headerBtn.classList.remove("header__btn--active");
      header.style.transform = "translateY(-100%)";
    } else {
      headerBtn.classList.add("header__btn--active");
      header.style.transform = "translateY(0%)";
    }
  });
};

export default menu;
