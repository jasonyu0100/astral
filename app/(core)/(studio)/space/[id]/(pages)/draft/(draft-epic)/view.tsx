import { DraftMain } from './main/main';
import { DraftSidebar } from './sidebar/main';
import { DraftContainer } from './container/main';

export function DraftView() {
  return (
    <DraftContainer>
      <DraftMain/>
      <DraftSidebar />
    </DraftContainer>
  );
}
