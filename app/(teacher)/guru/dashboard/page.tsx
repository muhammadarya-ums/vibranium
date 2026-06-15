'use client'

import { ProgressChart } from '@/components/teacher/ProgressChart'
import { useState } from 'react'
import { Search, Plus } from 'lucide-react'

// Mock student data
const studentsList = [
  { id: 1, name: 'Andi Pratama', topik: 'Pilar Pengetahuan', progress: 65 },
  { id: 2, name: 'Siti Nurhaliza', topik: 'Pilar Keterampilan', progress: 80 },
  { id: 3, name: 'Budi Santoso', topik: 'Pilar Pengetahuan', progress: 45 },
  { id: 4, name: 'Desi Puspita', topik: 'Pilar Keterampilan', progress: 72 },
  { id: 5, name: 'Eka Wijaya', topik: 'Pilar Pengetahuan', progress: 55 },
]

// Mock progress data
const progressData = [
  { name: 'Jan', 'Pilar Pengetahuan': 45, 'Pilar Keterampilan': 38, 'Lainnya': 65 },
  { name: 'Feb', 'Pilar Pengetahuan': 52, 'Pilar Keterampilan': 42, 'Lainnya': 72 },
  { name: 'Mar', 'Pilar Pengetahuan': 48, 'Pilar Keterampilan': 48, 'Lainnya': 68 },
  { name: 'Apr', 'Pilar Pengetahuan': 61, 'Pilar Keterampilan': 55, 'Lainnya': 75 },
  { name: 'May', 'Pilar Pengetahuan': 55, 'Pilar Keterampilan': 52, 'Lainnya': 80 },
]

// Mock error analysis data
const errorAnalysis = [
  { id: 1, student: 'Andi Pratama', topic: 'Hitung 1-10', errors: 3 },
  { id: 2, student: 'Siti Nurhaliza', topic: 'Warna Dasar', errors: 1 },
  { id: 3, student: 'Budi Santoso', topic: 'Hitung 1-5', errors: 5 },
  { id: 4, student: 'Desi Puspita', topic: 'Bentuk Geometri', errors: 0 },
  { id: 5, student: 'Eka Wijaya', topic: 'Hitung 1-10', errors: 4 },
]

export default function TeacherDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStudents = studentsList.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="border-b border-gray-200 bg-white px-8 py-6">
        <h1 className="text-3xl font-bold text-[#1A2B3C]">Dashboard Guru</h1>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Student List Section */}
        <section className="bg-[#C29C6D] rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-white">Daftar Siswa Anda</h2>
            <button className="bg-[#1A2B3C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0F1820] transition-colors flex items-center gap-2 w-fit">
              <Plus className="h-5 w-5" />
              Tambah Siswa +
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari siswa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
            />
          </div>

          {/* Student Table */}
          <div className="overflow-x-auto bg-[#2C2C2C] rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1A2B3C] text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold">No</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Nama Siswa</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Topik Aktif</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Progress</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`${
                      index % 2 === 0 ? 'bg-[#3A3A3A]' : 'bg-[#2C2C2C]'
                    } border-b border-gray-700 text-white hover:bg-[#444444] transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-sm">{student.topik}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-[#C29C6D] h-2 rounded-full transition-all"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-[#C29C6D] hover:text-[#B5875F] font-bold transition-colors">
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Error Analysis Section */}
        <section className="bg-[#C29C6D] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Laporan Detail dan Analisis Kesalahan Siswa
          </h2>

          <div className="overflow-x-auto bg-[#2C2C2C] rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1A2B3C] text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold">Nama Siswa</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Topik</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Jumlah Kesalahan</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {errorAnalysis.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? 'bg-[#3A3A3A]' : 'bg-[#2C2C2C]'
                    } border-b border-gray-700 text-white`}
                  >
                    <td className="px-6 py-4 text-sm font-medium">{item.student}</td>
                    <td className="px-6 py-4 text-sm">{item.topic}</td>
                    <td className="px-6 py-4 text-sm">{item.errors}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.errors === 0
                            ? 'bg-green-500 text-white'
                            : item.errors <= 2
                              ? 'bg-yellow-500 text-white'
                              : 'bg-red-500 text-white'
                        }`}
                      >
                        {item.errors === 0
                          ? 'Sempurna'
                          : item.errors <= 2
                            ? 'Bagus'
                            : 'Perlu Bantuan'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Progress Trend Chart */}
        <ProgressChart
          data={progressData}
          title="Tren Perkembangan Siswa"
          dataKeys={[
            { name: 'Pilar Pengetahuan', color: '#C29C6D' },
            { name: 'Pilar Keterampilan', color: '#47A38E' },
            { name: 'Lainnya', color: '#5A8E8A' },
          ]}
          height={400}
        />
      </div>
    </div>
  )
}
