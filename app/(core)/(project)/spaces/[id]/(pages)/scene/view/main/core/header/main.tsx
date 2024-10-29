import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesSceneHeaderLeft } from './left/main';
import { SpacesSceneHeaderMiddle } from './middle/main';
import { SpacesSceneHeaderRight } from './right/main';

export function SpacesSceneHeader() {
  return (
    <GlassAreaContainer
      name={SpacesSceneHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpacesSceneHeaderLeft />
      <SpacesSceneHeaderMiddle />
      <SpacesSceneHeaderRight />
    </GlassAreaContainer>
  );
}
