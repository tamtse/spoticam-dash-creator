import { Card, CardContent } from '@/components/ui/card';
import { globalStats } from '@/data/wrappedCameroun2025';
import { Users, TrendingUp, Star, Sparkles, Heart, Bookmark } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Artistes Camerounais',
    value: globalStats.totalArtists.toString(),
    subtext: 'indexés sur Spoticam',
  },
  {
    icon: TrendingUp,
    label: 'Followers Totaux',
    value: `${(globalStats.totalFollowers / 1000000).toFixed(1)}M`,
    subtext: 'sur Spotify',
  },
  {
    icon: Star,
    label: 'Popularité Moyenne',
    value: globalStats.averagePopularity.toString(),
    subtext: 'score Spotify',
  },
  {
    icon: Sparkles,
    label: 'Nouveaux Talents',
    value: globalStats.newTalents2025.toString(),
    subtext: 'émergés en 2025',
  },
  {
    icon: Bookmark,
    label: 'Sauvegardes',
    value: `${(globalStats.totalSaves / 1000).toFixed(0)}K`,
    subtext: 'sur Spoticam',
  },
  {
    icon: Heart,
    label: 'Favoris',
    value: `${(globalStats.totalFavorites / 1000).toFixed(0)}K`,
    subtext: 'sur Spoticam',
  },
];

export const GlobalStatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={stat.label}
          className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardContent className="p-4 text-center relative">
            <div className="inline-flex p-2.5 rounded-xl bg-primary/10 mb-3">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">{stat.subtext}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
