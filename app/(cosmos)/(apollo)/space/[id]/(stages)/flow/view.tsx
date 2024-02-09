import { FlowMain } from './flow-epic/main';
import { FlowSidebar } from './flow-sidebar-epic/main';
import { FlowContainer } from './flow-epic/container/main';
import { FlowModalView } from '../../../../../(modals)/flow-modal/view';

export function FlowView() {
  return (
    <FlowContainer>
      <FlowModalView />
      <FlowMain/>
      <FlowSidebar />
    </FlowContainer>
  );
}
