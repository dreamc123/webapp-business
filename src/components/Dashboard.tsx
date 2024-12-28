import React from 'react';
import { Trophy, Users, BarChart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopMenu from './TopMenu';
import TopAthletes from './TopAthletes';
import CampaignsList from './CampaignsList';
import { useSportFilter } from '../hooks/useSportFilter';

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const { selectedSport, setSelectedSport, filterBySport } = useSportFilter();

  const stats = [
    { id: '1', title: 'Active Campaigns', value: '12', icon: Target },
    { id: '2', title: 'Total Athletes', value: '1,234', icon: Users },
    { id: '3', title: 'Top Performers', value: '48', icon: Trophy },
    { id: '4', title: 'Campaign Success Rate', value: '87%', icon: BarChart },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopMenu
        selectedSport={selectedSport}
        onSportChange={setSelectedSport}
        onLogout={onLogout}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Link
              key={stat.id}
              to={stat.id === '1' ? '/campaigns/1' : stat.id === '2' ? '/athletes/1' : '#'}
              className="bg-white overflow-hidden shadow rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                      <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TopAthletes filterBySport={filterBySport} />
          <CampaignsList filterBySport={filterBySport} />
        </div>
      </div>
    </div>
  );
}