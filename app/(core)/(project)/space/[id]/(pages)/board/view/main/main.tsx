import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceBoardBodyCore } from './core/main';
import { SpaceBoardChapterNavigation } from './navigation/main';

export function SpaceBoardMain() {
  return (
    <GlassAreaContainer
      name={SpaceBoardMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceBoardBodyCore />
      <SpaceBoardChapterNavigation />
    </GlassAreaContainer>
  );
}
