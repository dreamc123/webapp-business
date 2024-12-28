import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, TrendingUp, Award, Target } from 'lucide-react';
import { useAthlete } from '../hooks/useAthlete';
import PerformanceChart from '../components/athlete/PerformanceChart';
import MetricsGrid from '../components/athlete/MetricsGrid';
import AchievementsList from '../components/athlete/AchievementsList';

export default function AthleteDetail() {
  const { id } = useParams();
  const athlete = useAthlete(id);

  if (!athlete) {
    return <div>Athlete not found</div>;
  }

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
            <div className="flex items-center">
              <img
                src={athlete.imageUrl}
                alt={athlete.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {athlete.name}
                </h1>
                <p className="text-sm text-gray-500">{athlete.sport}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <span className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <Trophy className="h-4 w-4 mr-2" />
              Rank #{athlete.ranking}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                Performance Trends
              </h2>
              <PerformanceChart athleteId={athlete.id} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Target className="h-5 w-5 text-blue-500 mr-2" />
                Key Metrics
              </h2>
              <MetricsGrid metrics={athlete.stats} />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              Recent Achievements
            </h2>
            <AchievementsList achievements={athlete.achievements} />
          </div>
        </div>
      </div>
    </div>
  );
}