'use client'

import '@/app/globals.css'
import '../css/market/main.css'
import '../css/market/media.css'
import Image from 'next/image'

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
    <>
      <section id="products">
          <div className="container">
              <div className="products__menu flex flex-row justify-between items-center">
                  <div className="products__menu__title flex flex-col justify-start">
                      <h2 className="h2_title">Наши товары:</h2>
                      <div className="neon-line"></div>
                  </div>
                  <div className="products__menu__search">
                      <div className="search">
                          <p>Поиск по товарам:</p>
                          <div className="search__container flex flex-row">
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
                      <div key={index} className="products__block__item flex flex-col justify-center items-center">
                          <h2 className="h2_title text-center whitespace-nowrap">{product.name}</h2>
                          <img src="/item.svg" alt="" />
                          <div className="buy-item flex flex-row items-center">
                              <p>{product.price} &#8381;</p>
                              <button className="button_b">Купить</button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section id='line' className='mb-0'></section>

      <section id='server-list'>
        <div className="container">

            <div className="products__menu__title flex flex-col justify-start">
                <h2 className="h2_title">Наши товары:</h2>
                <div className="neon-line"></div>
            </div>

            <div className="list_box py-6 px-12 flex flex-col items-start gap-8 bg-greey w-1/3 rounded-xl">

                <div className="list_box__title flex flex-row justify-between items-center">
                    <div className="flex flex-row">
                        <Image src='/logo.svg' alt='' width='32' height='32'></Image>
                        <h2 className='ml-2 text-white text-2xl font-bold'>CL</h2>
                    </div>
                    <p className='text-2xl text-white'>Версия: 1.20</p>
                </div>


            </div>

        </div>
      </section>
    </>
  )
}

