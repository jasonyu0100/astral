import { JournalMain } from './main/main';
import { JournalSidebar } from './sidebar/main';
import { JournalContainer } from './container/main';

export function JournalView() {
  return (
    <JournalContainer>
      <JournalMain />
      <JournalSidebar />
    </JournalContainer>
  );
}
