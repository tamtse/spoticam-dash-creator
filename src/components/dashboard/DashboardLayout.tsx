import { ReactNode } from 'react';
import { usePersona, PERSONAS } from '@/hooks/usePersona';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { SidebarProvider } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const { persona, getPersonaInfo } = usePersona();
  const personaInfo = getPersonaInfo();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader 
            title={title} 
            personaLabel={personaInfo?.label} 
            personaIcon={personaInfo?.icon}
          />
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
