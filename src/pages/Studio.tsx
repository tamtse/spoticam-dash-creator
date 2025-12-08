import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Music2, Lock, Globe, MoreHorizontal, Play, Shuffle, Users, ListMusic, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/StatCard';
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
    followers: '12.5K',
    engagement: 8.7,
  },
  {
    id: '2',
    name: 'Makossa Classics',
    description: 'Collection des classiques makossa camerounais',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    trackCount: 42,
    isPublic: true,
    duration: '2h 45min',
    followers: '8.3K',
    engagement: 7.9,
  },
  {
    id: '3',
    name: 'Pitching Label 2025',
    description: 'Sélection pour présentation aux labels',
    imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
    trackCount: 12,
    isPublic: false,
    duration: '45min',
    followers: '-',
    engagement: 0,
  },
  {
    id: '4',
    name: 'Découvertes Bikutsi',
    description: 'Nouveaux talents bikutsi à suivre',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    trackCount: 18,
    isPublic: true,
    duration: '1h 05min',
    followers: '5.2K',
    engagement: 9.1,
  },
  {
    id: '5',
    name: 'Promo Artiste Q1',
    description: 'Playlist promotionnelle premier trimestre',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 8,
    isPublic: false,
    duration: '28min',
    followers: '-',
    engagement: 0,
  },
];

const stats = [
  { icon: ListMusic, label: "Total Playlists", value: "5", trend: "+1", trendUp: true },
  { icon: Users, label: "Total Followers", value: "26K", trend: "+12%", trendUp: true },
  { icon: Music2, label: "Total Tracks", value: "105", trend: "+8", trendUp: true },
  { icon: TrendingUp, label: "Avg Engagement", value: "8.4", trend: "+0.3", trendUp: true },
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
    <DashboardLayout title="Studio">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Playlists Section */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle>Mes Playlists</CardTitle>
              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64 bg-background border-border"
                  />
                </div>
                <Button 
                  onClick={() => setIsCreateModalOpen(true)}
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nouvelle Playlist
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPlaylists.map((playlist) => (
                <PlaylistCard 
                  key={playlist.id} 
                  playlist={playlist} 
                  onClick={() => navigate(`/studio/playlists/${playlist.id}`)}
                />
              ))}

              {filteredPlaylists.length === 0 && (
                <div className="text-center py-12">
                  <Music2 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Aucune playlist trouvée
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Essayez une autre recherche ou créez une nouvelle playlist
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Playlist Modal */}
      <CreatePlaylistModal 
        open={isCreateModalOpen} 
        onOpenChange={setIsCreateModalOpen} 
      />
    </DashboardLayout>
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
    followers: string;
    engagement: number;
  };
  onClick: () => void;
}

function PlaylistCard({ playlist, onClick }: PlaylistCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth cursor-pointer"
    >
      <div className="flex items-center gap-4">
        {/* Cover Image */}
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
          <img
            src={playlist.imageUrl}
            alt={playlist.name}
            className="w-full h-full object-cover"
          />
          {/* Play overlay on hover */}
          <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="w-7 h-7 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Play className="w-3.5 h-3.5 text-primary-foreground fill-current" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="w-7 h-7 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/40 transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                {playlist.name}
              </h4>
              <p className="text-sm text-muted-foreground truncate">
                {playlist.description}
              </p>
            </div>
            {playlist.isPublic && playlist.engagement > 0 && (
              <Badge variant="secondary">
                {playlist.engagement}/10 engagement
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs text-muted-foreground">
              {playlist.trackCount} tracks
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {playlist.duration}
            </span>
            {playlist.isPublic && (
              <>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">
                  {playlist.followers} followers
                </span>
              </>
            )}
          </div>
        </div>

        {/* Visibility Badge */}
        <Badge 
          variant="outline" 
          className={cn(
            "flex items-center gap-1.5 border flex-shrink-0",
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

        {/* Actions */}
        <div className="flex gap-2 flex-shrink-0">
          <Button 
            size="sm" 
            variant="outline"
            onClick={(e) => { e.stopPropagation(); }}
          >
            Manage
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={(e) => { e.stopPropagation(); }}
          >
            Stats
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
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
      </div>
    </div>
  );
}
