import { FlowMain } from './main/main';
import { FlowSidebar } from './sidebar/main';
import { FlowContainer } from './container/main';

export function FlowView() {
  return (
    <FlowContainer>
      <FlowMain/>
      <FlowSidebar />
    </FlowContainer>
  );
}
