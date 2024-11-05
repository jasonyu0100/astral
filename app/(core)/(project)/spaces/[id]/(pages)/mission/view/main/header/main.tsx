import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesMissionHeaderLeft } from './left/main';
import { SpacesMissionHeaderMiddle } from './middle/main';
import { SpacesMissionHeaderRight } from './right/main';

export function SpacesMissionHeader() {
  return (
    <GlassAreaContainer
      name={SpacesMissionHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesMissionHeaderLeft />
      <SpacesMissionHeaderMiddle />
      <SpacesMissionHeaderRight />
    </GlassAreaContainer>
  );
}
