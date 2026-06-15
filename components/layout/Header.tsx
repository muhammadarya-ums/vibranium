import Link from 'next/link'
import Image from 'next/image'
import { Menu, Volume2, Eye } from 'lucide-react'

export function Header() {
  return (
    // 1. TAMBAHKAN 'relative' di sini agar posisi absolute di bawahnya mengacu pada header ini
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white relative">
      <div className="flex h-24 items-center justify-between px-4 md:px-8">
        
        {/* 2. GRUP LOGO & MENU: Menggunakan absolute untuk memaksa grup ini berada tepat di tengah halaman */}
        {/* Jarak antara logo dan tulisan 'Beranda' diatur oleh 'gap-8' di bawah ini */}
        <div className="flex items-center gap-50 md:absolute md:left-1/3 md:-translate-x-1/4"> 
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <img 
              src="/icon.png" 
              alt="Logo Vibranum" 
              className="h-20 w-auto object-contain" 
            />
          </Link>

          {/* Navigation Menu - Desktop Only */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beranda" className="text-sm font-medium text-[#1A2B3C] hover:text-[#47A38E] transition-colors">
              Beranda
            </a>
            <a href="#fitur" className="text-sm font-medium text-[#1A2B3C] hover:text-[#47A38E] transition-colors">
              Fitur
            </a>
            <a href="#testimoni" className="text-sm font-medium text-[#1A2B3C] hover:text-[#47A38E] transition-colors">
              Testimoni
            </a>
            <a href="#blog" className="text-sm font-medium text-[#1A2B3C] hover:text-[#47A38E] transition-colors">
              Blog
            </a>
          </nav>
          
        </div>

        {/* 3. BAGIAN KANAN: Ditambahkan 'md:ml-auto' agar tombol tetap mau mepet ke kanan */}
        <div className="flex items-center gap-4 md:ml-auto">
          {/* Accessibility Toggles */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Audio accessibility"
              className="p-2 rounded-lg bg-gray-100 text-[#1A2B3C] hover:bg-[#47A38E] hover:text-white transition-colors"
              title="Audio Assistance"
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <button
              aria-label="Visual accessibility"
              className="p-2 rounded-lg bg-gray-100 text-[#1A2B3C] hover:bg-[#47A38E] hover:text-white transition-colors"
              title="Visual Adjustments"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[#1A2B3C] border border-[#1A2B3C] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Masuk Portal
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-[#1A2B3C] rounded-lg hover:bg-[#0F1820] transition-colors"
            >
              Coba Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg bg-gray-100 text-[#1A2B3C] hover:bg-[#47A38E] hover:text-white transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}