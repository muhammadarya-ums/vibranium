'use client'

import { ParentLayout } from '@/components/parent-portal/ParentLayout'

export default function ParentPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ParentLayout>{children}</ParentLayout>
}
