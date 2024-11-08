import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesLiveHeaderLeft } from './left/main';
import { SpacesLiveHeaderMiddle } from './middle/main';
import { SpacesLiveHeaderRight } from './right/main';

export function SpacesLiveHeader() {
  return (
    <GlassAreaContainer
      name={SpacesLiveHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesLiveHeaderLeft />
      <SpacesLiveHeaderMiddle />
      <SpacesLiveHeaderRight />
    </GlassAreaContainer>
  );
}
