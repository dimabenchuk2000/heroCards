const menu = () => {
  const header = document.querySelector(".header");
  const headerBtn = header.querySelector(".header__btn");

  const closeMenu = () => {
    headerBtn.classList.remove("header__btn--active");
    header.style.transform = "translateY(-100%)";
  };

  const openMenu = () => {
    headerBtn.classList.add("header__btn--active");
    header.style.transform = "translateY(0%)";
  };

  header.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      (headerBtn.classList.contains("header__btn--active") &&
        e.target.tagName === "BUTTON") ||
      e.target.tagName === "A"
    ) {
      closeMenu();
    } else openMenu();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header")) {
      e.preventDefault();
      closeMenu();
    }
  });
};

export default menu;
