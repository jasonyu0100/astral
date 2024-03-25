import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
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
    <GlassContainer
      displayName={FlowHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem]`}
    >
      <FlowHeaderLeft />
      <FlowHeaderMiddle />
      <FlowHeaderRight />
    </GlassContainer>
  );
}
