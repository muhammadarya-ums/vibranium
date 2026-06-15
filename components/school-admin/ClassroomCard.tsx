interface ClassroomCardProps {
  classCode: string
  className: string
  studentCount: number
  teacherName: string
  progressPercent: number
  onClick?: () => void
}

export function ClassroomCard({
  classCode,
  className,
  studentCount,
  teacherName,
  progressPercent,
  onClick,
}: ClassroomCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
              {classCode}
            </p>
            <h3 className="text-lg font-bold text-[#1A2B3C]">{className}</h3>
          </div>
          <span className="inline-block px-3 py-1 bg-[#C29C6D] bg-opacity-10 text-[#C29C6D] text-xs font-semibold rounded-full">
            Aktif
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Jumlah Siswa</span>
          <span className="font-semibold text-[#1A2B3C]">{studentCount} siswa</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Guru Pengajar</span>
          <span className="font-semibold text-[#1A2B3C]">{teacherName}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-600">Rata-rata Kemajuan</span>
          <span className="text-sm font-bold text-[#47A38E]">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#47A38E] to-[#C29C6D]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  )
}
