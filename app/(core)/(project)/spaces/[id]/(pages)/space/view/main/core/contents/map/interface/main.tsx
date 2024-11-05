import { SpaceSpaceChat } from '../chat/main';
import { SpaceSpacePalette } from '../palette/main';
import { SpaceSpaceSave } from '../save/main';

export function SpaceSpaceInterface() {
  return (
    <>
      <SpaceSpacePalette />
      <SpaceSpaceSave />
      <SpaceSpaceChat />
    </>
  );
}
