import '@/app/globals.css'
import '@/app/css/wiki/style.css'
import WikiPage from './content' 

export default function Wiki() {
    return (
        <section id='wiki'>
            <div className="flex flex-row justify-between">

                <div className='lg:top-18 h-[calc(100vh-4.5rem)] overflow-y-auto md:px-6 px-2 my-8 [--scrollbar-size:theme(width.3)] lg:sticky md:ml-14 ml-1'>

                    <div className="scroll-sec flex flex-col">
                        <h2 className='h2_title font-bold mb-2'>Основное</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Введение</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Словарь терминов</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Команды</a></li>
                        </ul>
                    </div>

                    <div className="scroll-sec flex flex-col mt-14">
                        <h2 className='h2_title font-bold mb-2'>Игровой контент</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Дата паки</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Словарь терминов</a></li>
                        </ul>
                    </div>

                    <div className="scroll-sec flex flex-col mt-14">
                        <h2 className='h2_title font-bold mb-2'>игровой контент</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Дата паки</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white text-sm hover:text-blue-400'>Словарь терминов</a></li>
                        </ul>
                    </div>

                    <div className="scroll-sec flex flex-col mt-14">
                        <h2 className='h2_title font-bold mb-2'>игровой контент</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white hover:text-blue-400'>Дата паки</a></li>
                            <li className='my-3'><a href='#' className='text-white hover:text-blue-400'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white hover:text-blue-400'>Словарь терминов</a></li>
                        </ul>
                    </div>  
                    
                </div>

                <WikiPage/>

                <div className="chips w-1/7 text-white px-6 md:flex md:flex-col hidden">
                    <div className="flex flex-row">
                        <img src="/icon/ph_text-align-left.svg" alt="" />
                        <h2 className='text-xl font-bold ml-4'>На этой странице</h2>
                    </div>
                    
                    <ul className='pl-12 pt-2 cursor-pointer'>
                        <li className='py-1'><a>Впервые на сервере?</a></li>
                        <li className='py-1'><a>Ищете гайды?</a></li>
                        <li className='py-1'><a>Остались вопросы?</a></li>
                    </ul>
                </div>

            </div>
        </section>
    )
}