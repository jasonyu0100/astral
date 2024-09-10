import { createContext, useState } from 'react';

export enum HorizonProjectScale {
  'Local',
  'Group',
  'Cluster',
}

export enum HorizonProjectGuild {
  'A',
  'B',
  'C',
}

export enum HorizonProjectDegree {
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
  scale: HorizonProjectScale;
  guild: HorizonProjectGuild;
  degree: HorizonProjectDegree;
}

interface ControllerActions {
  updateScale: (scale: HorizonProjectScale) => void;
  updateGuild: (guild: HorizonProjectGuild) => void;
  updateDegree: (degree: HorizonProjectDegree) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForHorizonProjects = createContext({} as Controller);

export function useControllerForProjects() {
  const [scale, setScale] = useState<HorizonProjectScale>(
    HorizonProjectScale.Local,
  );
  const [guild, setGuild] = useState<HorizonProjectGuild>(
    HorizonProjectGuild.A,
  );
  const [degree, setDegree] = useState<HorizonProjectDegree>(
    HorizonProjectDegree.Any,
  );

  return {
    state: {
      scale,
      guild,
      degree,
    },
    actions: {
      updateScale: (scale: HorizonProjectScale) => setScale(scale),
      updateGuild: (guild: HorizonProjectGuild) => setGuild(guild),
      updateDegree: (degree: HorizonProjectDegree) => setDegree(degree),
    },
  };
}
