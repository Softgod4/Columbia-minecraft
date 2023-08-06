import '@/app/globals.css'
import '../css/register/main.css'
import Image from 'next/image'

export default function Home() {
  
    return (
        <section className="flex flex-row justify-center items-center">
      <div id="register-form">
        <div className="form__up flex flex-col container">
          <h2 className="h2_title text-center">Регистрация</h2>
          <form action="" className="flex flex-col justify-center">
            <h3 className="bold">Никнейм Minecraft</h3>
            <input type="text" name="Elitium" id="form-nickname" placeholder="Elitium" className='text-sm'/>
            <div className="form__down_ver flex flex-row justify-between items-center mt-8">
              <Image src='/head.png' width='50' height='50' alt='' className='mr-2'/>
              <div className="flex flex-col">
                <p className='mb-2 text-white text-xl'>Elitium</p>
                <p className='text-white'>00000000–0000–0000–0000–0000000035a3</p>
              </div>
              <Image src='/Group.svg' width='32' height='32' alt='' className='cursor-pointer ml-2'/>
            </div>
          </form>
        </div>
        <div className="form__up flex flex-col container items-center">
          <h2 className="h2_title text-center">Оплатите проходку</h2>
          <form action="" className="flex flex-col justify-center">
            <div className="form__down_button flex flex-row justify-center">
              <input type="button" className="button_a" value="Купить" />
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}