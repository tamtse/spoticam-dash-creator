import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  TrendingUp, 
  Activity, 
  BarChart3,
  Bell,
  Calendar,
  Lightbulb,
  ExternalLink,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Music,
  Star
} from 'lucide-react';

// Mock data for portfolio
const portfolioKPIs = [
  { 
    label: 'Artistes Gérés', 
    value: '8', 
    trend: '+2', 
    trendUp: true,
    icon: Users 
  },
  { 
    label: 'Streams Totaux', 
    value: '2.4M', 
    trend: '+18%', 
    trendUp: true,
    icon: Activity 
  },
  { 
    label: 'Momentum Moyen', 
    value: '7.8/10', 
    trend: '+0.5', 
    trendUp: true,
    icon: TrendingUp 
  },
  { 
    label: 'Croissance Globale', 
    value: '+12.5%', 
    trend: '+3%', 
    trendUp: true,
    icon: BarChart3 
  },
];

const managedArtists = [
  { 
    id: 1,
    name: 'Travis Scott', 
    genre: 'Hip-Hop',
    streams: '1.2M', 
    momentum: 9.2, 
    placements: 45,
    trend: 'up',
    trendValue: '+15%',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'
  },
  { 
    id: 2,
    name: 'Doja Cat', 
    genre: 'Pop/R&B',
    streams: '890K', 
    momentum: 8.7, 
    placements: 38,
    trend: 'up',
    trendValue: '+22%',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=100&h=100&fit=crop'
  },
  { 
    id: 3,
    name: 'The Creator', 
    genre: 'Electronic',
    streams: '245K', 
    momentum: 7.4, 
    placements: 12,
    trend: 'down',
    trendValue: '-5%',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop'
  },
  { 
    id: 4,
    name: 'Rising Star', 
    genre: 'Indie',
    streams: '65K', 
    momentum: 6.8, 
    placements: 5,
    trend: 'up',
    trendValue: '+45%',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop'
  },
];

const alerts = [
  { 
    id: 1,
    type: 'success',
    title: 'Nouveau placement playlist',
    message: 'Travis Scott ajouté à "RapCaviar"',
    time: 'Il y a 2h',
    artist: 'Travis Scott'
  },
  { 
    id: 2,
    type: 'warning',
    title: 'Momentum en baisse',
    message: 'The Creator a perdu 5% de momentum cette semaine',
    time: 'Il y a 5h',
    artist: 'The Creator'
  },
  { 
    id: 3,
    type: 'info',
    title: 'Milestone atteint',
    message: 'Doja Cat a atteint 1M de followers Spotify',
    time: 'Hier',
    artist: 'Doja Cat'
  },
];

const opportunities = [
  { 
    id: 1,
    type: 'Collaboration',
    title: 'Collaboration avec Metro Boomin',
    description: 'Opportunité de featuring pour Travis Scott',
    relevance: 95,
    artists: ['Travis Scott']
  },
  { 
    id: 2,
    type: 'Playlist',
    title: 'Soumission "Chill Vibes"',
    description: 'Playlist éditoriale avec 2.5M followers',
    relevance: 88,
    artists: ['The Creator', 'Rising Star']
  },
  { 
    id: 3,
    type: 'Festival',
    title: 'Coachella 2025',
    description: 'Période de soumission ouverte',
    relevance: 72,
    artists: ['Travis Scott', 'Doja Cat']
  },
];

const upcomingMilestones = [
  { 
    id: 1,
    artist: 'Travis Scott',
    milestone: 'Sortie nouvel album',
    date: '15 Jan 2025',
    daysLeft: 44,
    status: 'on-track'
  },
  { 
    id: 2,
    artist: 'Doja Cat',
    milestone: 'Single "Summer Heat"',
    date: '8 Jan 2025',
    daysLeft: 37,
    status: 'on-track'
  },
  { 
    id: 3,
    artist: 'The Creator',
    milestone: 'EP "Midnight Sessions"',
    date: '20 Dec 2024',
    daysLeft: 18,
    status: 'at-risk'
  },
];

const ManagerDashboard = () => {
  return (
    <DashboardLayout title="Manager Dashboard">
      <div className="space-y-6">
        {/* Portfolio KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioKPIs.map((kpi) => (
            <Card key={kpi.label} className="bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{kpi.label}</span>
                  <kpi.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{kpi.value}</span>
                  <Badge 
                    variant="secondary" 
                    className={kpi.trendUp ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}
                  >
                    {kpi.trendUp ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                    {kpi.trend}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Overview - Takes 2 columns */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Vue d'ensemble du Portfolio
              </CardTitle>
              <Button variant="outline" size="sm">
                Voir tout
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {managedArtists.map((artist) => (
                  <div 
                    key={artist.id} 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold truncate">{artist.name}</h4>
                        <Badge variant="outline" className="text-xs">{artist.genre}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{artist.streams} streams</span>
                        <span>•</span>
                        <span>{artist.placements} placements</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="font-semibold">{artist.momentum}</span>
                      </div>
                      <Badge 
                        variant="secondary"
                        className={artist.trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}
                      >
                        {artist.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                        {artist.trendValue}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alerts & Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Alertes & Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className="p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />}
                      {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />}
                      {alert.type === 'info' && <Activity className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{alert.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm">
                Voir toutes les alertes
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Opportunités Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {opportunities.map((opp) => (
                  <div 
                    key={opp.id}
                    className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Badge variant="secondary" className="mb-2">{opp.type}</Badge>
                        <h4 className="font-semibold">{opp.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{opp.description}</p>
                      </div>
                      <Badge className="bg-primary/10 text-primary">
                        {opp.relevance}% match
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Music className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {opp.artists.join(', ')}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1">Explorer</Button>
                      <Button size="sm" variant="outline">Ignorer</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Milestones à Venir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMilestones.map((milestone) => (
                  <div 
                    key={milestone.id}
                    className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm text-muted-foreground">{milestone.artist}</p>
                        <h4 className="font-semibold">{milestone.milestone}</h4>
                      </div>
                      <Badge 
                        variant={milestone.status === 'on-track' ? 'secondary' : 'destructive'}
                        className={milestone.status === 'on-track' ? 'bg-green-500/10 text-green-600' : ''}
                      >
                        {milestone.status === 'on-track' ? 'En bonne voie' : 'À risque'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {milestone.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {milestone.daysLeft} jours restants
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-3">
                      <div 
                        className={`h-2 rounded-full ${milestone.status === 'on-track' ? 'bg-green-500' : 'bg-amber-500'}`}
                        style={{ width: `${Math.max(10, 100 - milestone.daysLeft)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm">
                Voir le calendrier complet
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Artist Performance Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Classement Performance Artistes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Rang</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Artiste</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Streams</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Momentum</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Placements</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tendance</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {managedArtists
                    .sort((a, b) => b.momentum - a.momentum)
                    .map((artist, index) => (
                      <tr key={artist.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4">
                          <span className={`font-bold ${index < 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                            #{index + 1}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={artist.image} 
                              alt={artist.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium">{artist.name}</p>
                              <p className="text-xs text-muted-foreground">{artist.genre}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">{artist.streams}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-medium">{artist.momentum}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{artist.placements}</td>
                        <td className="py-3 px-4">
                          <Badge 
                            variant="secondary"
                            className={artist.trend === 'up' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}
                          >
                            {artist.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                            {artist.trendValue}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            Voir détails
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ManagerDashboard;