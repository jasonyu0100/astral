import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesUpdatesHeaderLeft } from './left/main';
import { SpacesUpdatesHeaderMiddle } from './middle/main';
import { SpacesUpdatesHeaderRight } from './right/main';

export function SpacesUpdatesHeader() {
  return (
    <GlassAreaContainer
      name={SpacesUpdatesHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesUpdatesHeaderLeft />
      <SpacesUpdatesHeaderMiddle />
      <SpacesUpdatesHeaderRight />
    </GlassAreaContainer>
  );
}
