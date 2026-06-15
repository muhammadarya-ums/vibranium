'use client'

import { ProgressChart } from '@/components/parent-portal/ProgressChart'

export default function ProgressPage() {
  const errorAnalysis = [
    {
      id: 1,
      challenge: 'Kesulitan fokus pada tugas visual yang panjang',
      suggestion: 'Coba bagi aktivitas menjadi sesi 10-15 menit dengan istirahat singkat di antaranya.',
      severity: 'high',
      icon: '👁️',
    },
    {
      id: 2,
      challenge: 'Kurang percaya diri saat menjawab pertanyaan lisan',
      suggestion: 'Dorong anak untuk bercerita tentang hari mereka dan puji setiap usaha komunikasi.',
      severity: 'medium',
      icon: '🗣️',
    },
    {
      id: 3,
      challenge: 'Membutuhkan waktu transisi lebih lama antar aktivitas',
      suggestion: 'Berikan peringatan 5 menit sebelum berpindah ke aktivitas baru untuk persiapan mental.',
      severity: 'low',
      icon: '⏱️',
    },
  ]

  const milestones = [
    {
      skill: 'Pendengaran',
      current: 68,
      baseline: 40,
      emoji: '👂',
      color: 'bg-[#47A38E]',
    },
    {
      skill: 'Visual',
      current: 62,
      baseline: 30,
      emoji: '👁️',
      color: 'bg-[#C29C6D]',
    },
    {
      skill: 'Motor',
      current: 65,
      baseline: 35,
      emoji: '🤲',
      color: 'bg-[#5A8E8A]',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#1A2B3C] mb-2">Rapor & Tren Belajar</h1>
        <p className="text-gray-600">
          Analisis mendalam tentang perkembangan pembelajaran multisensori Adnan selama 6 minggu terakhir.
        </p>
      </div>

      {/* Progress Chart */}
      <ProgressChart />

      {/* Milestone Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((milestone) => (
          <div
            key={milestone.skill}
            className="bg-white rounded-2xl p-8 border-2 border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Kemampuan</p>
                <p className="text-2xl font-bold text-[#1A2B3C]">{milestone.skill}</p>
              </div>
              <div className="text-4xl">{milestone.emoji}</div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Skor Saat Ini</p>
              <p className="text-3xl font-bold">{milestone.current}%</p>
              <p className="text-xs text-gray-500 mt-1">
                Peningkatan dari {milestone.baseline}% (baseline)
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full ${milestone.color} transition-all`}
                style={{ width: `${milestone.current}%` }}
              ></div>
            </div>

            <p className="text-sm text-green-600 font-semibold mt-4">
              ▲ {milestone.current - milestone.baseline}% peningkatan
            </p>
          </div>
        ))}
      </div>

      {/* Error Analysis & Suggestions */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6">Tantangan & Saran Pembelajaran</h2>

        <div className="space-y-4">
          {errorAnalysis.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border-2 ${
                item.severity === 'high'
                  ? 'bg-red-50 border-red-200'
                  : item.severity === 'medium'
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-green-50 border-green-200'
              }`}
            >
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1A2B3C] mb-2">{item.challenge}</h3>
                  <p className="text-gray-700 mb-3">{item.suggestion}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        item.severity === 'high'
                          ? 'bg-red-200 text-red-800'
                          : item.severity === 'medium'
                            ? 'bg-yellow-200 text-yellow-800'
                            : 'bg-green-200 text-green-800'
                      }`}
                    >
                      {item.severity === 'high'
                        ? 'Perlu Perhatian Khusus'
                        : item.severity === 'medium'
                          ? 'Monitoring'
                          : 'Minor'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Card */}
      <div className="bg-gradient-to-r from-[#47A38E] to-[#5A8E8A] text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ingin Berbicara Langsung dengan Guru?</h2>
        <p className="mb-6 text-lg opacity-90">
          Jadwalkan konsultasi 1-on-1 dengan tim pengajar Adnan untuk diskusi lebih mendalam tentang strategi pembelajaran.
        </p>
        <button className="bg-white text-[#47A38E] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Jadwalkan Konsultasi
        </button>
      </div>
    </div>
  )
}
