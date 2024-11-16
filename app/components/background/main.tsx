import { useGlobalUser } from '@/logic/store/user/main';
import { useEffect, useState } from 'react';

export enum AppBackgroundLabel {
  Blank = 'Blank',
  Original = 'Original',
  'Original Fade' = 'Original Fade',
  'Original Twilight' = 'Original Twilight',
  'Original Mirage' = 'Original Mirage',
  'Sunset Glow' = 'Sunset Glow',
  'Electric Vibe' = 'Electric Vibe',
  'Midnight Storm' = 'Midnight Storm',
  'Fire & Ice' = 'Fire & Ice',
  'Ultra Violet' = 'Ultra Violet',
}

export function AppBackground({ children }: { children?: React.ReactNode }) {
  const loggedInUser = useGlobalUser((state) => state.user);

  const gradients = {
    Blank: '',
    Original: 'bg-gradient-to-b from-slate-950 from-10% to-purple-900 to-90%',
    'Original Fade':
      'bg-gradient-to-b from-slate-950 from-5% via-slate-800 to-purple-900 to-95%',
    'Original Twilight':
      'bg-gradient-to-br from-slate-900 from-10% via-indigo-950 to-purple-950 to-90%',
    'Original Mirage':
      'bg-gradient-to-tr from-gray-900 from-10% via-slate-950 to-indigo-900 to-80%',
    'Sunset Glow': 'bg-gradient-to-b from-blue-800 from-20% to-red-800 to-80%',
    'Electric Vibe':
      'bg-gradient-to-t from-yellow-500 from-20% to-purple-800 to-80%',
    'Midnight Storm': 'bg-gradient-to-b from-black from-30% to-blue-900 to-90%',
    'Fire & Ice':
      'bg-gradient-to-br from-orange-600 from-30% to-blue-500 to-80%',
    'Ultra Violet':
      'bg-gradient-to-l from-indigo-600 from-10% to-violet-900 to-90%',
  };

  const defaultGradient = gradients['Original'];
  const [gradient, setGradient] = useState(defaultGradient);

  useEffect(() => {
    if (loggedInUser?.theme) {
      const newGradient =
        gradients[loggedInUser.theme as AppBackgroundLabel] || defaultGradient;
      setGradient(newGradient);
      console.log('NEW GRADIENT:', newGradient);
    } else {
      setGradient(defaultGradient);
    }
  }, [loggedInUser?.theme]);

  return (
    <div
      className={`
        relative h-screen w-full
        ${gradient}
      `}
      style={{ filter: 'contrast(1.1)' }}
    >
      {children}
    </div>
  );
}
