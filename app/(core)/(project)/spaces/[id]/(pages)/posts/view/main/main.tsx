import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesPostsCore } from './core/main';

export function SpacesPostsMain() {
  return (
    <GlassAreaContainer
      name={SpacesPostsMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesPostsCore />
      {/* <SpacesPostsNavigation /> */}
    </GlassAreaContainer>
  );
}
