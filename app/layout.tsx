import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Kavya - Poetry Platform',
  description: 'A beautiful space for poetry and shayaris',
}

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          inter.variable,
          crimsonText.variable
        )}
      >
        <SessionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
