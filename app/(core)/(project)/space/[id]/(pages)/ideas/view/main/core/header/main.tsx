import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceIdeasHeaderLeft } from './left/main';
import { SpaceIdeasHeaderMiddle } from './middle/main';
import { SpaceIdeasHeaderRight } from './right/main';

export function SpaceIdeasHeader() {
  return (
    <GlassAreaContainer
      name={SpaceIdeasHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
      borderFx={borderFx['border-b']}
    >
      <SpaceIdeasHeaderLeft />
      <SpaceIdeasHeaderMiddle />
      <SpaceIdeasHeaderRight />
    </GlassAreaContainer>
  );
}
