import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceDraftsHeaderLeft } from './left/main';
import { SpaceDraftsHeaderMiddle } from './middle/main';
import { SpaceDraftsHeaderRight } from './right/main';

export function SpaceDraftsHeader() {
  return (
    <GlassAreaContainer
      name={SpaceDraftsHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceDraftsHeaderLeft />
      <SpaceDraftsHeaderMiddle />
      <SpaceDraftsHeaderRight />
    </GlassAreaContainer>
  );
}
