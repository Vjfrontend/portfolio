import Header from '@/components/ui/header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
    
<Header/>
      <main className="grow bg-gray-500">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {children}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
