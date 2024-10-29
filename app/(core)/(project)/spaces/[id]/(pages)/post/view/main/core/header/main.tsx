import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesPostHeaderLeft } from './left/main';
import { SpacesPostHeaderMiddle } from './middle/main';
import { SpacesPostHeaderRight } from './right/main';

export function SpacesPostHeader() {
  return (
    <GlassAreaContainer
      name={SpacesPostHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesPostHeaderLeft />
      <SpacesPostHeaderMiddle />
      <SpacesPostHeaderRight />
    </GlassAreaContainer>
  );
}
