import { useState } from 'react';
import { 
  ArrowLeft, 
  Inbox, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Mail, 
  Play,
  Filter,
  Search,
  Star,
  ExternalLink
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/StatCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

// Mock pitches data
const mockPitches = [
  {
    id: '1',
    artist: 'Locko',
    artistImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop',
    track: 'Nouveau Single 2025',
    genre: 'Afrobeat',
    relevanceScore: 95,
    submittedAt: '2025-01-05',
    status: 'pending',
    message: 'Bonjour, je souhaite proposer mon nouveau single pour votre playlist Afrobeat Vibes. Ce titre représente une évolution de mon style musical.',
    spotifyUrl: 'https://open.spotify.com/track/example',
    duration: '3:42',
  },
  {
    id: '2',
    artist: 'Ko-C',
    artistImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop',
    track: 'Bando Remix',
    genre: 'Hip-Hop',
    relevanceScore: 87,
    submittedAt: '2025-01-04',
    status: 'pending',
    message: 'Hey! Le remix de Bando est enfin prêt. Je pense qu\'il correspondrait parfaitement à votre playlist.',
    spotifyUrl: 'https://open.spotify.com/track/example2',
    duration: '4:15',
  },
  {
    id: '3',
    artist: 'Charlotte Dipanda',
    artistImage: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop',
    track: 'Amour Éternel',
    genre: 'Soul',
    relevanceScore: 72,
    submittedAt: '2025-01-03',
    status: 'pending',
    message: 'Un nouveau titre soul avec des influences traditionnelles camerounaises.',
    spotifyUrl: 'https://open.spotify.com/track/example3',
    duration: '5:01',
  },
  {
    id: '4',
    artist: 'Tenor',
    artistImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop',
    track: 'Freestyle Friday',
    genre: 'Rap',
    relevanceScore: 68,
    submittedAt: '2025-01-02',
    status: 'pending',
    message: 'Mon freestyle du vendredi, parfait pour les playlists urbaines.',
    spotifyUrl: 'https://open.spotify.com/track/example4',
    duration: '2:58',
  },
  {
    id: '5',
    artist: 'Salatiel',
    artistImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop',
    track: 'Africa United',
    genre: 'Afrobeat',
    relevanceScore: 91,
    submittedAt: '2025-01-01',
    status: 'pending',
    message: 'Collaboration panafricaine avec des artistes de 5 pays différents.',
    spotifyUrl: 'https://open.spotify.com/track/example5',
    duration: '4:32',
  },
];

const stats = [
  { icon: Inbox, label: "En attente", value: "5", trend: "+2", trendUp: false },
  { icon: CheckCircle, label: "Acceptés ce mois", value: "12", trend: "+4", trendUp: true },
  { icon: XCircle, label: "Refusés ce mois", value: "8", trend: "-2", trendUp: true },
  { icon: Clock, label: "Temps de réponse", value: "1.8j", trend: "-0.3", trendUp: true },
];

type PitchStatus = 'pending' | 'accepted' | 'declined';

export default function StudioPitches() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPitch, setSelectedPitch] = useState<typeof mockPitches[0] | null>(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [responseType, setResponseType] = useState<'accept' | 'decline'>('accept');

  const filteredPitches = mockPitches.filter((pitch) => {
    const matchesSearch = 
      pitch.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.genre.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || pitch.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenResponseModal = (pitch: typeof mockPitches[0], type: 'accept' | 'decline') => {
    setSelectedPitch(pitch);
    setResponseType(type);
    setResponseMessage('');
    setIsResponseModalOpen(true);
  };

  const handleSendResponse = () => {
    if (selectedPitch) {
      toast({
        title: responseType === 'accept' ? 'Pitch accepté' : 'Pitch refusé',
        description: `Votre réponse a été envoyée à ${selectedPitch.artist}.`,
      });
      setIsResponseModalOpen(false);
      setSelectedPitch(null);
      setResponseMessage('');
    }
  };

  return (
    <DashboardLayout title="Studio">
      <div className="space-y-8">
        {/* Back Button */}
        <NavLink 
          to="/studio" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au Studio
        </NavLink>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Pitches Section */}
        <Card className="card-shadow">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <Inbox className="w-5 h-5" />
                Inbox Pitches
              </CardTitle>
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
                {/* Filter */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40 bg-background border-border">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous</SelectItem>
                    <SelectItem value="pending">En attente</SelectItem>
                    <SelectItem value="accepted">Acceptés</SelectItem>
                    <SelectItem value="declined">Refusés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPitches.map((pitch) => (
                <PitchCard 
                  key={pitch.id} 
                  pitch={pitch}
                  onAccept={() => handleOpenResponseModal(pitch, 'accept')}
                  onDecline={() => handleOpenResponseModal(pitch, 'decline')}
                />
              ))}

              {filteredPitches.length === 0 && (
                <div className="text-center py-12">
                  <Inbox className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Aucun pitch trouvé
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Aucune soumission ne correspond à vos critères
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Modal */}
      <Dialog open={isResponseModalOpen} onOpenChange={setIsResponseModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {responseType === 'accept' ? 'Accepter le pitch' : 'Refuser le pitch'}
            </DialogTitle>
            <DialogDescription>
              {responseType === 'accept' 
                ? `Vous êtes sur le point d'accepter "${selectedPitch?.track}" de ${selectedPitch?.artist}.`
                : `Vous êtes sur le point de refuser "${selectedPitch?.track}" de ${selectedPitch?.artist}.`
              }
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Message à l'artiste (optionnel)
              </label>
              <Textarea
                placeholder={responseType === 'accept' 
                  ? "Félicitations ! Votre track a été ajouté à notre playlist..."
                  : "Merci pour votre soumission. Malheureusement..."
                }
                value={responseMessage}
                onChange={(e) => setResponseMessage(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsResponseModalOpen(false)}>
              Annuler
            </Button>
            <Button 
              onClick={handleSendResponse}
              className={cn(
                responseType === 'accept' 
                  ? 'bg-primary hover:bg-primary/90' 
                  : 'bg-destructive hover:bg-destructive/90'
              )}
            >
              {responseType === 'accept' ? 'Accepter' : 'Refuser'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}

interface PitchCardProps {
  pitch: {
    id: string;
    artist: string;
    artistImage: string;
    track: string;
    genre: string;
    relevanceScore: number;
    submittedAt: string;
    status: string;
    message: string;
    spotifyUrl: string;
    duration: string;
  };
  onAccept: () => void;
  onDecline: () => void;
}

function PitchCard({ pitch, onAccept, onDecline }: PitchCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100 dark:bg-green-900/30';
    if (score >= 75) return 'text-primary bg-primary/10';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
    return 'text-muted-foreground bg-muted';
  };

  return (
    <div className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-smooth">
      <div className="flex items-start gap-4">
        {/* Artist Image */}
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-muted">
          <img
            src={pitch.artistImage}
            alt={pitch.artist}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="font-semibold text-foreground">{pitch.track}</h4>
              <p className="text-sm text-muted-foreground">
                par {pitch.artist} • {pitch.duration}
              </p>
            </div>
            <Badge className={cn("flex items-center gap-1", getScoreColor(pitch.relevanceScore))}>
              <Star className="w-3 h-3" />
              {pitch.relevanceScore}% match
            </Badge>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{pitch.genre}</Badge>
            <span className="text-xs text-muted-foreground">
              Soumis le {new Date(pitch.submittedAt).toLocaleDateString('fr-FR')}
            </span>
          </div>

          {/* Expandable Message */}
          {isExpanded && (
            <div className="mt-3 p-3 rounded-lg bg-background border border-border">
              <p className="text-sm text-muted-foreground">{pitch.message}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 mt-3">
            <Button size="sm" onClick={onAccept}>
              <CheckCircle className="w-4 h-4 mr-1" />
              Accepter
            </Button>
            <Button size="sm" variant="outline" onClick={onDecline}>
              <XCircle className="w-4 h-4 mr-1" />
              Refuser
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setIsExpanded(!isExpanded)}>
              <Mail className="w-4 h-4 mr-1" />
              {isExpanded ? 'Masquer' : 'Voir message'}
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <a href={pitch.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-1" />
                Écouter
              </a>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <a href={pitch.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
