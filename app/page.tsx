'use client'

import { useEffect, useState } from "react"
import '@/app/globals.css'
import Image from "next/image";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Link from "next/link";
import { useClipboard } from "use-clipboard-copy";

export default function Home() {

  const TimeOut = () => {
    setIsCopied(false)
  }

  const [isCopied, setIsCopied] = useState(false);
  const clipboard = useClipboard({
    onSuccess() {
      setIsCopied(true);
      setTimeout(TimeOut, 2000)
    },
    onError() {
      setIsCopied(false);
    }
  });

  return (
    <>
    <header id="header">
      <div className="header_background">
        <img src="/background.png" alt="" />
        <div className="header-text flex flex-col justify-center items-center">
          <h1>Уникальный сервер Minecraft</h1>
          <p>CL - Выживайте, стройте, участвуйте в сюжетах и отыгрывайте рп.</p>
          <div className="header-text__button flex flex-row items-center">
            <Link className="button_a max-h-10 flex items-center justify-center text-sm" href='/market'>Купить проходку</Link>
            <a className="button_b max-h-10 flex items-center justify-center text-sm" href="#chips">О сервере</a>
          </div>
          <div className="header-text__list">
            <ul className="flex flex-row justify-between items-center">
              <li>1.20</li>
              <li>Minecraft: Java Edition</li>
              <li>Пиратка</li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <section id="chips">
      <div className="container">
        <h2 className='text-center text-3xl text-white font-normal mb-1'>Сервер - как социальная сеть</h2>
        <p className='text-center text-sm text-white mb-12'>Игроки заходят на сервер чтобы общаться, найти новую компанию, друзей или девушку</p>
        <main>
          <div className="chips flex justify-between items-center my-14">
            <img src="/chip1.png" alt="pics" width="593" height="250"/>
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500">
              <h2 className="text-4xl text-white mb-4">Выживайте</h2>
              <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
            </article>
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500">
              <h2 className="text-4xl text-white mb-4">Торгуйте</h2>
              <p className="text-sm/[18px] text-white font-normal">На нашем сервере развита экономика. Добывайте ресурсы которые находятся в спросе у игроков а потом продавайте их на нашем рынке, или сделайте свой бизнес который будет приносить вам доход.</p>
            </article>
            <img src="/chip2.png" alt="pics" width="593" height="250"/>
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <img src="/chip3.png" alt="pics" width="593" height="250"/>
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500">
              <h2 className="text-4xl text-white mb-4">Участвуйте в сюжете</h2>
              <p className="text-sm/[18px] text-white font-normal">Наш сервер имеет сюжетную линию, мы разделяем её на четыре части. первое — это начала сюжета, второе — это середина сюжета, третье — это маленькие ивенты, и четвёртое — это конец сюжета.</p>
            </article>
            
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500">
              <h2 className="text-4xl text-white mb-4">Управляйте</h2>
              <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
            </article>
            <img src="/chip4.png" alt="pics" width="593" height="250"/>
          </div>
        </main>
        
      </div>
    </section>

    <section id="accordion" className='bg-greey rounded-xl'>
      <div className="container rounded-xl flex flex-row justify-between items-center" style={{height: '500px'}}>
        <img src="/new-accordion.png" alt="pics" className="accordion-img"/>

          {/* аккордеон */}

          <Accordion className="w-1/3 text-xl font-weight-700 font-bold text-white transition-height duration-200 ease-out transition">
            <AccordionItem header="	&gt; зачем платить за проходку?" className="">
              <span className="text-xl font-normal py-4">
                <br/>
                  <p className='text-sm'>Платный доступ к серверу позволяет отсеивать большую часть гриферов, 
                  поэтому на сервере нет привата территории. 
                  Также сервер существует за деньги полученные с проходок, 
                  поэтому мы не продаем привилегии, которые дают преимущество в игре.</p>
              </span>
            </AccordionItem>

            <div className="line w-4/5 h-0.5 bg-white my-5"></div>

            <AccordionItem header="	&gt;  Могу ли я вернуть деньги">
              <span className="text-xl font-normal py-4">
                <br/>
                  <p className='text-sm'>Да, мы возвращаем деньги, только при условии что вы наиграли на сервере 
                  не более 2-х часов и не внесли ни единого изменения в мир сервера, 
                  будь то собирание ягод или ломание/размещение блока. 
                  Так же любое нарушение правил сервера так же стает фактором который 
                  запрещает совершить возврат)</p>             
              </span>
            </AccordionItem>

            <div className="line w-4/5 h-0.5 bg-white my-5"></div>

            <AccordionItem header="	&gt;  Нужна лицензия майнкрафт?">
              <span className="text-xl font-normal py-4">
                <br/>
                <p className='text-sm'>Нет, лицензия не нужна. Вы можете играть на пиратском лаунчере.</p>
              </span>
            </AccordionItem>
          </Accordion>

          {/* аккордеон */}

      </div>
    </section>

    <section id="sinking">
      <div className="container flex flex-col justify-center items-center">
        <div className="box py-2 rounded-xl flex flex-col text-center px-14">
          <h2 className="text-xl font-bold">Стоимость доступа</h2>
          <h2 className="text-5xl font-bold py-2">99 ₽</h2>
          <ul className="flex flex-row justify-center items-center text-xl font-weight-600 font-normal list-disc">
            <li>1.20</li>
            <li className="mx-8">Minecraft: Java Edition</li>
            <li>Пиратка</li>
          </ul>
          <div className="box_button flex flex-row justify-between mb-2 mt-5">
            <Link href='/market' className="mx-2 button_a text-sm font-bold">Купить</Link>
            <input ref={clipboard.target} value={'какой-то текст'} readOnly className="hidden"/>
            <button className="mx-2 button_a text-sm font-bold flex items-center justify-center btn-copy1" onClick={clipboard.copy}>{isCopied ? 'Скопировано!' : 'Скопировать IP'}</button>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
