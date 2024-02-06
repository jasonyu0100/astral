'use client';
import insideCosmos from '@/utils/isAuth';
import { FeedJournalView } from './view';
import { createContext } from 'react';
import { MomentObj, MomentVisibility } from '@/tables/flow/moment/main';
import {
  FeedMomentHandler,
  useFeedMoments,
} from '@/(cosmos)/handler/feed-moments/main';
import { useGlobalUser } from '@/state/main';

interface FeedJournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: FeedMomentHandler;
}

export const FeedJournalContext = createContext<FeedJournalContextObj>(
  {} as FeedJournalContextObj,
);

function Page() {
  const [state, actions] = useGlobalUser();
  const { momentId, moments, _momentHandler } = useFeedMoments(
    state.user.id,
    MomentVisibility.JOURNAL,
  );

  const context: FeedJournalContextObj = {
    momentId,
    moments,
    momentHandler: _momentHandler,
  };

  return (
    <FeedJournalContext.Provider value={context}>
      <FeedJournalView />
    </FeedJournalContext.Provider>
  );
}

export default insideCosmos(Page);
