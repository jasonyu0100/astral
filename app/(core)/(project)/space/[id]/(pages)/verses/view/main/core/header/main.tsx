import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceVersesHeaderLeft } from './left/main';
import { SpaceVersesHeaderMiddle } from './middle/main';
import { SpaceVersesHeaderRight } from './right/main';

export function SpaceVersesHeader() {
  return (
    <GlassAreaContainer
      name={SpaceVersesHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      <SpaceVersesHeaderLeft />
      <SpaceVersesHeaderMiddle />
      <SpaceVersesHeaderRight />
    </GlassAreaContainer>
  );
}
