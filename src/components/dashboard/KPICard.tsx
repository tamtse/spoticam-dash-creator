import { LucideIcon, TrendingUp, TrendingDown, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface KPICardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  isPro?: boolean;
  isLocked?: boolean;
}

export const KPICard = ({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  trendUp,
  isPro,
  isLocked 
}: KPICardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all hover:shadow-md",
      isLocked && "opacity-75"
    )}>
      <CardContent className="p-5">
        {isLocked && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5" />
              <span className="text-xs font-medium">PRO</span>
            </div>
          </div>
        )}
        
        <div className="flex items-start justify-between mb-3">
          <div className={cn(
            "p-2.5 rounded-xl",
            isPro ? "bg-amber-500/10" : "bg-primary/10"
          )}>
            <Icon className={cn(
              "w-5 h-5",
              isPro ? "text-amber-500" : "text-primary"
            )} />
          </div>
          {trend && (
            <div className={cn(
              "flex items-center gap-1 text-sm font-medium",
              trendUp ? "text-green-600" : "text-red-500"
            )}>
              {trendUp ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{trend}</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};
