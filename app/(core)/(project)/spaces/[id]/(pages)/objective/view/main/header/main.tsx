import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesObjectiveHeaderLeft } from './left/main';
import { SpacesObjectiveHeaderMiddle } from './middle/main';
import { SpacesObjectiveHeaderRight } from './right/main';

export function SpacesObjectiveHeader() {
  return (
    <GlassAreaContainer
      name={SpacesObjectiveHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesObjectiveHeaderLeft />
      <SpacesObjectiveHeaderMiddle />
      <SpacesObjectiveHeaderRight />
    </GlassAreaContainer>
  );
}
