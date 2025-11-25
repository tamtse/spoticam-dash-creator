import { Play, Heart, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrackItemProps {
  title: string;
  artist: string;
  duration: string;
  image: string;
}

export const TrackItem = ({ title, artist, duration, image }: TrackItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group">
      <Button 
        size="icon" 
        variant="ghost" 
        className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-smooth"
      >
        <Play className="w-4 h-4" />
      </Button>
      
      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{title}</p>
        <p className="text-sm text-muted-foreground truncate">{artist}</p>
      </div>
      
      <span className="text-sm text-muted-foreground">{duration}</span>
      
      <Button size="icon" variant="ghost" className="w-8 h-8">
        <Heart className="w-4 h-4" />
      </Button>
      
      <Button size="icon" variant="ghost" className="w-8 h-8">
        <MoreVertical className="w-4 h-4" />
      </Button>
    </div>
  );
};
