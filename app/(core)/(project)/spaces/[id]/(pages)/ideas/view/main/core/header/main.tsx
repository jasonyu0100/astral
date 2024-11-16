import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesIdeasHeaderLeft } from './left/main';
import { SpacesIdeasHeaderMiddle } from './middle/main';
import { SpacesIdeasHeaderRight } from './right/main';

export function SpacesIdeasHeader() {
  return (
    <GlassAreaContainer
      name={SpacesIdeasHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpacesIdeasHeaderLeft />
      <SpacesIdeasHeaderMiddle />
      <SpacesIdeasHeaderRight />
    </GlassAreaContainer>
  );
}
