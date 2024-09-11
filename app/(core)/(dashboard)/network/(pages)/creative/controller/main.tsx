import { createContext, useState } from 'react';

export enum NetworkCreativeRelevance {
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

interface ControllerState {
  scale: NetworkCreativeRelevance;
  guild: NetworkCreativeAura;
  degree: NetworkCreativeDegree;
}

interface ControllerActions {
  updateScale: (scale: NetworkCreativeRelevance) => void;
  updateGuild: (guild: NetworkCreativeAura) => void;
  updateDegree: (degree: NetworkCreativeDegree) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForNetworkCreative = createContext({} as Controller);

export function useControllerForNetworkCreative() {
  const [scale, setScale] = useState<NetworkCreativeRelevance>(
    NetworkCreativeRelevance.Peak,
  );
  const [aura, setAura] = useState<NetworkCreativeAura>(
    NetworkCreativeAura.Full,
  );
  const [degree, setDegree] = useState<NetworkCreativeDegree>(
    NetworkCreativeDegree.Any,
  );

  return {
    state: {
      scale,
      guild: aura,
      degree,
    },
    actions: {
      updateScale: (scale: NetworkCreativeRelevance) => setScale(scale),
      updateGuild: (guild: NetworkCreativeAura) => setAura(guild),
      updateDegree: (degree: NetworkCreativeDegree) => setDegree(degree),
    },
  };
}
