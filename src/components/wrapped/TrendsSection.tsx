import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { monthlyTrends, topCameroonArtists } from '@/data/wrappedCameroun2025';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

export const TrendsSection = () => {
  // Prepare data for artist popularity heatmap
  const artistPopularityData = topCameroonArtists
    .slice(0, 10)
    .map(a => ({
      name: a.name,
      popularity: a.popularity,
      growth: a.followersGrowth,
    }))
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="space-y-6">
      {/* Monthly Trends */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Évolution Mensuelle 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis 
                  dataKey="month" 
                  className="text-xs" 
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  yAxisId="left"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  domain={[45, 70]}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  className="text-xs"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  domain={[10, 18]}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold mb-2">{label} 2025</p>
                          <p className="text-sm text-primary">
                            Popularité moyenne: {payload[0].value}
                          </p>
                          <p className="text-sm text-orange-500">
                            Followers: {payload[1].value}M
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="popularity" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="followers" 
                  stroke="hsl(28, 80%, 52%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(28, 80%, 52%)', strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Popularité moyenne</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(28, 80%, 52%)' }} />
              <span className="text-sm text-muted-foreground">Followers (M)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Artist Popularity Bar Chart */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Popularité des Artistes (Top 10)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={artistPopularityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" horizontal={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={100}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold">{data.name}</p>
                          <p className="text-sm text-primary">Popularité: {data.popularity}</p>
                          <p className="text-sm text-green-600">Croissance: +{data.growth}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="popularity" radius={[0, 4, 4, 0]}>
                  {artistPopularityData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 0 ? 'hsl(var(--primary))' : `hsl(var(--primary) / ${1 - index * 0.08})`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Growth Heatmap */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Croissance des Followers 2025
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {artistPopularityData.map((artist) => {
              const intensity = Math.min(artist.growth / 150, 1);
              return (
                <div 
                  key={artist.name}
                  className="p-4 rounded-xl text-center transition-transform hover:scale-105"
                  style={{
                    backgroundColor: `hsl(150, ${60 + intensity * 30}%, ${45 - intensity * 15}%, ${0.2 + intensity * 0.3})`,
                  }}
                >
                  <p className="font-medium text-sm truncate mb-1">{artist.name}</p>
                  <p className="text-lg font-bold text-green-600">+{artist.growth}%</p>
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center justify-between mt-4 px-2 text-xs text-muted-foreground">
            <span>Croissance modérée</span>
            <div className="flex-1 mx-4 h-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/80" />
            <span>Croissance explosive</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
