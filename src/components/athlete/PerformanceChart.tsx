import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', performance: 65 },
  { month: 'Feb', performance: 75 },
  { month: 'Mar', performance: 85 },
  { month: 'Apr', performance: 82 },
  { month: 'May', performance: 90 },
  { month: 'Jun', performance: 88 },
];

interface Props {
  athleteId: string;
}

export default function PerformanceChart({ athleteId }: Props) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="performance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}