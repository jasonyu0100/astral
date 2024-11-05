import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesLaunchHeaderLeft } from './left/main';
import { SpacesLaunchHeaderMiddle } from './middle/main';
import { SpacesLaunchHeaderRight } from './right/main';

export function SpacesLaunchHeader() {
  return (
    <GlassAreaContainer
      name={SpacesLaunchHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesLaunchHeaderLeft />
      <SpacesLaunchHeaderMiddle />
      <SpacesLaunchHeaderRight />
    </GlassAreaContainer>
  );
}
