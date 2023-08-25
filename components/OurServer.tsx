import Image from "next/image"
import { useState } from "react";
import { useClipboard } from 'use-clipboard-copy'

const OurServer = () => {

    const TimeOut = () => {
        setIsCopied1(false)
      }

    const [isCopied1, setIsCopied1] = useState(false)
    const clipboard = useClipboard({
        onSuccess() {
            setIsCopied1(true)
            setTimeout(TimeOut, 2000)
        },
        onError() {
            setIsCopied1(false);
        }
    });

    return (
        <>
                <div className="list_box py-4 px-6 flex flex-col items-start bg-greey rounded-xl w-5/6 cool-cover transition-all duration-500 border-solid border-2 border-white">
                    <div className="list_box__title flex md:flex-row flex-col items-center justify-between w-full mb-7">
                        <div className="flex flex-row">
                            <Image src='/logo.png' alt='' width='32' height='32'></Image>
                            <h2 className='ml-2 text-white text-2xl font-bold'>SNT</h2>
                        </div>
                        <p className='text-2xl text-white'>Версия: 1.20</p>
                    </div>
                    <div className='w-full px-2 py-4 flex flex-row justify-between items-center rounded-xl bg-greey'>
                        <p className='text-2xl font-bold text-white'>{isCopied1 ? 'Скопировано!' : 'play.snt-minecraft.ru'}</p>
                        <input ref={clipboard.target} value={'Columbia.ru'} readOnly className='hidden'/>
                        <Image src='/copy.svg' width='32' height='32' alt='' className='cursor-pointer' onClick={clipboard.copy}/>
                    </div>
                    <h2 className='text-2xl font-bold font-weight-normal text-white mt-8 mb-4'>Сейчас играют:</h2>
                    <div className='w-full flex flex-row items-center'>
                        <Image src='/user.svg' width='32' height='32' alt=''></Image>
                        <p className='ml-1 text-white text-xl font-bold'>45</p>
                        <div className="w-full bg-greey rounded-full h-2.5 ml-8">
                            <div className="bg-white h-2.5 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>      
        </>
    )
}

const OurServer2 = () => {

    const TimeOut = () => {
        setIsCopied2(false)
    }
    const [isCopied2, setIsCopied2] = useState(false)
    const clipboardCopy2 = useClipboard({
        onSuccess() {
            setIsCopied2(true)
            setTimeout(TimeOut, 2000)
        },
        onError() {
            setIsCopied2(false);
        }
    });

    return (
                <div className="list_box py-4 px-6 flex flex-col items-start bg-greey rounded-xl w-5/6 cool-cover transition-all duration-500 border-solid border-2 border-white">
                    <div className="list_box__title flex md:flex-row flex-col items-center justify-between w-full mb-7">
                        <div className="flex flex-row">
                            <Image src='/logo.png' alt='' width='32' height='32'/>
                            <h2 className='ml-2 text-white text-2xl font-bold'>В будущем</h2>
                        </div>
                        <p className='text-2xl text-white'>Версия: ?.??</p>
                    </div>
                    <div className='w-full px-2 py-4 flex flex-row justify-between items-center rounded-xl bg-greey'>
                        <p className='text-2xl font-bold text-white'>{isCopied2 ? 'Скопировано!' : '??.ru'}</p>
                        <input ref={clipboardCopy2.target} value={'ничего'} readOnly className='hidden'/>
                        <Image src='/copy.svg' width='32' height='32' alt='' className='cursor-pointer' onClick={clipboardCopy2.copy}/>
                    </div>
                    <h2 className='text-2xl font-bold font-weight-normal text-white mt-8 mb-4'>Сейчас играют:</h2>
                    <div className='w-full flex flex-row items-center'>
                        <Image src='/user.svg' width='32' height='32' alt=''/>
                        <p className='ml-1 text-white text-xl font-bold'>&#8734;</p>
                        <div className="w-full bg-greey rounded-full h-2.5 ml-8">
                            <div className="bg-white h-2.5 rounded-full w-full"></div>
                        </div>
                    </div>
                </div>
    )
}

export default OurServer;
export {OurServer2}
