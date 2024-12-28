export interface Athlete {
  id: string;
  name: string;
  sport: string;
  achievements: string[];
  imageUrl: string;
  stats: {
    [key: string]: number;
  };
  ranking: number;
}

export interface Campaign {
  id: string;
  title: string;
  targetSport: string;
  content: string;
  status: 'draft' | 'active' | 'completed';
  metrics: {
    reach: number;
    engagement: number;
    conversion: number;
  };
}