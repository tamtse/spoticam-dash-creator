import { TrendingUp, Music, ListMusic, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

type AlertType = 'milestone' | 'release' | 'playlist' | 'general';

interface AlertCardProps {
  type: AlertType;
  title: string;
  description: string;
  time?: string;
}

const alertConfig: Record<AlertType, { icon: typeof TrendingUp; color: string }> = {
  milestone: { icon: TrendingUp, color: 'text-green-500 bg-green-500/10' },
  release: { icon: Music, color: 'text-blue-500 bg-blue-500/10' },
  playlist: { icon: ListMusic, color: 'text-purple-500 bg-purple-500/10' },
  general: { icon: Bell, color: 'text-amber-500 bg-amber-500/10' },
};

export const AlertCard = ({ type, title, description, time }: AlertCardProps) => {
  const config = alertConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className={cn("p-2 rounded-lg", config.color)}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-sm text-muted-foreground truncate">{description}</p>
      </div>
      {time && (
        <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
      )}
    </div>
  );
};
