'use client'

import '../css/market/assets.css'
import '../css/market/main.css'
import '../css/market/media.css'

import { useState } from 'react';

export default function Market() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [ 
      { name: 'Проходка', price: 99.00 },
      { name: 'Plus 1 МЕСЯЦ', price: 99.00 },
      { name: 'Plus 3 МЕСЯЦ', price: 267.00 },
      { name: 'Plus 6 МЕСЯЦ', price: 475.00 },
      { name: 'РАЗБАН', price: 599.00 },
  ];

  const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <section id="products">
          <div className="container">
              <div className="products__menu d_flex_row j_between a_center">
                  <div className="products__menu__title d_flex_col j_start">
                      <h2 className="h2_title">Наши товары:</h2>
                      <div className="neon-line"></div>
                  </div>
                  <div className="products__menu__search">
                      <div className="search">
                          <p>Поиск по товарам:</p>
                          <div className="search__container d_flex_row">
                              <img src="/search.svg" alt="" />
                              <img src="/line.svg" alt="" />
                              <input 
                                  type="text" 
                                  placeholder="Введите текст" 
                                  onChange={event => setSearchTerm(event.target.value)} // обновление поискового запроса при вводе
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="products__block">
                  {filteredProducts.map((product, index) => ( // отображение отфильтрованных товаров
                      <div key={index} className="products__block__item d_flex_col j_center a_center">
                          <h2 className="h2_title">{product.name}</h2>
                          <img src="/item.svg" alt="" />
                          <div className="buy-item d_flex_row a_center">
                              <p>{product.price} &#8381;</p>
                              <button className="button_b">Купить</button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

