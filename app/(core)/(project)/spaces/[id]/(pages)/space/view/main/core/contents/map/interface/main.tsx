import { SpacesSpaceChat } from './chat/main';
import { SpacesSpacePalette } from './palette/main';
import { SpacesSpaceSave } from './save/main';
import { SpacesSpaceZoom } from './zoom/main';

export function SpacesSpaceInterface() {
  return (
    <>
      <SpacesSpacePalette />
      <SpacesSpaceSave />
      <SpacesSpaceChat />
      <SpacesSpaceZoom />
    </>
  );
}
