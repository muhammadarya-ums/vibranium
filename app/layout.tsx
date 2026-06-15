import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vibranum - Personalisasi Pendidikan Inklusif Berbasis Multisensori',
  description: 'Platform khusus dan adaptif untuk anak berkebutuhan khusus (disabilitas intelektual & sensorik) dengan kurikulum kustom yang terukur untuk setiap siswa unik.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  // Tambahkan ini agar saat di-share ke WhatsApp/Sosmed logonya ikut ganti
  openGraph: {
    title: 'Vibranum - Personalisasi Pendidikan Inklusif Berbasis Multisensori',
    description: 'Platform khusus dan adaptif untuk anak berkebutuhan khusus (disabilitas intelektual & sensorik) dengan kurikulum kustom yang terukur untuk setiap siswa unik.',
    url: 'https://lenteraabhesa.vercel.app',
    siteName: 'Lentera Abhesa',
    images: [
      {
        url: 'https://lenteraabhesa.vercel.app/icon.png', // Harus URL absolut/lengkap agar dibaca WhatsApp
        width: 1200,
        height: 630,
        alt: 'Lentera Abhesa App Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibranum - Personalisasi Pendidikan Inklusif Berbasis Multisensori',
    description: 'Platform khusus dan adaptif untuk anak berkebutuhan khusus (disabilitas intelektual & sensorik) dengan kurikulum kustom yang terukur untuk setiap siswa unik.',
    images: ['https://lenteraabhesa.vercel.app/icon.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#47A38E' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
