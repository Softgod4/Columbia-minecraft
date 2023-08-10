export default function Contacts () {
    return (
        <section className="">
            <div className="container flex flex-col justify-center items-center">
                <h2 className="text-white text-5xl mb-2">Контакты</h2>
                <p className="text-white text-lg text-center">Если у вас возникли вопросы то свяжитесь с нами</p>

                <div className="flex md:flex-row flex-col justify-between mt-7 mb-52">

                    <div className="email mx-16 flex flex-col">
                        <h3 className="font-bold text-2xl font-weight-700 text-white whitespace-nowrap text-center">Email Address</h3>
                        <a className="button_a flex flex-row justify-center items-center mt-3 hover:bg-white hover:text-black" href="mailto: columbis1supp@gmail.com"><img src="/icon/carbon_email.svg" alt="" className="mr-2 w-6 h-6"/><p className="font-bold">Email</p></a>
                    </div>
                    <div className="support mx-16 flex flex-col md:mt-0 mt-6">
                        <h3 className="font-bold text-2xl font-weight-700 text-white whitespace-nowrap text-center">Поддержка</h3>
                        <a className="button_a flex flex-row justify-center items-center mt-3 hover:bg-white hover:text-black" href="https://t.me/columbistg"><img src="/icon/carbon_telegram.svg" alt="" className="mr-2 w-6 h-6"/><p className="font-bold">Telegram</p></a>
                    </div>
                
                </div>
            </div>
        </section>
        
    )
}
