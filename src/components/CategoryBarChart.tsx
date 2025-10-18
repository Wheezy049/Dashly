'use client';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CATEGORY_DATA = [
  { name: 'Created', value: 200, percent: '50.6%', color: '#00BCD4' },
  { name: 'Work', value: 100, percent: '25.3%', color: '#5C66FF' },
  { name: 'Pending', value: 50, percent: '12.7%', color: '#37CD91' },
  { name: 'Design', value: 46, percent: '11.4%', color: '#FF668D' },
];

export function CategoriesBarChart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-48">
      <div className="w-1/2 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={CATEGORY_DATA}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              fill="#8884d8"
            >
              {CATEGORY_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-1/2 flex flex-col space-y-2 text-sm">
        {CATEGORY_DATA.map((entry) => (
          <div key={entry.name} className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-700">{entry.name}</span>
            </div>
            <span className="text-gray-500 font-medium">
              {entry.percent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}