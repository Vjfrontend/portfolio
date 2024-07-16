'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { Analytics } from '@vercel/analytics/react';


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <Header />
      
      <main className="grow">

        {children}
        <Analytics mode={'production'} />;
      </main>

      <Footer />
    </>
  )
}
