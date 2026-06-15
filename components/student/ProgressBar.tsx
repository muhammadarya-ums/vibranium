interface ProgressBarProps {
  percentage: number
  label?: string
}

export function ProgressBar({ percentage, label }: ProgressBarProps) {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100)

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden border-2 border-[#1A2B3C]">
        <div
          className="h-full bg-[#C29C6D] transition-all duration-300 ease-out flex items-center justify-center"
          style={{ width: `${normalizedPercentage}%` }}
        >
          {normalizedPercentage > 20 && (
            <span className="text-xs font-bold text-[#1A2B3C]">
              {normalizedPercentage}%
            </span>
          )}
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-[#1A2B3C] min-w-fit">
          {label}
        </span>
      )}
    </div>
  )
}
