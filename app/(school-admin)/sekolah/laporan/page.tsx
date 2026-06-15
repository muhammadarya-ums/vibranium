'use client'

import { useState } from 'react'
import { MetricCard } from '@/components/school-admin/MetricCard'
import { DataTable } from '@/components/school-admin/DataTable'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

// Mock analytics data
const overallMetrics = [
  {
    label: 'Tingkat Penyelesaian',
    value: '82%',
    subtitle: 'Siswa menyelesaikan modul',
    icon: '✓',
    trend: 'up' as const,
    trendValue: 4,
  },
  {
    label: 'Rata-rata Skor',
    value: '7.2',
    subtitle: 'Dari skala 0-10',
    icon: '⭐',
    trend: 'up' as const,
    trendValue: 2,
  },
  {
    label: 'Tingkat Retensi',
    value: '94%',
    subtitle: 'Siswa aktif berlanjut',
    icon: '📊',
    trend: 'stable' as const,
    trendValue: 0,
  },
  {
    label: 'Waktu Rerata Sesi',
    value: '45m',
    subtitle: 'Per sesi pembelajaran',
    icon: '⏱️',
    trend: 'down' as const,
    trendValue: 8,
  },
]

const performanceByClass = [
  { name: 'Kelas 1A', penyelesaian: 85, skor: 7.4, siswa: 12 },
  { name: 'Kelas 1B', penyelesaian: 78, skor: 6.9, siswa: 14 },
  { name: 'Kelas 2A', penyelesaian: 88, skor: 7.6, siswa: 11 },
  { name: 'Kelas 2B', penyelesaian: 80, skor: 7.1, siswa: 13 },
  { name: 'Kelas 3A', penyelesaian: 86, skor: 7.5, siswa: 15 },
  { name: 'Kelas 3B', penyelesaian: 76, skor: 6.8, siswa: 12 },
]

const topPerfomers = [
  { no: '1', nama: 'Andi Wijaya', kelas: 'Kelas 1A', skor: 8.5, penyelesaian: '92%' },
  { no: '2', nama: 'Bimo Sutrisno', kelas: 'Kelas 2A', skor: 8.3, penyelesaian: '95%' },
  { no: '3', nama: 'Citra Dewi', kelas: 'Kelas 3A', skor: 8.1, penyelesaian: '91%' },
  { no: '4', nama: 'Dina Kusuma', kelas: 'Kelas 1B', skor: 7.9, penyelesaian: '88%' },
  { no: '5', nama: 'Eka Santoso', kelas: 'Kelas 2B', skor: 7.8, penyelesaian: '86%' },
]

const columns = [
  { key: 'no', label: 'No', width: 'w-12' },
  { key: 'nama', label: 'Nama Siswa' },
  { key: 'kelas', label: 'Kelas' },
  { key: 'skor', label: 'Skor' },
  { key: 'penyelesaian', label: 'Penyelesaian' },
]

export default function LaporanPage() {
  const [timeRange, setTimeRange] = useState('bulan')

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1A2B3C] mb-2">Laporan Analisis Sekolah</h1>
          <p className="text-gray-600">Insight mendalam tentang performa dan kemajuan siswa</p>
        </div>
        <div className="flex gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
          >
            <option value="minggu">Minggu Ini</option>
            <option value="bulan">Bulan Ini</option>
            <option value="semester">Semester Ini</option>
            <option value="tahun">Tahun Ini</option>
          </select>
        </div>
      </div>

      {/* Overall Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Performance by Class */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#1A2B3C] mb-6">Performa Per Kelas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceByClass}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#666" style={{ fontSize: '12px' }} />
              <YAxis stroke="#666" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="penyelesaian" fill="#47A38E" name="Penyelesaian %" />
              <Bar dataKey="skor" fill="#C29C6D" name="Skor Rata-rata" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Over Time */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#1A2B3C] mb-6">Tren Performa Sekolah</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceByClass}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#666" style={{ fontSize: '12px' }} />
              <YAxis stroke="#666" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="penyelesaian"
                stroke="#47A38E"
                name="Penyelesaian"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="skor"
                stroke="#C29C6D"
                name="Skor"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performers Table */}
      <DataTable
        title="Siswa Berprestasi Terbaik"
        columns={columns}
        rows={topPerfomers}
        searchKey="nama"
        searchPlaceholder="Cari siswa..."
      />
    </div>
  )
}
