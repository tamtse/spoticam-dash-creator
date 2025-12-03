import { useState, useEffect } from 'react';

export type PersonaType = 'artist' | 'manager' | 'label' | 'curator' | 'journalist' | 'listener' | null;

interface PersonaInfo {
  id: PersonaType;
  label: string;
  description: string;
  icon: string;
  dashboardPath: string;
}

export const PERSONAS: PersonaInfo[] = [
  {
    id: 'artist',
    label: 'Artiste',
    description: 'Gérez votre carrière, suivez vos performances et découvrez des opportunités.',
    icon: '🎤',
    dashboardPath: '/artist',
  },
  {
    id: 'manager',
    label: 'Manager',
    description: 'Supervisez plusieurs artistes, suivez les performances du portfolio et identifiez les tendances.',
    icon: '📊',
    dashboardPath: '/manager',
  },
  {
    id: 'label',
    label: 'Label / A&R',
    description: 'Découvrez de nouveaux talents, gérez votre roster et analysez les tendances du marché.',
    icon: '🏢',
    dashboardPath: '/label',
  },
  {
    id: 'curator',
    label: 'Curateur',
    description: 'Découvrez de nouveaux talents et gérez vos playlists avec précision.',
    icon: '🎧',
    dashboardPath: '/curator',
  },
  {
    id: 'journalist',
    label: 'Journaliste',
    description: 'Trouvez des histoires émergentes et contactez des artistes en vogue.',
    icon: '✍️',
    dashboardPath: '/journalist',
  },
  {
    id: 'listener',
    label: 'Auditeur',
    description: 'Explorez la musique, suivez vos artistes favoris et découvrez des recommandations.',
    icon: '🎵',
    dashboardPath: '/listener',
  },
];

const PERSONA_STORAGE_KEY = 'spoticam_persona';
const ONBOARDING_COMPLETE_KEY = 'spoticam_onboarding_complete';

export const usePersona = () => {
  const [persona, setPersonaState] = useState<PersonaType>(() => {
    const stored = localStorage.getItem(PERSONA_STORAGE_KEY);
    return (stored as PersonaType) || null;
  });

  const [isOnboardingComplete, setIsOnboardingComplete] = useState(() => {
    return localStorage.getItem(ONBOARDING_COMPLETE_KEY) === 'true';
  });

  const setPersona = (newPersona: PersonaType) => {
    setPersonaState(newPersona);
    if (newPersona) {
      localStorage.setItem(PERSONA_STORAGE_KEY, newPersona);
    } else {
      localStorage.removeItem(PERSONA_STORAGE_KEY);
    }
  };

  const completeOnboarding = () => {
    localStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
    setIsOnboardingComplete(true);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_COMPLETE_KEY);
    localStorage.removeItem(PERSONA_STORAGE_KEY);
    setIsOnboardingComplete(false);
    setPersonaState(null);
  };

  const getPersonaInfo = () => {
    return PERSONAS.find((p) => p.id === persona) || null;
  };

  return {
    persona,
    setPersona,
    isOnboardingComplete,
    completeOnboarding,
    resetOnboarding,
    getPersonaInfo,
  };
};
