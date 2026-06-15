'use client'

import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { ProgressBar } from '@/components/student/ProgressBar'
import { QuizCard } from '@/components/student/QuizCard'

// Mock data for different pilars
const pillarData: Record<string, any> = {
  pengetahuan: {
    title: 'Pilar Pengetahuan',
    description: 'Ayo berhitung! Temukan 3 apel di bawah ini?',
    progress: 50,
    question: 'pilih manakah gambar yang isinya 3 apel?',
    options: [
      {
        label: 'A' as const,
        description: 'gambar 1 apel (warna kontraas)',
        image: undefined,
      },
      {
        label: 'B' as const,
        description: 'gambar 1 apel (warna kontraas)',
        image: undefined,
      },
      {
        label: 'C' as const,
        description: 'gambar 1 apel (warna kontraas)',
        image: undefined,
      },
    ],
  },
  keterampilan: {
    title: 'Pilar Keterampilan',
    description: 'Latih Tangan Hebatmu!',
    progress: 30,
    question: 'Pilih warna apa yang ada di gambar berikut?',
    options: [
      {
        label: 'A' as const,
        description: 'Warna Merah',
        image: undefined,
      },
      {
        label: 'B' as const,
        description: 'Warna Biru',
        image: undefined,
      },
      {
        label: 'C' as const,
        description: 'Warna Hijau',
        image: undefined,
      },
    ],
  },
}

export default function PilarPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const pilar = pillarData[slug] || pillarData.pengetahuan

  const handleAnswer = (option: 'A' | 'B' | 'C') => {
    console.log('Answer selected:', option)
    // Handle answer submission and move to next question
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header with Progress */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-[#1A2B3C] hover:text-[#47A38E] transition-colors font-medium"
            >
              <ChevronLeft className="h-5 w-5" />
              Kembali
            </button>

            <div className="bg-[#1A2B3C] text-white px-6 py-2 rounded-full font-bold text-sm">
              Progress Bar: {pilar.progress}%
            </div>
          </div>

          <ProgressBar percentage={pilar.progress} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Question Section */}
        <section className="mb-12">
          <h2 className="text-center text-xl md:text-2xl font-bold text-[#1A2B3C] mb-12">
            {pilar.question}
          </h2>

          {/* Quiz Card */}
          <QuizCard
            question={pilar.question}
            options={pilar.options}
            onAnswer={handleAnswer}
          />
        </section>
      </div>
    </div>
  )
}
