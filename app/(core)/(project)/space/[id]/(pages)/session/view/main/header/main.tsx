import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { SpaceSessionHeaderLeft } from './left/main';
import { SpaceSessionHeaderMiddle } from './middle/main';
import { SpaceSessionHeaderRight } from './right/main';

export function SpaceSessionHeader() {
  return (
    <GlassAreaContainer
      name={SpaceSessionHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceSessionHeaderLeft />
      <SpaceSessionHeaderMiddle />
      <SpaceSessionHeaderRight />
    </GlassAreaContainer>
  );
}
