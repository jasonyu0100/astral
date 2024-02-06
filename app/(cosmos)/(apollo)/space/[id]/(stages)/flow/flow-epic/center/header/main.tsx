import { Layer } from '@/(common)/layer/main';
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from '@/(common)/styles/data';
import { FlowHeaderListButton } from './left/list/main';
import { FlowHeaderLeft } from './left/main';
import { FlowHeaderMiddle } from './middle/main';
import FlowHeaderTitle from './middle/title/main';
import { FlowHeaderAddButton } from './right/add/main';
import { FlowHeaderRight } from './right/main';
import { useContext } from 'react';
import { FlowModalContext } from '../../modal/main';
import { FlowLoomButton } from './right/loom/main';

export function FlowHeader() {
  const { addMoment } = useContext(FlowModalContext);

  return (
    <Layer
      displayName={FlowHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-center']} justify-between space-x-[1rem]`}
      borderStyle={borderStyles['border-b']}
    >
      <FlowHeaderLeft>
        <FlowHeaderListButton />
      </FlowHeaderLeft>
      <FlowHeaderMiddle>
        <FlowHeaderTitle />
      </FlowHeaderMiddle>
      <FlowHeaderRight>
        <FlowLoomButton />
        <FlowHeaderAddButton onClick={() => addMoment.open()} />
      </FlowHeaderRight>
    </Layer>
  );
}
