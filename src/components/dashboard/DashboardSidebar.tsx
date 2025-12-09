import { 
  LayoutDashboard, 
  Compass, 
  Music, 
  Users, 
  ListMusic,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Target,
  Lock,
  Crown,
  Settings,
  LogOut,
  Disc3,
  Inbox,
  PieChart
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { usePersona } from '@/hooks/usePersona';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const baseNavItems = [
  { icon: LayoutDashboard, label: 'Vue d\'ensemble', path: '/dashboard', pro: false },
  { icon: Compass, label: 'Découverte', path: '/dashboard/discovery', pro: false },
  { icon: Music, label: 'Ma Bibliothèque', path: '/dashboard/library', pro: false },
  { icon: TrendingUp, label: 'Tendances', path: '/dashboard/trending', pro: false },
  { icon: Disc3, label: 'Studio', path: '/studio', pro: false },
  { icon: Inbox, label: 'Inbox Pitches', path: '/studio/pitches', pro: false },
  { icon: PieChart, label: 'Analytics Studio', path: '/studio/analytics', pro: false },
];

const proNavItems = [
  { icon: BarChart3, label: 'Analytics Explorer', path: '/dashboard/analytics', pro: true },
  { icon: Lightbulb, label: 'Insights', path: '/dashboard/insights', pro: true },
  { icon: Target, label: 'Opportunités', path: '/dashboard/opportunities', pro: true },
  { icon: ListMusic, label: 'Placements', path: '/dashboard/placements', pro: true },
  { icon: Users, label: 'Comparaison', path: '/dashboard/compare', pro: true },
];

export const DashboardSidebar = () => {
  const { persona } = usePersona();
  const isPro = false; // Mock - would come from subscription state

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4 border-b border-border">
        <NavLink to="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Music className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Spoticam</span>
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        {/* Base Features */}
        <SidebarGroup>
          <SidebarGroupLabel>Fonctionnalités</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {baseNavItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path} 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pro Features */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-500" />
            Premium
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {proNavItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                        !isPro && "opacity-60 cursor-not-allowed"
                      )}
                      activeClassName={isPro ? "bg-primary/10 text-primary font-medium" : ""}
                      onClick={(e) => !isPro && e.preventDefault()}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="flex-1">{item.label}</span>
                      {!isPro && <Lock className="w-4 h-4 text-muted-foreground" />}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink 
                to="/dashboard/settings" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50"
              >
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink 
                to="/" 
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-muted-foreground"
              >
                <LogOut className="w-5 h-5" />
                <span>Déconnexion</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
