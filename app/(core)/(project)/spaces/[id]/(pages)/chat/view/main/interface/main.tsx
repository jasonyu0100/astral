import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesChatInputRight } from './chat-action/main';
import { SpacesChatInputText } from './chat-input/main';
import { SpacesChatInputLeft } from './role-select/main';

export function SpacesChatInput() {
  return (
    <GlassAreaContainer
      name={SpacesChatInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center space-x-[2rem]`}
    >
      <SpacesChatInputLeft />
      <SpacesChatInputText />
      <SpacesChatInputRight />
    </GlassAreaContainer>
  );
}
