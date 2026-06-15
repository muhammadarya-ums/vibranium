import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartData {
  name: string
  [key: string]: number | string
}

interface ProgressChartProps {
  data: ChartData[]
  title?: string
  dataKeys: Array<{
    name: string
    color: string
  }>
  height?: number
}

export function ProgressChart({
  data,
  title,
  dataKeys,
  height = 300,
}: ProgressChartProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8">
      {title && (
        <h3 className="text-2xl font-bold text-[#1A2B3C] mb-6">{title}</h3>
      )}

      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#1A2B3C', fontSize: 12 }}
          />
          <YAxis
            tick={{ fill: '#1A2B3C', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '2px solid #C29C6D',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#1A2B3C' }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="square"
          />
          {dataKeys.map((key) => (
            <Bar
              key={key.name}
              dataKey={key.name}
              fill={key.color}
              radius={[8, 8, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
