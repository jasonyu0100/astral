import { createContext, useState } from 'react';

export enum NetworkCreativeRelevance {
  Peak = '🚀',
  Central = '🔗',
  Entry = '🔑',
  Peripheral = '🌍',
  Bridge = '🌉',
}

export enum NetworkCreativeState {
  Full = '🌕',
  Waxing = '🌖',
  Half = '🌗',
  Waning = '🌘',
  New = '🌑',
}

export enum NetworkCreativeInfluence {
  'Any',
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
}

interface ControllerState {
  scale: NetworkCreativeRelevance;
  guild: NetworkCreativeState;
  degree: NetworkCreativeInfluence;
}

interface ControllerActions {
  updateScale: (scale: NetworkCreativeRelevance) => void;
  updateGuild: (guild: NetworkCreativeState) => void;
  updateDegree: (degree: NetworkCreativeInfluence) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForNetworkCreative = createContext({} as Controller);

export function useControllerForNetworkCreative() {
  const [scale, setScale] = useState<NetworkCreativeRelevance>(
    NetworkCreativeRelevance.Local,
  );
  const [guild, setGuild] = useState<NetworkCreativeState>(
    NetworkCreativeState.Full,
  );
  const [degree, setDegree] = useState<NetworkCreativeInfluence>(
    NetworkCreativeInfluence.Any,
  );

  return {
    state: {
      scale,
      guild,
      degree,
    },
    actions: {
      updateScale: (scale: NetworkCreativeRelevance) => setScale(scale),
      updateGuild: (guild: NetworkCreativeState) => setGuild(guild),
      updateDegree: (degree: NetworkCreativeInfluence) => setDegree(degree),
    },
  };
}
