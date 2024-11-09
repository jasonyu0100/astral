import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesWorkHeaderLeft } from './left/main';
import { SpacesWorkHeaderMiddle } from './middle/main';
import { SpacesWorkHeaderRight } from './right/main';

export function SpacesWorkHeader() {
  return (
    <GlassAreaContainer
      name={SpacesWorkHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesWorkHeaderLeft />
      <SpacesWorkHeaderMiddle />
      <SpacesWorkHeaderRight />
    </GlassAreaContainer>
  );
}
