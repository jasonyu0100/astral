import { FeedMain } from '../../feed-epic/main';
import { FeedPosts } from '../../feed-epic/moments/main';
import { FeedMoment } from '../../feed-epic/moments/moment/main';
import { FeedSidebar } from '../../feed-sidebar-epic/main';
import { FeedWrapper } from '../../feed-epic/wrapper/main';
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
