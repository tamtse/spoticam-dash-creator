import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPIItem {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

interface EntityKPIBarProps {
  kpis: KPIItem[];
}

export const EntityKPIBar = ({ kpis }: EntityKPIBarProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-card rounded-xl border border-border">
      {kpis.map((kpi, index) => (
        <div 
          key={kpi.label}
          className={cn(
            "text-center py-2",
            index < kpis.length - 1 && "md:border-r md:border-border"
          )}
        >
          <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
          <p className="text-xl font-bold">{kpi.value}</p>
          {kpi.trend && (
            <div className={cn(
              "flex items-center justify-center gap-1 text-xs font-medium mt-1",
              kpi.trendUp ? "text-green-600" : "text-red-500"
            )}>
              {kpi.trendUp ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{kpi.trend}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
