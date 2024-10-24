import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesBoardHeaderLeft } from './left/main';
import { SpacesBoardHeaderRight } from './right/main';

export function SpacesBoardHeader() {
  return (
    <GlassAreaContainer
      name={SpacesBoardHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesBoardHeaderLeft />
      {/* <SpacesBoardHeaderMiddle /> */}
      <SpacesBoardHeaderRight />
    </GlassAreaContainer>
  );
}
