import { usePersona } from '@/hooks/usePersona';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { KPICard } from './KPICard';
import { AlertCard } from './AlertCard';
import { ActionCard } from './ActionCard';
import { 
  Users, 
  Music, 
  ListMusic, 
  TrendingUp, 
  Target,
  Lightbulb,
  BarChart3,
  Sparkles
} from 'lucide-react';

export const DashboardOverview = () => {
  const { getPersonaInfo } = usePersona();
  const personaInfo = getPersonaInfo();
  const isPro = false; // Mock

  // Mock data - would be fetched based on persona
  const kpis = [
    { icon: Users, label: 'Followers', value: '24.5K', trend: '+5.2%', trendUp: true },
    { icon: Music, label: 'Tracks suivis', value: '156', trend: '+12', trendUp: true },
    { icon: ListMusic, label: 'Playlists', value: '32', trend: '+3', trendUp: true },
    { icon: TrendingUp, label: 'Score Momentum', value: '8.2/10', trend: '+0.4', trendUp: true, isPro: true, isLocked: !isPro },
  ];

  const alerts = [
    { type: 'milestone' as const, title: '🚀 Nouveau cap atteint', description: 'Votre track "Summer Vibes" a dépassé 100K saves', time: '2h' },
    { type: 'release' as const, title: '🎵 Nouvelle sortie', description: 'Travis Scott vient de sortir un nouveau single', time: '5h' },
    { type: 'playlist' as const, title: '📋 Placement détecté', description: 'Votre track ajoutée à "Chill Hits" (+50K followers)', time: '1j' },
  ];

  const actions = [
    { 
      icon: Music, 
      title: 'Ajouter un nouveau track', 
      description: 'Enrichissez votre bibliothèque avec vos dernières créations.',
      actionLabel: 'Ajouter'
    },
    { 
      icon: BarChart3, 
      title: 'Analyser vos performances', 
      description: 'Découvrez vos métriques détaillées et tendances.',
      actionLabel: 'Analyser',
      isPro: true,
      isLocked: !isPro
    },
    { 
      icon: Target, 
      title: 'Découvrir des opportunités', 
      description: 'Trouvez des playlists et collaborations adaptées.',
      actionLabel: 'Explorer',
      isPro: true,
      isLocked: !isPro
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Briefing personnalisé</span>
        </div>
        <h2 className="text-2xl font-bold mb-1">
          Bonjour, bienvenue sur votre dashboard
        </h2>
        <p className="text-muted-foreground">
          Profil actif: <span className="font-medium">{personaInfo?.icon} {personaInfo?.label || 'Utilisateur'}</span>
          {' • '}
          Accès: <span className="font-medium">{isPro ? 'PRO' : 'FREE'}</span>
        </p>
      </div>

      {/* KPIs Grid */}
      <section>
        <h3 className="text-lg font-semibold mb-4">📊 Indicateurs Clés</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts & Updates */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🔔 Mises à jour récentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert, index) => (
              <AlertCard key={index} {...alert} />
            ))}
          </CardContent>
        </Card>

        {/* Quick Wins / Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Actions recommandées
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {actions.map((action, index) => (
              <ActionCard key={index} {...action} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
