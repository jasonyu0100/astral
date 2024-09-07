import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceFlightHeaderLeft } from './left/main';
import { SpaceFlightHeaderMiddle } from './middle/main';
import { SpaceFlightHeaderRight } from './right/main';

export function SpaceFlightHeader() {
  return (
    <GlassAreaContainer
      name={SpaceFlightHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceFlightHeaderLeft />
      <SpaceFlightHeaderMiddle />
      <SpaceFlightHeaderRight />
    </GlassAreaContainer>
  );
}
