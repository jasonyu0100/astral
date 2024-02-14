import { FlowBody } from './(flow-epic)/main';
import { FlowSidebar } from './(flow-epic)/sidebar/main';
import { FlowContainer } from './(flow-epic)/container/main';
import { FlowModalView } from '../../../../../(modals)/flow-modal/view';

export function FlowView() {
  return (
    <FlowContainer>
      <FlowModalView />
      <FlowBody/>
      <FlowSidebar />
    </FlowContainer>
  );
}
