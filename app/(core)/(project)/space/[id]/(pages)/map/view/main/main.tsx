import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceMapBodyCore } from '../core/main';
import { SpaceMapChapterNavigation } from '../navigation/main';

export function SpaceMapMain() {
  return (
    <GlassAreaContainer
      name={SpaceMapMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceMapBodyCore />
      <SpaceMapChapterNavigation />
    </GlassAreaContainer>
  );
}
