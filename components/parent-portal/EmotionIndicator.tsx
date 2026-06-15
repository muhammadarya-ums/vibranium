interface EmotionIndicatorProps {
  emotion: 'happy' | 'neutral' | 'sad' | 'angry'
  timestamp: string
}

const emotionConfig = {
  happy: { emoji: '😊', label: 'Senang', color: 'bg-yellow-100', textColor: 'text-yellow-700' },
  neutral: { emoji: '😐', label: 'Biasa Saja', color: 'bg-orange-100', textColor: 'text-orange-700' },
  sad: { emoji: '😔', label: 'Sedih', color: 'bg-amber-100', textColor: 'text-amber-700' },
  angry: { emoji: '😠', label: 'Kesal', color: 'bg-red-100', textColor: 'text-red-700' },
}

export function EmotionIndicator({ emotion, timestamp }: EmotionIndicatorProps) {
  const config = emotionConfig[emotion]

  return (
    <div className={`${config.color} ${config.textColor} rounded-lg p-4 text-center`}>
      <div className="text-4xl mb-2">{config.emoji}</div>
      <p className="font-semibold">{config.label}</p>
      <p className="text-xs opacity-75">{timestamp}</p>
    </div>
  )
}
