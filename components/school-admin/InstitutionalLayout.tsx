'use client'

import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { TopHeader } from './TopHeader'

export function InstitutionalLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Header */}
      <TopHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Grid */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main
          className={`flex-1 overflow-auto transition-all duration-300 ${
            sidebarOpen ? 'md:ml-0' : 'ml-0'
          }`}
        >
          <div className="p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
