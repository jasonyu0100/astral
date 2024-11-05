import { GlassAreaContainer } from '@/components/glass/area/main';

import { SpacesTableCore } from './core/main';
import { SpacesTableNavigation } from './navigation/main';

export function SpacesTableMain() {
  return (
    <GlassAreaContainer
      name={SpacesTableMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesTableCore />
      <SpacesTableNavigation />
    </GlassAreaContainer>
  );
}
