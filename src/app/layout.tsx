import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Template1Provider } from "@/contexts/template1/Template1Provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maybe a Admin Panel',
  description: 'Some Random Things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Template1Provider>
          {children}
        </Template1Provider>
      </body>
    </html>
  )
}
