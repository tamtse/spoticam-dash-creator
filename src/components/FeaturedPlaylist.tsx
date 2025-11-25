import { Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedPlaylist = () => {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground card-shadow">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium opacity-90 mb-2">CURATED PLAYLIST</p>
            <h2 className="text-4xl font-bold mb-4">BLINDING LIGHT</h2>
            <p className="text-sm opacity-90 mb-6 max-w-md">
              Enjoy vivid emotions with this stunning music album. Each track is a story.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">83,012 Likes</span>
              </div>
              <div className="text-sm opacity-90">
                18 Songs, 39 min 43 sec
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
            >
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
