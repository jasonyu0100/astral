import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceJourneyHeaderLeft } from './left/main';
import { SpaceJourneyHeaderRight } from './right/main';

export function SpaceJourneyHeader() {
  return (
    <GlassAreaContainer
      name={SpaceJourneyHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceJourneyHeaderLeft />
      {/* <SpaceJourneyHeaderMiddle /> */}
      <SpaceJourneyHeaderRight />
    </GlassAreaContainer>
  );
}
