import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { globalStats, topCameroonArtists, genreDistribution } from '@/data/wrappedCameroun2025';
import { Heart, Bookmark, Users, Music, TrendingUp, Award, Disc } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const SpoticamStatsSection = () => {
  // Calculate derived stats
  const totalReleases = topCameroonArtists.reduce((sum, a) => sum + a.releasesIn2025, 0);
  const avgGrowth = topCameroonArtists.reduce((sum, a) => sum + a.followersGrowth, 0) / topCameroonArtists.length;
  const topGenre = genreDistribution[0];
  
  const spoticamMetrics = [
    {
      label: 'Artistes suivis',
      value: globalStats.totalArtists,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      label: 'Sauvegardes totales',
      value: globalStats.totalSaves,
      formatted: `${(globalStats.totalSaves / 1000).toFixed(0)}K`,
      icon: Bookmark,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      label: 'Favoris totaux',
      value: globalStats.totalFavorites,
      formatted: `${(globalStats.totalFavorites / 1000).toFixed(0)}K`,
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      label: 'Sorties 2025',
      value: totalReleases,
      icon: Disc,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const highlights = [
    {
      title: 'Genre dominant',
      value: topGenre.genre,
      detail: `${topGenre.percentage}% des artistes`,
      icon: Music,
    },
    {
      title: 'Croissance moyenne',
      value: `+${avgGrowth.toFixed(0)}%`,
      detail: 'followers en 2025',
      icon: TrendingUp,
    },
    {
      title: 'Nouveaux talents',
      value: globalStats.newTalents2025,
      detail: 'découverts cette année',
      icon: Award,
    },
  ];

  // Top saved artists (mocked based on popularity)
  const topSavedArtists = topCameroonArtists
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Main Spoticam metrics */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Statistiques Spoticam Cameroun
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Interactions des utilisateurs Spoticam avec la scène camerounaise
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {spoticamMetrics.map((metric) => (
              <div 
                key={metric.label}
                className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors text-center"
              >
                <div className={`inline-flex p-2.5 rounded-xl ${metric.bgColor} mb-3`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <p className="text-2xl font-bold">{metric.formatted || metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Highlights */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Points clés 2025</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="flex items-center gap-4 p-3 rounded-xl bg-muted/30"
              >
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="font-semibold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Saved Artists */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-primary" />
              Artistes les plus sauvegardés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topSavedArtists.map((artist, index) => (
              <div key={artist.id} className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground w-5">
                  {index + 1}
                </span>
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{artist.name}</p>
                  <Progress 
                    value={artist.popularity} 
                    className="h-1.5 mt-1"
                  />
                </div>
                <span className="text-sm font-semibold">{artist.popularity}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
