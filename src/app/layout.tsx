import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ProgressProvider } from '@/contexts/ProgressContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'FinJovem | Educação Financeira Interativa',
  description: 'Plataforma interativa de educação financeira para jovens',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  )
}