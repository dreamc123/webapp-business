import React from 'react';
import { LogOut, Filter } from 'lucide-react';

interface TopMenuProps {
  selectedSport: string;
  onSportChange: (sport: string) => void;
  onLogout: () => void;
}

const SPORTS = ['All Sports', 'Basketball', 'Tennis', 'Swimming', 'Football', 'Golf'];

export default function TopMenu({ selectedSport, onSportChange, onLogout }: TopMenuProps) {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <select
              value={selectedSport}
              onChange={(e) => onSportChange(e.target.value)}
              className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {SPORTS.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={onLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}