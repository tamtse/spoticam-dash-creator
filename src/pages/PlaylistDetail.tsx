import { useState } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Plus, 
  Edit2, 
  MoreHorizontal, 
  GripVertical, 
  X, 
  Clock, 
  Globe, 
  Lock,
  Camera,
  ExternalLink,
  Share2,
  Users,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
import { EditPlaylistModal } from '@/components/studio/EditPlaylistModal';
import { AddTracksModal } from '@/components/studio/AddTracksModal';
import { cn } from '@/lib/utils';

// Mock playlist data
const mockPlaylist = {
  id: '1',
  name: 'Afrobeat Vibes 2025',
  description: 'Les meilleurs sons afrobeat du moment. Une sélection des tracks les plus populaires de la scène afrobeat camerounaise et africaine.',
  imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
  trackCount: 25,
  isPublic: true,
  duration: '1h 32min',
  owner: 'Mon profil',
  followers: 234,
};

const mockTracks = [
  { 
    id: '1', 
    name: 'Ça suffit', 
    artist: 'Locko', 
    album: 'Phoenix', 
    duration: '3:45',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'
  },
  { 
    id: '2', 
    name: 'Jolie', 
    artist: 'Tayc', 
    album: 'Singles', 
    duration: '4:12',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop'
  },
  { 
    id: '3', 
    name: 'Coup du Marteau', 
    artist: 'Tam Sir', 
    album: 'Le Marteau', 
    duration: '3:21',
    imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop'
  },
  { 
    id: '4', 
    name: 'Bando', 
    artist: "Ko-C", 
    album: 'BIG5', 
    duration: '3:56',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop'
  },
  { 
    id: '5', 
    name: 'Célibataire', 
    artist: 'Tenor', 
    album: 'Album 2025', 
    duration: '4:02',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop'
  },
  { 
    id: '6', 
    name: 'Mboa', 
    artist: 'Salatiel', 
    album: 'Africa Represented', 
    duration: '3:33',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'
  },
  { 
    id: '7', 
    name: 'Jamais Jamais', 
    artist: 'Charlotte Dipanda', 
    album: 'Massa', 
    duration: '4:45',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop'
  },
];

const playlistStats = [
  { icon: Users, label: "Followers", value: "234", trend: "+12", trendUp: true },
  { icon: Play, label: "Lectures", value: "1.2K", trend: "+8%", trendUp: true },
  { icon: TrendingUp, label: "Engagement", value: "8.7/10", trend: "+0.3", trendUp: true },
  { icon: BarChart3, label: "Saves", value: "89", trend: "+15", trendUp: true },
];

export default function PlaylistDetail() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddTracksModalOpen, setIsAddTracksModalOpen] = useState(false);
  const [isReorderMode, setIsReorderMode] = useState(false);

  return (
    <DashboardLayout title="Studio">
      <div className="space-y-8">
        {/* Back Button */}
        <NavLink 
          to="/studio" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux playlists
        </NavLink>

        {/* Playlist Hero Card */}
        <Card className="card-shadow">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Cover Image */}
              <div className="relative group flex-shrink-0">
                <div className="w-48 h-48 rounded-xl overflow-hidden bg-muted">
                  <img
                    src={mockPlaylist.imageUrl}
                    alt={mockPlaylist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center gap-2 text-primary-foreground">
                  <Camera className="w-6 h-6" />
                  <span className="text-xs font-medium">Changer la cover</span>
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "flex items-center gap-1.5 border",
                        mockPlaylist.isPublic 
                          ? "border-primary/30 text-primary bg-primary/5" 
                          : "border-muted-foreground/30 text-muted-foreground bg-muted/50"
                      )}
                    >
                      {mockPlaylist.isPublic ? (
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
                    <span className="text-sm text-muted-foreground">par {mockPlaylist.owner}</span>
                  </div>

                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    {mockPlaylist.name}
                  </h1>

                  <p className="text-sm text-muted-foreground max-w-xl mb-3">
                    {mockPlaylist.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{mockPlaylist.trackCount} tracks</span>
                    <span>•</span>
                    <span>{mockPlaylist.duration}</span>
                    <span>•</span>
                    <span>{mockPlaylist.followers} abonnés</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <Button className="gap-2">
                    <Play className="w-4 h-4 fill-current" />
                    Écouter
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => setIsAddTracksModalOpen(true)}
                  >
                    <Plus className="w-4 h-4" />
                    Ajouter des tracks
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    <Edit2 className="w-4 h-4" />
                    Modifier
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {playlistStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Tracks Section */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Tracks</CardTitle>
              <Button
                variant={isReorderMode ? "secondary" : "outline"}
                size="sm"
                onClick={() => setIsReorderMode(!isReorderMode)}
                className="gap-2"
              >
                <GripVertical className="w-4 h-4" />
                {isReorderMode ? 'Terminé' : 'Réorganiser'}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {mockTracks.map((track, index) => (
                <TrackRow 
                  key={track.id} 
                  track={track} 
                  index={index + 1} 
                  isReorderMode={isReorderMode}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modals */}
      <EditPlaylistModal 
        open={isEditModalOpen} 
        onOpenChange={setIsEditModalOpen}
        playlist={mockPlaylist}
      />
      <AddTracksModal
        open={isAddTracksModalOpen}
        onOpenChange={setIsAddTracksModalOpen}
        playlistName={mockPlaylist.name}
      />
    </DashboardLayout>
  );
}

interface TrackRowProps {
  track: {
    id: string;
    name: string;
    artist: string;
    album: string;
    duration: string;
    imageUrl: string;
  };
  index: number;
  isReorderMode: boolean;
}

function TrackRow({ track, index, isReorderMode }: TrackRowProps) {
  return (
    <div className="group flex items-center gap-4 px-6 py-3 hover:bg-muted/30 transition-colors">
      {/* Drag Handle or Number */}
      <div className="w-8 flex-shrink-0 flex items-center justify-center">
        {isReorderMode ? (
          <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab active:cursor-grabbing" />
        ) : (
          <span className="text-sm text-muted-foreground group-hover:hidden">
            {index}
          </span>
        )}
        {!isReorderMode && (
          <Play className="w-4 h-4 text-foreground hidden group-hover:block cursor-pointer" />
        )}
      </div>

      {/* Track Image */}
      <div className="w-10 h-10 rounded bg-muted overflow-hidden flex-shrink-0">
        <img
          src={track.imageUrl}
          alt={track.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate">{track.name}</p>
        <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
      </div>

      {/* Album */}
      <div className="hidden md:block flex-1 min-w-0">
        <p className="text-sm text-muted-foreground truncate">{track.album}</p>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <Clock className="w-4 h-4 hidden sm:block" />
        <span className="text-sm">{track.duration}</span>
      </div>

      {/* Remove Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
      >
        <X className="w-4 h-4" />
      </Button>

      {/* More Options */}
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
          <DropdownMenuItem>Ajouter à une autre playlist</DropdownMenuItem>
          <DropdownMenuItem>Voir l'artiste</DropdownMenuItem>
          <DropdownMenuItem>Voir l'album</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">Retirer de la playlist</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
