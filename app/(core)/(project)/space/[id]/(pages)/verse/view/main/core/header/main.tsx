import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { VerseHeaderLeft } from './left/main';
import { VerseHeaderMiddle } from './middle/main';
import { VerseHeaderRight } from './right/main';

export function VerseHeader() {
  return (
    <GlassAreaContainer
      name={VerseHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem]`}
    >
      <VerseHeaderLeft />
      <VerseHeaderMiddle />
      <VerseHeaderRight />
    </GlassAreaContainer>
  );
}
