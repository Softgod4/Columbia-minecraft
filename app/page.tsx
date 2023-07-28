'use client'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { useEffect, useState } from "react"

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
        
      </div>
    </section>

  </div>
  )
}
