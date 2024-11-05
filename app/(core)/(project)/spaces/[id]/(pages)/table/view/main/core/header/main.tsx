import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesTableHeaderLeft } from './left/main';
import { SpacesTableHeaderMiddle } from './middle/main';
import { SpacesTableHeaderRight } from './right/main';

export function SpacesTableHeader() {
  return (
    <GlassAreaContainer
      name={SpacesTableHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesTableHeaderLeft />
      <SpacesTableHeaderMiddle />
      <SpacesTableHeaderRight />
    </GlassAreaContainer>
  );
}
