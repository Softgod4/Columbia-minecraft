import '@/app/globals.css'
import '@/app/css/wiki/style.css'
import WikiPage from './content' 

export default function Wiki() {
    return (
        <section id='wiki'>
            <div className="flex flex-row justify-between">

                <div className='scroll w-1/7 flex flex-col justify-start items-start ml-8 overflow-y-auto mt-8'>

                    <div className="scroll-sec flex flex-col">
                        <h2 className='h2_title font-bold mb-2'>Основное</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white'>Введение</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Словарь терминов</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Команды</a></li>
                        </ul>
                    </div>

                    <div className="scroll-sec flex flex-col mt-14">
                        <h2 className='h2_title font-bold mb-2'>игровой контент</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white'>Дата паки</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Словарь терминов</a></li>
                        </ul>
                    </div>

                    <div className="scroll-sec flex flex-col mt-14">
                        <h2 className='h2_title font-bold mb-2'>игровой контент</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white'>Дата паки</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Словарь терминов</a></li>
                        </ul>
                    </div>

                    <div className="scroll-sec flex flex-col mt-14">
                        <h2 className='h2_title font-bold mb-2'>игровой контент</h2>
                        <ul>
                            <li className='my-3'><a href='#' className='text-white'>Дата паки</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Как начать играть</a></li>
                            <li className='my-3'><a href='#' className='text-white'>Словарь терминов</a></li>
                        </ul>
                    </div>  
                    
                </div>

                <WikiPage/>

                <div className="chips w-1/7 text-white px-6">
                    <h2 className='text-xl font-bold'>На этой странице</h2>
                    <ul className='pl-4 pt-2 cursor-pointer'>
                        <li className='py-1'><a>Впервые на сервере?</a></li>
                        <li className='py-1'><a>Ищете гайды?</a></li>
                        <li className='py-1'><a>Остались вопросы?</a></li>
                    </ul>
                    
                    

                </div>

            </div>
        </section>
    )
}