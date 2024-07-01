import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceProgressHeaderLeft } from './left/main';
import { SpaceProgressHeaderMiddle } from './middle/main';
import { SpaceProgressHeaderRight } from './right/main';

export function SpaceProgressHeader() {
  return (
    <GlassAreaContainer
      name={SpaceProgressHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceProgressHeaderLeft />
      <SpaceProgressHeaderMiddle />
      <SpaceProgressHeaderRight />
    </GlassAreaContainer>
  );
}
