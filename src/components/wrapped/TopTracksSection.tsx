import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { topCameroonArtists } from '@/data/wrappedCameroun2025';
import { Music, Play, TrendingUp } from 'lucide-react';

interface TopTracksSectionProps {
  limit?: number;
}

export const TopTracksSection = ({ limit }: TopTracksSectionProps) => {
  // Extract all top tracks with artist info
  const allTracks = topCameroonArtists
    .flatMap(artist => 
      artist.topTracks.map(track => ({
        ...track,
        artistName: artist.name,
        artistImage: artist.image,
        artistCategory: artist.category,
      }))
    )
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit || 15);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'legend':
        return <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 text-xs">Légende</Badge>;
      case 'crossborder':
        return <Badge className="bg-purple-500/20 text-purple-500 border-purple-500/30 text-xs">Cross-border</Badge>;
      case 'emerging':
        return <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">Émergent</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Music className="w-5 h-5 text-primary" />
          Top Tracks Cameroun 2025
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {allTracks.map((track, index) => (
          <div 
            key={`${track.artistName}-${track.name}`}
            className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
          >
            {/* Rank */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              index < 3 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {index + 1}
            </div>
            
            {/* Artist Image */}
            <img 
              src={track.artistImage} 
              alt={track.artistName}
              className="w-12 h-12 rounded-lg object-cover"
            />
            
            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{track.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-sm text-muted-foreground">{track.artistName}</p>
                {getCategoryBadge(track.artistCategory)}
              </div>
            </div>
            
            {/* Popularity Score */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{track.popularity}</p>
                <p className="text-xs text-muted-foreground">popularity</p>
              </div>
            </div>
            
            {/* Play button */}
            <button className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-4 h-4" fill="currentColor" />
            </button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
