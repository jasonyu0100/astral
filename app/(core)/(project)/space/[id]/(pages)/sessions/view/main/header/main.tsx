import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceSessionsHeaderLeft } from './left/main';
import { SpaceSessionsHeaderMiddle } from './middle/main';
import { SpaceSessionsHeaderRight } from './right/main';

export function SpaceSessionsHeader() {
  return (
    <GlassAreaContainer
      name={SpaceSessionsHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceSessionsHeaderLeft />
      <SpaceSessionsHeaderMiddle />
      <SpaceSessionsHeaderRight />
    </GlassAreaContainer>
  );
}
