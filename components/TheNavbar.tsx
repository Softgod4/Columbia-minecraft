'use client'
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';

const TheNavbar = () => {
    const session = useSession()
    console.log(session)

    return (
        <nav id="navbar" className="flex flex-row justify-between items-center">
            <div className="nav-logo flex flex-row justify-between items-center">
                <img src="/logo.svg" alt="logo" />
                <Link className="h2_title bold" href="/">Columbia</Link>
            </div>

            <div className="nav-link">

                <Link href='/' className='links'>Главная</Link>
                <Link href='/market' className='links'>Магазин</Link>
                <Link href='/' className='links'>О сервере</Link>
                <Link href='/' className='links'>Вики</Link>
                {session?.data && (
                    <Link href="/profile" className='links'>Профиль</Link>
                )}

            </div>

            <div className="nav-button">
                {session?.data ? 
                    <Link href='#' onClick={() => signOut({callbackUrl: '/'})} style={{

                        padding: '12px 44px',
                        background: 'transparent',
                        color: 'white',
                        fontWeight: 'bold',
                        border: '2px solid white',
                        borderRadius: '4px'

                    }}>Выйти из {session.data.user?.name}</Link> : <Link href='/' onClick={() => signIn('discord')} style={{

                        padding: '12px 64px',
                        background: 'transparent',
                        color: 'white',
                        fontWeight: 'bold',
                        border: '2px solid white',
                        borderRadius: '4px'
                        
                    }}>Войти</Link>
                }
            </div>
        </nav>
    )
}

export {TheNavbar}