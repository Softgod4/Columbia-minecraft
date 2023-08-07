'use client'

import { useEffect, useState } from "react"
import '@/app/globals.css'
import Image from "next/image";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Link from "next/link";
import { useClipboard } from "use-clipboard-copy";

export default function Home() {

  const clipboard = useClipboard();

  return (
    <>
    <header id="header">
      <div className="header_background">
        <img src="/background.png" alt="" />
        <div className="header-text flex flex-col justify-center items-center">
          <h1>Уникальный сервер Minecraft</h1>
          <p>CL - Выживайте, стройте, участвуйте в сюжетах и отыгрывайте рп.</p>
          <div className="header-text__button flex flex-row items-center">
            <Link className="button_a max-h-10" href='/register'>Купить проходку</Link>
            <a className="button_b max-h-10" href="#chips">О сервере</a>
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
        <h2 className='text-center text-3xl text-white font-normal mb-12'>Фишки сервера</h2>
        <main>
          <div className="chips flex flex-row justify-between items-center my-14">
            <img src="/chip1.png" alt="pics" width="593" height="250"/>
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey">
              <h2 className="text-4xl text-white mb-4">Выживайте</h2>
              <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
            </article>
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey">
              <h2 className="text-4xl text-white mb-4">Торгуйте</h2>
              <p className="text-sm/[18px] text-white font-normal">На нашем сервере развита экономика. Добывайте ресурсы которые находятся в спросе у игроков а потом продавайте их на нашем рынке, или сделайте свой бизнес который будет приносить вам доход.</p>
            </article>
            <img src="/chip2.png" alt="pics" width="593" height="250"/>
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <img src="/chip3.png" alt="pics" width="593" height="250"/>
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey">
              <h2 className="text-4xl text-white mb-4">Участвуйте в сюжете</h2>
              <p className="text-sm/[18px] text-white font-normal">Наш сервер имеет сюжетную линию, мы разделяем её на четыре части. первое — это начала сюжета, второе — это середина сюжета, третье — это маленькие ивенты, и четвёртое — это конец сюжета.</p>
            </article>
            
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey">
              <h2 className="text-4xl text-white mb-4">Управляйте</h2>
              <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
            </article>
            <img src="/chip4.png" alt="pics" width="593" height="250"/>
          </div>
        </main>
        
      </div>
    </section>

    <section id="accordion">
      <div className="container bg-light-orange rounded-xl flex flex-row justify-between items-center">
        <img src="/chip2.png" alt="pics" width='776' height='432' className="accordion-img"/>

          {/* аккордеон */}

          <Accordion className="w-1/3 text-xl font-weight-700 font-bold text-gray-900 transition-height duration-200 ease-out transition">
            <AccordionItem header="	&gt;  Почему сервер платный?" className="">
              <span className="text-xl font-normal py-4">
                <br/>
                Таким образом мы фильтруем неадекватов, 
                гриферов и других нарушителей правил. Купив проходку, 
                вы помогаете проекту существовать и развиваться дальше.
              </span>
            </AccordionItem>

            <div className="line w-2/3 h-0.5 bg-gray-900 my-5"></div>

            <AccordionItem header="	&gt;  Можно ли зайти с бедрок?">
              <span className="text-xl font-normal py-4">
                <br/>
                Нет, нельзя
              </span>
            </AccordionItem>

            <div className="line w-2/3 h-0.5 bg-gray-900 my-5"></div>

            <AccordionItem header="	&gt;  Нужна лицензия майнкрафт?">
              <span className="text-xl font-normal py-4">
                <br/>
                Нет, лицензия не нужна.
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
            <Link href='/register' className="mx-2 button_a text-sm font-bold">Купить</Link>
            <input ref={clipboard.target} value={'какой-то текст'} readOnly className="hidden"/>
            <button className="mx-2 button_a text-sm font-bold" onClick={clipboard.copy}>Скопировать IP</button>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
