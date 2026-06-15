import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden">
              </div>
              <Link href="/" className="flex items-center">
            <img 
              src="/icon.png" 
              alt="Logo Vibranium" 
              className="h-20 w-auto object-contain" 
            />
          </Link>
            </div>
            <p className="text-sm text-gray-600">
              Platform pembelajaran inklusif untuk siswa dengan disabilitas intelektual dan sensorik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#1A2B3C] mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#fitur" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="#testimoni" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Masuk Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#1A2B3C] mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#blog" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Panduan Pengguna
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  Kontak Dukungan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#1A2B3C] mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#47A38E] mt-0.5 flex-shrink-0" />
                <a href="mailto:muhammad.arya.putra-2024@ft.um-surabaya.ac.id" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  muhammad.arya.putra-2024@ft.um-surabaya.ac.id
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#47A38E] mt-0.5 flex-shrink-0" />
                <a href="tel:+62882010217706" className="text-gray-600 hover:text-[#47A38E] transition-colors">
                  +62 882-0102-17706
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#47A38E] mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">
                  Surabaya, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2026   Vibranium. Semua hak dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#47A38E] transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-[#47A38E] transition-colors">
              Syarat Layanan
            </Link>
            <Link href="#" className="hover:text-[#47A38E] transition-colors">
              Media Sosial
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
