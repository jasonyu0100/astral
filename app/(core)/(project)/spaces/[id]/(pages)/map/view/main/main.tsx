import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesMapBodyCore } from './core/main';
import { SpacesMapChapterNavigation } from './navigation/main';

export function SpacesMapMain() {
  return (
    <GlassAreaContainer
      name={SpacesMapMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesMapBodyCore />
      <SpacesMapChapterNavigation />
    </GlassAreaContainer>
  );
}
