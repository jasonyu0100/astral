import {
  glassFx,
  borderFx,
  
} from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HeaderAdd } from './add/main';
import HeaderTitle from './title/main';
import { HeaderAgent } from './agent/main';
import { StormHeaderRight } from './right/main';
import { StormHeaderMiddle } from './middle/main';
import { StormHeaderLeft } from './left/main';

export function StormHeader() {
  return (
    <GlassAreaContainer
      name={StormHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`$flex items-center justify-between space-x-[1rem] px-[1rem]`}
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
