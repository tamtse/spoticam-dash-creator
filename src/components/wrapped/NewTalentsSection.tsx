import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { topCameroonArtists } from '@/data/wrappedCameroun2025';
import { Sparkles, TrendingUp, Disc, Play } from 'lucide-react';

interface NewTalentsSectionProps {
  limit?: number;
}

export const NewTalentsSection = ({ limit }: NewTalentsSectionProps) => {
  // Filter emerging artists and sort by growth
  const emergingArtists = topCameroonArtists
    .filter(a => a.category === 'emerging')
    .sort((a, b) => b.followersGrowth - a.followersGrowth);
  
  const artists = limit ? emergingArtists.slice(0, limit) : emergingArtists;

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Nouveaux Talents 2025
          <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-600">
            Émergents
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-muted/50 to-muted p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Growth Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-600 text-xs font-semibold">
                <TrendingUp className="w-3 h-3" />
                +{artist.followersGrowth}%
              </div>

              {/* Avatar */}
              <div className="relative mb-4">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground fill-current" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h4 className="font-semibold mb-1">{artist.name}</h4>
                <div className="flex flex-wrap justify-center gap-1 mb-3">
                  {artist.genres.slice(0, 2).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-background">
                    <div className="font-semibold text-primary">{artist.popularity}</div>
                    <div className="text-muted-foreground">Popularité</div>
                  </div>
                  <div className="p-2 rounded-lg bg-background">
                    <div className="font-semibold flex items-center justify-center gap-1">
                      <Disc className="w-3 h-3" />
                      {artist.releasesIn2025}
                    </div>
                    <div className="text-muted-foreground">Sorties 2025</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!limit && (
          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              À propos des Nouveaux Talents
            </h4>
            <p className="text-sm text-muted-foreground">
              Ces artistes ont connu une croissance exceptionnelle en 2025, avec une augmentation moyenne 
              de followers de <strong>+94%</strong>. Leur activité soutenue (moyenne de <strong>6.5 sorties</strong> cette année) 
              et leur popularité croissante en font les étoiles montantes de la scène camerounaise.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
