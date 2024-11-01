import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesPreviewHeaderLeft } from './left/main';
import { SpacesPreviewHeaderMiddle } from './middle/main';
import { SpacesPreviewHeaderRight } from './right/main';

export function SpacesPreviewHeader() {
  return (
    <GlassAreaContainer
      name={SpacesPreviewHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpacesPreviewHeaderLeft />
      <SpacesPreviewHeaderMiddle />
      <SpacesPreviewHeaderRight />
    </GlassAreaContainer>
  );
}
