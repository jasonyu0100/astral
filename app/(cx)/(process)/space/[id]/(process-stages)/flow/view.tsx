import { FlowMain } from './(flow-epic)/main/main';
import { FlowSidebar } from './(flow-epic)/sidebar/main';
import { FlowContainer } from './(flow-epic)/container/main';

export function FlowView() {
  return (
    <FlowContainer>
      <FlowMain/>
      <FlowSidebar />
    </FlowContainer>
  );
}
