'use client'

import { useState } from 'react'

export default function PengaturanPage() {
  const [settings, setSettings] = useState({
    schoolName: 'Sekolah Luar Biasa Vibranum',
    phone: '(021) 555-0123',
    email: 'admin@vibranumslb.edu',
    website: 'www.vibranumslb.edu',
    address: 'Jl. Pendidikan No. 123, Jakarta Selatan',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    zipCode: '12345',
    planType: 'premium',
    maxTeachers: 50,
    maxStudents: 200,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1A2B3C] mb-2">Pengaturan Lembaga</h1>
        <p className="text-gray-600">Kelola informasi sekolah, langganan, dan preferensi sistem</p>
      </div>

      {/* Settings Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        <button className="px-4 py-3 font-semibold text-[#1A2B3C] border-b-2 border-[#47A38E]">
          Informasi Lembaga
        </button>
        <button className="px-4 py-3 font-semibold text-gray-600 hover:text-[#1A2B3C]">
          Langganan & Pembayaran
        </button>
        <button className="px-4 py-3 font-semibold text-gray-600 hover:text-[#1A2B3C]">
          Preferensi Sistem
        </button>
      </div>

      {/* School Information Form */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-semibold text-[#1A2B3C]">Informasi Dasar Sekolah</h3>

            {/* School Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                Nama Sekolah
              </label>
              <input
                type="text"
                name="schoolName"
                value={settings.schoolName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                Website
              </label>
              <input
                type="url"
                name="website"
                value={settings.website}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                Alamat Lengkap
              </label>
              <textarea
                name="address"
                value={settings.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                  Kota
                </label>
                <input
                  type="text"
                  name="city"
                  value={settings.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                  Provinsi
                </label>
                <input
                  type="text"
                  name="province"
                  value={settings.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
                  Kode Pos
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={settings.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Batalkan
              </button>
              <button className="flex-1 px-6 py-3 bg-[#47A38E] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar: Plan Info */}
        <div className="space-y-6">
          {/* Current Plan */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h4 className="font-semibold text-[#1A2B3C] mb-4">Paket Berlangganan</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Paket Aktif</span>
                <span className="font-semibold text-[#47A38E]">Premium</span>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Guru Maksimal</span>
                <span className="font-semibold text-[#1A2B3C]">{settings.maxTeachers}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Siswa Maksimal</span>
                <span className="font-semibold text-[#1A2B3C]">{settings.maxStudents}</span>
              </div>
              <div className="h-px bg-gray-200" />
              <button className="w-full mt-3 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Kelola Langganan
              </button>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-gradient-to-br from-[#47A38E] to-[#5A8E8A] rounded-xl p-6 text-white">
            <h4 className="font-semibold mb-2">Butuh Bantuan?</h4>
            <p className="text-sm mb-4 opacity-90">
              Tim support kami siap membantu Anda 24/7
            </p>
            <button className="w-full px-4 py-2 bg-white text-[#47A38E] font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-sm">
              Hubungi Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
