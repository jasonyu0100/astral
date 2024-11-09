import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesFocusHeaderLeft } from './left/main';
import { SpacesFocusHeaderMiddle } from './middle/main';
import { SpacesFocusHeaderRight } from './right/main';

export function SpacesFocusHeader() {
  return (
    <GlassAreaContainer
      name={SpacesFocusHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesFocusHeaderLeft />
      <SpacesFocusHeaderMiddle />
      <SpacesFocusHeaderRight />
    </GlassAreaContainer>
  );
}
