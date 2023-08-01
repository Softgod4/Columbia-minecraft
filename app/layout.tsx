import './globals.css'
import '@/app/css/home/main.css'
import './css/home/media.css'
import { signIn } from "next-auth/react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheNavbar } from '@/components/TheNavbar'
import { TheFooter } from '@/components/TheFooter'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Columbia minecraft',
  description: 'the most vanilla minecraft server',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>

        <Providers>
          <TheNavbar></TheNavbar>
          {children}
          <TheFooter></TheFooter>
        </Providers>
        
      </body>
    </html>
  )
}
