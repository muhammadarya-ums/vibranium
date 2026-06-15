interface ActivityCardProps {
  title: string
  description: string
  duration: string
  icon: string
  completed?: boolean
  onComplete?: () => void
}

export function ActivityCard({
  title,
  description,
  duration,
  icon,
  completed = false,
  onComplete,
}: ActivityCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#47A38E] transition-colors">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-[#1A2B3C] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">⏱️</span>
          <span className="text-sm text-gray-600">{duration}</span>
        </div>

        {onComplete && (
          <button
            onClick={onComplete}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              completed
                ? 'bg-[#47A38E] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {completed ? '✓ Selesai' : 'Tandai Selesai'}
          </button>
        )}
      </div>
    </div>
  )
}
