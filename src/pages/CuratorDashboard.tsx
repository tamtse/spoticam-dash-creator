import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { Music, Users, Clock, CheckCircle, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CuratorDashboard = () => {
  const stats = [
    { icon: Music, label: "Active Playlists", value: "12", trend: "+2", trendUp: true },
    { icon: Users, label: "Total Followers", value: "287K", trend: "+8%", trendUp: true },
    { icon: Clock, label: "Avg Response Time", value: "2.3 days", trend: "-0.5", trendUp: true },
    { icon: CheckCircle, label: "Acceptance Rate", value: "34%", trend: "+5%", trendUp: true },
  ];

  const playlists = [
    { name: "Indie Vibes", followers: "45.2K", tracks: 87, engagement: 8.5 },
    { name: "Chill Beats", followers: "32.1K", tracks: 124, engagement: 7.8 },
    { name: "New Discoveries", followers: "28.5K", tracks: 56, engagement: 9.2 },
  ];

  const pitches = [
    { artist: "The Creator", track: "Midnight Dreams", genre: "Electronic", relevance: 92 },
    { artist: "New Artist", track: "Summer Vibes", genre: "Indie", relevance: 87 },
    { artist: "Rising Star", track: "City Lights", genre: "Chill", relevance: 95 },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Curator Dashboard</h1>
            <p className="text-muted-foreground">Manage your playlists and submissions</p>
          </div>

          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* My Playlists */}
              <Card className="card-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>My Playlists</CardTitle>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Playlist
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {playlists.map((playlist, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{playlist.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {playlist.followers} followers • {playlist.tracks} tracks
                            </p>
                          </div>
                          <Badge variant="secondary">
                            {playlist.engagement}/10 engagement
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Manage</Button>
                          <Button size="sm" variant="outline">Stats</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pending Pitches */}
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Pending Pitches ({pitches.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pitches.map((pitch, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{pitch.track}</h4>
                            <p className="text-sm text-muted-foreground">by {pitch.artist}</p>
                            <Badge variant="secondary" className="mt-2">{pitch.genre}</Badge>
                          </div>
                          <Badge className="bg-primary/20 text-primary">
                            {pitch.relevance}% match
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="flex-1">Accept</Button>
                          <Button size="sm" variant="outline" className="flex-1">Decline</Button>
                          <Button size="sm" variant="outline">
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Review Pitches
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create Playlist
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Discover Artists
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CuratorDashboard;
