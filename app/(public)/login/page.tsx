'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { loginEmail, loginPassword })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/images/teacher-students.png"
                alt="Teacher and students learning together"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Forms */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-2 text-center md:text-left">
              Selamat Datang
            </h1>
            <p className="text-lg text-gray-600 mb-10 text-center md:text-left">
              di SahabatAjar SLB
            </p>
            <p className="text-sm text-gray-500 mb-8 text-center md:text-left">
              Silakan masuk untuk memulai perjalanan belajar.k
            </p>

            {/* Login Form Card */}
            <div className="bg-white rounded-2xl border-4 border-[#C29C6D] p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6 text-center">
                Log In
              </h2>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email atau Username"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#1A2B3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 text-[#1A2B3C] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1A2B3C] text-white font-bold rounded-lg hover:bg-[#0F1820] transition-colors"
                >
                  Masuk
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-4">
                Lupa password?{' '}
                <a href="#" className="text-[#47A38E] font-medium hover:underline">
                  Reset di sini
                </a>
              </p>
            </div>

            {/* Registration Options */}
            <div className="bg-white rounded-2xl border-4 border-[#C29C6D] p-8">
              <h2 className="text-xl font-bold text-[#1A2B3C] mb-6 text-center">
                Belum Punya Akun?
              </h2>

              <div className="space-y-3">
                <button className="w-full py-3 bg-[#1A2B3C] text-white font-bold rounded-lg hover:bg-[#0F1820] transition-colors">
                  Daftar Guru Privat
                </button>
                <button className="w-full py-3 bg-[#1A2B3C] text-white font-bold rounded-lg hover:bg-[#0F1820] transition-colors">
                  Daftar Sekolah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
