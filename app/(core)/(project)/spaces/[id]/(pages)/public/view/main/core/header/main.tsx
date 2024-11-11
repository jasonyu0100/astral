import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesPublicHeaderLeft } from './left/main';
import { SpacesPublicHeaderMiddle } from './middle/main';
import { SpacesPublicHeaderRight } from './right/main';

export function SpacesPublicHeader() {
  return (
    <GlassAreaContainer
      name={SpacesPublicHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesPublicHeaderLeft />
      <SpacesPublicHeaderMiddle />
      <SpacesPublicHeaderRight />
    </GlassAreaContainer>
  );
}
