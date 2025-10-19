'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const WORKLOAD_DATA = [
    { name: 'Work', tasks: 80, color: '#27A5F4' },
    { name: 'Design', tasks: 85, color: '#27A5F4' },
    { name: 'Testing', tasks: 60, color: '#27A5F4' },
    { name: 'Urgent', tasks: 50, color: '#37CD91' },
];

export function HorizontalBarChart() {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={WORKLOAD_DATA}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E0E0E0" />

                    <XAxis
                        type="number"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: '12px' }}
                    />

                    <YAxis
                        dataKey="name"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: '12px', fontWeight: '500', color: '#242D3C' }}
                    />

                    <Tooltip
                        cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                        contentStyle={{ backgroundColor: '#1E2543', border: 'none', borderRadius: '4px' }}
                        labelStyle={{ color: '#FFFFFF' }}
                    />

                    <Bar
                        dataKey="tasks"
                        radius={[0, 4, 4, 0]}
                        barSize={20}
                    >
                        {WORKLOAD_DATA.map((entry, index) => (
                            <Cell key={`bar-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            <div className="text-center text-sm font-medium text-gray-500">Team Alpha</div>
        </div>
    );
}
