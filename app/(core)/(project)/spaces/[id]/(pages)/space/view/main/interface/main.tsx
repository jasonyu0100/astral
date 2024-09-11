import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceInputRight } from './chat-action/main';
import { SpacesSpaceInputText } from './chat-input/main';
import { SpacesSpaceInputLeft } from './role-select/main';

export function SpacesSpaceInput() {
  return (
    <GlassAreaContainer
      name={SpacesSpaceInput.name}
      sizeFx='h-[80px] w-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row items-center justify-center space-x-[2rem]`}
    >
      <SpacesSpaceInputLeft />
      <SpacesSpaceInputText />
      <SpacesSpaceInputRight />
    </GlassAreaContainer>
  );
}
