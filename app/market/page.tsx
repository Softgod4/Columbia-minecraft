'use client'

import '@/app/globals.css'
import '../css/market/main.css'
import '../css/market/media.css'

import Image from 'next/image'

import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy'
import Modal from '../modal/Modal.tsx'

import OurServer, { OurServer2 } from '@/components/OurServer';

export default function Market() {
  const [searchTerm, setSearchTerm] = useState('');
    // искать в магазине

  const clipboard = useClipboard();
  const clipboardCopy2 = useClipboard();
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: number } | null>(null);
    // буфер обмена (скопировать)

  const [modalActive, setModalActive] = useState(false) 
    // модальное окно

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
                      <h2 className="text-white text-3xl text-start mb-2">Наши товары:</h2>
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
                                  onChange={event => setSearchTerm(event.target.value)}
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="products__block">
                  {filteredProducts.map((product, index) => ( 
                      <div key={index} className="products__block__item flex flex-col justify-center items-center">
                          <h2 className="h2_title text-center whitespace-nowrap">{product.name}</h2>
                          <Image src="/item.svg" alt="" width='200' height='200'/>
                          <div className="buy-item flex flex-row items-center w-full justify-around">
                              <p>{product.price} &#8381;</p>
                              <button className="button_b flex items-center justify-center text-xl" onClick={() => {setModalActive(true); setSelectedProduct(product)}}>Купить</button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      <section id='line' className='mb-0'></section>
      <section id='server-list'>
        <div className="container">
            <div className="products__menu__title flex flex-col justify-start mb-20">
                <h2 className="text-white text-3xl text-start mb-2">Наши сервера:</h2>
                <div className="neon-line"></div>
            </div>
            <div className='grid grid-flow-col gap-4 grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 justify-items-center'>
                <OurServer/>
                <OurServer2/>
            </div>
        </div>
      </section>

      {selectedProduct && (
        <Modal
            active={modalActive}
            setActive={setModalActive}
            productName={selectedProduct.name}
            productPrice={selectedProduct.price}
        />
        )}

    </>
  )
}

