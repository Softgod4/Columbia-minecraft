'use client'
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';

const TheNavbar = () => {
    const session = useSession()

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center">
            <div className="nav-logo flex flex-row justify-between items-center">
                <img src="/logo.svg" alt="logo" />
                <Link className="text-3xl font-bold text-white" href="/">Columbia</Link>
            </div>

            <div className="nav-link">

                <Link href='/' className='links'>Главная</Link>
                <Link href='/market' className='links'>Магазин</Link>
                <Link href='/#chips' className='links'>О сервере</Link>
                <Link href='/wiki' className='links'>Вики</Link>

            </div>

            <div className="nav-button">
                {session?.data ? 
                    <Link href='/profile'  style={{

                        padding: '12px 44px',
                        background: 'transparent',
                        color: 'white',
                        fontWeight: 'bold',
                        border: '2px solid white',
                        borderRadius: '4px'

                    }}>{session.data.user?.name}</Link> : <Link href='/' onClick={() => signIn('discord')} style={{

                        padding: '12px 34px',
                        background: 'white',
                        color: 'black',
                        fontWeight: 'bold',
                        border: '2px solid white',
                        borderRadius: '4px'
                        
                    }}>Авторизация</Link>
                }
            </div>
        </nav>
    )
}

export {TheNavbar}