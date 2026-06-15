import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem-20rem)]">
        {children}
      </main>
      <Footer />
    </>
  )
}
