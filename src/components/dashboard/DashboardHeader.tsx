import { Search, Bell, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface DashboardHeaderProps {
  title?: string;
  personaLabel?: string;
  personaIcon?: string;
}

export const DashboardHeader = ({ title, personaLabel, personaIcon }: DashboardHeaderProps) => {
  return (
    <header className="h-16 border-b border-border bg-card px-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        {title && <h1 className="text-lg font-semibold">{title}</h1>}
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Rechercher artistes, playlists, tracks..." 
            className="pl-10 bg-muted/50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Access Badge */}
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          FREE
        </Badge>

        {/* Persona Badge */}
        {personaLabel && (
          <Badge variant="secondary" className="gap-1">
            <span>{personaIcon}</span>
            <span>{personaLabel}</span>
          </Badge>
        )}

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
