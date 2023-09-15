import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/navbar/navbar'
import { AuthProvider } from '@/context/userContext'
export const metadata: Metadata = {
  title: 'Find The Person',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>

    </html>
  )
}
