import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { topCameroonArtists } from '@/data/wrappedCameroun2025';
import { TrendingUp, Crown, Rocket, Globe, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopArtistsSectionProps {
  limit?: number;
}

const categoryConfig = {
  legend: { label: 'Légende', icon: Crown, className: 'bg-amber-500/20 text-amber-600' },
  emerging: { label: 'Émergent', icon: Rocket, className: 'bg-green-500/20 text-green-600' },
  crossborder: { label: 'Cross-border', icon: Globe, className: 'bg-blue-500/20 text-blue-600' },
};

export const TopArtistsSection = ({ limit }: TopArtistsSectionProps) => {
  const artists = limit ? topCameroonArtists.slice(0, limit) : topCameroonArtists;

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-primary" />
          Top Artistes Camerounais 2025
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {artists.map((artist, index) => {
          const category = categoryConfig[artist.category];
          const CategoryIcon = category.icon;
          
          return (
            <div 
              key={artist.id}
              className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
            >
              {/* Rank */}
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                index === 0 && "bg-amber-500 text-white",
                index === 1 && "bg-gray-400 text-white",
                index === 2 && "bg-amber-700 text-white",
                index > 2 && "bg-muted-foreground/20 text-muted-foreground"
              )}>
                {index + 1}
              </div>

              {/* Avatar */}
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold truncate">{artist.name}</span>
                  <Badge variant="secondary" className={cn("text-xs", category.className)}>
                    <CategoryIcon className="w-3 h-3 mr-1" />
                    {category.label}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{(artist.followers / 1000000).toFixed(1)}M followers</span>
                  <span className="text-green-600 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    +{artist.followersGrowth}%
                  </span>
                </div>
              </div>

              {/* Popularity Score */}
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{artist.popularity}</div>
                <div className="text-xs text-muted-foreground">popularité</div>
              </div>

              {/* Link */}
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
