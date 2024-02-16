'use client';
import insideCosmos from '@/utils/isAuth';
import { FeedJournalView } from './view';
import { createContext } from 'react';
import { MomentObj, MomentVisibility } from '@/(ouros)/(model)/flow/moment/main';
import {
  FeedMomentHandler,
  useFeedMoments,
} from '@/(verses)/(handler)/journal/main';
import { useGlobalUser } from '@/(store)/user/main';

interface FeedJournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: FeedMomentHandler;
}

export const FeedJournalContext = createContext<FeedJournalContextObj>(
  {} as FeedJournalContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { momentId, moments, _momentHandler } = useFeedMoments(
    user.id,
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
