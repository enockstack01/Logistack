import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Providers from '../components/Providers'

export const metadata: Metadata = {
  title: 'Logistack Ltd | Data, maps and software for decisions that work',
  description:
    'Logistack Ltd is a Kigali-based technology company working in data science, GIS, software development and technology capacity building.',
  icons: { icon: '/logistack-symbol-navy.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className="font-sans bg-white text-logistack-ink">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
