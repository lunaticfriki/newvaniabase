import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { MetaContent } from './content'
import { Footer, Header } from './shared'

const mont = Montserrat({ subsets: ['latin'] })

const { title, description } = MetaContent

export const metadata: Metadata = {
  title,
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className='min-h-screen grid grid-rows-layout'>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
        </div>
      </body>
    </html>
  )
}