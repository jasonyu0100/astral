import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesSpaceBodyCore } from './core/main';
import { SpacesSpaceNavigation } from './navigation/main';

export function SpacesSpaceMain() {
  return (
    <GlassAreaContainer
      name={SpacesSpaceMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesSpaceBodyCore />
      <SpacesSpaceNavigation />
    </GlassAreaContainer>
  );
}
