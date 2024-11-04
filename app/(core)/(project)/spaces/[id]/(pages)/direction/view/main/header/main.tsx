import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesDirectionHeaderLeft } from './left/main';
import { SpacesDirectionHeaderMiddle } from './middle/main';
import { SpacesDirectionHeaderRight } from './right/main';

export function SpacesDirectionHeader() {
  return (
    <GlassAreaContainer
      name={SpacesDirectionHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesDirectionHeaderLeft />
      <SpacesDirectionHeaderMiddle />
      <SpacesDirectionHeaderRight />
    </GlassAreaContainer>
  );
}
