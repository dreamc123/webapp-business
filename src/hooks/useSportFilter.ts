import { useState, useMemo } from 'react';
import { Athlete, Campaign } from '../types';

export function useSportFilter() {
  const [selectedSport, setSelectedSport] = useState('All Sports');

  const filterBySport = <T extends { sport: string } | { targetSport: string }>(items: T[]) => {
    if (selectedSport === 'All Sports') return items;
    
    return items.filter((item) => {
      if ('sport' in item) return item.sport === selectedSport;
      if ('targetSport' in item) return item.targetSport === selectedSport;
      return false;
    });
  };

  return {
    selectedSport,
    setSelectedSport,
    filterBySport
  };
}