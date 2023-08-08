import Image from "next/image"
import { useClipboard } from "use-clipboard-copy";
import Link from "next/link";

const TheFooter = () => {
    
    return (
        <footer style={{
            
        }}>
            <section id="basement">

                <div className="flex md:flex-row flex-col items-start justify-between">
                    <a className="font-bold text-xl">Columbia</a>
                    <div className="basement-item__icon flex flex-row justify-between items-center">

                        <a href="https://vk.com/clstorym">
                            <Image src="/icon/vk.svg" width='32' height='32' alt="" className="cursor-pointer"/> 
                        </a>
                        <a href="https://discord.gg/NEGq7UEBU4">
                            <Image src="/icon/discord.svg" width='32' height='32' alt="" className="ml-2 mr-4 cursor-pointer"/> 
                        </a>
                        <a href="https://t.me/columbistg">
                            <Image src="/icon/telegram.svg" width='22' height='22' alt="" className="cursor-pointer"/>
                        </a>

                    </div>
                </div>
                <div className="basement-item flex flex-row justify-start">
                    
                    <Link href="/contacts" className="text-xl hover:text-blue-400">Контакты</Link>
                    <Link href="#" className="text-xl hover:text-blue-400">Способы оплаты</Link>
                    <Link href="#" className="text-xl hover:text-blue-400">Пользовательское соглашение</Link>
                    
                </div>

                <div className="flex md:flex-row flex-col items-start">
                    <p className="md:text-sm text-xl text-gray-600">СМЗ ДОРОШЕНКО АРТЁМ ИГОРЕВИЧ</p>
                    <p className="text-sm text-gray-600">(ИНН 632136734840)</p>
                </div>

                <p style={{fontSize: '18px', color: '#E6E6E6'}}>Вся размещенная информация на сайте не является публичной офертой. We are in no way affiliated with or endorsed by Mojang, AB.</p>
            </section>
        </footer>
    )
}

export {TheFooter}