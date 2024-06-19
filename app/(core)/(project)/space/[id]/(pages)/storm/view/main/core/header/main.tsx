import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceStormHeaderLeft } from './left/main';
import { SpaceStormHeaderMiddle } from './middle/main';
import { SpaceStormHeaderRight } from './right/main';

export function SpaceStormHeader() {
  return (
    <GlassAreaContainer
      name={SpaceStormHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpaceStormHeaderLeft />
      <SpaceStormHeaderMiddle />
      <SpaceStormHeaderRight />
    </GlassAreaContainer>
  );
}
