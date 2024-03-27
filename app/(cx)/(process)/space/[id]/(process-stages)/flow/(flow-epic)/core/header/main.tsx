import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
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
      displayName={FlowHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem]`}
    >
      <FlowHeaderLeft />
      <FlowHeaderMiddle />
      <FlowHeaderRight />
    </GlassAreaContainer>
  );
}
