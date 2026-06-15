'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, BookOpen, FileText, Settings, LogOut } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname.includes(path)
  }

  const navItems = [
    {
      label: 'Dashboard',
      href: '/guru/dashboard',
      icon: BarChart3,
    },
    {
      label: 'Materi',
      href: '/guru/materi',
      icon: BookOpen,
    },
    {
      label: 'Laporan',
      href: '/guru/laporan',
      icon: FileText,
    },
    {
      label: 'Pengaturan',
      href: '/guru/settings',
      icon: Settings,
    },
  ]

  return (
    <aside className="w-48 border-r border-gray-200 bg-white">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                active
                  ? 'bg-[#47A38E] text-white'
                  : 'text-[#1A2B3C] hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button at Bottom */}
      <div className="absolute bottom-4 left-0 right-0 px-4 w-48">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
          aria-label="Logout"
        >
          <LogOut className="h-5 w-5" />
          Keluar
        </button>
      </div>
    </aside>
  )
}
