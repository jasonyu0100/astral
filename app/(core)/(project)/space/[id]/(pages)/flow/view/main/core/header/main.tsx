import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceFlowHeaderLeft } from './left/main';
import { SpaceFlowHeaderMiddle } from './middle/main';
import { SpaceFlowHeaderRight } from './right/main';

export function SpaceFlowHeader() {
  return (
    <GlassAreaContainer
      name={SpaceFlowHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between space-x-[1rem] px-[1rem]`}
    >
      <SpaceFlowHeaderLeft />
      <SpaceFlowHeaderMiddle />
      <SpaceFlowHeaderRight />
    </GlassAreaContainer>
  );
}
