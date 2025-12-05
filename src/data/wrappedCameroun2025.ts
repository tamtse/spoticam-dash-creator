// Mock data for Spoticam Wrapped Cameroun 2025

export interface CameroonArtist {
  id: string;
  name: string;
  image: string;
  popularity: number;
  followers: number;
  followersGrowth: number; // percentage growth in 2025
  genres: string[];
  topTracks: { name: string; popularity: number }[];
  category: 'legend' | 'emerging' | 'crossborder';
  releasesIn2025: number;
}

export interface GenreDistribution {
  genre: string;
  percentage: number;
  artistCount: number;
  color: string;
}

export interface GlobalStats {
  totalArtists: number;
  totalFollowers: number;
  averagePopularity: number;
  newTalents2025: number;
  totalSaves: number;
  totalFavorites: number;
}

export const topCameroonArtists: CameroonArtist[] = [
  {
    id: '1',
    name: 'Locko',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    popularity: 72,
    followers: 1250000,
    followersGrowth: 34,
    genres: ['afrobeat', 'afropop'],
    topTracks: [
      { name: 'Mboa', popularity: 78 },
      { name: 'Ndutu', popularity: 71 },
      { name: 'Je serai là', popularity: 68 },
    ],
    category: 'legend',
    releasesIn2025: 4,
  },
  {
    id: '2',
    name: 'Salatiel',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop',
    popularity: 68,
    followers: 890000,
    followersGrowth: 28,
    genres: ['afrobeat', 'r&b'],
    topTracks: [
      { name: 'Anita', popularity: 74 },
      { name: 'Fap Kolo', popularity: 65 },
      { name: 'Africa Represented', popularity: 62 },
    ],
    category: 'legend',
    releasesIn2025: 3,
  },
  {
    id: '3',
    name: 'Tayc',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    popularity: 85,
    followers: 4200000,
    followersGrowth: 52,
    genres: ['afrobeat', 'r&b', 'pop'],
    topTracks: [
      { name: 'Le Temps', popularity: 89 },
      { name: 'N\'y pense plus', popularity: 82 },
      { name: 'Dodo', popularity: 78 },
    ],
    category: 'crossborder',
    releasesIn2025: 6,
  },
  {
    id: '4',
    name: 'Ko-C',
    image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=300&h=300&fit=crop',
    popularity: 58,
    followers: 420000,
    followersGrowth: 67,
    genres: ['hip-hop', 'trap'],
    topTracks: [
      { name: 'Balancé', popularity: 64 },
      { name: 'Bollo C\'est Bollo', popularity: 58 },
      { name: 'C\'est la vie', popularity: 52 },
    ],
    category: 'emerging',
    releasesIn2025: 8,
  },
  {
    id: '5',
    name: 'Daphne',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    popularity: 62,
    followers: 680000,
    followersGrowth: 22,
    genres: ['afropop', 'dancehall'],
    topTracks: [
      { name: 'Calée', popularity: 67 },
      { name: 'Jusqu\'à la gare', popularity: 59 },
      { name: 'Fais Moi Confiance', popularity: 55 },
    ],
    category: 'legend',
    releasesIn2025: 2,
  },
  {
    id: '6',
    name: 'Rinyu',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop',
    popularity: 48,
    followers: 185000,
    followersGrowth: 124,
    genres: ['afrobeat', 'makossa'],
    topTracks: [
      { name: 'Sweet Love', popularity: 52 },
      { name: 'Bad Mind', popularity: 46 },
      { name: 'Ma Douce', popularity: 44 },
    ],
    category: 'emerging',
    releasesIn2025: 5,
  },
  {
    id: '7',
    name: 'Blanche Bailly',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop',
    popularity: 64,
    followers: 720000,
    followersGrowth: 31,
    genres: ['afropop', 'dancehall'],
    topTracks: [
      { name: 'Argent', popularity: 69 },
      { name: 'Mimbayeur', popularity: 61 },
      { name: 'Ton Pied Mon Pied', popularity: 58 },
    ],
    category: 'legend',
    releasesIn2025: 3,
  },
  {
    id: '8',
    name: 'Tenor',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
    popularity: 55,
    followers: 380000,
    followersGrowth: 45,
    genres: ['hip-hop', 'afrotrap'],
    topTracks: [
      { name: 'Do Le Dab', popularity: 61 },
      { name: 'Bad Man', popularity: 53 },
      { name: 'Kaba Ngondo', popularity: 48 },
    ],
    category: 'emerging',
    releasesIn2025: 7,
  },
  {
    id: '9',
    name: 'Charlotte Dipanda',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
    popularity: 59,
    followers: 520000,
    followersGrowth: 18,
    genres: ['makossa', 'world'],
    topTracks: [
      { name: 'Sista', popularity: 63 },
      { name: 'Duo', popularity: 56 },
      { name: 'Bwé', popularity: 51 },
    ],
    category: 'legend',
    releasesIn2025: 2,
  },
  {
    id: '10',
    name: 'Kameni',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop',
    popularity: 52,
    followers: 290000,
    followersGrowth: 89,
    genres: ['afropop', 'bikutsi'],
    topTracks: [
      { name: 'Opimbeng', popularity: 58 },
      { name: 'Moto', popularity: 49 },
      { name: 'Love You', popularity: 45 },
    ],
    category: 'emerging',
    releasesIn2025: 6,
  },
];

export const genreDistribution: GenreDistribution[] = [
  { genre: 'Afrobeat', percentage: 35, artistCount: 42, color: 'hsl(var(--primary))' },
  { genre: 'Afropop', percentage: 25, artistCount: 30, color: 'hsl(28, 80%, 52%)' },
  { genre: 'Makossa', percentage: 15, artistCount: 18, color: 'hsl(45, 93%, 47%)' },
  { genre: 'Bikutsi', percentage: 10, artistCount: 12, color: 'hsl(150, 60%, 45%)' },
  { genre: 'Hip-Hop/Trap', percentage: 10, artistCount: 12, color: 'hsl(280, 60%, 55%)' },
  { genre: 'R&B', percentage: 5, artistCount: 6, color: 'hsl(200, 70%, 50%)' },
];

export const globalStats: GlobalStats = {
  totalArtists: 120,
  totalFollowers: 15800000,
  averagePopularity: 58,
  newTalents2025: 34,
  totalSaves: 245000,
  totalFavorites: 89000,
};

export const monthlyTrends = [
  { month: 'Jan', popularity: 52, followers: 12.1 },
  { month: 'Fév', popularity: 54, followers: 12.8 },
  { month: 'Mar', popularity: 55, followers: 13.2 },
  { month: 'Avr', popularity: 57, followers: 13.9 },
  { month: 'Mai', popularity: 56, followers: 14.1 },
  { month: 'Juin', popularity: 58, followers: 14.6 },
  { month: 'Juil', popularity: 61, followers: 15.0 },
  { month: 'Août', popularity: 59, followers: 15.2 },
  { month: 'Sep', popularity: 62, followers: 15.5 },
  { month: 'Oct', popularity: 60, followers: 15.6 },
  { month: 'Nov', popularity: 63, followers: 15.7 },
  { month: 'Déc', popularity: 65, followers: 15.8 },
];
