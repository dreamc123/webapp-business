import { useState, useEffect } from 'react';

export function useAthlete(id: string | undefined) {
  const [athlete, setAthlete] = useState<any>(null);

  useEffect(() => {
    // Mock data - replace with actual API call
    if (id === '1') {
      setAthlete({
        id: '1',
        name: 'John Smith',
        sport: 'Basketball',
        imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=300&q=80',
        ranking: 1,
        stats: {
          'Points/Game': 28.5,
          'Assists': 8.2,
          'Rebounds': 6.4,
          'Field Goal %': 52
        },
        achievements: [
          'NBA All-Star 2023',
          'League MVP Runner-up 2022',
          'Scoring Title 2021',
          '3x All-NBA First Team'
        ]
      });
    }
  }, [id]);

  return athlete;
}