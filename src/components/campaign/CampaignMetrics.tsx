import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Props {
  metrics: {
    reach: number;
    engagement: number;
    conversion: number;
  };
}

export default function CampaignMetrics({ metrics }: Props) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
          Campaign Metrics
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">Reach</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">
              {metrics.reach.toLocaleString()}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Engagement Rate</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">
              {metrics.engagement}%
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Conversion Rate</dt>
            <dd className="mt-1 text-2xl font-semibold text-gray-900">
              {metrics.conversion}%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}