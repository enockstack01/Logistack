import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logistack Ltd - Transforming Data Into Impact',
  description: 'Helping businesses make smarter decisions, build scalable digital solutions, and grow with technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}