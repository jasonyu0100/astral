import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceChatInputRight } from './chat-action/main';
import { SpaceChatInputText } from './chat-input/main';
import { SpaceChatInputLeft } from './role-select/main';

export function SpaceChatInput() {
  return (
    <GlassAreaContainer
      name={SpaceChatInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center space-x-[2rem]`}
    >
      <SpaceChatInputLeft />
      <SpaceChatInputText />
      <SpaceChatInputRight />
    </GlassAreaContainer>
  );
}
