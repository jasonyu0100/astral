import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesChatHeaderLeft } from './left/main';
import { SpacesChatHeaderMiddle } from './middle/main';
import { SpacesChatHeaderRight } from './right/main';

export function SpacesChatHeader() {
  return (
    <GlassAreaContainer
      name={SpacesChatHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpacesChatHeaderLeft />
      <SpacesChatHeaderMiddle />
      <SpacesChatHeaderRight />
    </GlassAreaContainer>
  );
}
