import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceIdeaHeaderLeft } from './left/main';
import { SpaceIdeaHeaderMiddle } from './middle/main';
import { SpaceIdeaHeaderRight } from './right/main';

export function SpaceIdeaHeader() {
  return (
    <GlassAreaContainer
      name={SpaceIdeaHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpaceIdeaHeaderLeft />
      <SpaceIdeaHeaderMiddle />
      <SpaceIdeaHeaderRight />
    </GlassAreaContainer>
  );
}
