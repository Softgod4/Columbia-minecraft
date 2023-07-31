'use client'
import { useEffect, useState } from "react"
import '@/app/globals.css'
import Image from "next/image";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function Home() {

  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId === activeTab ? '' : tabId);
  };

  return (
    <div>
    <header id="header">
      <div className="header_background">
        <img src="/background.png" alt="" />
        <div className="header-text flex flex-col justify-center items-center">
          <h1>Уникальный сервер Minecraft</h1>
          <p>CL - Выживайте, стройте, участвуйте в сюжетах и отыгрывайте рп.</p>
          <div className="header-text__button flex flex-row items-center">
            <a className="button_a max-h-10">Купить проходку</a>
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

        <div className="chips flex flex-row justify-between items-center my-14">
          <Image src="/chip1.png" alt="pics" width="593" height="250"/>
          <div className="chips_text w-1/3 p-6 rounded-xl bg-greey">
            <h2 className="text-4xl text-white mb-4">Выживайте</h2>
            <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
          </div>
        </div>

        <div className="chips flex flex-row justify-between items-center my-14">
          <div className="chips_text w-1/3 p-6 rounded-xl bg-greey">
            <h2 className="text-4xl text-white mb-4">Торгуйте</h2>
            <p className="text-sm/[18px] text-white font-normal">На нашем сервере развита экономика. Добывайте ресурсы которые находятся в спросе у игроков а потом продавайте их на нашем рынке, или сделайте свой бизнес который будет приносить вам доход.</p>
          </div>
          <Image src="/chip2.png" alt="pics" width="593" height="250"/>
        </div>

        <div className="chips flex flex-row justify-between items-center my-14">
          <Image src="/chip3.png" alt="pics" width="593" height="250"/>
          <div className="chips_text w-1/3 p-6 rounded-xl bg-greey">
            <h2 className="text-4xl text-white mb-4">Участвуйте в сюжете</h2>
            <p className="text-sm/[18px] text-white font-normal">Наш сервер имеет сюжетную линию, мы разделяем её на четыре части. первое — это начала сюжета, второе — это середина сюжета, третье — это маленькие ивенты, и четвёртое — это конец сюжета.</p>
          </div>
          
        </div>

        <div className="chips flex flex-row justify-between items-center my-14">
          <div className="chips_text w-1/3 p-6 rounded-xl bg-greey">
            <h2 className="text-4xl text-white mb-4">Управляйте</h2>
            <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
          </div>
          <Image src="/chip4.png" alt="pics" width="593" height="250"/>
        </div>

      </div>
    </section>

    <section id="accordion">
      <div className="container bg-light-orange rounded-xl flex flex-row justify-between items-center">
        <Image src="/chip2.png" alt="pics" width='776' height='432' className="accordion-img"/>

          {/* аккордеон */}

          <Accordion className="w-2/3 text-xl font-weight-700 font-bold text-gray-900">
            <AccordionItem header="	&#10004; Почему сервер платный?" className="">
              <span className="text-xl font-normal py-4">
                <br/>
                Таким образом мы фильтруем неадекватов, 
                гриферов и других нарушителей правил. Купив проходку, 
                вы помогаете проекту существовать и развиваться дальше.
              </span>
            </AccordionItem>

            <div className="line w-2/3 h-0.5 bg-gray-900 my-5"></div>

            <AccordionItem header="	&#10004; Можно ли зайти с бедрок?">
              <span className="text-xl font-normal py-4">
                <br/>
                Нет, нельзя
              </span>
            </AccordionItem>

            <div className="line w-2/3 h-0.5 bg-gray-900 my-5"></div>

            <AccordionItem header="	&#10004; Нужна лицензия майнкрафт?">
              <span className="text-xl font-normal py-4">
                <br/>
                Нет, лицензия не нужна.
              </span>
            </AccordionItem>
          </Accordion>

          {/* аккордеон */}

      </div>
    </section>
  </div>
  )
}
