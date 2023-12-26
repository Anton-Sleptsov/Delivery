const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const buttonOpen = document.querySelector(".button-cart");

  const openModal = () => {
    modal.classList.add("open");
  }

  const closeModal = () => {
    modal.classList.remove("open");
  }

  buttonOpen.addEventListener("click", openModal);
  modal.addEventListener("click", (event) => {
    console.log();
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close") ||
      event.target.closest("#close")) {
      closeModal();
    }
  });
}

const restFunc = () => {
  const container = document.querySelector("#rests-container");
  const restsArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "card-1.jpg"
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "card-2.jpg"
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "card-3.jpg"
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "card-4.jpg"
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "card-5.jpg"
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "card-6.jpg"
    }
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center; font-style: italic;">Загрузка...</p>';
  }

  const restsRender = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      if (card.id != 1) {
        container.insertAdjacentHTML("beforeend", `
        <div class="products-card">
                  <div class="products-card_image">
                    <img src="images/main/${card.image}" alt="${card.image}" />
                  </div>
                  <div class="products-card_description">
                    <div class="description-row">
                      <h4 class="description-title">${card.title}</h4>
                      <div class="description-badge">${card.time} мин</div>
                    </div>
                    <div class="description-row">
                      <div class="description-info">
                        <div class="description-info-raiting">
                          <img src="images/main/star.svg" alt="" />
                          ${card.raiting}
                        </div>
                        <div class="description-info-price">От ${card.price} ₽</div>
                        <div class="description-info-group">${card.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
        `);
      } else {
        container.insertAdjacentHTML("beforeend", `
      <a href="goods.html?id=${card.id}" class="products-card">
                <div class="products-card_image">
                  <img src="images/main/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card_description">
                  <div class="description-row">
                    <h4 class="description-title">${card.title}</h4>
                    <div class="description-badge">${card.time} мин</div>
                  </div>
                  <div class="description-row">
                    <div class="description-info">
                      <div class="description-info-raiting">
                        <img src="images/main/star.svg" alt="" />
                        ${card.raiting}
                      </div>
                      <div class="description-info-price">От ${card.price} ₽</div>
                      <div class="description-info-group">${card.type}</div>
                    </div>
                  </div>
                </div>
              </a>
      `);
      }

    });
  }

  if (container) {
    loading();
    setTimeout(() => {
      restsRender(restsArray);
    }, 1000);
  }

}

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");
  const goodsArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      structure: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "product-1.jpg"
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      structure: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "product-2.jpg"
    },
    {
      id: 2,
      title: "Окинава стандарт",
      structure: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "product-3.jpg"
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      structure: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "product-4.jpg"
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      structure: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "product-5.jpg"
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      structure: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.",
      price: 250,
      image: "product-6.jpg"
    },
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center; font-style: italic;">Загрузка...</p>';
  }

  const goodsRender = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML("beforeend", `
      <div class="products-card">
      <div class="products-card_image">
        <img src="images/goods/${card.image}" alt="${card.image}" />
      </div>
      <div class="products-card_description">
        <div class="description-row">
          <h5 class="description-name">${card.title}</h5>
        </div>
        <div class="description-row">
          <p class="description-text">
          ${card.structure}
          </p>
        </div>
        <div class="description-row">
          <div class="description-controls">
            <button class="button-enter btn btn--blue">
              <img
                class="img-person"
                src="images/goods/cart.svg"
                alt=""
              />
              <span>В корзину</span>
            </button>
            <div class="description-price">${card.price} ₽</div>
          </div>
        </div>
      </div>
    </div>
        `);
    });
  }

  if (container) {
    loading();
    setTimeout(() => {
      goodsRender(goodsArray);
    }, 1000);
  }

}

modalFunc();
goodsFunc();
restFunc();
