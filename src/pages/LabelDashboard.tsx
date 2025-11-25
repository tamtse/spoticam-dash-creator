import { Sidebar } from "@/components/Sidebar";
import { StatCard } from "@/components/StatCard";
import { Users, Music, AlertCircle, TrendingUp, Plus, FileEdit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LabelDashboard = () => {
  const stats = [
    { icon: Users, label: "Artists", value: "24", trend: "+3", trendUp: true },
    { icon: Music, label: "Albums Released", value: "156", trend: "+12", trendUp: true },
    { icon: TrendingUp, label: "Label Fit Score", value: "7.8/10", trend: "+0.3", trendUp: true },
    { icon: AlertCircle, label: "Pending Tasks", value: "8", trend: "-2", trendUp: true },
  ];

  const artists = [
    { name: "The Creator", albums: 5, status: "Active", fitScore: 8.5 },
    { name: "21 Savage", albums: 8, status: "Active", fitScore: 9.2 },
    { name: "Travis Scott", albums: 12, status: "Active", fitScore: 8.8 },
  ];

  const alerts = [
    { type: "Missing metadata", artist: "The Creator - Album X", priority: "high" },
    { type: "Profile incomplete", artist: "Artist Y", priority: "medium" },
    { type: "Contract renewal", artist: "21 Savage", priority: "high" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Label Dashboard</h1>
            <p className="text-muted-foreground">Manage your catalog and artists</p>
          </div>

          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Artists Catalog */}
              <Card className="card-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Artists Catalog</CardTitle>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Artist
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {artists.map((artist, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{artist.name}</h4>
                            <p className="text-sm text-muted-foreground">{artist.albums} albums</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge variant="secondary">{artist.status}</Badge>
                            <span className="text-sm font-medium text-primary">
                              Fit: {artist.fitScore}/10
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">View Profile</Button>
                          <Button size="sm" variant="outline">Analytics</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alerts & Tasks */}
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    Alerts & Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.map((alert, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Badge variant={alert.priority === "high" ? "destructive" : "secondary"}>
                              {alert.priority}
                            </Badge>
                            <h4 className="font-semibold mt-2">{alert.type}</h4>
                            <p className="text-sm text-muted-foreground">{alert.artist}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="mt-2 w-full">
                          Resolve
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
                    <Plus className="w-4 h-4" />
                    Add Artist
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileEdit className="w-4 h-4" />
                    Enrich Album Metadata
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Analyze DSP Distribution
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

export default LabelDashboard;
