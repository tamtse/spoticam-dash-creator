import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersona, PERSONAS, PersonaType } from '@/hooks/usePersona';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();
  const { setPersona, completeOnboarding } = usePersona();
  const [selectedPersona, setSelectedPersona] = useState<PersonaType>(null);

  const handlePersonaSelect = (personaId: PersonaType) => {
    setSelectedPersona(personaId);
  };

  const handleContinue = () => {
    if (selectedPersona) {
      setPersona(selectedPersona);
      completeOnboarding();
      const personaInfo = PERSONAS.find((p) => p.id === selectedPersona);
      navigate(personaInfo?.dashboardPath || '/');
    }
  };

  const handleSkip = () => {
    setPersona('listener');
    completeOnboarding();
    navigate('/listener');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">Spoticam</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bienvenue sur Spoticam
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choisissez votre profil pour personnaliser votre expérience et accéder aux fonctionnalités adaptées à vos besoins.
            </p>
          </div>

          {/* Persona Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERSONAS.map((persona) => (
              <Card
                key={persona.id}
                className={cn(
                  'cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]',
                  selectedPersona === persona.id
                    ? 'ring-2 ring-primary bg-primary/5'
                    : 'hover:bg-muted/50'
                )}
                onClick={() => handlePersonaSelect(persona.id)}
              >
                <CardContent className="p-6 relative">
                  {selectedPersona === persona.id && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className="space-y-3">
                    <span className="text-4xl">{persona.icon}</span>
                    <h3 className="text-xl font-semibold">{persona.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {persona.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={handleContinue}
              disabled={!selectedPersona}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Continuer
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleSkip}
              className="w-full sm:w-auto text-muted-foreground"
            >
              Passer cette étape
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-muted-foreground border-t border-border">
        Vous pourrez modifier votre profil à tout moment dans les paramètres.
      </footer>
    </div>
  );
};

export default Onboarding;
