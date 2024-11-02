import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpaceInboxHeaderLeft } from './left/main';
import { SpaceInboxHeaderMiddle } from './middle/main';
import { SpaceInboxHeaderRight } from './right/main';

export function SpaceInboxHeader() {
  return (
    <GlassAreaContainer
      name={SpaceInboxHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceInboxHeaderLeft />
      <SpaceInboxHeaderMiddle />
      <SpaceInboxHeaderRight />
    </GlassAreaContainer>
  );
}
