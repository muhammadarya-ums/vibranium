'use client'

import { useState } from 'react'

interface TopHeaderProps {
  onMenuClick: () => void
}

export function TopHeader({ onMenuClick }: TopHeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
      {/* Left Section: Menu Button & School Info */}
      <div className="flex items-center gap-6">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div>
          <h2 className="text-xl font-bold text-[#1A2B3C]">
            Sekolah Luar Biasa Vibranum
          </h2>
          <p className="text-sm text-gray-500">Portal Manajemen Institusional</p>
        </div>
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button
          className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          aria-label="Notifications"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg"
            aria-label="User profile menu"
            aria-expanded={profileOpen}
          >
            <div className="w-8 h-8 bg-[#47A38E] rounded-full flex items-center justify-center text-white font-bold">
              BA
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900">Budi Aprisanto</p>
              <p className="text-xs text-gray-500">Kepala Sekolah</p>
            </div>
          </button>

          {/* Dropdown Menu */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <a
                href="#profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg"
              >
                Profil Saya
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Pengaturan Akun
              </a>
              <a
                href="#help"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Bantuan
              </a>
              <hr className="my-2" />
              <button
                onClick={() => {
                  setProfileOpen(false)
                  // Handle logout
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 last:rounded-b-lg"
              >
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
