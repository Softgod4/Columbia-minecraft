'use client'

import '@/app/globals.css'
import '../css/market/main.css'
import '../css/market/media.css'
import '@/app/css/modal/Modal.css'
import '@/app/css/modal/media.css'

import Image from 'next/image'

import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy'

import OurServer, { OurServer2 } from '@/components/OurServer';

export default function Market() {
  const [searchTerm, setSearchTerm] = useState('');
    // искать в магазине

  const clipboard = useClipboard();
  const clipboardCopy2 = useClipboard();
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: number; desc: string; } | null>(null);

    // буфер обмена (скопировать)

  const [modalActive, setModalActive] = useState(false) 
    // модальное окно

  const products = [ 
      { name: 'CLS Проходка', price: 99.00, desc: 'Это основной сервер, куда можно войти с лицензией, и пиратки. На данном сервере игроки могут создавать свои города, торговать, и участвовать в ивентах самого сервера так и в ивентах самих игроков, и многое другое.', link: 'https://yookassa.ru/my/i/ZNf3ZtuQZufh/l'},
      { name: 'PLUS 1 МЕСЯЦ', price: 99.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на 1 месяц. Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)', link: 'https://yookassa.ru/my/i/ZNfqrEp3nLJP/l' },
      { name: 'PLUS 3 МЕСЯЦ', price: 267.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на 3 месяца. Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)', link: 'https://yookassa.ru/my/i/ZNf2XmOHxxwo/l'}, 
      { name: 'PLUS 6 МЕСЯЦ', price: 475.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на 6 месяцев. Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)', link: 'https://yookassa.ru/my/i/ZNf2p_UXWs1R/l'},
      { name: 'PLUS 12 МЕСЯЦ', price: 875.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на 12 месяцев. Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)', link: 'https://yookassa.ru/my/i/ZNf270Nk6nft/l'},

      { name: 'РАЗБАН НА СЕРВЕРЕ', price: 599.00, desc: 'Покупая данный товар вы получаете прощение за ваши грехи которые вы сотворили на сервере cls. Покупка данного товара не ограничена, возрату не подлежит.', link: 'https://yookassa.ru/my/i/ZNf3JruuffRb/l' },
  ];

  const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section id="products">
          <div className="container">
              <div className="products__menu flex flex-row justify-around items-center">
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
                      <div key={index} className="products__block__item flex flex-col justify-start items-start p-6 rounded-xl border-solid border-2 border-white h-[450px]">
                        <div className='flex flex-row justify-start items-start'>
                            <img src='/market-logo.png'></img>
                            <div className='flex flex-col ml-4 w-3/5'>
                                <h2 className='text-2xl font-bold text-white'>{product.name}</h2>
                            </div>
                        </div>
                        <p className='mt-4 text-gray-500 font-semibold text-base'>{product.desc}</p>
                        <button className='button_a text-semibold text-xl mt-auto' onClick={() => {setModalActive(true); setSelectedProduct(product)}}>Подробнее</button>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      <section id='line' className='mb-0'></section>
      <section id='server-list'>
        <div className="container">
            <div className="products__menu__title flex flex-col justify-center mb-20 items-center">
                <h2 className="text-white text-3xl text-center mb-2">Наши сервера:</h2>
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
            productDesc={selectedProduct.desc}
        />
        )}

    </>
  )
}


interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  productName: string;
  productPrice: number;
  productDesc: string;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, productName, productPrice, productDesc }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>

        <div className="modal__content_logo flex flex-row items-center">
            <Image src='/big-logo.svg' width='64' height='64' alt=''/>
            <div className='flex flex-col items-start ml-4 text-white'>
                <h2 className='text-xl'>{productName}</h2>
                <p className='font-bold'>{productPrice} &#8381;</p>
            </div>
        </div>
        
        <div className="content flex flex-row justify-between w-full h-full">

            <div className="content_buy mt-8 w-2/5 h-full">
                <div className="flex flex-row">
                    <Image src='/Modal/store.svg' alt='' width='24' height='24'/>
                    <p className='ml-3 text-gray-200 text-sm'>Покупка товара</p>
                </div>

                <div className="flex flex-col mt-7">

                    <div>
                        <p className='text-gray-400 text-sm mb-1'>Никнейм</p>
                        <div className="input-container">
                            <Image src='/Modal/bx-user.svg' width='20' height='20' alt='' className='icon'/>
                            <input type="text" className='input-field bg-input-modal rounded-xl text-gray-200 w-96 h-12 text-sm' placeholder='Никнейм'/>
                        </div>

                        <p className='text-gray-400 text-sm mb-1 mt-12'>Промокод</p>
                        <div className="input-container">
                            <Image src='/Modal/bxs.svg' width='20' height='20' alt='' className='icon'/>
                            <input type="text" className='input-field bg-input-modal rounded-xl text-gray-200 w-96 h-12 text-sm' placeholder='Необязательно'/>
                        </div>
                        
                        <p className='text-white mt-12 text-xl w-full'>ВАЖНО! всегда внимательно проверяйте введённый вами ник!</p>

                        <div className='mt-12'>
                            <input type="checkbox" id='agree' className='custom-checkbox'/>
                            <label htmlFor="agree" className='text-white ml-2 text-xl'>Согласен с правилами проекта</label>
                        </div>
                        
                        <br/>
                        <a href="https://yookassa.ru/my/i/ZNfqrEp3nLJP/l"><button className='button_a'>Купить</button></a>
                    </div>
                </div>
            </div>

            <div id='line-black' className='w-1/5'></div>

            <div className='content-description w-2/5 h-full'>
                <div className="flex flex-row items-center mb-5">
                    <Image src='/Modal/bx-check.svg' width='24' height='24' alt=''/>
                    <p className='ml-2 text-white text-xl'>Описание товара</p>
                </div>

                <p className='text-white text-sm'>
                    {productDesc}
                </p>
            </div>

        </div>
        
      </div>
    </div>
  );
};


