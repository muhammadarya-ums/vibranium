'use client'

import { useState } from 'react'

export default function MateriPage() {
  const [selectedStudent, setSelectedStudent] = useState('andi')
  const [selectedSubPilar, setSelectedSubPilar] = useState('angka')
  const [useStandardMaterial, setUseStandardMaterial] = useState(true)
  const [customMaterial, setCustomMaterial] = useState('')
  const [speed, setSpeed] = useState(50)
  const [complexity, setComplexity] = useState(50)
  const [brailleEnabled, setBrailleEnabled] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [visualCuesEnabled, setVisualCuesEnabled] = useState(true)

  const students = [
    { id: 'andi', name: 'Andi Pratama' },
    { id: 'siti', name: 'Siti Nurhaliza' },
    { id: 'budi', name: 'Budi Santoso' },
  ]

  const subPilars = [
    { id: 'angka', name: 'Mengenal Angka' },
    { id: 'warna', name: 'Mengenal Warna' },
    { id: 'bentuk', name: 'Mengenal Bentuk' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="border-b border-gray-200 bg-white px-8 py-6">
        <h1 className="text-3xl font-bold text-[#1A2B3C]">Kustomisasi Materi</h1>
        <p className="text-gray-600 mt-2">
          Sesuaikan materi pembelajaran untuk setiap siswa
        </p>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-4xl">
          {/* Student Selection */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <label className="block text-lg font-bold text-[#1A2B3C] mb-3">
              Pilih Siswa
            </label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E]"
            >
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sub-Pilar Selection */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <label className="block text-lg font-bold text-[#1A2B3C] mb-3">
              Sub-Pilar Pembelajaran
            </label>
            <select
              value={selectedSubPilar}
              onChange={(e) => setSelectedSubPilar(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E]"
            >
              {subPilars.map((subPilar) => (
                <option key={subPilar.id} value={subPilar.id}>
                  {subPilar.name}
                </option>
              ))}
            </select>
          </div>

          {/* Material Selection */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <label className="text-lg font-bold text-[#1A2B3C]">
                Gunakan Materi Standar
              </label>
              <button
                onClick={() => setUseStandardMaterial(!useStandardMaterial)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  useStandardMaterial ? 'bg-[#47A38E]' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={useStandardMaterial}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    useStandardMaterial ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {!useStandardMaterial && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Materi Kustom
                </label>
                <textarea
                  value={customMaterial}
                  onChange={(e) => setCustomMaterial(e.target.value)}
                  placeholder="Masukkan materi kustom untuk siswa ini..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-[#1A2B3C] focus:outline-none focus:border-[#47A38E] min-h-32"
                />
              </div>
            )}
          </div>

          {/* Speed and Complexity Sliders */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Speed Slider */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <label className="block text-lg font-bold text-[#1A2B3C] mb-4">
                Kecepatan Pembelajaran
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-[#47A38E]"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Lambat</span>
                <span className="font-bold text-[#1A2B3C]">{speed}%</span>
                <span>Cepat</span>
              </div>
            </div>

            {/* Complexity Slider */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <label className="block text-lg font-bold text-[#1A2B3C] mb-4">
                Tingkat Kesulitan
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="w-full accent-[#47A38E]"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Mudah</span>
                <span className="font-bold text-[#1A2B3C]">{complexity}%</span>
                <span>Sulit</span>
              </div>
            </div>
          </div>

          {/* Accessibility Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-lg font-bold text-[#1A2B3C] mb-6">
              Pengaturan Aksesibilitas
            </h3>

            <div className="space-y-4">
              {/* Braille Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="font-medium text-[#1A2B3C]">
                    Output Braille
                  </label>
                  <p className="text-sm text-gray-600">
                    Tampilkan output dalam format Braille
                  </p>
                </div>
                <button
                  onClick={() => setBrailleEnabled(!brailleEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    brailleEnabled ? 'bg-[#47A38E]' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={brailleEnabled}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      brailleEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Audio Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="font-medium text-[#1A2B3C]">
                    Narator Audio
                  </label>
                  <p className="text-sm text-gray-600">
                    Aktifkan narator audio untuk membaca materi
                  </p>
                </div>
                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    audioEnabled ? 'bg-[#47A38E]' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={audioEnabled}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      audioEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Visual Cues Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="font-medium text-[#1A2B3C]">
                    Visual Cues
                  </label>
                  <p className="text-sm text-gray-600">
                    Tampilkan isyarat visual untuk membantu pemahaman
                  </p>
                </div>
                <button
                  onClick={() => setVisualCuesEnabled(!visualCuesEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    visualCuesEnabled ? 'bg-[#47A38E]' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={visualCuesEnabled}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      visualCuesEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-[#47A38E] text-white font-bold rounded-lg hover:bg-teal-700 transition-colors">
              Simpan Pengaturan
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-[#1A2B3C] font-bold rounded-lg hover:bg-gray-50 transition-colors">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
