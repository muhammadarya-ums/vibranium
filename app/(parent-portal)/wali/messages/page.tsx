'use client'

import { useState } from 'react'

export default function MessagesPage() {
  const [messageInput, setMessageInput] = useState('')
  const [showConsultationModal, setShowConsultationModal] = useState(false)

  const messages = [
    {
      id: 1,
      sender: 'Ibu Fatimah',
      role: 'Guru Pilar Pengetahuan',
      timestamp: 'Hari ini, 14:30',
      content:
        'Selamat siang Ibu Siti! Saya ingin membagikan kabar baik - Adnan hari ini berhasil menguasai konsep berhitung hingga 20! Dia sangat antusias dan mau mencoba lagi. Bagus sekali!',
      avatar: '👩‍🏫',
      isTeacher: true,
    },
    {
      id: 2,
      sender: 'Anda',
      role: 'Orang Tua',
      timestamp: 'Hari ini, 15:15',
      content: 'Terima kasih Bu Fatimah! Kami sangat bangga dengannya. Akan kami terus motivasi di rumah juga.',
      avatar: '👤',
      isTeacher: false,
    },
    {
      id: 3,
      sender: 'Pak Ahmad',
      role: 'Guru Pilar Keterampilan',
      timestamp: 'Kemarin, 16:45',
      content:
        'Bu Siti, saya mencatat bahwa Adnan mulai menunjukkan minat pada aktivitas seni rupa. Saya menyarankan di rumah juga diberikan kesempatan untuk melukis atau menggambar bebas.',
      avatar: '👨‍🏫',
      isTeacher: true,
    },
  ]

  const consultationSchedule = [
    {
      id: 1,
      teacher: 'Ibu Fatimah',
      date: 'Rabu, 20 Desember 2024',
      time: '14:00 - 14:45',
      status: 'scheduled',
      icon: '👩‍🏫',
    },
    {
      id: 2,
      teacher: 'Pak Ahmad',
      date: 'Jumat, 22 Desember 2024',
      time: '15:00 - 15:45',
      status: 'scheduled',
      icon: '👨‍🏫',
    },
  ]

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle message sending
      setMessageInput('')
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#1A2B3C] mb-2">Pesan & Konsultasi</h1>
        <p className="text-gray-600">
          Berkomunikasi dengan guru dan jadwalkan konsultasi untuk membahas perkembangan Adnan.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Area (Left 2/3) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border-2 border-gray-200 flex flex-col h-96 lg:h-auto">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isTeacher ? '' : 'justify-end'}`}>
                <div className={`flex gap-3 max-w-sm ${msg.isTeacher ? '' : 'flex-row-reverse'}`}>
                  <div className="text-3xl flex-shrink-0">{msg.avatar}</div>

                  <div className={msg.isTeacher ? '' : ''}>
                    <div className={`rounded-2xl p-4 ${msg.isTeacher ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <p className="text-sm font-semibold text-[#1A2B3C] mb-1">{msg.sender}</p>
                      <p className="text-gray-700">{msg.content}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">{msg.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ketik pesan Anda..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#47A38E]"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#47A38E] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#3a8a78] transition-colors"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>

        {/* Consultation Schedule (Right 1/3) */}
        <div className="space-y-6">
          {/* Upcoming Consultations */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <h2 className="text-xl font-bold text-[#1A2B3C] mb-4">Jadwal Konsultasi</h2>

            <div className="space-y-3">
              {consultationSchedule.map((consultation) => (
                <div key={consultation.id} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{consultation.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#1A2B3C] text-sm">{consultation.teacher}</p>
                      <p className="text-xs text-gray-600 mt-1">{consultation.date}</p>
                      <p className="text-xs text-gray-600">{consultation.time}</p>
                      <p className="text-xs font-medium text-green-600 mt-2">✓ Dijadwalkan</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowConsultationModal(true)}
              className="w-full mt-4 bg-[#1A2B3C] text-white font-bold py-2 rounded-lg hover:bg-[#0F1820] transition-colors"
            >
              Ajukan Jadwal Baru
            </button>
          </div>

          {/* Available Teachers */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <h2 className="text-xl font-bold text-[#1A2B3C] mb-4">Tim Pengajar</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-3xl">👩‍🏫</div>
                <div className="flex-1">
                  <p className="font-semibold text-[#1A2B3C] text-sm">Ibu Fatimah</p>
                  <p className="text-xs text-gray-600">Pilar Pengetahuan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-3xl">👨‍🏫</div>
                <div className="flex-1">
                  <p className="font-semibold text-[#1A2B3C] text-sm">Pak Ahmad</p>
                  <p className="text-xs text-gray-600">Pilar Keterampilan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-3xl">👩‍🏫</div>
                <div className="flex-1">
                  <p className="font-semibold text-[#1A2B3C] text-sm">Ibu Sri</p>
                  <p className="text-xs text-gray-600">Terapis Sensori</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6">Ajukan Jadwal Konsultasi</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">Pilih Guru</label>
                <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#47A38E]">
                  <option>Ibu Fatimah (Pilar Pengetahuan)</option>
                  <option>Pak Ahmad (Pilar Keterampilan)</option>
                  <option>Ibu Sri (Terapis Sensori)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">Tanggal Diinginkan</label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#47A38E]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">Waktu Diinginkan</label>
                <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#47A38E]">
                  <option>14:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>15:30</option>
                  <option>16:00</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A2B3C] mb-2">Topik Diskusi</label>
                <textarea
                  placeholder="Jelaskan apa yang ingin Anda diskusikan..."
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 h-24 focus:outline-none focus:border-[#47A38E] resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowConsultationModal(false)}
                className="flex-1 border-2 border-gray-300 text-[#1A2B3C] font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => setShowConsultationModal(false)}
                className="flex-1 bg-[#47A38E] text-white font-bold py-2 rounded-lg hover:bg-[#3a8a78] transition-colors"
              >
                Ajukan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
