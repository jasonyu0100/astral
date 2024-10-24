import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesMapHeaderLeft } from './left/main';
import { SpacesMapHeaderRight } from './right/main';

export function SpacesMapHeader() {
  return (
    <GlassAreaContainer
      name={SpacesMapHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <SpacesMapHeaderLeft />
      {/* <SpacesMapHeaderCenter /> */}
      <SpacesMapHeaderRight />
    </GlassAreaContainer>
  );
}
