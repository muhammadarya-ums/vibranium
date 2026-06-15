'use client'

import { InstitutionalLayout } from '@/components/school-admin/InstitutionalLayout'

export default function SchoolAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <InstitutionalLayout>{children}</InstitutionalLayout>
}
