import { ExternalLink, Share2, GitCompare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface EntityHeroProps {
  type: 'artist' | 'track' | 'playlist';
  name: string;
  subtitle?: string;
  imageUrl: string;
  spotifyUrl?: string;
  isFollowed?: boolean;
  onFollow?: () => void;
  onCompare?: () => void;
  onShare?: () => void;
}

export const EntityHero = ({
  type,
  name,
  subtitle,
  imageUrl,
  spotifyUrl,
  isFollowed,
  onFollow,
  onCompare,
  onShare
}: EntityHeroProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background">
      {/* Background blur image */}
      <div 
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-end">
        {/* Image */}
        <div className={`shrink-0 ${type === 'artist' ? 'rounded-full' : 'rounded-xl'} overflow-hidden shadow-2xl`}>
          <img 
            src={imageUrl} 
            alt={name}
            className="w-40 h-40 md:w-48 md:h-48 object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          <Badge variant="secondary" className="uppercase text-xs">
            {type === 'artist' ? 'Artiste' : type === 'track' ? 'Track' : 'Playlist'}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
          
          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button onClick={onFollow} variant={isFollowed ? "secondary" : "default"}>
              <Heart className={`w-4 h-4 mr-2 ${isFollowed ? 'fill-current' : ''}`} />
              {isFollowed ? 'Suivi' : 'Suivre'}
            </Button>
            
            {spotifyUrl && (
              <Button variant="outline" asChild>
                <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ouvrir sur Spotify
                </a>
              </Button>
            )}
            
            <Button variant="outline" onClick={onCompare}>
              <GitCompare className="w-4 h-4 mr-2" />
              Comparer
            </Button>
            
            <Button variant="ghost" size="icon" onClick={onShare}>
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
