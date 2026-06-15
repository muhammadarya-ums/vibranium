interface Activity {
  id: string
  type: 'success' | 'warning' | 'info'
  title: string
  description: string
  timestamp: string
  icon: string
}

interface ActivityFeedProps {
  activities: Activity[]
  title?: string
}

export function ActivityFeed({ activities, title = 'Aktivitas Terkini' }: ActivityFeedProps) {
  const typeColors = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-[#1A2B3C]">{title}</h3>
      </div>

      {/* Activity List */}
      <div className="divide-y divide-gray-200">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex gap-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                    typeColors[activity.type]
                  }`}
                >
                  {activity.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-[#1A2B3C]">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{activity.timestamp}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">Tidak ada aktivitas</div>
        )}
      </div>
    </div>
  )
}
