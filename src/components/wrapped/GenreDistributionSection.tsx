import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { genreDistribution } from '@/data/wrappedCameroun2025';
import { Music, Users } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface GenreDistributionSectionProps {
  fullView?: boolean;
}

export const GenreDistributionSection = ({ fullView }: GenreDistributionSectionProps) => {
  return (
    <Card className={fullView ? 'col-span-full' : ''}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Music className="w-5 h-5 text-primary" />
          Distribution des Genres
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={fullView ? 'grid lg:grid-cols-2 gap-8' : ''}>
          {/* Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genreDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="percentage"
                  nameKey="genre"
                >
                  {genreDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold">{data.genre}</p>
                          <p className="text-sm text-muted-foreground">{data.percentage}% de la scène</p>
                          <p className="text-sm text-muted-foreground">{data.artistCount} artistes</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Genre List */}
          <div className="space-y-3 mt-4 lg:mt-0">
            {genreDistribution.map((genre) => (
              <div key={genre.genre} className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: genre.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{genre.genre}</span>
                    <span className="text-sm font-semibold">{genre.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${genre.percentage}%`,
                        backgroundColor: genre.color 
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Users className="w-3 h-3" />
                  {genre.artistCount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {fullView && (
          <div className="mt-8 p-4 rounded-xl bg-muted/50">
            <h4 className="font-semibold mb-2">Aperçu des genres dominants</h4>
            <p className="text-sm text-muted-foreground">
              L'<strong>Afrobeat</strong> et l'<strong>Afropop</strong> dominent la scène camerounaise en 2025, 
              représentant ensemble 60% des artistes. Les genres traditionnels comme le <strong>Makossa</strong> et 
              le <strong>Bikutsi</strong> maintiennent une présence significative avec 25% combinés, témoignant 
              de la richesse culturelle du Cameroun.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
