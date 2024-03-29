import { UpdatesMain } from './main';
import { JournalUpdatesSidebar } from './sidebar/main';
import { UpdatesContainer } from './container/main';

export function JournalView() {
  return (
      <UpdatesContainer>
        <UpdatesMain />
        <JournalUpdatesSidebar />
      </UpdatesContainer>
  );
}
