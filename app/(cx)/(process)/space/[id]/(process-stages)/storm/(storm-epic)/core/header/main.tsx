import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { HeaderAdd } from './add/main';
import HeaderTitle from './title/main';
import { HeaderAgent } from './agent/main';
import { StormHeaderRight } from './right/main';
import { StormHeaderMiddle } from './middle/main';
import { StormHeaderLeft } from './left/main';

export function StormHeader() {
  return (
    <GlassAreaContainer
      displayName={StormHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem] px-[1rem]`}
    >
      <StormHeaderLeft>
        {/* <HeaderAgent>Chat GPT-3</HeaderAgent> */}
      </StormHeaderLeft>
      <StormHeaderMiddle>
        <HeaderTitle />
      </StormHeaderMiddle>
      <StormHeaderRight>{/* <HeaderAdd /> */}</StormHeaderRight>
    </GlassAreaContainer>
  );
}
