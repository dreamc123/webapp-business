import React from 'react';
import { Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

const athletes = [
  {
    id: '1',
    name: 'John Smith',
    sport: 'Basketball',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=300&q=80',
    ranking: 1,
    stats: { 'Points/Game': 28.5, 'Assists': 8.2 }
  },
  {
    id: '2',
    name: 'Emma Wilson',
    sport: 'Tennis',
    imageUrl: 'https://images.unsplash.com/photo-1546517343-4eb2c01aa44b?auto=format&fit=crop&w=300&q=80',
    ranking: 2,
    stats: { 'Win Rate': 92, 'Grand Slams': 3 }
  },
  {
    id: '3',
    name: 'Michael Chen',
    sport: 'Swimming',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=300&q=80',
    ranking: 3,
    stats: { 'World Records': 2, 'Olympic Medals': 4 }
  }
];

interface TopAthletesProps {
  filterBySport: <T extends { sport: string }>(items: T[]) => T[];
}

export default function TopAthletes({ filterBySport }: TopAthletesProps) {
  const filteredAthletes = filterBySport(athletes);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Medal className="h-5 w-5 text-yellow-500 mr-2" />
          Top Performing Athletes
        </h2>
        {filteredAthletes.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No athletes found for this sport.</p>
        ) : (
          <div className="space-y-6">
            {filteredAthletes.map((athlete) => (
              <Link 
                key={athlete.id} 
                to={`/athletes/${athlete.id}`}
                className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={athlete.imageUrl}
                  alt={athlete.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{athlete.name}</h3>
                  <p className="text-sm text-gray-500">{athlete.sport}</p>
                  <div className="mt-1 flex space-x-4">
                    {Object.entries(athlete.stats).map(([key, value]) => (
                      <span key={key} className="text-sm text-gray-600">
                        {key}: <span className="font-semibold">{value}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center h-8 w-8 bg-blue-100 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">#{athlete.ranking}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}