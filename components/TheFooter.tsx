import Image from "next/image"
import { useClipboard } from "use-clipboard-copy";

const TheFooter = () => {
    
    return (
        <footer style={{
            
        }}>
            <section id="basement">
                <div className="basement-item flex flex-row justify-between">

                    <a href="#">Пользовательское соглашение</a>
                    <div className="basement-item__icon flex flex-row">
                        <Image src="/icon/vk.svg" width='32' height='32' alt="" className="cursor-pointer"/> 
                        <Image src="/icon/discord.svg" width='32' height='32' alt="" className="ml-2 mr-4 cursor-pointer"/> 
                        <Image src="/icon/telegram.svg" width='22' height='22' alt="" className="cursor-pointer"/>
                    </div>
                    
                </div>
                <p>Вся размещенная информация на сайте не является публичной офертой. We are in no way affiliated with or endorsed by Mojang, AB.</p>
            </section>
        </footer>
    )
}

export {TheFooter}