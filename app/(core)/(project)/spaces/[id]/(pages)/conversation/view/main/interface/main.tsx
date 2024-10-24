import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesConversationInputRight } from './chat-action/main';
import { SpacesConversationInputText } from './chat-input/main';
import { SpacesConversationInputLeft } from './role-select/main';

export function SpacesConversationInput() {
  return (
    <GlassAreaContainer
      name={SpacesConversationInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center space-x-[2rem]`}
    >
      <SpacesConversationInputLeft />
      <SpacesConversationInputText />
      <SpacesConversationInputRight />
    </GlassAreaContainer>
  );
}
