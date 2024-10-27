import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesSceneBodyCore } from './core/main';
import { SpacesSceneNavigation } from './navigation/main';

export function SpacesSceneMain() {
  return (
    <GlassAreaContainer
      name={SpacesSceneMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesSceneBodyCore />
      <SpacesSceneNavigation />
    </GlassAreaContainer>
  );
}
