import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesFlightHeaderLeft } from './left/main';
import { SpacesFlightHeaderRight } from './right/main';

export function SpacesFlightHeader() {
  return (
    <GlassAreaContainer
      name={SpacesFlightHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesFlightHeaderLeft />
      {/* <SpacesFlightHeaderMiddle /> */}
      <SpacesFlightHeaderRight />
    </GlassAreaContainer>
  );
}
