import { createContext, useState } from 'react';

export enum ExplorerProjectScope {
  Local = '📍 - Local',
  Group = '👥 - Group',
  Cluster = '💫 - Cluster',
}

export enum ExplorerProjectGuild {
  Writing = '✍️ - Writing',
  Engineering = '🛠️ - Engineering',
  Art = '🎨 - Art',
  Design = '🖌️ - Design',
  Research = '🔎 - Research',
}

export enum ExplorerProjectDegree {
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
  scope: ExplorerProjectScope;
  guild: ExplorerProjectGuild;
  degree: ExplorerProjectDegree;
}

interface ControllerActions {
  updateScope: (scope: ExplorerProjectScope) => void;
  updateGuild: (guild: ExplorerProjectGuild) => void;
  updateDegree: (degree: ExplorerProjectDegree) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForExplorerProjects = createContext({} as Controller);

export function useControllerForExplorerProjects() {
  const [scope, setScope] = useState<ExplorerProjectScope>(
    ExplorerProjectScope.Local,
  );
  const [guild, setGuild] = useState<ExplorerProjectGuild>(
    ExplorerProjectGuild.Writing,
  );
  const [degree, setDegree] = useState<ExplorerProjectDegree>(
    ExplorerProjectDegree.Any,
  );

  return {
    state: {
      scope,
      guild,
      degree,
    },
    actions: {
      updateScope: (scale: ExplorerProjectScope) => setScope(scale),
      updateGuild: (guild: ExplorerProjectGuild) => setGuild(guild),
      updateDegree: (degree: ExplorerProjectDegree) => setDegree(degree),
    },
  };
}
