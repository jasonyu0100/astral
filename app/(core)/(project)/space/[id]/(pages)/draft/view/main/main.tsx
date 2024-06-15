import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceDraftBodyCore } from './core/main';
import { SpaceDraftChapterNavigation } from './navigation/main';

export function SpaceDraftMain() {
  return (
    <GlassAreaContainer
      name={SpaceDraftMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceDraftBodyCore />
      <SpaceDraftChapterNavigation />
    </GlassAreaContainer>
  );
}
