import { useState } from 'react';
import { Search, Music2, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface AddTracksModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  playlistName: string;
}

// Mock search results
const mockSearchResults = [
  { id: 's1', name: 'Nouveau Son', artist: 'Artiste A', duration: '3:45', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop' },
  { id: 's2', name: 'Hit 2025', artist: 'Artiste B', duration: '4:12', imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop' },
  { id: 's3', name: 'Afrobeat Magic', artist: 'Artiste C', duration: '3:56', imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop' },
];

// Mock recently viewed tracks
const mockRecentTracks = [
  { id: 'r1', name: 'Dernier consulté', artist: 'Locko', duration: '3:22', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop' },
  { id: 'r2', name: 'Favori récent', artist: 'Tayc', duration: '4:01', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop' },
];

export function AddTracksModal({ open, onOpenChange, playlistName }: AddTracksModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);

  const toggleTrack = (trackId: string) => {
    setSelectedTracks(prev => 
      prev.includes(trackId) 
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    );
  };

  const handleAdd = () => {
    console.log('Adding tracks:', selectedTracks);
    onOpenChange(false);
    setSelectedTracks([]);
    setSearchQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-lg max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Music2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span>Ajouter à</span>
              <span className="text-primary ml-1">"{playlistName}"</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un track..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto space-y-6 py-2">
          {/* Search Results */}
          {searchQuery && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground px-1">
                Résultats
              </h4>
              <div className="space-y-1">
                {mockSearchResults.map(track => (
                  <TrackSelectItem
                    key={track.id}
                    track={track}
                    isSelected={selectedTracks.includes(track.id)}
                    onToggle={() => toggleTrack(track.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Separator */}
          {searchQuery && (
            <div className="flex items-center gap-3 px-1">
              <Separator className="flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">ou depuis Spoticam</span>
              <Separator className="flex-1 bg-border" />
            </div>
          )}

          {/* Recently Viewed */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground px-1">
              Tracks récemment consultés
            </h4>
            <div className="space-y-1">
              {mockRecentTracks.map(track => (
                <TrackSelectItem
                  key={track.id}
                  track={track}
                  isSelected={selectedTracks.includes(track.id)}
                  onToggle={() => toggleTrack(track.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 border-t border-border pt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-border"
          >
            Annuler
          </Button>
          <Button
            onClick={handleAdd}
            disabled={selectedTracks.length === 0}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Ajouter ({selectedTracks.length})
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface TrackSelectItemProps {
  track: {
    id: string;
    name: string;
    artist: string;
    duration: string;
    imageUrl: string;
  };
  isSelected: boolean;
  onToggle: () => void;
}

function TrackSelectItem({ track, isSelected, onToggle }: TrackSelectItemProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "w-full flex items-center gap-3 p-2 rounded-lg transition-colors",
        isSelected 
          ? "bg-primary/10 border border-primary/30" 
          : "hover:bg-muted/50 border border-transparent"
      )}
    >
      {/* Checkbox */}
      <div className={cn(
        "w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors",
        isSelected 
          ? "bg-primary border-primary" 
          : "border-border bg-background"
      )}>
        {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
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
      <div className="flex-1 min-w-0 text-left">
        <p className="font-medium text-foreground truncate text-sm">{track.name}</p>
        <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
      </div>

      {/* Duration */}
      <span className="text-xs text-muted-foreground">{track.duration}</span>
    </button>
  );
}
