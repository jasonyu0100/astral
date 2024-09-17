import { createContext, useState } from 'react';

export enum ExplorerProjectsScope {
  Cluster = '💫 - Cluster',
  Group = '👥 - Group',
  Local = '📍 - Local',
}

export enum ExplorerProjectsGuild {
  Writing = '✍️ - Writing',
  Engineering = '🛠️ - Engineering',
  Art = '🎨 - Art',
  Design = '🖌️ - Design',
  Research = '🔎 - Research',
}

export enum ExplorerProjectsDegree {
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

interface ExplorerProjectsControllerState {
  scope: ExplorerProjectsScope;
  guild: ExplorerProjectsGuild;
  degree: ExplorerProjectsDegree;
}

interface ExplorerProjectsControllerActions {
  updateScope: (scope: ExplorerProjectsScope) => void;
  updateGuild: (guild: ExplorerProjectsGuild) => void;
  updateDegree: (degree: ExplorerProjectsDegree) => void;
}

interface ExplorerProjectsController {
  state: ExplorerProjectsControllerState;
  actions: ExplorerProjectsControllerActions;
}

export const ContextForExplorerProjects = createContext(
  {} as ExplorerProjectsController,
);

export function useControllerForExplorerProjects() {
  const [scope, setScope] = useState<ExplorerProjectsScope>(
    ExplorerProjectsScope.Cluster,
  );
  const [guild, setGuild] = useState<ExplorerProjectsGuild>(
    ExplorerProjectsGuild.Writing,
  );
  const [degree, setDegree] = useState<ExplorerProjectsDegree>(
    ExplorerProjectsDegree.Any,
  );

  return {
    state: {
      scope,
      guild,
      degree,
    },
    actions: {
      updateScope: (scale: ExplorerProjectsScope) => setScope(scale),
      updateGuild: (guild: ExplorerProjectsGuild) => setGuild(guild),
      updateDegree: (degree: ExplorerProjectsDegree) => setDegree(degree),
    },
  };
}
