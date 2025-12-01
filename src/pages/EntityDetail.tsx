import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { EntityHero } from '@/components/entity/EntityHero';
import { EntityKPIBar } from '@/components/entity/EntityKPIBar';
import { ScoreGauge } from '@/components/entity/ScoreGauge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Music, ListMusic, TrendingUp } from 'lucide-react';

// Mock data
const mockArtist = {
  id: '1',
  name: 'Travis Scott',
  type: 'artist' as const,
  imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  subtitle: 'Hip-Hop / Rap • Houston, TX',
  spotifyUrl: 'https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY',
  kpis: [
    { label: 'Followers', value: '52.4M', trend: '+2.1%', trendUp: true },
    { label: 'Popularité', value: '94', trend: '+3', trendUp: true },
    { label: 'Momentum', value: '8.7', trend: '+0.5', trendUp: true },
    { label: 'Playlist Reach', value: '156M', trend: '+12%', trendUp: true },
    { label: 'Monthly Listeners', value: '48.2M', trend: '-1.2%', trendUp: false },
  ],
  score: 87,
  topTracks: [
    { name: 'SICKO MODE', streams: '2.1B', popularity: 92 },
    { name: 'goosebumps', streams: '1.8B', popularity: 89 },
    { name: 'HIGHEST IN THE ROOM', streams: '1.2B', popularity: 85 },
  ],
  playlists: [
    { name: 'RapCaviar', followers: '14.2M', position: 3 },
    { name: 'Hot Hits USA', followers: '8.5M', position: 12 },
    { name: 'Chill Hits', followers: '6.1M', position: 8 },
  ],
};

const EntityDetail = () => {
  const { type, id } = useParams();
  const [isFollowed, setIsFollowed] = useState(false);
  const isPro = false;

  // Would fetch based on type and id
  const entity = mockArtist;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hero Section */}
        <EntityHero
          type={entity.type}
          name={entity.name}
          subtitle={entity.subtitle}
          imageUrl={entity.imageUrl}
          spotifyUrl={entity.spotifyUrl}
          isFollowed={isFollowed}
          onFollow={() => setIsFollowed(!isFollowed)}
        />

        {/* KPI Bar */}
        <EntityKPIBar kpis={entity.kpis} />

        {/* Tabbed Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="tracks">Tracks</TabsTrigger>
            <TabsTrigger value="placements">Placements</TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              Analyses
              {!isPro && <Lock className="w-3 h-3" />}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Score Gauge */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Score Performance</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ScoreGauge score={entity.score} label="Score Global" size="lg" />
                </CardContent>
              </Card>

              {/* Top Tracks */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Music className="w-5 h-5 text-primary" />
                    Top Tracks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {entity.topTracks.map((track, index) => (
                      <div key={track.name} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <span className="text-2xl font-bold text-muted-foreground w-8">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium">{track.name}</p>
                          <p className="text-sm text-muted-foreground">{track.streams} streams</p>
                        </div>
                        <Badge variant="secondary">Pop: {track.popularity}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Playlist Placements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ListMusic className="w-5 h-5 text-primary" />
                  Placements Playlists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {entity.playlists.map((playlist) => (
                    <div key={playlist.name} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                      <p className="font-medium">{playlist.name}</p>
                      <p className="text-sm text-muted-foreground">{playlist.followers} followers</p>
                      <Badge variant="outline" className="mt-2">Position #{playlist.position}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracks">
            <Card>
              <CardHeader>
                <CardTitle>Tous les Tracks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Liste complète des tracks à venir...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="placements">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Historique détaillé des placements à venir...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            {isPro ? (
              <Card>
                <CardHeader>
                  <CardTitle>Analyses Détaillées</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Analyses PRO à venir...</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-dashed">
                <CardContent className="py-12 text-center">
                  <Lock className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Fonctionnalité PRO</h3>
                  <p className="text-muted-foreground mb-4">
                    Accédez aux analyses détaillées avec un abonnement PRO
                  </p>
                  <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                    Passer à PRO
                  </Badge>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EntityDetail;
