export default function Home() {
  return (
    <div>
    <header id="header">
      <div className="header_background">
        <img src="/background.png" alt="" />
        <div className="header-text d_flex_col j_center a_center">
          <h1>Уникальный сервер Minecraft</h1>
          <p>CL - Выживайте, стройте, участвуйте в сюжетах и отыгрывайте рп.</p>
          <div className="header-text__button d_flex_row a_center">
            <a className="button_a">Купить проходку</a>
            <a className="button_b" href="#chips">О сервере</a>
          </div>
          <div className="header-text__list">
            <ul className="d_flex_row j_between a_center">
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
        <h2 className="h2_title d_flex_col j_center a_center" style={{
          marginBottom: '50px'
        }}>
          Фишки сервера
        </h2>

        <div className="chips_sec">

          <div className="chips_section d_flex_row j_between a_center">
            <div className="chips_section__img">
              <img src="/chip1.png" alt="" />
            </div>

            <div className="chips_section__text">
              <h3 className="h3_title">Выживайте</h3>
              <p className="p_title">Основа сервера - это классическое, ванильное<br/> выживание с элементами Рп. Которое дополняют<br/> соответствующие плагины.</p>
            </div>
          </div>

          <div className="chips_section d_flex_row j_between a_center">
            <div className="chips_section__text">
              <h3 className="h3_title">Торгуйте</h3>
              <p className="p_title">На нашем сервере развита экономика. <br/>Добывайте ресурсы которые находятся в <br/>спросе у игроков а потом продавайте их на <br/>нашем рынке, или сделайте свой бизнес <br/>который будет приносить вам доход.</p>
            </div>

            <div className="chips_section__img">
              <img src="/chip2.png" alt="" />
            </div>
          </div>

          <div className="chips_section d_flex_row j_between a_center">
            <div className="chips_section__img">
              <img src="/chip3.png" alt="" />
            </div>

            <div className="chips_section__text">
              <h3 className="h3_title">Управляйте</h3>
              <p className="p_title">На сервере присутствуют должности, на <br/>которых стоят обычные игроки, выборы <br/>происходят через голосования.</p>
            </div>
          
          </div>

          <div className="chips_section d_flex_row j_between a_center">
            
            <div className="chips_section__text">
              <h3 className="h3_title">Участвуйте в сюжете</h3>
              <p className="p_title">Наш сервер имеет сюжетную линию, мы <br/>разделяем ее на четыре части. первое - это <br/>начала сюжета, второе - это середина сюжета, <br/>третье - это маленькие ивенты, и четвертое - это<br/> конец сюжета.</p>
            </div>

            <div className="chips_section__img">
              <img src="/chip4.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
