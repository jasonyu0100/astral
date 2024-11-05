import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpaceSpaceBodyCore } from './core/main';
import { SpaceSpaceNavigation } from './navigation/main';

export function SpaceSpaceMain() {
  return (
    <GlassAreaContainer
      name={SpaceSpaceMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpaceSpaceBodyCore />
      <SpaceSpaceNavigation />
    </GlassAreaContainer>
  );
}
