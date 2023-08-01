'use client'

import '@/app/globals.css'
import '../css/market/main.css'
import '../css/market/media.css'
import Image from 'next/image'

import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy'
import Modal from '@/app/Modal/Modal'

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
                          <div className="buy-item flex flex-row items-center w-full justify-between">
                              <p>{product.price} &#8381;</p>
                              <button className="button_b" onClick={() => {setModalActive(true); setSelectedProduct(product)}}>Купить</button>
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
                <h2 className="h2_title">Наши сервера:</h2>
                <div className="neon-line"></div>
            </div>
            <div className='grid gap-4 grid-cols-2 grid-rows-1'>
                <div className="list_box py-4 px-6 flex flex-col items-start bg-greey rounded-xl w-5/6">
                    <div className="list_box__title flex flex-row items-center justify-between w-full mb-7">
                        <div className="flex flex-row">
                            <Image src='/logo.svg' alt='' width='32' height='32'></Image>
                            <h2 className='ml-2 text-white text-2xl font-bold'>CL</h2>
                        </div>
                        <p className='text-2xl text-white'>Версия: 1.20</p>
                    </div>
                    <div className='w-full px-2 py-4 flex flex-row justify-between items-center rounded-xl bg-greey'>
                        <p className='text-2xl font-bold text-white'>Columbia.ru</p>
                        <input ref={clipboard.target} value={'Columbia.ru'} readOnly className='hidden'/>
                        <Image src='/copy.svg' width='32' height='32' alt='' className='cursor-pointer' onClick={clipboard.copy}/>
                    </div>
                    <h2 className='text-2xl font-bold font-weight-normal text-white mt-8 mb-4'>Сейчас играют:</h2>
                    <div className='w-full flex flex-row items-center'>
                        <Image src='/user.svg' width='32' height='32' alt=''></Image>
                        <p className='ml-1 text-white text-xl font-bold'>45</p>
                        <div className="w-full bg-greey rounded-full h-2.5 ml-8">
                            <div className="bg-white h-2.5 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>
                <div className="list_box py-4 px-6 flex flex-col items-start bg-greey rounded-xl w-5/6">
                    <div className="list_box__title flex flex-row items-center justify-between w-full mb-7">
                        <div className="flex flex-row">
                            <Image src='/logo.svg' alt='' width='32' height='32'/>
                            <h2 className='ml-2 text-white text-2xl font-bold'>CL</h2>
                        </div>
                        <p className='text-2xl text-white'>Версия: ?.??</p>
                    </div>
                    <div className='w-full px-2 py-4 flex flex-row justify-between items-center rounded-xl bg-greey'>
                        <p className='text-2xl font-bold text-white'>??.ru</p>
                        <input ref={clipboardCopy2.target} value={'ничего'} readOnly className='hidden'/>
                        <Image src='/copy.svg' width='32' height='32' alt='' className='cursor-pointer' onClick={clipboardCopy2.copy}/>
                    </div>
                    <h2 className='text-2xl font-bold font-weight-normal text-white mt-8 mb-4'>Сейчас играют:</h2>
                    <div className='w-full flex flex-row items-center'>
                        <Image src='/user.svg' width='32' height='32' alt=''/>
                        <p className='ml-1 text-white text-xl font-bold'>&#8734;</p>
                        <div className="w-full bg-greey rounded-full h-2.5 ml-8">
                            <div className="bg-white h-2.5 rounded-full w-full"></div>
                        </div>
                    </div>
                </div>
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

