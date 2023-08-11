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
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500 ">
              <h2 className="text-4xl text-white mb-4">Выживайте</h2>
              <p className="text-sm/[18px] text-white font-normal">Основа сервера — это классическое, ванильное выживание с элементами Рп. Которое дополняют соответствующие плагины.</p>
            </article>
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500 ">
              <h2 className="text-4xl text-white mb-4">Торгуйте</h2>
              <p className="text-sm/[18px] text-white font-normal">На нашем сервере развита экономика. Добывайте ресурсы которые находятся в спросе у игроков а потом продавайте их на нашем рынке, или сделайте свой бизнес который будет приносить вам доход.</p>
            </article>
            <img src="/chip2.png" alt="pics" width="593" height="250"/>
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <img src="/chip3.png" alt="pics" width="593" height="250"/>
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500 ">
              <h2 className="text-4xl text-white mb-4">Управляйте</h2>
              <p className="text-sm/[18px] text-white font-normal">На сервере присутствуют должности, на которых стоят обычные игроки, выборы происходят через голосования.</p>
            </article>
            
          </div>

          <div className="chips flex flex-row justify-between items-center my-14">
            <article className="chips_text w-1/3 p-6 rounded-xl bg-greey cool-cover transition-all duration-500 ">
              <h2 className="text-4xl text-white mb-4">Учавствуйте в сюжете</h2>
              <p className="text-sm/[18px] text-white">Наш сервер имеет сюжетную линию, мы разделяем её на четыре части. первое — это начала сюжета, второе — это середина сюжета, третье — это маленькие ивенты, и четвёртое — это конец сюжета.</p>
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

          <Accordion className="w-1/3 text-xl font-bold text-white">
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
      <div className='container'>
        <h2 className='text-center h2_title mb-2 font-semibold'>Готовы стать частью нашего сообщества?</h2>
        <p className='text-center text-xl font-normal text-slate-300 mb-16'>Жмите на кнопку, чтобы купить проходку и начать приключение!</p>
        <div className='flex md:flex-row flex-col md:justify-around justify-around items-center'>

          <div className='p-11 flex flex-col items-start justify-start bg-blue-500 text-white rounded-xl border-8 border-blue-500 border-solid cool-cover transition-all duration-500'>
            <h3 className='text-lg font-semibold mb-2'>Сезонная проходка</h3>
            <p className='font-bold text-2xl mb-3'>80 &#8381;</p>
            <ul className='mb-4 list-disc ml-2'>
              <li className='my-2 font-medium'>Проходка на 3 года с последнего вайпа: 11 Августа 2023</li>
              <li className='my-2 font-medium'>Доступ ко всему функционалу сервера</li>
              <li className='my-2 font-medium'>Minecraft Java Edition 1.20.1 или Bedrock</li>
              <li className='my-2 font-medium'>Пиратка или лицензия</li>
            </ul>
            <Link href='/market' className='text-black py-3 px-4 bg-white rounded-md font-semibold border-solid border border-white'>Купить проходку за 80 &#8381;</Link>
          </div> 

        <div className='responsive p-11 flex flex-col items-start justify-start bg-greey text-white rounded-xl mt-10 md:mt-0 cool-cover transition-all duration-500' style={{ width: '460px'}}>
          <h3 className='text-lg font-semibold mb-2'>Сезонная проходка</h3>
          <p className='font-bold text-2xl mb-3'>0 &#8381;</p>
          <ul className='mb-4 list-disc ml-2'>
            <li className='my-2 font-medium'>Проходка на один месяц</li>
            <li className='my-2 font-medium'>Доступ ко всему функционалу сервера</li>
            <li className='my-2 font-medium'>Minecraft Java Edition 1.20.1 или Bedrock</li>
            <li className='my-2 font-medium'>Пиратка или лицензия</li>
          </ul>
          <Link href='/market' className='text-white py-3 px-4 bg-greey rounded-md font-semibold border-2 border-solid border-white hover:bg-white hover:text-black transition-all ease-in duration-100'>Купить проходку за 0 &#8381;</Link>
        </div> 
      </div>

      </div>    
    </section>

    <section id='NotSure'>
      <div className='container'>
        <h2 className='h2_title text-center font-semibold mb-2 md:flex justify-center hidden'>Еще не уверены?</h2>
        <p className='text-center text-xl font-normal text-slate-300 mb-14 md:flex  hidden'>Перейдите по ссылкам, чтобы узнать про наш сервер еще больше</p>

        <div className='md:grid hidden gap-12 grid-cols-3 grid-rows-2'>

          <a href='https://t.me/columbistg'>
            <div className='flex flex-row self-center items-center w-80 cursor-pointer'>
              <div className='w-16 h-16 bg-greey flex justify-center items-center rounded-md' style={{background: '#2aabee'}}>
                <img src='/telegram.svg'/>
              </div>
              <div className='flex flex-col items-start ml-4 text-white'>
                <p className='mb-2 font-semibold text-lg'>Сообщество Telegram</p>
                <p className='text-sm'>Новости и скриншоты</p>
              </div>
            </div>
          </a>

          <a href='https://discord.gg/rkS8wzZqMx'>
            <div className='flex flex-row self-center items-center w-80'>
              <div className='w-16 h-16 bg-greey flex justify-center items-center rounded-md' style={{background: '#515dd7'}}>
                <img src='/discord.svg'/>
              </div>
              <div className='flex flex-col items-start ml-4 text-white'>
                <p className='mb-2 font-semibold text-lg'>Discord сервер</p>
                <p className='text-sm'>Познакомьтесь с сообществом</p>
              </div>
            </div>
          </a>

          <a>
            <div className='flex flex-row self-center items-center w-80'>
              <div className='w-16 h-16 bg-greey flex justify-center items-center rounded-md'>
                <img src='/icon/wiki.png'/>
              </div>
              <div className='flex flex-col items-start ml-4 text-white'>
                <p className='mb-2 font-semibold text-lg'>Вики сервера</p>
                <p className='text-sm'>Подробнее про конкретные фишки</p>
              </div>
            </div>
            </a>

          <a>
            <div className='flex flex-row self-center items-center w-80'>
              <div className='w-16 h-16 bg-greey flex justify-center items-center rounded-md'>
                <img src='/icon/stats.png'/>
              </div>
              <div className='flex flex-col items-start ml-4 text-white'>
                <p className='mb-2 font-semibold text-lg'>Статистика онлайна</p>
                <p className='text-sm'>Убедитесь что сервер активный</p>
              </div>
            </div>
          </a>
    
          <a>
            <div className='flex flex-row self-center items-center w-80'>
              <div className='w-16 h-16 bg-greey flex justify-center items-center rounded-md'>
                <img src='/icon/card.png'/>
              </div>
              <div className='flex flex-col items-start ml-4 text-white'>
                <p className='mb-2 font-semibold text-lg'>Интерактивная карта</p>
                <p className='text-sm'>Посмотрите на игровой мир</p>
              </div>
            </div>
          </a>
      
          <a>
            <div className='flex flex-row self-center items-center w-80'>
              <div className='w-16 h-16 bg-greey flex justify-center items-center rounded-md'>
                <img src='/icon/diamond.png'/>
              </div>
              <div className='flex flex-col items-start ml-4 text-white'>
                <p className='mb-2 font-semibold text-lg'>Купить проходку</p>
                <p className='text-sm'>Станьте частью сообщества</p>
              </div>
            </div>
          </a>

        </div>

      </div> 
    </section>
  </>
  )
}
