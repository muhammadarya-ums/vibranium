'use client'

import { useState } from 'react'
import { DataTable } from '@/components/school-admin/DataTable'
import { ModalOverlay } from '@/components/school-admin/ModalOverlay'

// Mock data
const teacherData = [
  {
    no: '1',
    nama: 'Siti Nurhaliza',
    nip: '197505051998022003',
    kelasBinaan: 'Kelas 1A',
    modulAktif: '3',
    status: 'Aktif',
  },
  {
    no: '2',
    nama: 'Ahmad Suryaman',
    nip: '196808201989031001',
    kelasBinaan: 'Kelas 2B',
    modulAktif: '4',
    status: 'Aktif',
  },
  {
    no: '3',
    nama: 'Dewi Lestari',
    nip: '197103152001032002',
    kelasBinaan: 'Kelas 1B',
    modulAktif: '2',
    status: 'Aktif',
  },
  {
    no: '4',
    nama: 'Rudi Hartono',
    nip: '196912101994031002',
    kelasBinaan: 'Kelas 3A',
    modulAktif: '5',
    status: 'Aktif',
  },
  {
    no: '5',
    nama: 'Eka Putri Wijaya',
    nip: '198201151999032001',
    kelasBinaan: 'Kelas 2A',
    modulAktif: '3',
    status: 'Aktif',
  },
]

const columns = [
  { key: 'no', label: 'No', width: 'w-12' },
  { key: 'nama', label: 'Nama Guru' },
  { key: 'nip', label: 'NIP' },
  { key: 'kelasBinaan', label: 'Kelas Binaan' },
  { key: 'modulAktif', label: 'Modul Aktif' },
  { key: 'status', label: 'Status' },
]

export default function GuruPage() {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    classroom: '',
    permissions: { kurikulum: false, laporan: false, siswa: false },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePermissionChange = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [key]: !prev.permissions[key as keyof typeof prev.permissions],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setShowInviteModal(false)
    setFormData({ email: '', classroom: '', permissions: { kurikulum: false, laporan: false, siswa: false } })
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1A2B3C] mb-2">Manajemen Guru</h1>
          <p className="text-gray-600">Kelola daftar guru dan akses modul pembelajaran</p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="px-6 py-3 bg-[#1A2B3C] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
        >
          Undang Guru Baru
        </button>
      </div>

      {/* Teachers Table */}
      <DataTable
        columns={columns}
        rows={teacherData}
        searchKey="nama"
        searchPlaceholder="Cari nama guru..."
        actions={(row) => (
          <div className="flex gap-2">
            <button className="text-sm px-3 py-1 text-[#47A38E] hover:bg-teal-50 rounded transition-colors">
              Kelola
            </button>
            <button className="text-sm px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors">
              Cabut Akses
            </button>
          </div>
        )}
      />

      {/* Invite Teacher Modal */}
      <ModalOverlay
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        title="Undang Guru Baru"
        width="md"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
              Email Guru
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="guru@sekolah.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
              required
            />
          </div>

          {/* Classroom Select */}
          <div>
            <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">
              Kelas Binaan
            </label>
            <select
              name="classroom"
              value={formData.classroom}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
              required
            >
              <option value="">Pilih Kelas</option>
              <option value="kelas-1a">Kelas 1A</option>
              <option value="kelas-1b">Kelas 1B</option>
              <option value="kelas-2a">Kelas 2A</option>
              <option value="kelas-2b">Kelas 2B</option>
              <option value="kelas-3a">Kelas 3A</option>
            </select>
          </div>

          {/* Permissions */}
          <div>
            <label className="block text-sm font-semibold text-[#1A2B3C] mb-3">
              Izin Akses
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.permissions.kurikulum}
                  onChange={() => handlePermissionChange('kurikulum')}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm text-gray-700">Kelola Kurikulum & Pilar</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.permissions.laporan}
                  onChange={() => handlePermissionChange('laporan')}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm text-gray-700">Akses Laporan Siswa</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.permissions.siswa}
                  onChange={() => handlePermissionChange('siswa')}
                  className="w-4 h-4 rounded"
                />
                <span className="text-sm text-gray-700">Kelola Daftar Siswa</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowInviteModal(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#47A38E] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Kirim Undangan
            </button>
          </div>
        </form>
      </ModalOverlay>
    </div>
  )
}
