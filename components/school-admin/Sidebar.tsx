'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const MENU_ITEMS = [
  { label: 'Dashboard Ringkasan', href: '/sekolah/dashboard', icon: '📊' },
  { label: 'Manajemen Guru', href: '/sekolah/guru', icon: '👨‍🏫' },
  { label: 'Manajemen Siswa & Kelas', href: '/sekolah/siswa-kelas', icon: '👨‍👩‍👧‍👦' },
  { label: 'Distribusi Kurikulum', href: '/sekolah/kurikulum-pilar', icon: '📚' },
  { label: 'Laporan Analisis', href: '/sekolah/laporan', icon: '📈' },
  { label: 'Pengaturan Lembaga', href: '/sekolah/pengaturan', icon: '⚙️' },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-72 h-screen bg-[#1A2B3C] text-white flex flex-col transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#47A38E] rounded-lg flex items-center justify-center font-bold text-white">
              V
            </div>
            <div>
              <h1 className="font-bold text-lg">VIBRANUM</h1>
              <p className="text-xs text-gray-400">Portal Sekolah</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-2">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname.includes(item.href.split('/')[2])
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#47A38E] text-white font-semibold'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                    onClick={() => onClose()}
                  >
                    <span className="text-xl" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="p-6 border-t border-gray-700 space-y-3">
          <div className="text-xs text-gray-400">
            <p className="font-semibold text-gray-300 mb-2">Versi Portal</p>
            <p>v2.0.0</p>
          </div>
        </div>
      </aside>
    </>
  )
}
