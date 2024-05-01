import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from '@/provider/SessionProvider'

import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'HybridTrainingApp',
  description: 'HybridTrainingApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen`}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
