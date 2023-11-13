import type { Metadata } from 'next'
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Zabila photo gallery',
  description: 'Portfolio website for Petro Zabila',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col relative">
        <Navbar />
          {children}
        <Footer/>
      </body>
    </html>
  )
}
