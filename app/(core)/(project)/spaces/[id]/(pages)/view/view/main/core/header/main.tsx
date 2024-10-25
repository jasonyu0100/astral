import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesViewHeaderLeft } from './left/main';
import { SpacesViewHeaderRight } from './right/main';

export function SpacesViewHeader() {
  return (
    <GlassAreaContainer
      name={SpacesViewHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpacesViewHeaderLeft />
      {/* <SpacesViewHeaderCenter /> */}
      <SpacesViewHeaderRight />
    </GlassAreaContainer>
  );
}
