import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio for posting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        <SideBar />
        {children}
      </body>
    </html>
  )
}
