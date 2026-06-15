interface MetricCardProps {
  label: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'stable'
  trendValue?: number
}

export function MetricCard({
  label,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">{label}</p>
          <p className="text-3xl font-bold text-[#1A2B3C] mb-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        {icon && <div className="text-3xl opacity-20">{icon}</div>}
      </div>

      {trend && trendValue !== undefined && (
        <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${
          trend === 'up'
            ? 'text-green-600'
            : trend === 'down'
              ? 'text-red-600'
              : 'text-gray-600'
        }`}>
          {trend === 'up' && '↑'}
          {trend === 'down' && '↓'}
          {trend === 'stable' && '→'}
          <span>{Math.abs(trendValue)}% dari bulan lalu</span>
        </div>
      )}
    </div>
  )
}
