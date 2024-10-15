import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesMapBodyCore } from './core/main';
import { SpacesMapNavigation } from './navigation/main';

export function SpacesMapMain() {
  return (
    <GlassAreaContainer
      name={SpacesMapMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesMapBodyCore />
      <SpacesMapNavigation />
    </GlassAreaContainer>
  );
}
