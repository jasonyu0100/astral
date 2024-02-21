import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';
import { HeaderAdd } from './add/main';
import HeaderTitle from './title/main';
import { HeaderAgent } from './agent/main';
import { StormHeaderRight } from './right/main';
import { StormHeaderMiddle } from './middle/main';
import { StormHeaderLeft } from './left/main';

export function StormHeader() {
  return (
    <Glass
      displayName={StormHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem] px-[1rem]`}
      borderStyle={borderStyles['border-b']}
    >
      <StormHeaderLeft>
        {/* <HeaderAgent>Chat GPT-3</HeaderAgent> */}
      </StormHeaderLeft>
      <StormHeaderMiddle>
        <HeaderTitle />
      </StormHeaderMiddle>
      <StormHeaderRight>{/* <HeaderAdd /> */}</StormHeaderRight>
    </Glass>
  );
}
