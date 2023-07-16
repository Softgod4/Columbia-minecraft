import '../css/register/assets.css'
import '../css/register/main.css'
import '../css/register/media.css'

export default function Home() {
    return (
        <section className="d_flex_row j_center a_center">
      <div id="register-form">
        <div className="form__up d_flex_col container">
          <h2 className="h2_title t_center">Регистрация</h2>
          <form action="" className="d_flex_col j_center">
            <h3 className="bold">Никнейм Minecraft</h3>
            <input type="text" name="Elitium" id="form-nickname" placeholder="Elitium" />
            <div className="form__down__button d_flex_row j_start">
              <input type="button" className="button_a" value="ОК" />
            </div>
          </form>
        </div>
        <div className="form__up d_flex_col container">
          <h2 className="h2_title t_center">Оплатите проходку</h2>
          <form action="" className="d_flex_col j_center">
            <h3 className="bold">Введите промокод (необязательно)</h3>
            <input type="text" name="Elitium" id="form-nickname" placeholder="" />
            <div className="form__down__button d_flex_row j_start">
              <input type="button" className="button_a" value="Купить" />
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}