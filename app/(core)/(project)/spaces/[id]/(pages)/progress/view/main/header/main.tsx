import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesProgressHeaderLeft } from './left/main';
import { SpacesProgressHeaderMiddle } from './middle/main';
import { SpacesProgressHeaderRight } from './right/main';

export function SpacesProgressHeader() {
  return (
    <GlassAreaContainer
      name={SpacesProgressHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesProgressHeaderLeft />
      <SpacesProgressHeaderMiddle />
      <SpacesProgressHeaderRight />
    </GlassAreaContainer>
  );
}
