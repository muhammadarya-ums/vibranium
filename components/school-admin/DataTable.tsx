'use client'

import { useState } from 'react'

interface Column {
  key: string
  label: string
  width?: string
}

interface DataTableProps {
  columns: Column[]
  rows: Record<string, any>[]
  title?: string
  searchPlaceholder?: string
  searchKey?: string
  onRowClick?: (row: Record<string, any>) => void
  actions?: (row: Record<string, any>) => React.ReactNode
}

export function DataTable({
  columns,
  rows,
  title,
  searchPlaceholder = 'Cari...',
  searchKey,
  onRowClick,
  actions,
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRows = searchKey
    ? rows.filter((row) =>
        String(row[searchKey])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : rows

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      {(title || searchKey) && (
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between gap-4">
            {title && <h3 className="text-lg font-semibold text-[#1A2B3C]">{title}</h3>}
            {searchKey && (
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#47A38E]"
              />
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider ${
                    col.width || ''
                  }`}
                >
                  {col.label}
                </th>
              ))}
              {actions && <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Aksi</th>}
            </tr>
          </thead>
          <tbody>
            {filteredRows.length > 0 ? (
              filteredRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    onRowClick ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((col) => (
                    <td
                      key={`${idx}-${col.key}`}
                      className="px-6 py-4 text-sm text-gray-900"
                    >
                      {row[col.key]}
                    </td>
                  ))}
                  {actions && (
                    <td
                      className="px-6 py-4 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
