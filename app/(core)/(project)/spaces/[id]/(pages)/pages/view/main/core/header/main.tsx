import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesPagesHeaderLeft } from './left/main';
import { SpacesPagesHeaderMiddle } from './middle/main';
import { SpacesPagesHeaderRight } from './right/main';

export function SpacesPagesHeader() {
  return (
    <GlassAreaContainer
      name={SpacesPagesHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesPagesHeaderLeft />
      <SpacesPagesHeaderMiddle />
      <SpacesPagesHeaderRight />
    </GlassAreaContainer>
  );
}
