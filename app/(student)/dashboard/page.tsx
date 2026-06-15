'use client'

import { useState } from 'react'
import { EmotionSelector } from '@/components/student/EmotionSelector'
import { PillarCard } from '@/components/student/PillarCard'
import Image from 'next/image'

export default function StudentDashboard() {
  const [emotion, setEmotion] = useState<'happy' | 'neutral' | 'sad' | 'angry' | null>(null)
  const studentName = 'Andi' // This would come from user context/session

  const handleEmotionSelect = (selectedEmotion: 'happy' | 'neutral' | 'sad' | 'angry') => {
    setEmotion(selectedEmotion)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Greeting Section */}
      <section className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-2">
            Halo, {studentName}! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Bagaimana perasaanmu hari ini?
          </p>
        </div>
      </section>

      {/* Emotion Selector */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <EmotionSelector onSelect={handleEmotionSelect} />
        </div>
      </section>

      {/* Pillar Selection */}
      {emotion && (
        <section className="py-12 md:py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C] mb-10 text-center">
              Pilih Pilar Pembelajaran
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pilar Pengetahuan */}
              <PillarCard
                title="Pilar Pengetahuan"
                description="Ayo Belajar Hal Baru!"
                href="/pilar/pengetahuan"
                imageSrc="/images/pilar-pengetahuan.png"
                bgColor="bg-[#C29C6D]"
              />

              {/* Pilar Keterampilan */}
              <PillarCard
                title="Pilar Keterampilan"
                description="Latih Tangan Hebatmu!"
                href="/pilar/keterampilan"
                imageSrc="/images/pilar-keterampilan.png"
                bgColor="bg-[#47A38E]"
              />
            </div>
          </div>
        </section>
      )}

      {/* Placeholder for when no emotion is selected */}
      {!emotion && (
        <section className="py-12 text-center">
          <p className="text-gray-500 text-lg">
            Pilih emosi kamu untuk melanjutkan pembelajaran
          </p>
        </section>
      )}
    </div>
  )
}
