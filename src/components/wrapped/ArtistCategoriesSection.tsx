import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { topCameroonArtists } from '@/data/wrappedCameroun2025';
import { Crown, Rocket, Globe, Users } from 'lucide-react';

export const ArtistCategoriesSection = () => {
  const legends = topCameroonArtists.filter(a => a.category === 'legend');
  const emerging = topCameroonArtists.filter(a => a.category === 'emerging');
  const crossborder = topCameroonArtists.filter(a => a.category === 'crossborder');

  const categories = [
    {
      title: 'Légendes',
      description: 'Artistes établis avec une base de fans solide',
      icon: Crown,
      color: 'amber',
      artists: legends,
      bgClass: 'from-amber-500/20 to-amber-500/5',
      iconBg: 'bg-amber-500/20',
      iconColor: 'text-amber-500',
    },
    {
      title: 'Émergents 2025',
      description: 'Nouveaux talents avec la plus forte croissance',
      icon: Rocket,
      color: 'green',
      artists: emerging,
      bgClass: 'from-green-500/20 to-green-500/5',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500',
    },
    {
      title: 'Cross-border',
      description: 'Artistes avec rayonnement international',
      icon: Globe,
      color: 'purple',
      artists: crossborder,
      bgClass: 'from-purple-500/20 to-purple-500/5',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">Classification des Artistes</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Card key={cat.title} className={`relative overflow-hidden bg-gradient-to-br ${cat.bgClass}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${cat.iconBg}`}>
                  <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <div>
                  <CardTitle className="text-lg">{cat.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{cat.artists.length} artistes</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{cat.description}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {cat.artists.slice(0, 4).map((artist, index) => (
                <div key={artist.id} className="flex items-center gap-3 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{artist.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(artist.followers / 1000).toFixed(0)}K followers
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={`${cat.iconColor} border-current/30 text-xs`}>
                      +{artist.followersGrowth}%
                    </Badge>
                  </div>
                </div>
              ))}
              
              {cat.artists.length > 4 && (
                <p className="text-xs text-muted-foreground text-center pt-2">
                  +{cat.artists.length - 4} autres artistes
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
