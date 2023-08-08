function WikiPage() {
    return (
        <div className="global md:w-5/7 w-6/7 flex flex-col md:px-0 px-2">
            <div className="text-white">
                <h2 className='h2_title font-bold'>Введение</h2>
                <p className='text-white mt-2'>Википедия проекта. На данном сайте, вы сможете найти ответы на все интересующие вами вопросы.</p>
            </div>

            <div className="text-white">
                <h2 className="h2_title font-bold mt-8 text-xl">Впервые на сервере?</h2>
                <ul className="list-disc text-sm mt-2 pl-3">
                    <li className="my-1"><a href="#" className="text-blue-400 text-lg">Правила сервера</a></li>
                    <li className="my-1"><a href="#" className="text-blue-400 text-lg">Команды сервера</a></li>
                    <li className="my-1"><a href="#" className="text-blue-400 text-lg">Разрешённые и запрещённые модификации</a></li>
                    <li className="my-1"><a href="#" className="text-blue-400 text-lg">Словарь терминов, используемые на сервере</a></li>
                </ul>
            </div>

            <div className="mt-4 text-white">
                <h2 className="h2_title font-bold mt-8 text-xl">Ищете гайды?</h2>
                <ul className="list-disc text-sm mt-2 pl-3">
                    <li className="my-1"><a href="#" className="text-blue-400 text-lg">Гайд по заходу на сервер</a></li>
                </ul>
            </div>
        </div>
    )
}

export default WikiPage;