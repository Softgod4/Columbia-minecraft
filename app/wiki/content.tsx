function WikiPage() {
    return (
        <div className="global w-5/7 flex flex-col">
            <div className="text-white">
                <h2 className='h2_title font-bold'>Введение</h2>
                <p className='text-white mt-2'>Википедия проекта. На данном сайте, вы сможете найти ответы на все интересующие вами вопросы.</p>
            </div>

            <div className="text-white">
                <h2 className="text-xl mt-8">Впервые на сервере?</h2>
                <ul className="list-disc text-sm mt-2 pl-3 underline">
                    <li className="my-1"><a href="#">Правила сервера</a></li>
                    <li className="my-1"><a href="#">Команды сервера</a></li>
                    <li className="my-1"><a href="#">Разрешённые и запрещённые модификации</a></li>
                    <li className="my-1"><a href="#">Словарь терминов, используемые на сервере</a></li>
                </ul>
            </div>

            <div className="mt-4 text-white">
                <h2 className="h2_title font-bold mt-8">Ищете гайды?</h2>
                <ul className="list-disc text-sm mt-2 pl-3 underline">
                    <li className="my-1"><a href="#">Гайд по заходу на сервер</a></li>
                </ul>
            </div>
        </div>
    )
}

export default WikiPage;