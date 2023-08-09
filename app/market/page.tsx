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
      { name: 'Проходка', price: 99.00, desc: 'Покупая данный товар вы получаете доступ к игре на основной сервер cls в игре майнкрафт, вход на который возможен с пиратки, и лицензии. Основной режим игры — это классическое, ванильное выживание с элементами рп. Которое дополняют самописные - общедоступные плагины. На сервере игроки могут создавать свои города или вступать уже созданные общины. (Возврат возможен только при условии что вы наиграли на сервере не более 2-х часов и не внесли ни единого изменения в мир сервера, будь то собирание ягод или ломание/размещение блока. Так же любое нарушение правил сервера так же стает фактором который запрещает совершить возврат)'},
      { name: 'Plus 1 МЕСЯЦ', price: 99.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на (срок). Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)'},
      { name: 'Plus 3 МЕСЯЦ', price: 267.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на (срок). Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)'}, 
      { name: 'Plus 6 МЕСЯЦ', price: 475.00, desc: 'Данный товар не является проходкой на сервера cls. Покупая данный товар вы получаете некоторые превелегии на (срок). Список привилегий: • Значек в табе на сервере. • Роль в сервере Discrord. • Вход на заполненный сервер. • Доступ к экслюзивному чату. (возрату не подлежит)'},
      { name: 'РАЗБАН', price: 599.00, desc: 'Покупая данный товар вы получаете прощение за ваши грехи которые вы сотворили на сервере cls. Покупка данного товара не ограничена, возрату не подлежит.' },
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
                              <p className='hidden'>{product.desc}</p>
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

                    <form action="">
                        <p className='text-gray-400 text-sm mb-1'>Никнейм</p>
                        <div className="input-container">
                            <Image src='/Modal/bx-user.svg' width='20' height='20' alt='' className='icon'/>
                            <input type="text" className='input-field bg-input-modal rounded-xl text-gray-200 w-96 h-12 text-sm' placeholder='Elitium'/>
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
                        
                        <input type="submit" value="Купить" className='button_a mt-5 bold'/>
                    </form>
                    
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


