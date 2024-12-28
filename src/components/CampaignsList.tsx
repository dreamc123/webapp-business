import React from 'react';
import { Target, Mail, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const campaigns = [
  {
    id: '1',
    title: 'Premium Basketball Gear',
    targetSport: 'Basketball',
    status: 'active',
    metrics: { reach: 15000, engagement: 8.5, conversion: 3.2 }
  },
  {
    id: '2',
    title: 'Tennis Tournament Sponsorship',
    targetSport: 'Tennis',
    status: 'draft',
    metrics: { reach: 8000, engagement: 6.2, conversion: 2.8 }
  },
  {
    id: '3',
    title: 'Swimming Equipment Launch',
    targetSport: 'Swimming',
    status: 'completed',
    metrics: { reach: 12000, engagement: 7.8, conversion: 4.1 }
  }
];

interface CampaignsListProps {
  filterBySport: <T extends { targetSport: string }>(items: T[]) => T[];
}

export default function CampaignsList({ filterBySport }: CampaignsListProps) {
  const filteredCampaigns = filterBySport(campaigns);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="h-5 w-5 text-blue-500 mr-2" />
          Active Campaigns
        </h2>
        {filteredCampaigns.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No campaigns found for this sport.</p>
        ) : (
          <div className="space-y-6">
            {filteredCampaigns.map((campaign) => (
              <Link
                key={campaign.id}
                to={`/campaigns/${campaign.id}`}
                className="block border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{campaign.title}</h3>
                    <p className="text-sm text-gray-500">{campaign.targetSport}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Reach</p>
                      <p className="text-sm font-semibold">{campaign.metrics.reach.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Engagement</p>
                      <p className="text-sm font-semibold">{campaign.metrics.engagement}%</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Conversion</p>
                      <p className="text-sm font-semibold">{campaign.metrics.conversion}%</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}