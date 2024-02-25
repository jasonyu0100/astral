import { Glass } from '@/(components)/(basic)/glass/main';
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from '@/(design)/(styles)/data';
import { FlowHeaderLeft } from './left/main';
import { FlowHeaderMiddle } from './middle/main';
import { FlowHeaderRight } from './right/main';

export function FlowHeader() {
  return (
    <Glass
      displayName={FlowHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem]`}
      borderStyle={borderStyles['border-b']}
    >
      <FlowHeaderLeft />
      <FlowHeaderMiddle />
      <FlowHeaderRight />
    </Glass>
  );
}
