import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceSeaHeaderLeft } from './left/main';
import { SpaceSeaHeaderMiddle } from './middle/main';
import { SpaceSeaHeaderRight } from './right/main';

export function SpaceSeaHeader() {
  return (
    <GlassAreaContainer
      name={SpaceSeaHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpaceSeaHeaderLeft />
      <SpaceSeaHeaderMiddle />
      <SpaceSeaHeaderRight />
    </GlassAreaContainer>
  );
}
