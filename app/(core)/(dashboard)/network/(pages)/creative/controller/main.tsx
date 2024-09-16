import { createContext, useState } from 'react';

export enum NetworkCreativeMeaning {
  Peak = '🚀 - Peak',
  Central = '🔗 - Central',
  Entry = '🔑 - Entry',
  Peripheral = '🌍 - Peripheral',
  Bridge = '🌉 - Bridge',
}

export enum NetworkCreativeAura {
  Full = '🌕 - Full',
  Waxing = '🌖 - Waxing',
  Half = '🌗 - Half',
  Waning = '🌘 - Waning',
  New = '🌑 - New',
}

export enum NetworkCreativeDegree {
  'Any' = 'Any',
  'First' = 'First',
  'Second' = 'Second',
  'Third' = 'Third',
  'Fourth' = 'Fourth',
  'Fifth' = 'Fifth',
  'Sixth' = 'Sixth',
  'Seventh' = 'Seventh',
  'Eighth' = 'Eighth',
  'Ninth' = 'Ninth',
}

interface NetworkCreativeControllerState {
  meaning: NetworkCreativeMeaning;
  aura: NetworkCreativeAura;
  degree: NetworkCreativeDegree;
}

interface NetworkCreativeControllerActions {
  updateMeaning: (scale: NetworkCreativeMeaning) => void;
  updateAura: (guild: NetworkCreativeAura) => void;
  updateDegree: (degree: NetworkCreativeDegree) => void;
}

interface NetworkCreativeController {
  state: NetworkCreativeControllerState;
  actions: NetworkCreativeControllerActions;
}

export const ContextForNetworkCreative = createContext(
  {} as NetworkCreativeController,
);

export function useControllerForNetworkCreative() {
  const [meaning, setMeaning] = useState<NetworkCreativeMeaning>(
    NetworkCreativeMeaning.Peak,
  );
  const [aura, setAura] = useState<NetworkCreativeAura>(
    NetworkCreativeAura.Full,
  );
  const [degree, setDegree] = useState<NetworkCreativeDegree>(
    NetworkCreativeDegree.Any,
  );

  return {
    state: {
      meaning: meaning,
      aura: aura,
      degree: degree,
    },
    actions: {
      updateMeaning: (scale: NetworkCreativeMeaning) => setMeaning(scale),
      updateAura: (guild: NetworkCreativeAura) => setAura(guild),
      updateDegree: (degree: NetworkCreativeDegree) => setDegree(degree),
    },
  };
}
