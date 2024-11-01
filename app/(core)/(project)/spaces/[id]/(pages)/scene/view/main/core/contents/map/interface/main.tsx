import { SpacesSceneChat } from '../chat/main';
import { SpacesSceneInProgress } from '../in-progress/main';
import { SpacesScenePalette } from '../palette/main';
import { SpacesSceneSave } from '../save/main';
import { SpacesSceneStatus } from '../status/main';

export function SpacesSceneInterface() {
  return (
    <>
      <SpacesSceneStatus />
      <SpacesScenePalette />
      <SpacesSceneSave />
      <SpacesSceneChat />
      <SpacesSceneInProgress />
    </>
  );
}
