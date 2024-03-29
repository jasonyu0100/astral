import { UpdatesMain } from './(updates-epic)/main';
import { JournalUpdatesSidebar } from './(updates-epic)/sidebar/main';
import { UpdatesContainer } from './(updates-epic)/container/main';

export function JournalView() {
  return (
      <UpdatesContainer>
        <UpdatesMain />
        <JournalUpdatesSidebar />
      </UpdatesContainer>
  );
}
