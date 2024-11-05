import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpaceSpaceHeaderLeft } from './left/main';
import { SpaceSpaceHeaderMiddle } from './middle/main';
import { SpaceSpaceHeaderRight } from './right/main';

export function SpaceSpaceHeader() {
  return (
    <GlassAreaContainer
      name={SpaceSpaceHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpaceSpaceHeaderLeft />
      <SpaceSpaceHeaderMiddle />
      <SpaceSpaceHeaderRight />
    </GlassAreaContainer>
  );
}
