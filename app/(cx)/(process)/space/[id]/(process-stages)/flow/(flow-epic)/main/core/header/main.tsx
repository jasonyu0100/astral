import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  containerStyles,
  borderStyles,
  glassStyles,
} from '@/(design)/(styles)/data';
import { FlowHeaderLeft } from './left/main';
import { FlowHeaderMiddle } from './middle/main';
import { FlowHeaderRight } from './right/main';

export function FlowHeader() {
  return (
    <GlassAreaContainer
      name={FlowHeader.name}
      size='h-[60px] w-full flex-shrink-0'
      glass={glassStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem]`}
    >
      <FlowHeaderLeft />
      <FlowHeaderMiddle />
      <FlowHeaderRight />
    </GlassAreaContainer>
  );
}
