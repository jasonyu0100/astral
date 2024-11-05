import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesChannelHeaderLeft } from './left/main';
import { SpacesChannelHeaderMiddle } from './middle/main';
import { SpacesChannelHeaderRight } from './right/main';

export function SpacesChannelHeader() {
  return (
    <GlassAreaContainer
      name={SpacesChannelHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpacesChannelHeaderLeft />
      <SpacesChannelHeaderMiddle />
      <SpacesChannelHeaderRight />
    </GlassAreaContainer>
  );
}
