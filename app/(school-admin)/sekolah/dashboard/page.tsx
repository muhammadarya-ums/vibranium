'use client'

import { MetricCard } from '@/components/school-admin/MetricCard'
import { ActivityFeed } from '@/components/school-admin/ActivityFeed'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data
const metrics = [
  {
    label: 'Total Guru',
    value: '24',
    subtitle: 'Aktif mengajar',
    icon: '👨‍🏫',
    trend: 'up' as const,
    trendValue: 8,
  },
  {
    label: 'Total Siswa',
    value: '156',
    subtitle: 'Terdaftar aktif',
    icon: '👨‍👩‍👧‍👦',
    trend: 'up' as const,
    trendValue: 12,
  },
  {
    label: 'Rata-rata Kemajuan',
    value: '68%',
    subtitle: 'Sekolah keseluruhan',
    icon: '📈',
    trend: 'up' as const,
    trendValue: 5,
  },
  {
    label: 'Sinyal Intervensi',
    value: '18',
    subtitle: 'Siswa membutuhkan bantuan',
    icon: '⚠️',
    trend: 'down' as const,
    trendValue: 3,
  },
]

const chartData = [
  { name: 'Jan', multisensori: 55, pengetahuan: 45, keterampilan: 50 },
  { name: 'Feb', multisensori: 58, pengetahuan: 48, keterampilan: 53 },
  { name: 'Mar', multisensori: 62, pengetahuan: 52, keterampilan: 58 },
  { name: 'Apr', multisensori: 65, pengetahuan: 55, keterampilan: 61 },
  { name: 'May', multisensori: 68, pengetahuan: 58, keterampilan: 64 },
  { name: 'Jun', multisensori: 72, pengetahuan: 62, keterampilan: 68 },
]

const activities = [
  {
    id: '1',
    type: 'success' as const,
    title: 'Guru Baru Terdaftar',
    description: 'Ibu Siti Nurhaliza telah berhasil terdaftar dan siap mengajar Kelas 3B',
    timestamp: '2 jam yang lalu',
    icon: '✓',
  },
  {
    id: '2',
    type: 'info' as const,
    title: 'Kurikulum Diperbarui',
    description: 'Pilar Keterampilan telah didistribusikan ke 8 kelas untuk periode baru',
    timestamp: '5 jam yang lalu',
    icon: 'ℹ',
  },
  {
    id: '3',
    type: 'warning' as const,
    title: 'Sinyal Intervensi Baru',
    description: 'Andi (Kelas 2A) membutuhkan dukungan tambahan di Pilar Pengetahuan',
    timestamp: '1 hari yang lalu',
    icon: '⚠',
  },
  {
    id: '4',
    type: 'success' as const,
    title: 'Laporan Bulanan Selesai',
    description: 'Laporan Mei untuk semua 6 kelas telah dihasilkan dan tersedia',
    timestamp: '2 hari yang lalu',
    icon: '✓',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1A2B3C] mb-2">Dashboard Ringkasan</h1>
        <p className="text-gray-600">Ringkasan keseluruhan institusi dan metrik kinerja utama</p>
      </div>

      {/* KPI Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      {/* Charts and Activities Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A2B3C] mb-6">
              Tren Kemajuan Multisensori Sekolah
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
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
                <Bar dataKey="multisensori" fill="#47A38E" name="Multisensori" />
                <Bar dataKey="pengetahuan" fill="#C29C6D" name="Pengetahuan" />
                <Bar dataKey="keterampilan" fill="#5A8E8A" name="Keterampilan" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed - Takes up 1 column */}
        <ActivityFeed activities={activities} title="Aktivitas Terkini" />
      </div>
    </div>
  )
}
