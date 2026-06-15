'use client'

import { ParentSidebar } from './ParentSidebar'
import { ParentTopHeader } from './ParentTopHeader'

interface ParentLayoutProps {
  children: React.ReactNode
}

export function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <ParentSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <ParentTopHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
