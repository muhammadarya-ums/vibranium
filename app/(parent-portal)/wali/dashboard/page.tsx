'use client'

import { useState } from 'react'
import { EmotionIndicator } from '@/components/parent-portal/EmotionIndicator'

export default function DashboardPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<'happy' | 'neutral' | 'sad' | 'angry'>('happy')

  const emotions: Array<'happy' | 'neutral' | 'sad' | 'angry'> = ['happy', 'neutral', 'sad', 'angry']

  const activityFeed = [
    {
      id: 1,
      title: 'Menyelesaikan Pilar Pengetahuan',
      description: 'Modul Berhitung hingga 10',
      time: '09:30 AM',
      status: 'complete',
      progress: 100,
    },
    {
      id: 2,
      title: 'Sesi Pilar Keterampilan',
      description: 'Melukis dengan Air dan Cat',
      time: '10:45 AM',
      status: 'complete',
      progress: 100,
    },
    {
      id: 3,
      title: 'Istirahat dan Makan Siang',
      description: 'Waktu istirahat yang menyenangkan',
      time: '11:30 AM',
      status: 'complete',
      progress: 100,
    },
    {
      id: 4,
      title: 'Sesi Audio & Musik',
      description: 'Belajar mengenal irama musik',
      time: '1:00 PM',
      status: 'in-progress',
      progress: 60,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Hero Card */}
      <div className="bg-gradient-to-r from-[#47A38E] to-[#5A8E8A] text-white rounded-2xl p-8">
        <p className="text-lg opacity-90 mb-2">Selamat Pagi Ibu Siti,</p>
        <h1 className="text-4xl font-bold mb-2">Hari yang Baik untuk Adnan!</h1>
        <p className="text-lg opacity-90">
          Berikut adalah ringkasan perkembangan anak Anda hari ini di SahabatAjar SLB.
        </p>
      </div>

      {/* Emotion Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Today's Mood */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6">Bagaimana Perasaan Adnan Hari Ini?</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {emotions.map((emotion) => (
              <button
                key={emotion}
                onClick={() => setSelectedEmotion(emotion)}
                className={`p-4 rounded-2xl transition-all ${
                  selectedEmotion === emotion
                    ? 'ring-4 ring-[#47A38E] scale-105'
                    : 'opacity-60 hover:opacity-90'
                }`}
              >
                <div className="text-4xl mb-2">
                  {emotion === 'happy' && '😊'}
                  {emotion === 'neutral' && '😐'}
                  {emotion === 'sad' && '😔'}
                  {emotion === 'angry' && '😠'}
                </div>
                <p className="text-sm font-medium">
                  {emotion === 'happy' && 'Senang'}
                  {emotion === 'neutral' && 'Biasa Saja'}
                  {emotion === 'sad' && 'Sedih'}
                  {emotion === 'angry' && 'Kesal'}
                </p>
              </button>
            ))}
          </div>

          <button className="w-full bg-[#47A38E] text-white font-bold py-3 rounded-lg hover:bg-[#3a8a78] transition-colors">
            Catat Perasaan
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Terakhir diperbarui: 08:45 AM
          </p>
        </div>

        {/* Current Emotion Display */}
        <div className="flex justify-center">
          <EmotionIndicator emotion={selectedEmotion} timestamp="Hari ini, 08:45 AM" />
        </div>
      </div>

      {/* Activity Feed & Teacher Message */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6">Aktivitas Hari Ini</h2>

          <div className="space-y-4">
            {activityFeed.map((activity) => (
              <div key={activity.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <div className="text-3xl flex-shrink-0">
                  {activity.status === 'complete' ? '✅' : '⏳'}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-[#1A2B3C]">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>

                  <div className="mt-2 flex items-center gap-4">
                    {/* Progress Bar */}
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          activity.status === 'complete' ? 'bg-[#47A38E]' : 'bg-[#C29C6D]'
                        }`}
                        style={{ width: `${activity.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 flex-shrink-0">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Message Highlight */}
        <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFE4B5] rounded-2xl p-8 border-2 border-[#C29C6D]">
          <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">Pesan dari Guru</h2>

          <div className="bg-white rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-700">
              "Hari ini Adnan sangat bersemangat dalam sesi Pilar Pengetahuan. Dia sudah menguasai konsep berhitung hingga 10 dengan sempurna! Terus motivasi di rumah ya, Bu."
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="text-3xl">👩‍🏫</div>
            <div>
              <p className="font-semibold text-[#1A2B3C]">Ibu Fatimah</p>
              <p className="text-xs text-gray-600">Guru Pilar Pengetahuan</p>
            </div>
          </div>

          <button className="w-full bg-[#1A2B3C] text-white font-bold py-2 rounded-lg hover:bg-[#0F1820] transition-colors">
            Balas Pesan
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center">
          <p className="text-4xl font-bold text-[#47A38E]">4</p>
          <p className="text-gray-600 font-medium">Aktivitas Selesai</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center">
          <p className="text-4xl font-bold text-[#C29C6D]">1</p>
          <p className="text-gray-600 font-medium">Sedang Berlangsung</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 text-center">
          <p className="text-4xl font-bold text-[#5A8E8A]">5h 30m</p>
          <p className="text-gray-600 font-medium">Waktu Belajar</p>
        </div>
      </div>
    </div>
  )
}
