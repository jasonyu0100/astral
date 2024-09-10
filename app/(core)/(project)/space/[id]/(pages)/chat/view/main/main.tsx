import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceChatCore } from './core/main';
import { SpaceChatInput } from './interface/main';

export function SpaceChatMain() {
  return (
    <GlassAreaContainer
      name={SpaceChatMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpaceChatCore />
      <SpaceChatInput />
    </GlassAreaContainer>
  );
}
