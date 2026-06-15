'use client'

import { useState } from 'react'

export function ParentTopHeader() {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-600">Selamat datang kembali,</p>
        <p className="text-2xl font-bold text-[#1A2B3C]">Ibu Siti Nurhaliza</p>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Notifications">
          <span className="text-2xl">🔔</span>
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {/* Accessibility Toggle */}
        <button
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Accessibility options"
          title="Accessibility Toggle"
        >
          <span className="text-2xl">♿</span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Profile menu"
          >
            <span className="text-2xl">👤</span>
            <span className="text-sm font-medium text-[#1A2B3C]">Profil</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4 border-b border-gray-200">
                <p className="font-semibold text-[#1A2B3C]">Ibu Siti Nurhaliza</p>
                <p className="text-sm text-gray-600">Orangtua Adnan Wijaya</p>
              </div>
              <ul className="py-2">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                    Ubah Profil
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                    Ganti Anak
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 border-t border-gray-200">
                    Keluar
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
