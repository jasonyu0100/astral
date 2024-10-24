import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesConversationCore } from './core/main';
import { SpacesConversationInput } from './interface/main';

export function SpacesConversationMain() {
  return (
    <GlassAreaContainer
      name={SpacesConversationMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpacesConversationCore />
      <SpacesConversationInput />
    </GlassAreaContainer>
  );
}
