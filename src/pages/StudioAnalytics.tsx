import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Music2, 
  Eye, 
  Heart,
  ArrowLeft,
  Download,
  Calendar,
  ListMusic,
  Play,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

// Mock data for analytics
const performanceData = [
  { month: "Jan", popularity: 65, followers: 450, saves: 890 },
  { month: "Fév", popularity: 68, followers: 520, saves: 1020 },
  { month: "Mar", popularity: 72, followers: 680, saves: 1340 },
  { month: "Avr", popularity: 75, followers: 890, saves: 1680 },
  { month: "Mai", popularity: 78, followers: 1120, saves: 2100 },
  { month: "Juin", popularity: 82, followers: 1380, saves: 2450 },
];

const topPlaylists = [
  { name: "Afrobeats Vibes 2024", popularity: 85, growth: "+18%", followers: 2340 },
  { name: "Chill Makossa", popularity: 78, growth: "+12%", followers: 1890 },
  { name: "Urban Cameroun", popularity: 74, growth: "+25%", followers: 1560 },
  { name: "Bikutsi Classics", popularity: 68, growth: "+8%", followers: 1120 },
  { name: "New Wave Africa", popularity: 62, growth: "+32%", followers: 980 },
];

const genreDistribution = [
  { name: "Afrobeats", value: 35, color: "hsl(var(--primary))" },
  { name: "Makossa", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Bikutsi", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Hip-Hop", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Autres", value: 8, color: "hsl(var(--chart-5))" },
];

const audienceData = [
  { country: "Cameroun", percentage: 45 },
  { country: "France", percentage: 22 },
  { country: "Nigeria", percentage: 12 },
  { country: "Côte d'Ivoire", percentage: 8 },
  { country: "Autres", percentage: 13 },
];

const chartConfig = {
  popularity: {
    label: "Popularité",
    color: "hsl(var(--primary))",
  },
  followers: {
    label: "Followers",
    color: "hsl(var(--chart-2))",
  },
  saves: {
    label: "Saves",
    color: "hsl(var(--chart-3))",
  },
};

const StudioAnalytics = () => {
  const [period, setPeriod] = useState("6m");

  return (
    <DashboardLayout title="Analytics Studio">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/studio">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Analytics Globales</h1>
              <p className="text-muted-foreground">Performance de toutes vos playlists</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-[140px]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 derniers jours</SelectItem>
                <SelectItem value="30d">30 derniers jours</SelectItem>
                <SelectItem value="3m">3 mois</SelectItem>
                <SelectItem value="6m">6 mois</SelectItem>
                <SelectItem value="1y">1 an</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Exporter
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={TrendingUp}
            label="Popularité Moyenne"
            value="82"
            trend="+8.5%"
            trendUp={true}
          />
          <StatCard
            icon={Users}
            label="Followers Totaux"
            value="8,240"
            trend="+18.2%"
            trendUp={true}
          />
          <StatCard
            icon={Heart}
            label="Saves Totaux"
            value="9,480"
            trend="+32.1%"
            trendUp={true}
          />
          <StatCard
            icon={ListMusic}
            label="Playlists Actives"
            value="12"
            trend="+2"
            trendUp={true}
          />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Over Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                Évolution des Performances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorPopularity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="popularity" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorPopularity)" 
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Genre Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Music2 className="w-5 h-5 text-primary" />
                Distribution par Genre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genreDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {genreDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {genreDistribution.map((genre) => (
                  <div key={genre.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: genre.color }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {genre.name} ({genre.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Playlists & Audience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Playlists */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="w-5 h-5 text-primary" />
                Top Playlists
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topPlaylists.map((playlist, index) => (
                <div 
                  key={playlist.name}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{playlist.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {playlist.followers.toLocaleString()} followers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Pop: {playlist.popularity}</p>
                    <p className="text-sm text-green-600">{playlist.growth}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Audience Geography */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="w-5 h-5 text-primary" />
                Répartition Géographique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {audienceData.map((country) => (
                <div key={country.country} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{country.country}</span>
                    <span className="text-muted-foreground">{country.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${country.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Engagement Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Share2 className="w-5 h-5 text-primary" />
              Métriques d'Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <BarChart data={performanceData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="followers" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="saves" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudioAnalytics;
