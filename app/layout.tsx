import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Nav from '@/components/Nav'
import Nav2 from '@/components/Nav2'
import Footer from '@/components/Footer/Footer'
import { ClerkProvider } from '@clerk/nextjs'
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shipping',
  description: 'A shipping start up',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${raleway.className} max-w-7xl mx-auto ` } >
        <Nav2 />
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
