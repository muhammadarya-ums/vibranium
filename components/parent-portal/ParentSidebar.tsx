'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ParentSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Ringkasan Hari Ini',
      href: '/wali/dashboard',
      icon: '📋',
    },
    {
      label: 'Rapor & Tren Belajar',
      href: '/wali/progress',
      icon: '📊',
    },
    {
      label: 'Panduan Belajar di Rumah',
      href: '/wali/home-learning',
      icon: '🏠',
    },
    {
      label: 'Pesan & Konsultasi',
      href: '/wali/messages',
      icon: '💬',
    },
  ]

  return (
    <aside className="w-64 bg-[#1A2B3C] text-white flex flex-col">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="text-3xl">👨‍👩‍👧</div>
          <div>
            <p className="font-bold text-white">SahabatAjar</p>
            <p className="text-sm text-gray-300">Wali Murid</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#47A38E] text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-6 border-t border-gray-700 space-y-3">
        <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
          Pengaturan
        </button>
        <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors">
          Keluar
        </button>
      </div>
    </aside>
  )
}
