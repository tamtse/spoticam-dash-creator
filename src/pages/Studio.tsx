import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Music2, Lock, Globe, MoreHorizontal, Play, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CreatePlaylistModal } from '@/components/studio/CreatePlaylistModal';
import { cn } from '@/lib/utils';

// Mock data for playlists
const mockPlaylists = [
  {
    id: '1',
    name: 'Afrobeat Vibes 2025',
    description: 'Les meilleurs sons afrobeat du moment',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trackCount: 25,
    isPublic: true,
    duration: '1h 32min',
  },
  {
    id: '2',
    name: 'Makossa Classics',
    description: 'Collection des classiques makossa camerounais',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    trackCount: 42,
    isPublic: true,
    duration: '2h 45min',
  },
  {
    id: '3',
    name: 'Pitching Label 2025',
    description: 'Sélection pour présentation aux labels',
    imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
    trackCount: 12,
    isPublic: false,
    duration: '45min',
  },
  {
    id: '4',
    name: 'Découvertes Bikutsi',
    description: 'Nouveaux talents bikutsi à suivre',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    trackCount: 18,
    isPublic: true,
    duration: '1h 05min',
  },
  {
    id: '5',
    name: 'Promo Artiste Q1',
    description: 'Playlist promotionnelle premier trimestre',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 8,
    isPublic: false,
    duration: '28min',
  },
];

export default function Studio() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredPlaylists = mockPlaylists.filter(
    (playlist) =>
      playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Mes Playlists</h1>
              <p className="text-muted-foreground mt-1">
                Gérez et organisez vos playlists Spotify
              </p>
            </div>
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Plus className="w-4 h-4" />
              Nouvelle Playlist
            </Button>
          </div>

          {/* Search */}
          <div className="mt-6 relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une playlist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>
      </div>

      {/* Playlists Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid gap-4">
          {filteredPlaylists.map((playlist) => (
            <PlaylistCard 
              key={playlist.id} 
              playlist={playlist} 
              onClick={() => navigate(`/studio/playlists/${playlist.id}`)}
            />
          ))}
        </div>

        {filteredPlaylists.length === 0 && (
          <div className="text-center py-16">
            <Music2 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground">
              Aucune playlist trouvée
            </h3>
            <p className="text-muted-foreground mt-2">
              Essayez une autre recherche ou créez une nouvelle playlist
            </p>
          </div>
        )}
      </div>

      {/* Create Playlist Modal */}
      <CreatePlaylistModal 
        open={isCreateModalOpen} 
        onOpenChange={setIsCreateModalOpen} 
      />
    </div>
  );
}

interface PlaylistCardProps {
  playlist: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    trackCount: number;
    isPublic: boolean;
    duration: string;
  };
  onClick: () => void;
}

function PlaylistCard({ playlist, onClick }: PlaylistCardProps) {
  return (
    <Card 
      onClick={onClick}
      className="group relative bg-card hover:bg-card/80 border-border transition-all duration-200 hover:shadow-lg cursor-pointer overflow-hidden"
    >
      <div className="flex items-center gap-4 p-4">
        {/* Cover Image */}
        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
          <img
            src={playlist.imageUrl}
            alt={playlist.name}
            className="w-full h-full object-cover"
          />
          {/* Play overlay on hover */}
          <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-primary-foreground fill-current" />
            </button>
            <button className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/40 transition-colors">
              <Shuffle className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {playlist.name}
          </h3>
          <p className="text-sm text-muted-foreground truncate mt-0.5">
            {playlist.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-muted-foreground">
              {playlist.trackCount} tracks
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {playlist.duration}
            </span>
          </div>
        </div>

        {/* Visibility Badge */}
        <Badge 
          variant="outline" 
          className={cn(
            "flex items-center gap-1.5 border",
            playlist.isPublic 
              ? "border-primary/30 text-primary bg-primary/5" 
              : "border-muted-foreground/30 text-muted-foreground bg-muted/50"
          )}
        >
          {playlist.isPublic ? (
            <>
              <Globe className="w-3 h-3" />
              Public
            </>
          ) : (
            <>
              <Lock className="w-3 h-3" />
              Privée
            </>
          )}
        </Badge>

        {/* Actions Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-popover border-border">
            <DropdownMenuItem>Modifier</DropdownMenuItem>
            <DropdownMenuItem>Dupliquer</DropdownMenuItem>
            <DropdownMenuItem>Partager</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
