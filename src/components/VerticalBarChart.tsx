'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const TREND_DATA = [
    { name: 'Mon', count: 18, color: '#27A5F4' },
    { name: 'Tue', count: 21, color: '#444FD9' },
    { name: 'Wed', count: 16, color: '#37CD91' },
    { name: 'Thu', count: 11, color: '#27A5F4' },
    { name: 'Fri', count: 7, color: '#444FD9' },
    { name: 'Sat', count: 3, color: '#FB8C00' },
];

export function VerticalBarChart() {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={TREND_DATA}
                    margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />

                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        style={{ fontSize: '12px', color: '#8D9BAE' }}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 25]}
                        style={{ fontSize: '12px', color: '#8D9BAE' }}
                    />

                    <Tooltip
                        cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                        contentStyle={{ backgroundColor: '#1E2543', border: 'none', borderRadius: '4px' }}
                        labelStyle={{ color: '#FFFFFF' }}
                    />

                    <Bar
                        dataKey="count"
                        radius={[4, 4, 0, 0]}
                        barSize={24}
                    >
                        {TREND_DATA.map((entry, index) => (
                            <Cell key={`bar-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
