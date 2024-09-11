import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesJourneyHeaderLeft } from './left/main';
import { SpacesJourneyHeaderRight } from './right/main';

export function SpacesJourneyHeader() {
  return (
    <GlassAreaContainer
      name={SpacesJourneyHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesJourneyHeaderLeft />
      {/* <SpacesJourneyHeaderMiddle /> */}
      <SpacesJourneyHeaderRight />
    </GlassAreaContainer>
  );
}
