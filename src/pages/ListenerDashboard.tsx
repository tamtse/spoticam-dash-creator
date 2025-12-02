import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from "@/components/StatCard";
import { FeaturedPlaylist } from "@/components/FeaturedPlaylist";
import { ArtistCard } from "@/components/ArtistCard";
import { TrackItem } from "@/components/TrackItem";
import { Clock, Music, Heart, Award, MessageSquare, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ListenerDashboard = () => {
  const stats = [
    { icon: Clock, label: "Listening Time", value: "124h 32m", trend: "+12%", trendUp: true },
    { icon: Music, label: "Tracks Played", value: "1,247", trend: "+23", trendUp: true },
    { icon: Heart, label: "Favorites", value: "342", trend: "+18", trendUp: true },
    { icon: Award, label: "Badges Earned", value: "12", trend: "+3", trendUp: true },
  ];

  const artists = [
    { name: "The Creator", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" },
    { name: "21 Savage", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop" },
    { name: "6ix9ine", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop" },
  ];

  const recentTracks = [
    { title: "Mr. Right Now", artist: "21 Savage", duration: "3:21", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" },
    { title: "Therapy", artist: "Oneheart", duration: "2:02", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop" },
  ];

  const badges = [
    { name: "Early Adopter", icon: Award, color: "text-yellow-500" },
    { name: "Music Lover", icon: Heart, color: "text-red-500" },
    { name: "Community Star", icon: Vote, color: "text-blue-500" },
  ];

  return (
    <DashboardLayout title="Listener Dashboard">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Featured Recommendations */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
          <FeaturedPlaylist />
        </div>

        {/* Engagement Badges */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Your Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                  <span className="text-sm font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Favorite Artists */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Favorite Artists</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                {artists.map((artist) => (
                  <ArtistCard key={artist.name} {...artist} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle>Recently Played</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentTracks.map((track, index) => (
                  <TrackItem key={index} {...track} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Modules */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle>Get Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button className="flex items-center gap-2">
                <Vote className="w-4 h-4" />
                Vote for Tracks
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Leave Comments
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Join Fan Events
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ListenerDashboard;