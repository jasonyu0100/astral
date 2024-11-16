import { SpacesIdeasChat } from './chat/main';
import { SpacesIdeasPalette } from './palette/main';
import { SpacesIdeasSave } from './save/main';
import { SpacesIdeasZoom } from './zoom/main';

export function SpacesIdeasInterface() {
  return (
    <>
      <SpacesIdeasPalette />
      <SpacesIdeasSave />
      <SpacesIdeasChat />
      <SpacesIdeasZoom />
    </>
  );
}
