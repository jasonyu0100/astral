import { DraftMain } from './(draft-epic)/main/main';
import { DraftSidebar } from './(draft-epic)/sidebar/main';
import { DraftContainer } from './(draft-epic)/container/main';

export function DraftView() {
  return (
    <DraftContainer>
      <DraftMain/>
      <DraftSidebar />
    </DraftContainer>
  );
}
