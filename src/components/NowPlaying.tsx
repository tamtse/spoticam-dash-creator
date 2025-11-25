import { Card, CardContent } from "@/components/ui/card";
import { Music2, Heart, ListMusic } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NowPlaying = () => {
  return (
    <Card className="card-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Music2 className="w-4 h-4" />
          <span className="text-sm font-medium">Now Playing</span>
        </div>
        
        <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4 card-shadow">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" 
            alt="Now Playing"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg">Snowfall</h3>
            <p className="text-sm text-muted-foreground">Oneheart</p>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <Button size="icon" variant="ghost">
              <Heart className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <ListMusic className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
