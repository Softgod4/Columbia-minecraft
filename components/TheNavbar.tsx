'use client'
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';
import Image from 'next/image';

import '@/app/css/navbar/media.css'

import { useState } from 'react';

const TheNavbar = () => {
    const session = useSession()
    const [isActive, setIsActive] = useState(false)

    const toggleBurger = () => {
        setIsActive(!isActive)
    }

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center">
            <div className="nav-logo flex flex-row justify-between items-center cursor-pointer">
                <Link href='/'><Image src="/logo.png" alt="logo" width='30' height='30'/></Link>
                <Link className="text-3xl font-bold text-white" href="/">SNT</Link>
            </div>

            <div className="nav-link">

                <Link href='/' className='links'>Главная</Link>
                <Link href='/market' className='links'>Магазин</Link>
                <Link href='/#chips' className='links'>О сервере</Link>
                <Link href='/wiki' className='links'>Вики</Link>

            </div>

            <div className="nav-button">
                <Link href='/market' className='button_a'>Купить проходку</Link>
            </div>

            <div className={`nav-burger ${isActive ? 'flex flex-col absolute border-solid border-b-2 border-white' : 'hidden'}`}>

                <Link href='/' className='links-burger'>Главная</Link>
                <Link href='/market' className='links-burger'>Магазин</Link>
                <Link href='/#chips' className='links-burger'>О сервере</Link>
                <Link href='/wiki' className='links-burger'>Вики</Link>

            </div>

            <div className="burger" onClick={toggleBurger}>
                <span></span>
            </div>

        </nav>
    )
}

export {TheNavbar}
