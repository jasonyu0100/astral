import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesChannelInputRight } from './chat-action/main';
import { SpacesChannelInputText } from './chat-input/main';
import { SpacesChannelInputLeft } from './role-select/main';

export function SpacesChannelInput() {
  return (
    <GlassAreaContainer
      name={SpacesChannelInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center space-x-[2rem]`}
    >
      <SpacesChannelInputLeft />
      <SpacesChannelInputText />
      <SpacesChannelInputRight />
    </GlassAreaContainer>
  );
}
