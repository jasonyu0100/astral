import { FeedMain } from '../../journal-epic/main';
import { FeedPosts } from '../../journal-epic/moments/main';
import { FeedMoment } from '../../journal-epic/moments/moment/main';
import { FeedSidebar } from '../../journal-sidebar-epic/main';
import { FeedWrapper } from '../../journal-epic/wrapper/main';
import { useContext } from 'react';
import { FeedJournalContext } from './page';

export function FeedJournalView() {
  const { moments } = useContext(FeedJournalContext);

  return (
    <>
      <FeedWrapper>
        <FeedMain>
          <FeedPosts>
            {moments.map((moment) => (
              <FeedMoment moment={moment} />
            ))}
          </FeedPosts>
        </FeedMain>
        <FeedSidebar />
      </FeedWrapper>
    </>
  );
}
