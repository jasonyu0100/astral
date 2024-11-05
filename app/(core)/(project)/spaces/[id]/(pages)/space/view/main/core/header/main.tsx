import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesSpaceHeaderLeft } from './left/main';
import { SpacesSpaceHeaderMiddle } from './middle/main';
import { SpacesSpaceHeaderRight } from './right/main';

export function SpacesSpaceHeader() {
  return (
    <GlassAreaContainer
      name={SpacesSpaceHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpacesSpaceHeaderLeft />
      <SpacesSpaceHeaderMiddle />
      <SpacesSpaceHeaderRight />
    </GlassAreaContainer>
  );
}
