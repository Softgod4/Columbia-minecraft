import Image from "next/image"
import { useClipboard } from "use-clipboard-copy";
import Link from "next/link";

const TheFooter = () => {
    
    return (
        <footer className='py-7 px-4 bg-greey'>
            <div className='flex md:flex-row flex-col md:justify-around justify-between md:items-start items-center w-full '>

                <div className='flex flex-col items-start justify-start text-white md:w-auto w-full'>
                    <div className='flex flex-row items-center mb-2'>
                        <Image src='/logo.png' width='40' height='40' alt=""/>
                        <h2 className='text-xl font-semibold ml-2'>SNT</h2>
                    </div>
                    <p className='mb-2 text-gray-300'>Copyright © SNT 2023. Все права защищены. Сервера SNT не относятся к Mojang Studio</p>
                    <p className='text-sm text-gray-300'>Дорошенко Артём Игоревич (инн 632136734840)</p>
                </div>

                <div className='flex flex-col items-start justify-center text-white md:w-auto w-full md:my-0 my-12'>
                    <h2 className='font-semibold mb-2 text-xl'>Документы</h2>
                    <Link href='/contacts' className='text-base mb-1 font-semibold'>Контакты</Link>
                    <Link href='/' className='text-base font-semibold'>Политика конфиденциальности</Link>
                </div>

                <div className='flex flex-col items-start justify-center text-white md:w-auto w-full'>
                    <h2 className='text-xl font-semibold mb-2'>Свяжитесь с нами</h2>
                    <a href="mailto: sntminecraft.supp@gmail.com" className='text-gray-300'>sntminecraft.supp@gmail.com</a>
                    <div className='flex flex-row items-center'>
                        <img src='/card/mastercard.png'/>
                        <img src='/card/visa.png' className='mx-2.5'/>
                        <img src='/card/mir.png'/>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export {TheFooter}
