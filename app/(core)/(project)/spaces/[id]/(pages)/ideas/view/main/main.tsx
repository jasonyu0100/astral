import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesIdeasBodyCore } from './core/main';
import { SpacesIdeasNavigation } from './navigation/main';

export function SpacesIdeasMain() {
  return (
    <GlassAreaContainer
      name={SpacesIdeasMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <SpacesIdeasBodyCore />
      <SpacesIdeasNavigation />
    </GlassAreaContainer>
  );
}
