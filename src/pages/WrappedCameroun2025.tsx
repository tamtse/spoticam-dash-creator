import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TopArtistsSection } from '@/components/wrapped/TopArtistsSection';
import { GenreDistributionSection } from '@/components/wrapped/GenreDistributionSection';
import { NewTalentsSection } from '@/components/wrapped/NewTalentsSection';
import { GlobalStatsSection } from '@/components/wrapped/GlobalStatsSection';
import { TrendsSection } from '@/components/wrapped/TrendsSection';
import { Music, TrendingUp, Users, Sparkles, BarChart3 } from 'lucide-react';

const WrappedCameroun2025 = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout title="">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 p-8 mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              2025
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Spoticam Wrapped
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Cameroun 2025
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Découvrez les artistes, genres et tendances qui ont marqué la scène musicale camerounaise cette année.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-2 bg-transparent p-0">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Vue d'ensemble</span>
          </TabsTrigger>
          <TabsTrigger 
            value="artists" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Top Artistes</span>
          </TabsTrigger>
          <TabsTrigger 
            value="genres" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
          >
            <Music className="w-4 h-4" />
            <span className="hidden sm:inline">Genres</span>
          </TabsTrigger>
          <TabsTrigger 
            value="talents" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Nouveaux Talents</span>
          </TabsTrigger>
          <TabsTrigger 
            value="trends" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="hidden sm:inline">Tendances</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <GlobalStatsSection />
          <div className="grid lg:grid-cols-2 gap-8">
            <TopArtistsSection limit={5} />
            <GenreDistributionSection />
          </div>
          <NewTalentsSection limit={4} />
        </TabsContent>

        <TabsContent value="artists">
          <TopArtistsSection />
        </TabsContent>

        <TabsContent value="genres">
          <GenreDistributionSection fullView />
        </TabsContent>

        <TabsContent value="talents">
          <NewTalentsSection />
        </TabsContent>

        <TabsContent value="trends">
          <TrendsSection />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default WrappedCameroun2025;
