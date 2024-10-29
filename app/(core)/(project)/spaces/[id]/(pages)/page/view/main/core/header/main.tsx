import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesPageHeaderLeft } from './left/main';
import { SpacesPageHeaderMiddle } from './middle/main';
import { SpacesPageHeaderRight } from './right/main';

export function SpacesPageHeader() {
  return (
    <GlassAreaContainer
      name={SpacesPageHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesPageHeaderLeft />
      <SpacesPageHeaderMiddle />
      <SpacesPageHeaderRight />
    </GlassAreaContainer>
  );
}
