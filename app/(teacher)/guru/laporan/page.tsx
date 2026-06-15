'use client'

import { ProgressChart } from '@/components/teacher/ProgressChart'
import { Download, Printer } from 'lucide-react'

const monthlyData = [
  { name: 'Jan', 'Pilar Pengetahuan': 45, 'Pilar Keterampilan': 38, 'Lainnya': 65 },
  { name: 'Feb', 'Pilar Pengetahuan': 52, 'Pilar Keterampilan': 42, 'Lainnya': 72 },
  { name: 'Mar', 'Pilar Pengetahuan': 48, 'Pilar Keterampilan': 48, 'Lainnya': 68 },
  { name: 'Apr', 'Pilar Pengetahuan': 61, 'Pilar Keterampilan': 55, 'Lainnya': 75 },
  { name: 'May', 'Pilar Pengetahuan': 55, 'Pilar Keterampilan': 52, 'Lainnya': 80 },
  { name: 'Jun', 'Pilar Pengetahuan': 68, 'Pilar Keterampilan': 62, 'Lainnya': 85 },
]

const studentPerformance = [
  {
    name: 'Andi Pratama',
    accuracy: 78,
    completionRate: 85,
    averageTime: '12 menit',
    status: 'Progres Baik',
  },
  {
    name: 'Siti Nurhaliza',
    accuracy: 92,
    completionRate: 95,
    averageTime: '10 menit',
    status: 'Sempurna',
  },
  {
    name: 'Budi Santoso',
    accuracy: 65,
    completionRate: 60,
    averageTime: '18 menit',
    status: 'Perlu Bantuan',
  },
  {
    name: 'Desi Puspita',
    accuracy: 88,
    completionRate: 90,
    averageTime: '11 menit',
    status: 'Sangat Baik',
  },
]

export default function LaporanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="border-b border-gray-200 bg-white px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1A2B3C]">Laporan Analytics</h1>
            <p className="text-gray-600 mt-2">
              Analisis mendalam tentang progres pembelajaran siswa
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-3 bg-[#47A38E] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors">
              <Download className="h-5 w-5" />
              Export PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-300 text-[#1A2B3C] font-bold rounded-lg hover:bg-gray-100 transition-colors">
              <Printer className="h-5 w-5" />
              Cetak
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Monthly Trend Chart */}
        <div>
          <ProgressChart
            data={monthlyData}
            title="Tren Pembelajaran Bulanan"
            dataKeys={[
              { name: 'Pilar Pengetahuan', color: '#C29C6D' },
              { name: 'Pilar Keterampilan', color: '#47A38E' },
              { name: 'Lainnya', color: '#5A8E8A' },
            ]}
            height={400}
          />
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Total Siswa
            </p>
            <p className="text-4xl font-bold text-[#1A2B3C]">4</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Rata-rata Akurasi
            </p>
            <p className="text-4xl font-bold text-[#C29C6D]">81%</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Tingkat Penyelesaian
            </p>
            <p className="text-4xl font-bold text-[#47A38E]">83%</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Waktu Rata-rata
            </p>
            <p className="text-4xl font-bold text-[#1A2B3C]">12 min</p>
          </div>
        </div>

        {/* Student Performance Table */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6">
            Performa Siswa
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1A2B3C]">
                    Nama Siswa
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1A2B3C]">
                    Akurasi
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1A2B3C]">
                    Penyelesaian
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1A2B3C]">
                    Waktu Rata-rata
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#1A2B3C]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentPerformance.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#1A2B3C]">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#C29C6D] h-2 rounded-full"
                            style={{ width: `${student.accuracy}%` }}
                          />
                        </div>
                        <span className="font-bold text-[#1A2B3C]">
                          {student.accuracy}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#47A38E] h-2 rounded-full"
                            style={{ width: `${student.completionRate}%` }}
                          />
                        </div>
                        <span className="font-bold text-[#1A2B3C]">
                          {student.completionRate}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#1A2B3C]">
                      {student.averageTime}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          student.status === 'Sempurna'
                            ? 'bg-green-100 text-green-700'
                            : student.status === 'Sangat Baik'
                              ? 'bg-blue-100 text-blue-700'
                              : student.status === 'Progres Baik'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
