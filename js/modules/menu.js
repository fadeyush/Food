import {getResource} from '../services/services';

function menu() {
  const getUrl = 'https://foodmenunew.free.beeceptor.com';

  getResource(getUrl)
    .then(data => createCard(data));

  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price }) => {
      const element = document.createElement('div');

      const transfer = 69;
      price = price * transfer

      element.classList.add('menu__item');

      element.innerHTML = `
              <img src=${img} alt=${altimg}>
              <h3 class="menu__item-subtitle">${title}</h3>
              <div class="menu__item-descr">${descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${price}</span> руб/день</div>
              </div>
            `;

      document.querySelector('.menu .container').append(element);
    });
  }
}

export default menu;