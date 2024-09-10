import { createContext, useState } from 'react';

export enum HorizonsProjectScale {
  'Local' = '📍',
  'Group' = '👥',
  'Cluster' = '🌌',
}

export enum HorizonsProjectGuild {
  Writing = '🖋️',
  Engineering = '⚙️',
  Art = '🎨',
  Design = '📐',
  Research = '🔬',
}

export enum HorizonsProjectDegree {
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
  scale: HorizonsProjectScale;
  guild: HorizonsProjectGuild;
  degree: HorizonsProjectDegree;
}

interface ControllerActions {
  updateScale: (scale: HorizonsProjectScale) => void;
  updateGuild: (guild: HorizonsProjectGuild) => void;
  updateDegree: (degree: HorizonsProjectDegree) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForHorizonProjects = createContext({} as Controller);

export function useControllerForProjects() {
  const [scale, setScale] = useState<HorizonsProjectScale>(
    HorizonsProjectScale.Local,
  );
  const [guild, setGuild] = useState<HorizonsProjectGuild>(
    HorizonsProjectGuild.Writing,
  );
  const [degree, setDegree] = useState<HorizonsProjectDegree>(
    HorizonsProjectDegree.Any,
  );

  return {
    state: {
      scale,
      guild,
      degree,
    },
    actions: {
      updateScale: (scale: HorizonsProjectScale) => setScale(scale),
      updateGuild: (guild: HorizonsProjectGuild) => setGuild(guild),
      updateDegree: (degree: HorizonsProjectDegree) => setDegree(degree),
    },
  };
}
