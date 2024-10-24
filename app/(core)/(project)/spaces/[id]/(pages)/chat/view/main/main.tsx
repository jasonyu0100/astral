import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesChatCore } from './core/main';
import { SpacesChatInput } from './interface/main';

export function SpacesChatMain() {
  return (
    <GlassAreaContainer
      name={SpacesChatMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpacesChatCore />
      <SpacesChatInput />
    </GlassAreaContainer>
  );
}
