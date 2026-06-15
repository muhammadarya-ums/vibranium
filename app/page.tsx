'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6 inline-block bg-teal-50 px-4 py-2 rounded-full">
                  <p className="text-sm font-medium text-[#47A38E]">
                    ✨ Transformasi Pendidikan Inklusif
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B3C] mb-6 leading-tight">
                  Pendidikan Inklusif yang Adaptif &amp; Terukur
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Platform pembelajaran khusus untuk siswa dengan disabilitas intelektual dan sensorik. Kurikulum umum dan kustomisasi materi oleh guru sesuai kecepatan belajar unik setiap siswa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/login"
                    className="inline-block px-8 py-4 bg-[#1A2B3C] text-white font-bold rounded-lg hover:bg-[#0F1820] transition-colors text-center"
                  >
                    Coba Gratis
                  </Link>
                  <Link
                    href="#fitur"
                    className="inline-block px-8 py-4 border-2 border-[#1A2B3C] text-[#1A2B3C] font-bold rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Pelajari Fitur
                  </Link>
                </div>
              </div>

              {/* Right Illustration */}
                <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden">
                <img 
                 src="/main.png" // Jalur/URL foto kamu di sini
                  alt="Deskripsi Foto" 
                  className="w-full h-full object-cover"
                  />
                  </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="fitur" className="bg-gray-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-4">
                Satu Platform, Empat Peran, Satu Tujuan Kemajuan Siswa
              </h2>
              <p className="text-lg text-gray-600">
                Fitur lengkap untuk mendukung pembelajaran inklusif setiap siswa
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <div className="w-16 h-16 bg-[#C29C6D] rounded-lg flex items-center justify-center text-3xl mb-4">
                  📚
                </div>
                <h3 className="text-xl font-bold text-[#1A2B3C] mb-3">
                  Pilar Pengetahuan
                </h3>
                <p className="text-gray-600">
                  Pembelajaran dasar dengan materi yang disesuaikan untuk setiap tahap perkembangan siswa.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <div className="w-16 h-16 bg-[#C29C6D] rounded-lg flex items-center justify-center text-3xl mb-4">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-[#1A2B3C] mb-3">
                  Pilar Keterampilan
                </h3>
                <p className="text-gray-600">
                  Pengembangan keterampilan praktis melalui aktivitas interaktif dan menyenangkan.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <div className="w-16 h-16 bg-[#C29C6D] rounded-lg flex items-center justify-center text-3xl mb-4">
                  🔊
                </div>
                <h3 className="text-xl font-bold text-[#1A2B3C] mb-3">
                  Dukungan Audio
                </h3>
                <p className="text-gray-600">
                  Narator audio untuk membantu siswa dengan disabilitas visual memahami materi.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <div className="w-16 h-16 bg-[#C29C6D] rounded-lg flex items-center justify-center text-3xl mb-4">
                  📊
                </div>
                <h3 className="text-xl font-bold text-[#1A2B3C] mb-3">
                  Laporan Terperinci
                </h3>
                <p className="text-gray-600">
                  Analytics mendalam tentang progres siswa untuk guru dan orang tua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#47A38E] py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap untuk Transformasi Pendidikan?
            </h2>
            <p className="text-lg text-teal-50 mb-10">
              Bergabunglah dengan ribuan sekolah dan keluarga yang telah merasakan manfaat pembelajaran inklusif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="inline-block px-8 py-4 bg-white text-[#47A38E] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/login"
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-teal-600 transition-colors"
              >
                Pusat Bantuan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
