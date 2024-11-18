import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesPostsHeaderLeft } from './left/main';
import { SpacesPostsHeaderMiddle } from './middle/main';
import { SpacesPostsHeaderRight } from './right/main';

export function SpacesPostsHeader() {
  return (
    <GlassAreaContainer
      name={SpacesPostsHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesPostsHeaderLeft />
      <SpacesPostsHeaderMiddle />
      <SpacesPostsHeaderRight />
    </GlassAreaContainer>
  );
}
