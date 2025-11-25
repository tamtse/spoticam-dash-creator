import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { FileText, TrendingUp, Eye, Users, Search, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const JournalistDashboard = () => {
  const stats = [
    { icon: FileText, label: "Published Stories", value: "156", trend: "+12", trendUp: true },
    { icon: Eye, label: "Total Views", value: "2.4M", trend: "+18%", trendUp: true },
    { icon: TrendingUp, label: "Viral Rate", value: "23%", trend: "+5%", trendUp: true },
    { icon: Users, label: "Artist Contacts", value: "342", trend: "+28", trendUp: true },
  ];

  const emergingArtists = [
    { name: "Rising Producer", genre: "Electronic", momentum: 95, followers: "12.5K" },
    { name: "Indie Sensation", genre: "Indie Rock", momentum: 88, followers: "24.3K" },
    { name: "Jazz Innovator", genre: "Jazz Fusion", momentum: 92, followers: "8.7K" },
  ];

  const recentStories = [
    { title: "The Rise of Lo-Fi Hip Hop", views: "45K", date: "2 days ago", status: "Published" },
    { title: "Electronic Music Trends 2024", views: "62K", date: "1 week ago", status: "Published" },
    { title: "Interview with Rising Stars", views: "38K", date: "3 days ago", status: "Published" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Journalist Dashboard</h1>
            <p className="text-muted-foreground">Discover stories and emerging talents</p>
          </div>

          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            {/* Advanced Search */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Advanced Artist Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input placeholder="Search by genre, region, or popularity..." className="flex-1" />
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Emerging Artists */}
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Emerging Talents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {emergingArtists.map((artist, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{artist.name}</h4>
                            <p className="text-sm text-muted-foreground">{artist.genre}</p>
                            <p className="text-sm text-muted-foreground">{artist.followers} followers</p>
                          </div>
                          <Badge className="bg-primary/20 text-primary">
                            {artist.momentum}% momentum
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Stories */}
              <Card className="card-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Stories</CardTitle>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Story
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStories.map((story, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold">{story.title}</h4>
                            <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
                              <span>{story.views} views</span>
                              <span>•</span>
                              <span>{story.date}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">{story.status}</Badge>
                        </div>
                        <Button size="sm" variant="outline" className="mt-3 w-full">
                          View Analytics
                        </Button>
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
                    <Search className="w-4 h-4" />
                    Find Story Ideas
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Artist
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Trending Topics
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

export default JournalistDashboard;
