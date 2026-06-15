'use client'

import { useState } from 'react'

interface QuizOption {
  label: 'A' | 'B' | 'C'
  description: string
  image?: string
}

interface QuizCardProps {
  question: string
  options: QuizOption[]
  onAnswer?: (option: 'A' | 'B' | 'C') => void
}

export function QuizCard({ question, options, onAnswer }: QuizCardProps) {
  const [selected, setSelected] = useState<'A' | 'B' | 'C' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (option: 'A' | 'B' | 'C') => {
    if (!submitted) {
      setSelected(option)
    }
  }

  const handleSubmit = () => {
    if (selected) {
      setSubmitted(true)
      onAnswer?.(selected)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A2B3C] text-center">
          {question}
        </h2>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleSelect(option.label)}
            disabled={submitted}
            className={`flex flex-col items-center gap-4 p-6 rounded-xl border-4 transition-all duration-200 ${
              selected === option.label
                ? 'border-[#C29C6D] bg-[#C29C6D] bg-opacity-10 ring-2 ring-[#C29C6D]'
                : 'border-gray-300 bg-white hover:border-[#C29C6D]'
            } ${submitted ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
            aria-label={`Option ${option.label}`}
            aria-pressed={selected === option.label}
          >
            {/* Option Header with Label */}
            <div className="w-full bg-[#C29C6D] text-white font-bold py-2 rounded-lg text-center">
              Opsi {option.label}
            </div>

            {/* Image or Icon Placeholder */}
            {option.image ? (
              <img
                src={option.image}
                alt={option.description}
                className="h-20 object-contain"
              />
            ) : (
              <div className="h-20 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar</span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-[#1A2B3C] font-medium text-center">
              {option.description}
            </p>
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!selected || submitted}
          className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
            !selected || submitted
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#1A2B3C] text-white hover:bg-[#0F1820]'
          }`}
        >
          {submitted ? 'Selesai!' : 'Cek Jawaban!'}
        </button>
      </div>
    </div>
  )
}
