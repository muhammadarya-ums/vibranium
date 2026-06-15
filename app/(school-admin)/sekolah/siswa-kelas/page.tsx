'use client'

import { useState } from 'react'
import { ClassroomCard } from '@/components/school-admin/ClassroomCard'
import { DataTable } from '@/components/school-admin/DataTable'

// Mock classroom data
const classrooms = [
  {
    id: '1a',
    classCode: 'KELAS-1A',
    className: 'Kelas 1A',
    studentCount: 12,
    teacherName: 'Siti Nurhaliza',
    progressPercent: 72,
  },
  {
    id: '1b',
    classCode: 'KELAS-1B',
    className: 'Kelas 1B',
    studentCount: 14,
    teacherName: 'Dewi Lestari',
    progressPercent: 68,
  },
  {
    id: '2a',
    classCode: 'KELAS-2A',
    className: 'Kelas 2A',
    studentCount: 11,
    teacherName: 'Eka Putri Wijaya',
    progressPercent: 75,
  },
  {
    id: '2b',
    classCode: 'KELAS-2B',
    className: 'Kelas 2B',
    studentCount: 13,
    teacherName: 'Ahmad Suryaman',
    progressPercent: 70,
  },
  {
    id: '3a',
    classCode: 'KELAS-3A',
    className: 'Kelas 3A',
    studentCount: 15,
    teacherName: 'Rudi Hartono',
    progressPercent: 78,
  },
  {
    id: '3b',
    classCode: 'KELAS-3B',
    className: 'Kelas 3B',
    studentCount: 12,
    teacherName: 'Siti Nurhaliza',
    progressPercent: 65,
  },
]

// Mock student roster
const studentRosterData = [
  {
    no: '1',
    nama: 'Andi Wijaya',
    orangTua: 'Budi Wijaya',
    sensorik: '👁️ Penglihatan, 👂 Pendengaran',
    error: 'Intervensi Pilar Pengetahuan',
  },
  {
    no: '2',
    nama: 'Bimo Sutrisno',
    orangTua: 'Sutrisno',
    sensorik: '👁️ Penglihatan',
    error: 'Normal',
  },
  {
    no: '3',
    nama: 'Citra Dewi',
    orangTua: 'Dewi Handoko',
    sensorik: '👂 Pendengaran',
    error: 'Intervensi Pilar Keterampilan',
  },
  {
    no: '4',
    nama: 'Dina Kusuma',
    orangTua: 'Kusuma Adi',
    sensorik: 'Motorik',
    error: 'Normal',
  },
  {
    no: '5',
    nama: 'Eka Santoso',
    orangTua: 'Santoso',
    sensorik: 'Tidak Ada',
    error: 'Normal',
  },
]

const studentColumns = [
  { key: 'no', label: 'No', width: 'w-12' },
  { key: 'nama', label: 'Nama Siswa' },
  { key: 'orangTua', label: 'Nama Orang Tua' },
  { key: 'sensorik', label: 'Flag Sensorik' },
  { key: 'error', label: 'Status' },
]

export default function SiswaKelasPage() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null)

  const selectedClassroom = classrooms.find((c) => c.id === selectedClass)

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1A2B3C] mb-2">Manajemen Siswa & Kelas</h1>
        <p className="text-gray-600">Kelola kelas, siswa, dan monitor progres pembelajaran</p>
      </div>

      {/* Classroom Grid */}
      <div>
        <h2 className="text-xl font-semibold text-[#1A2B3C] mb-4">Daftar Kelas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classrooms.map((classroom) => (
            <div
              key={classroom.id}
              onClick={() => setSelectedClass(classroom.id)}
              className={`transition-all ${
                selectedClass === classroom.id ? 'ring-2 ring-[#47A38E]' : ''
              }`}
            >
              <ClassroomCard {...classroom} onClick={() => setSelectedClass(classroom.id)} />
            </div>
          ))}
        </div>
      </div>

      {/* Student Roster - Shows when a class is selected */}
      {selectedClassroom && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1A2B3C]">
              Daftar Siswa - {selectedClassroom.className}
            </h2>
            <button
              onClick={() => setSelectedClass(null)}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              Tutup
            </button>
          </div>
          <DataTable
            columns={studentColumns}
            rows={studentRosterData}
            searchKey="nama"
            searchPlaceholder="Cari nama siswa..."
            actions={(row) => (
              <div className="flex gap-2">
                <button className="text-sm px-3 py-1 text-[#47A38E] hover:bg-teal-50 rounded transition-colors">
                  Edit
                </button>
                <button className="text-sm px-3 py-1 text-gray-600 hover:bg-gray-50 rounded transition-colors">
                  Detail
                </button>
              </div>
            )}
          />
        </div>
      )}
    </div>
  )
}
