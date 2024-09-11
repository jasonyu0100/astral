import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceCore } from './core/main';
import { SpacesSpaceInput } from './interface/main';

export function SpacesSpaceMain() {
  return (
    <GlassAreaContainer
      name={SpacesSpaceMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpacesSpaceCore />
      <SpacesSpaceInput />
    </GlassAreaContainer>
  );
}
