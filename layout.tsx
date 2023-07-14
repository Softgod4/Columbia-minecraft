import './globals.css'
import './main.css'
import './css/home/media.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheNavbar } from '@/components/TheNavbar'
import { TheFooter } from '@/components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Columbia minecraft',
  description: 'minecraft server',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>

        <TheNavbar></TheNavbar>
        {children}
        <TheFooter></TheFooter>
        
      </body>
    </html>
  )
}
