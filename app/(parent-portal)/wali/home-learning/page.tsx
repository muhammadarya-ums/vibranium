'use client'

import { useState } from 'react'
import { ActivityCard } from '@/components/parent-portal/ActivityCard'

export default function HomeLearningPage() {
  const [completedActivities, setCompletedActivities] = useState<number[]>([])

  const activities = [
    {
      id: 1,
      title: 'Mendengarkan Musik',
      description:
        'Putar lagu anak favorit dan minta Adnan menyebutkan instrumen yang didengar. Gunakan musik yang cerah dan menyenangkan.',
      duration: '15 menit',
      icon: '🎵',
      category: 'Pendengaran',
    },
    {
      id: 2,
      title: 'Bermain dengan Warna',
      description:
        'Tunjukkan berbagai warna dan minta Adnan menunjuk warna yang Anda sebutkan. Bisa menggunakan mainan, kertas, atau barang rumah tangga.',
      duration: '20 menit',
      icon: '🎨',
      category: 'Visual',
    },
    {
      id: 3,
      title: 'Latihan Motorik Halus',
      description:
        'Bantu Adnan menuang air dari satu gelas ke gelas lain, atau praktikkan meremas dan melepas mainan karet. Aktivitas ini membangun kontrol motor.',
      duration: '15 menit',
      icon: '🤲',
      category: 'Motor',
    },
    {
      id: 4,
      title: 'Bermain Tebak Suara',
      description:
        'Buat suara berbeda (menggosok, menepuk, mencubit) tanpa menunjukkan sumbernya dan minta anak menebak. Kesenangan sambil belajar!',
      duration: '10 menit',
      icon: '🔊',
      category: 'Pendengaran',
    },
    {
      id: 5,
      title: 'Bentuk dan Tekstur',
      description:
        'Kumpulkan barang dengan tekstur berbeda (soft, kasar, halus) dan biarkan anak menjelajahi dengan tangan dan mulut (jika aman).',
      duration: '20 menit',
      icon: '🧩',
      category: 'Motor',
    },
    {
      id: 6,
      title: 'Cerita Bergambar',
      description:
        'Baca buku bergambar dengan ekspresi dan intonasi yang menyenangkan. Tunjuk gambar dan ceritakan apa yang terjadi dengan antusias.',
      duration: '15 menit',
      icon: '📖',
      category: 'Visual',
    },
  ]

  const handleComplete = (id: number) => {
    if (completedActivities.includes(id)) {
      setCompletedActivities(completedActivities.filter((item) => item !== id))
    } else {
      setCompletedActivities([...completedActivities, id])
    }
  }

  const completionRate = Math.round((completedActivities.length / activities.length) * 100)

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#1A2B3C] mb-2">Panduan Belajar di Rumah</h1>
        <p className="text-gray-600">
          Aktivitas interaktif yang dapat dilakukan bersama Adnan untuk memperkuat pembelajaran multisensori di rumah.
        </p>
      </div>

      {/* Progress Summary */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#1A2B3C]">Aktivitas Hari Ini</h2>
          <p className="text-3xl font-bold text-[#47A38E]">{completionRate}%</p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full bg-[#47A38E] transition-all duration-300"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          {completedActivities.length} dari {activities.length} aktivitas telah diselesaikan
        </p>
      </div>

      {/* Filter Tabs (Optional but helpful for parents) */}
      <div className="flex gap-4 flex-wrap">
        <button className="px-6 py-2 bg-[#47A38E] text-white rounded-full font-medium hover:bg-[#3a8a78] transition-colors">
          Semua Aktivitas
        </button>
        <button className="px-6 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors">
          Pendengaran
        </button>
        <button className="px-6 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors">
          Visual
        </button>
        <button className="px-6 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors">
          Motor
        </button>
      </div>

      {/* Activity Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`opacity-100 transition-opacity ${
              completedActivities.includes(activity.id) ? 'opacity-75' : ''
            }`}
          >
            <ActivityCard
              title={activity.title}
              description={activity.description}
              duration={activity.duration}
              icon={activity.icon}
              completed={completedActivities.includes(activity.id)}
              onComplete={() => handleComplete(activity.id)}
            />
            <p className="text-xs text-gray-500 mt-2 text-center font-medium">{activity.category}</p>
          </div>
        ))}
      </div>

      {/* Tips Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
        <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">Tips dari Tim Ahli</h2>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <p className="font-semibold text-[#1A2B3C] mb-1">Ciptakan Rutinitas</p>
              <p className="text-gray-700">
                Lakukan aktivitas pada waktu yang sama setiap hari agar Adnan terbiasa dan siap belajar.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">😊</div>
            <div>
              <p className="font-semibold text-[#1A2B3C] mb-1">Buat Suasana Menyenangkan</p>
              <p className="text-gray-700">
                Berikan pujian dan penghargaan kecil untuk setiap upaya. Belajar harus terasa seperti bermain!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">🔄</div>
            <div>
              <p className="font-semibold text-[#1A2B3C] mb-1">Ulangi dan Variasikan</p>
              <p className="text-gray-700">
                Ulangi aktivitas favorit tetapi dengan variasi berbeda untuk menjaga minat anak tetap tinggi.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">⏰</div>
            <div>
              <p className="font-semibold text-[#1A2B3C] mb-1">Hormati Ritme Anak</p>
              <p className="text-gray-700">
                Jika anak terlihat lelah atau tidak tertarik, hentikan sementara dan coba lagi nanti. Tidak ada paksaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
