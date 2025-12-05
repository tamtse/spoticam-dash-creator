import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { topCameroonArtists } from '@/data/wrappedCameroun2025';
import { Grid3X3, TrendingUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const ArtistHeatmapSection = () => {
  // Create heatmap data based on popularity and growth
  const heatmapData = topCameroonArtists
    .map(a => ({
      name: a.name,
      image: a.image,
      popularity: a.popularity,
      growth: a.followersGrowth,
      followers: a.followers,
      genres: a.genres,
      category: a.category,
      // Calculate intensity based on combined score
      intensity: (a.popularity / 100 + a.followersGrowth / 150) / 2,
    }))
    .sort((a, b) => b.intensity - a.intensity);

  const getHeatColor = (intensity: number) => {
    if (intensity > 0.7) return 'from-primary to-primary/80';
    if (intensity > 0.5) return 'from-orange-500 to-orange-500/80';
    if (intensity > 0.3) return 'from-yellow-500 to-yellow-500/80';
    return 'from-green-500 to-green-500/80';
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'legend': return '👑 Légende';
      case 'emerging': return '🚀 Émergent';
      case 'crossborder': return '🌍 Cross-border';
      default: return '';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Grid3X3 className="w-5 h-5 text-primary" />
          Heatmap Performance Artistes
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Visualisation combinée popularité × croissance followers
        </p>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {heatmapData.map((artist, index) => (
              <Tooltip key={artist.name}>
                <TooltipTrigger asChild>
                  <div 
                    className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-br ${getHeatColor(artist.intensity)}`}
                    style={{
                      opacity: 0.3 + artist.intensity * 0.7,
                    }}
                  >
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-white text-xs font-semibold truncate">{artist.name}</p>
                      <div className="flex items-center gap-1 text-white/80">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-[10px]">+{artist.growth}%</span>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <div className="space-y-1">
                    <p className="font-semibold">{artist.name}</p>
                    <p className="text-xs">{getCategoryLabel(artist.category)}</p>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>Popularité: {artist.popularity}</span>
                      <span>Croissance: +{artist.growth}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {(artist.followers / 1000).toFixed(0)}K followers
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {artist.genres.join(', ')}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
        
        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-primary to-primary/80" />
            <span className="text-xs text-muted-foreground">Performance élevée</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-500 to-orange-500/80" />
            <span className="text-xs text-muted-foreground">Performance bonne</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-yellow-500 to-yellow-500/80" />
            <span className="text-xs text-muted-foreground">En progression</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-green-500 to-green-500/80" />
            <span className="text-xs text-muted-foreground">Émergent</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
