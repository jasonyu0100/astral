import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceVerseHeaderLeft } from './left/main';
import { SpaceVerseHeaderMiddle } from './middle/main';
import { SpaceVerseHeaderRight } from './right/main';

export function SpaceVerseHeader() {
  return (
    <GlassAreaContainer
      name={SpaceVerseHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem]`}
    >
      <SpaceVerseHeaderLeft />
      <SpaceVerseHeaderMiddle />
      <SpaceVerseHeaderRight />
    </GlassAreaContainer>
  );
}
