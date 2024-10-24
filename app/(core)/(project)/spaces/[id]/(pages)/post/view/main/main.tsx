import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesPostCore } from './core/main';
import { SpacesPostNavigation } from './navigation/main';

export function SpacesPostMain() {
  return (
    <GlassAreaContainer
      name={SpacesPostMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesPostCore />
      <SpacesPostNavigation />
    </GlassAreaContainer>
  );
}
