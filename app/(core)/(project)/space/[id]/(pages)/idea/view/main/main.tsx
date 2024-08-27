import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceIdeaCore } from './core/main';
import { SpaceIdeaInput } from './input/main';

export function SpaceIdeaMain() {
  return (
    <GlassAreaContainer
      name={SpaceIdeaMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpaceIdeaCore />
      <SpaceIdeaInput />
    </GlassAreaContainer>
  );
}
