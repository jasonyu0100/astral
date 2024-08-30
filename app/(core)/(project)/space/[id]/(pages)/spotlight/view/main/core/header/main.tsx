import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceSpotlightHeaderLeft } from './left/main';
import { SpaceSpotlightHeaderMiddle } from './middle/main';
import { SpaceSpotlightHeaderRight } from './right/main';

export function SpaceSpotlightHeader() {
  return (
    <GlassAreaContainer
      name={SpaceSpotlightHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceSpotlightHeaderLeft />
      <SpaceSpotlightHeaderMiddle />
      <SpaceSpotlightHeaderRight />
    </GlassAreaContainer>
  );
}
