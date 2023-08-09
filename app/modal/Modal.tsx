import React from 'react';
import '@/app/css/modal/Modal.css'
import '@/app/css/modal/media.css'
import Image from 'next/image';

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

export default Modal;
