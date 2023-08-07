import Image from "next/image"
import { useClipboard } from "use-clipboard-copy";

const TheFooter = () => {
    
    return (
        <footer style={{
            
        }}>
            <section id="basement">

                <div className="flex flex-row items-start justify-between">
                    <a className="font-bold text-xl">Columbia</a>
                    <div className="basement-item__icon flex flex-row">
                        <Image src="/icon/vk.svg" width='32' height='32' alt="" className="cursor-pointer"/> 
                        <Image src="/icon/discord.svg" width='32' height='32' alt="" className="ml-2 mr-4 cursor-pointer"/> 
                        <Image src="/icon/telegram.svg" width='22' height='22' alt="" className="cursor-pointer"/>
                    </div>
                </div>
                <div className="basement-item flex flex-row justify-start">
                    
                    <a href="#">Контакты</a>
                    <a href="#">Способы оплаты</a>
                    <a href="#">Пользовательское соглашение</a>
                    
                </div>
                <p style={{fontSize: '18px', color: '#E6E6E6'}}>Вся размещенная информация на сайте не является публичной офертой. We are in no way affiliated with or endorsed by Mojang, AB.</p>
            </section>
        </footer>
    )
}

export {TheFooter}