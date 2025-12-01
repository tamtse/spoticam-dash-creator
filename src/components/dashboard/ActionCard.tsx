import { LucideIcon, ArrowRight, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
  isPro?: boolean;
  isLocked?: boolean;
}

export const ActionCard = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  isPro,
  isLocked
}: ActionCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-md transition-all",
      isLocked && "opacity-75"
    )}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn(
            "p-3 rounded-xl shrink-0",
            isPro ? "bg-amber-500/10" : "bg-primary/10"
          )}>
            <Icon className={cn(
              "w-6 h-6",
              isPro ? "text-amber-500" : "text-primary"
            )} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            <Button 
              variant={isLocked ? "outline" : "default"} 
              size="sm"
              onClick={onAction}
              disabled={isLocked}
              className="gap-2"
            >
              {isLocked ? (
                <>
                  <Lock className="w-4 h-4" />
                  PRO Only
                </>
              ) : (
                <>
                  {actionLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
