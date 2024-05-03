import { UpdatesMain } from './main';
import { UpdatesSidebar } from './sidebar/main';
import { UpdatesContainer } from './container/main';

export function JournalView() {
  return (
      <UpdatesContainer>
        <UpdatesMain />
        <UpdatesSidebar />
      </UpdatesContainer>
  );
}
