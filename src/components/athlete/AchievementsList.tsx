import React from 'react';
import { Award } from 'lucide-react';

interface Props {
  achievements: string[];
}

export default function AchievementsList({ achievements }: Props) {
  return (
    <ul className="space-y-3">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Award className="h-5 w-5 text-yellow-500" />
          <span className="text-gray-700">{achievement}</span>
        </li>
      ))}
    </ul>
  );
}