'use client';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

interface ProductivityChartProps {
  score: number;
}

export function ProductivityChart({ score }: ProductivityChartProps) {

  const finalChartData = [
    { name: 'Background', uv: 100, fill: 'transparent' },
    { name: 'Border', uv: 100, fill: '#5C66FF20' },
    { name: 'Progress', uv: score, fill: '#37CD91' },
  ];

  return (
    <div className="relative h-32 w-32">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="75%"
          outerRadius="95%"
          barSize={12}
          data={finalChartData}
          startAngle={90}
          endAngle={90 + (360 * score) / 100}
          barGap={-12}
        >
          <RadialBar
            dataKey="uv"
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-semibold text-gray-900">{score}%</span>
      </div>
    </div>
  );
}