import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesSpaceHeaderLeft } from './left/main';
import { SpacesSpaceHeaderMiddle } from './middle/main';
import { SpacesSpaceHeaderRight } from './right/main';

export function SpacesSpaceHeader() {
  return (
    <GlassAreaContainer
      name={SpacesSpaceHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpacesSpaceHeaderLeft />
      <SpacesSpaceHeaderMiddle />
      <SpacesSpaceHeaderRight />
    </GlassAreaContainer>
  );
}
