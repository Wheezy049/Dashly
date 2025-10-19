'use client';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const TRENDS_DATA = [
  { name: 'Mon', completed: 0, created: 0 },
  { name: 'Tue', completed: 15, created: 25 },
  { name: 'Wed', completed: 20, created: 30 },
  { name: 'Thu', completed: 40, created: 35 },
  { name: 'Fri', completed: 25, created: 45 },
  { name: 'Sat', completed: 35, created: 50 },
  { name: 'Sun', completed: 55, created: 55 },
];

export function TaskTrendsLineChart() {
  const completedColor = '#37CD91';
  const createdColor = '#5C66FF';

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={TRENDS_DATA}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />

          <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
            domain={[0, 60]}
            style={{ fontSize: '12px' }}
          />

          <Tooltip
            contentStyle={{ backgroundColor: '#1E2543', border: 'none', borderRadius: '4px' }}
            labelStyle={{ color: '#FFFFFF' }}
          />

          <Area
            type="monotone"
            dataKey="completed"
            stroke={completedColor}
            fill={completedColor}
            fillOpacity={0.1}
            strokeWidth={2}
            name="Completed"
          />

          <Line
            type="monotone"
            dataKey="created"
            stroke={createdColor}
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: createdColor, stroke: '#FFFFFF' }} // Visible dot
            name="Created"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}