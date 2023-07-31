import Image from "next/image"

const TheFooter = () => {
    return (
        <footer style={{
            
        }}>
            <section id="basement">
                <div className="basement-item flex flex-row justify-between">

                    <a href="#">Пользовательское соглашение</a>
                    <div className="basement-item__icon flex flex-row">
                        <Image src="/icon/vk.svg" width='32' height='32' alt=""></Image>
                        <Image src="/icon/discord.svg" width='32' height='32' alt="" className="ml-2 mr-4"></Image>
                        <Image src="/icon/telegram.svg" width='22' height='22' alt=""></Image>
                    </div>
                    
                </div>
                <p>Вся размещенная информация на сайте не является публичной офертой. We are in no way affiliated with or endorsed by Mojang, AB.</p>
            </section>
        </footer>
    )
}

export {TheFooter}