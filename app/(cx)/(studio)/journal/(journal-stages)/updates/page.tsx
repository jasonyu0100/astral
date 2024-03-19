'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { FeedJournalView } from './view';
import { createContext } from 'react';
import {
  JournalActions,
  useJournalHandler,
} from '@/(logic)/internal/handler/journal/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { MomentObj } from '@/(logic)/internal/model/flow/moment/main';

interface FeedJournalContextObj {
  momentId: string;
  moments: MomentObj[];
  momentHandler: JournalActions;
}

export const FeedJournalContext = createContext<FeedJournalContextObj>(
  {} as FeedJournalContextObj,
);

function Page() {
  const user = useGlobalUser((state) => state.user);
  const { momentId, moments, journalActions: _momentHandler } = useJournalHandler(
    user.id,
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

export default insideVerses(Page);
