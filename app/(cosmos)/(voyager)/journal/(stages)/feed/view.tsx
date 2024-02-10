import { FeedMain } from '../../journal-epic/main';
import { FeedSidebar } from '../../journal-epic/sidebar/main';
import { FeedContainer } from '../../journal-epic/container/main';

export function FeedJournalView() {
  return (
      <FeedContainer>
        <FeedMain />
        <FeedSidebar />
      </FeedContainer>
  );
}
