import { Layer } from '@/(common)/layer/main';
import { containerStyles, borderStyles } from '@/(common)/styles/data';
import { FlowHeaderListButton } from './left/list/main';
import { FlowHeaderLeft } from './left/main';
import { FlowHeaderMiddle } from './middle/main';
import FlowHeaderTitle from './middle/title/main';
import { FlowHeaderAddButton } from './right/add/main';
import { FlowHeaderRight } from './right/main';
import { DraftLoomButton } from '../../../../draft/draft-sidebar-epic/modes/collection/header/button-row/button/loom/main';
import { useContext } from 'react';
import { FlowModalContext } from '../../modal/main';

export function FlowHeader() {
  const { addMoment } = useContext(FlowModalContext);

  return (
    <Layer
      displayName={FlowHeader.name}
      sizeStyle='h-[50px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} px-[1rem] space-x-[1rem] justify-between`}
      borderStyle={borderStyles['border-b']}
    >
      <FlowHeaderLeft>
        <FlowHeaderListButton />
      </FlowHeaderLeft>
      <FlowHeaderMiddle>
        <FlowHeaderTitle />
      </FlowHeaderMiddle>
      <FlowHeaderRight>
        <DraftLoomButton />
        <FlowHeaderAddButton onClick={() => addMoment.open()} />
      </FlowHeaderRight>
    </Layer>
  );
}
