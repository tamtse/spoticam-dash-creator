import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { Music, TrendingUp, Users, Target, Lightbulb, Edit, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ArtistDashboard = () => {
  const stats = [
    { icon: Music, label: "Tracks in Playlists", value: "47", trend: "+8", trendUp: true },
    { icon: Users, label: "Total Followers", value: "12.4K", trend: "+15%", trendUp: true },
    { icon: TrendingUp, label: "Signability Score", value: "8.2/10", trend: "+0.5", trendUp: true },
    { icon: Target, label: "Opportunities", value: "23", trend: "New", trendUp: true },
  ];

  const playlists = [
    { title: "Indie Vibes", followers: "45.2K", popularity: 87, dateAdded: "2 days ago" },
    { title: "Chill Beats", followers: "32.1K", popularity: 82, dateAdded: "1 week ago" },
    { title: "New Discoveries", followers: "28.5K", popularity: 79, dateAdded: "3 days ago" },
  ];

  const quickWins = [
    { action: "Complete your bio", impact: "High", status: "pending" },
    { action: "Link social media", impact: "Medium", status: "pending" },
    { action: "Add Spotify verification", impact: "High", status: "pending" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Artist Dashboard</h1>
            <p className="text-muted-foreground">Manage your music career and opportunities</p>
          </div>

          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Profile Card */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Artist Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" 
                      alt="Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">The Creator</h3>
                    <Badge className="mb-3">Electronic</Badge>
                    <p className="text-sm text-muted-foreground mb-4">
                      Independent electronic music producer specializing in ambient and downtempo sounds.
                    </p>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Playlists Card */}
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Your Tracks in Playlists</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {playlists.map((playlist, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{playlist.title}</h4>
                          <Badge variant="secondary">{playlist.popularity}% match</Badge>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{playlist.followers} followers</span>
                          <span>•</span>
                          <span>Added {playlist.dateAdded}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Wins */}
              <Card className="card-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <CardTitle>Quick Wins</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickWins.map((win, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">{win.action}</p>
                          <p className="text-sm text-muted-foreground">Impact: {win.impact}</p>
                        </div>
                        <Button size="sm" variant="outline">Complete</Button>
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
                    <Send className="w-4 h-4" />
                    Pitch Track
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Analyze Target Playlists
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

export default ArtistDashboard;
