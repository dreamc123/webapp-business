import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Target, Mail, TrendingUp } from 'lucide-react';
import { useCampaign } from '../hooks/useCampaign';
import CampaignForm from '../components/campaign/CampaignForm';
import CampaignMetrics from '../components/campaign/CampaignMetrics';

export default function CampaignDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { campaign, updateCampaign } = useCampaign(id);
  const [isEditing, setIsEditing] = useState(false);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  const handleSave = async (updatedData: any) => {
    await updateCampaign(updatedData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {campaign.title}
            </h1>
            <p className="text-sm text-gray-500">{campaign.targetSport}</p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              {isEditing ? 'Cancel Edit' : 'Edit Campaign'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                {isEditing ? (
                  <CampaignForm
                    campaign={campaign}
                    onSave={handleSave}
                  />
                ) : (
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <Target className="h-5 w-5 text-blue-500 mr-2" />
                      Campaign Details
                    </h2>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                            campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Target Sport</dt>
                        <dd className="mt-1 text-sm text-gray-900">{campaign.targetSport}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <CampaignMetrics metrics={campaign.metrics} />
          </div>
        </div>
      </div>
    </div>
  );
}