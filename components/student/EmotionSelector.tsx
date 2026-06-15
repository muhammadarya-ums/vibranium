'use client'

import { useState } from 'react'

interface EmotionSelectorProps {
  onSelect?: (emotion: 'happy' | 'neutral' | 'sad' | 'angry') => void
}

const emotions = [
  { id: 'happy', emoji: '😄', label: 'Senang', color: '#FFD93D' },
  { id: 'neutral', emoji: '😐', label: 'Biasa Saja', color: '#FFA500' },
  { id: 'sad', emoji: '😔', label: 'Sedih', color: '#D4A574' },
  { id: 'angry', emoji: '😠', label: 'Kesal', color: '#E74C3C' },
]

export function EmotionSelector({ onSelect }: EmotionSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (emotionId: string) => {
    setSelected(emotionId)
    onSelect?.(emotionId as 'happy' | 'neutral' | 'sad' | 'angry')
  }

  return (
    <div className="w-full">
      <p className="text-lg font-bold text-[#1A2B3C] mb-6 text-center">
        Bagaimana perasaanmu hari ini?
      </p>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            onClick={() => handleSelect(emotion.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 transform ${
              selected === emotion.id
                ? 'ring-4 ring-[#1A2B3C] scale-110'
                : 'hover:scale-105 bg-white border-2 border-gray-200'
            }`}
            style={{
              borderColor: selected === emotion.id ? emotion.color : undefined,
            }}
            aria-label={emotion.label}
            aria-pressed={selected === emotion.id}
          >
            <span className="text-5xl">{emotion.emoji}</span>
            <span className="text-xs font-medium text-[#1A2B3C]">
              {emotion.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
