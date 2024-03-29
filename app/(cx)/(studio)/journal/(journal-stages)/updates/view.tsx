import { UpdatesMain } from './(updates-epic)/main';
import { UpdatesSidebar } from './(updates-epic)/sidebar/main';
import { UpdatesContainer } from './(updates-epic)/container/main';

export function FeedJournalView() {
  return (
      <UpdatesContainer>
        <UpdatesMain />
        <UpdatesSidebar />
      </UpdatesContainer>
  );
}
