import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  containerFx,
  borderFx,
  glassFx,
} from '@/(design)/(fx)/data';
import { FlowHeaderLeft } from './left/main';
import { FlowHeaderMiddle } from './middle/main';
import { FlowHeaderRight } from './right/main';

export function FlowHeader() {
  return (
    <GlassAreaContainer
      name={FlowHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`${containerFx['row-center']} justify-between space-x-[1rem]`}
    >
      <FlowHeaderLeft />
      <FlowHeaderMiddle />
      <FlowHeaderRight />
    </GlassAreaContainer>
  );
}
