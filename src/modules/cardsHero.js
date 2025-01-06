const cardsHero = () => {
  const cardsWrapper = document.querySelector(".cards__wrapper");
  const headerWrapper = document.querySelector(".header__wrapper");

  fetch("dbHeroes.json")
    .then((response) => response.json())
    .then((data) => render(data));

  const render = (cards) => {
    cardsWrapper.innerHTML = "";
    cards.forEach((card) => {
      cardsWrapper.innerHTML += `
      <div class="card">
          <div class="card__photo">
              <img src=${card.photo} alt="#">
          </div>
          <div class="card__information">
              <p><span>Name: </span>${card.name}</p>
              <p><span>Real name: </span>${card.realName}</p>
              <p><span>Status: </span>${card.status}</p>
              <p class="card__movies"><span>Movies: </span>${
                card.movies ? card.movies.join(", ") : "-"
              }</p>
          </div>
      </div>
      `;
    });
  };

  const filterCards = (cards, movies) => {
    let newCards = [];
    cards.forEach((card) => {
      if (typeof card.movies === "object") {
        card.movies.find((movie) => {
          if (movie === movies) newCards.push(card);
        });
      }
    });
    render(newCards);
  };

  headerWrapper.addEventListener("click", (e) => {
    if (e.target.textContent === "All") {
      fetch("dbHeroes.json")
        .then((response) => response.json())
        .then((data) => render(data));
    } else if (e.target.tagName === "A") {
      fetch("dbHeroes.json")
        .then((response) => response.json())
        .then((data) => filterCards(data, e.target.textContent));
    }
  });
};

export default cardsHero;
