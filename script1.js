'use strict';

const products = [
    { id: 1, img: 'img/Image1.png', title: 'Жакет', price: 1500 },
    { id: 2, img: 'img/Image2.png', title: 'Куртка', price: 8000 },
    { id: 3, img: 'img/Image3.png', title: 'Панама', price: 100 },
    { id: 4, img: 'img/Image4.png', title: 'Рубашка', price: 1500 },
    { id: 5, img: 'img/Image5.png', title: 'Футболка', price: 500 },
    { id: 6, img: 'img/Image6.png', title: 'Шорты', price: 500 },
    { id: 7, img: 'img/Image7.png', title: 'Костюм', price: 2500 },
    { id: 8, img: 'img/Image8.png', title: 'Пиджак', price: 1500 },
    { id: 9, img: 'img/Image9.png', title: 'Рубашка', price: 500 },
    { id: 10, img: 'img/Image10.png',title: 'Брюки', price: 2000 },
];

const renderProduct = (item, img ='https://placehold.it/200x150') =>
             `<div class="product-item">
                <img src="${img}" alt="img" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">Купить</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);