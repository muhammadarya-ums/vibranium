'use client'

import { useState } from 'react'

// Mock data
const assets = [
  { id: 'pengetahuan', label: 'Pilar Pengetahuan', icon: '📚', count: 24 },
  { id: 'keterampilan', label: 'Pilar Keterampilan', icon: '🎨', count: 18 },
]

const classrooms = [
  'Kelas 1A',
  'Kelas 1B',
  'Kelas 2A',
  'Kelas 2B',
  'Kelas 3A',
  'Kelas 3B',
]

export default function KurikulumPage() {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [speedLevel, setSpeedLevel] = useState('normal')
  const [audioNarrator, setAudioNarrator] = useState(true)
  const [visualContrast, setVisualContrast] = useState('normal')

  const toggleAsset = (id: string) => {
    setSelectedAssets((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const toggleClass = (className: string) => {
    setSelectedClasses((prev) =>
      prev.includes(className)
        ? prev.filter((c) => c !== className)
        : [...prev, className]
    )
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1A2B3C] mb-2">Distribusi Kurikulum & Pilar</h1>
        <p className="text-gray-600">Distribusikan aset kurikulum ke kelas dengan konfigurasi batch</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Assets */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A2B3C] mb-4">Aset Tersedia</h3>
            <div className="space-y-3">
              {assets.map((asset) => (
                <label
                  key={asset.id}
                  className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#47A38E] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedAssets.includes(asset.id)}
                    onChange={() => toggleAsset(asset.id)}
                    className="w-5 h-5 rounded"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-[#1A2B3C]">
                      {asset.icon} {asset.label}
                    </p>
                    <p className="text-xs text-gray-500">{asset.count} modul</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column: Classes & Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Destination Classes */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A2B3C] mb-4">
              Tujuan Distribusi (Kelas)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {classrooms.map((classroom) => (
                <label
                  key={classroom}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#47A38E] transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedClasses.includes(classroom)}
                    onChange={() => toggleClass(classroom)}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm font-medium text-[#1A2B3C]">{classroom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Batch Configuration */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#1A2B3C] mb-6">Konfigurasi Batch</h3>
            <div className="space-y-6">
              {/* Speed Level */}
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-3">
                  Tingkat Kecepatan Pembelajaran
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={speedLevel === 'slow' ? '1' : speedLevel === 'normal' ? '3' : '5'}
                    onChange={(e) => {
                      const val = e.target.value
                      setSpeedLevel(val === '1' ? 'slow' : val === '3' ? 'normal' : 'fast')
                    }}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium text-[#1A2B3C] w-20">
                    {speedLevel === 'slow'
                      ? 'Lambat'
                      : speedLevel === 'normal'
                        ? 'Normal'
                        : 'Cepat'}
                  </span>
                </div>
              </div>

              {/* Audio Narrator Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <label className="text-sm font-semibold text-[#1A2B3C]">
                  Aktifkan Narator Audio
                </label>
                <input
                  type="checkbox"
                  checked={audioNarrator}
                  onChange={(e) => setAudioNarrator(e.target.checked)}
                  className="w-5 h-5 rounded"
                />
              </div>

              {/* Visual Contrast */}
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-3">
                  Kontras Visual
                </label>
                <select
                  value={visualContrast}
                  onChange={(e) => setVisualContrast(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                >
                  <option value="normal">Normal</option>
                  <option value="high">Tinggi</option>
                  <option value="maximum">Maksimum (WCAG AAA)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Batalkan
            </button>
            <button
              disabled={selectedAssets.length === 0 || selectedClasses.length === 0}
              className="flex-1 px-6 py-3 bg-[#47A38E] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Terapkan ke {selectedClasses.length} Kelas
            </button>
          </div>
        </div>
      </div>

      {/* Status Info */}
      {selectedAssets.length > 0 && selectedClasses.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            Siap mendistribusikan{' '}
            <strong>
              {selectedAssets.map((id) => assets.find((a) => a.id === id)?.label).join(', ')}
            </strong>{' '}
            ke <strong>{selectedClasses.length} kelas</strong> dengan konfigurasi:{' '}
            <strong>
              {speedLevel}, Audio {audioNarrator ? 'Aktif' : 'Nonaktif'}, Kontras {visualContrast}
            </strong>
          </p>
        </div>
      )}
    </div>
  )
}
