import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from "@/components/StatCard";
import { FeaturedPlaylist } from "@/components/FeaturedPlaylist";
import { ArtistCard } from "@/components/ArtistCard";
import { TrackItem } from "@/components/TrackItem";
import { NowPlaying } from "@/components/NowPlaying";
import { Clock, Music, TrendingUp, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const stats = [
    { icon: Clock, label: "Listening Time", value: "124h 32m", trend: "+12%", trendUp: true },
    { icon: Music, label: "Total Tracks", value: "1,247", trend: "+23", trendUp: true },
    { icon: TrendingUp, label: "Top Genre", value: "Electronic", trend: "New", trendUp: true },
    { icon: Headphones, label: "Playlists", value: "34", trend: "+5", trendUp: true },
  ];

  const artists = [
    { name: "The Creator", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" },
    { name: "21 Savage", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop" },
    { name: "6ix9ine", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop" },
    { name: "Travis Scott", image: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=200&h=200&fit=crop" },
    { name: "OBLADAET", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop" },
  ];

  const recentTracks = [
    { title: "Mr. Right Now", artist: "21 Savage", duration: "3:21", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" },
    { title: "Therapy", artist: "Oneheart", duration: "2:02", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop" },
    { title: "Apathy", artist: "Tezze", duration: "2:02", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" },
  ];

  return (
    <DashboardLayout title="Vue d'ensemble">
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Stats Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          {/* Featured Playlist */}
          <div>
            <FeaturedPlaylist />
          </div>

          {/* Popular Artists */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular artists</h2>
              <Button variant="ghost" className="text-primary">See all</Button>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {artists.map((artist) => (
                <ArtistCard key={artist.name} {...artist} />
              ))}
            </div>
          </div>

          {/* Recently Played */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recently played</h2>
              <Button variant="ghost" className="text-primary">See all</Button>
            </div>
            <div className="space-y-2">
              {recentTracks.map((track, index) => (
                <TrackItem key={index} {...track} />
              ))}
            </div>
          </div>
        </div>

        {/* Now Playing Sidebar */}
        <div className="w-80 flex-shrink-0 hidden xl:block">
          <div className="sticky top-24">
            <NowPlaying />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;