import type { Metadata } from 'next'
import './globals.css'
import SideBar from '@/components/sideBar'

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
        <SideBar />
        {children}
      </body>
    </html>
  )
}
