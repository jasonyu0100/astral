import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  
  borderFx,
  glassFx,
} from '@/(style)/data';
import { DraftHeaderLeft } from './left/main';
import { DraftHeaderMiddle } from './middle/main';
import { DraftHeaderRight } from './right/main';

export function DraftHeader() {
  return (
    <GlassAreaContainer
      name={DraftHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem]`}
    >
      <DraftHeaderLeft />
      <DraftHeaderMiddle />
      <DraftHeaderRight />
    </GlassAreaContainer>
  );
}
