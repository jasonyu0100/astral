import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesPreviewCore } from './core/main';
import { SpacesPreviewNavigation } from './navigation/main';

export function SpacesPreviewMain() {
  return (
    <GlassAreaContainer
      name={SpacesPreviewMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesPreviewCore />
      <SpacesPreviewNavigation />
    </GlassAreaContainer>
  );
}
