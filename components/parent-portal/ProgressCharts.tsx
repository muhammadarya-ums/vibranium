'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { week: 'Minggu 1', audio: 40, visual: 30, motor: 35 },
  { week: 'Minggu 2', audio: 45, visual: 35, motor: 40 },
  { week: 'Minggu 3', audio: 50, visual: 42, motor: 45 },
  { week: 'Minggu 4', audio: 55, visual: 48, motor: 52 },
  { week: 'Minggu 5', audio: 62, visual: 55, motor: 60 },
  { week: 'Minggu 6', audio: 68, visual: 62, motor: 65 },
]

export function ProgressChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
      <h2 className="text-2xl font-bold text-[#1A2B3C] mb-6">Tren Pembelajaran Multisensori</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="week" stroke="#666" />
          <YAxis stroke="#666" domain={[0, 100]} label={{ value: 'Skor (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value) => `${value}%`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="audio"
            stroke="#47A38E"
            strokeWidth={3}
            name="Pendengaran"
            dot={{ fill: '#47A38E', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="visual"
            stroke="#C29C6D"
            strokeWidth={3}
            name="Visual"
            dot={{ fill: '#C29C6D', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="motor"
            stroke="#5A8E8A"
            strokeWidth={3}
            name="Motor"
            dot={{ fill: '#5A8E8A', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
