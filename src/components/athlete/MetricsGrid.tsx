import React from 'react';

interface Props {
  metrics: Record<string, number>;
}

export default function MetricsGrid({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="bg-gray-50 p-4 rounded-lg">
          <dt className="text-sm font-medium text-gray-500">{key}</dt>
          <dd className="mt-1 text-2xl font-semibold text-gray-900">{value}</dd>
        </div>
      ))}
    </div>
  );
}