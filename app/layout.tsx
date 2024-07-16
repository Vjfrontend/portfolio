
import './css/style.css'

import { Inter, } from 'next/font/google'
import { Aboreto } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})
const aboreto = Aboreto({
  weight: '400',  // Specify the available weight
  subsets: ['latin'],
  variable: '--font-aboreto',
  display: 'swap'
})

const cabinet = localFont({
  src: [
    {
      path: '../public/fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Extrabold.woff2',
      weight: '800',
    },
  ],
  variable: '--font-cabinet-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'portflio',
  description: 'Vitor Ezeabikwa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cabinet.variable}${aboreto.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
          <Analytics mode={'production'} />;
        </div>
      </body>
    </html>
  )
}
