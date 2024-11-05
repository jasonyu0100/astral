import { SpacesSpaceChat } from '../chat/main';
import { SpacesSpacePalette } from '../palette/main';
import { SpacesSpaceSave } from '../save/main';

export function SpacesSpaceInterface() {
  return (
    <>
      <SpacesSpacePalette />
      <SpacesSpaceSave />
      <SpacesSpaceChat />
    </>
  );
}
