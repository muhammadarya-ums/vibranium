'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  const [name, setName] = useState('Ibu Siti')
  const [email, setEmail] = useState('siti@sekolah.com')
  const [school, setSchool] = useState('SLB Negeri 1')
  const [phone, setPhone] = useState('+62812345678')
  const [notifications, setNotifications] = useState(true)

  const handleSave = () => {
    console.log('Settings saved:', { name, email, school, phone, notifications })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="border-b border-gray-200 bg-white px-8 py-6">
        <h1 className="text-3xl font-bold text-[#1A2B3C]">Pengaturan Akun</h1>
        <p className="text-gray-600 mt-2">Kelola informasi profil dan preferensi Anda</p>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-2xl">
          {/* Profile Information */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-8">
              Informasi Profil
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-[#1A2B3C] mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#1A2B3C] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E]"
                />
              </div>

              {/* School */}
              <div>
                <label className="block text-sm font-bold text-[#1A2B3C] mb-2">
                  Sekolah
                </label>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-[#1A2B3C] mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E]"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-8">
              Preferensi
            </h2>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="font-medium text-[#1A2B3C]">
                  Notifikasi Email
                </label>
                <p className="text-sm text-gray-600 mt-1">
                  Terima notifikasi tentang progres siswa
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  notifications ? 'bg-[#47A38E]' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={notifications}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    notifications ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-[#47A38E] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Save className="h-5 w-5" />
              Simpan Pengaturan
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-[#1A2B3C] font-bold rounded-lg hover:bg-gray-50 transition-colors">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
