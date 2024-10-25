import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesViewBodyCore } from './core/main';
import { SpacesViewNavigation } from './navigation/main';

export function SpacesViewMain() {
  return (
    <GlassAreaContainer
      name={SpacesViewMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesViewBodyCore />
      <SpacesViewNavigation />
    </GlassAreaContainer>
  );
}
